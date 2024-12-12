import SidebarUser from "../component/SidebarUser";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Select, SelectItem, Input, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

interface Product {
  id: number;
  productName: string;
  brandName: string;
  Category: string;
  price: number;
  quantity: number;
  status: boolean;
}

const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(amount);
};

const MainPageUser = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  
  // Modal and Cart Management States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Default quantity to 1

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/products', { withCredentials: true });
        const productsData = response.data as Product[];
        setProducts(productsData);

        const uniqueCategories = Array.from(new Set(productsData.map((product: Product) => product.Category)));
        const uniqueBrands = Array.from(new Set(productsData.map((product: Product) => product.brandName)));

        setCategories(uniqueCategories);
        setBrands(uniqueBrands);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open Modal with selected product
  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity to 1 when a new product is selected
    setIsOpen(true);
  };

  // Close Modal
  const handleModalClose = () => {
    setIsOpen(false);
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  // Add to cart API Call
  const handleAddToCartAPI = async () => {
    if (selectedProduct) {
      try {
        const cartData = {
          productId: selectedProduct.id,
          quantity: quantity
        };

        await axios.post('http://localhost:8080/api/addToCart', cartData, { withCredentials: true });
        alert("Product added to cart successfully!");
        handleModalClose(); // Close modal after adding to cart
      } catch (error) {
        console.error("Error adding to cart:", error);
        alert("Failed to add product to cart.");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="body-main bg-[#F2F2F2] overflow-hidden">
        <div className="container-main flex flex-row min-h-screen">
          <div className="side-bar">
            <SidebarUser />
          </div>

          <div className="content-container flex flex-col ml-[35px] mt-[38px]">
            <div className="main-menu flex">
              <h2 className="font-bold text-[30px]">Product</h2>
            </div>

            <div className="search flex flex-row items-center gap-[50px] mt-[30px]">
              <div className="category">
                <Select size="md" label="Select Category" className="w-[220px]">
                  {categories.map((kategori) => (
                    <SelectItem key={kategori} value={kategori}>
                      {kategori}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="brand">
                <Select size="md" label="Select Brand" className="w-[220px]">
                  {brands.map((brands) => (
                    <SelectItem key={brands} value={brands}>
                      {brands}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="searchbar">
                <Input
                  label="Search"
                  isClearable
                  radius="lg"
                  className="w-[350px]"
                  placeholder="Search Product..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  startContent={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="table-of-content mt-[25px]">
              <table className="text-left w-[1200px]">
                <thead>
                  <tr className="text-[16px]">
                    <th className="font-medium text-[#989898] w-[17rem]">Product Name</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Brand</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Category</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Price</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Status</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Quantity</th>
                    <th className="font-medium text-[#F2F2F2] w-[10rem]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index} className="h-[60px] font-medium">
                      <td className="w-[17rem]">{product.productName}</td>
                      <td className="w-[10rem]">{product.brandName}</td>
                      <td className="w-[12rem]">{product.Category}</td>
                      <td className="w-[10rem]">{formatRupiah(product.price)}</td>
                      <td className="w-[10rem]">
                        <h2 className={`font-semibold ${product.status ? "text-[#0C7523]" : "text-red-400"}`}>
                          {product.status ? 'Ready' : 'Sold out'}
                        </h2>
                      </td>
                      <td className="w-[10rem]">{product.quantity}</td>
                      <td className="w-[10rem]">
                        <Button
                          className="bg-[#D7904D] text-white px-[20px] py-[10px] capitalize rounded-xl"
                          onPress={() => handleAddToCart(product)}
                        >
                          Add
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for adding product to cart */}
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={handleModalClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Add to Cart</ModalHeader>
          <ModalBody>
            {selectedProduct ? (
              <>
                <h2>Product: {selectedProduct.productName}</h2>
                <h2>Brand: {selectedProduct.brandName}</h2>
                <h2>Category: {selectedProduct.Category}</h2>
                <h2>Price: {formatRupiah(selectedProduct.price)}</h2>
                <h2 className="flex items-center">
                  Quantity:{" "}
                  <span>
                    <Input
                      label="Quantity"
                      className="ml-[10px] w-[100px]"
                      variant="underlined"
                      type="number"
                      value={quantity.toString()}
                      onChange={handleQuantityChange}
                    />
                  </span>
                </h2>
                <h2 className="mt-[20px] font-semibold">
                  Total Price: {formatRupiah(selectedProduct.price * quantity)}
                </h2>
              </>
            ) : (
              <p>Loading product details...</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onPress={handleModalClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleAddToCartAPI}>
              Add to Cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default MainPageUser;
