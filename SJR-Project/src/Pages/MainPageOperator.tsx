import SidebarOperator from "../component/SidebarOperator";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from "@nextui-org/react";

interface Product {
  id: number;
  productName: string;
  brandName: string;
  Category: string;
  price: number;
  quantity: number;
  status?: string;
}

// Definisikan array kategori dan brand
const categories = ["Router", "Switch", "Access Point", "Repeater"];
const brands = ["Mikrotik", "Cisco", "Aruba", "TPLINK"];

const MainPageOperator = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const { isOpen: isAddModalOpen, onOpen: onAddModalOpen, onOpenChange: onAddModalOpenChange } = useDisclosure();
  const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onOpenChange: onEditModalOpenChange } = useDisclosure();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://go-restapi-production.up.railway.app/api/products');
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setProductName(product.productName);
    setBrandName(product.brandName);
    setCategory(product.Category);
    setPrice(product.price.toString());
    setQuantity(product.quantity.toString());
    onEditModalOpen();
  };

  const handleAddProduct = async () => {
    const newProduct: Omit<Product, 'id'> = {
      productName,
      brandName,
      Category: category,
      price: parseInt(price.replace(/\D/g, '')),
      quantity: parseInt(quantity),
    };

    try {
      const response = await axios.post('https://go-restapi-production.up.railway.app/api/products', newProduct);
      console.log('Product added successfully:', response.data);
      setProducts([...products, response.data]);
      onAddModalOpenChange();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response ? error.response.data : error.message);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="body-main-op bg-[#F2F2F2] overflow-hidden">
        <div className="container-op flex flex-row min-h-screen">
          <div className="sidebar-op">
            <SidebarOperator />
          </div>
          <div className="content-container flex flex-col ml-[35px] mt-[38px]">
            <div className="main-menu flex">
              <h2 className="font-bold text-[30px]">Product</h2>
            </div>

            <div className="search flex flex-row items-center gap-[50px] mt-[30px]">
              <div className="category">
                <Select size="md" label="Select Category" className="w-[220px]">
                  {categories.map((kategori: string) => (
                    <SelectItem key={kategori} value={kategori}>
                      {kategori}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="brand">
                <Select size="md" label="Select Brand" className="w-[220px]">
                  {brands.map((brand: string) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
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
              <div className="add">
                <Button size="md" className="bg-[#247AF8] text-white font-medium text-[16px]" onPress={onAddModalOpen}>
                  Add New Product +
                </Button>
              </div>
            </div>

            <Modal backdrop="blur" isOpen={isAddModalOpen} onOpenChange={onAddModalOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">New Product</ModalHeader>
                    <ModalBody>
                      <Input size={"md"} type="text" label="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                      <Input size={"md"} type="text" label="Brand" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
                      <Input size={"md"} type="text" label="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                      <Input size={"md"} type="text" label="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                      <Input size={"md"} type="number" label="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={handleAddProduct}>
                        Add
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

            {selectedProduct && (
              <Modal backdrop="blur" isOpen={isEditModalOpen} onOpenChange={onEditModalOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Edit Product</ModalHeader>
                      <ModalBody>
                        <Input size={"md"} type="text" label="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                        <Input size={"md"} type="text" label="Brand" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
                        <Input size={"md"} type="text" label="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                        <Input size={"md"} type="text" label="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <Input size={"md"} type="number" label="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Save
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            )}

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
                      <td className="w-[10rem]">{`Rp ${product.price.toLocaleString()}`}</td>
                      <td className="w-[10rem]">
                        <h2 className={`font-semibold ${product.quantity > 0 ? "text-[#0C7523]" : "text-red-400"}`}>
                          {product.quantity > 0 ? "Ready" : "Soldout"}
                        </h2>
                      </td>
                      <td className="w-[10rem]">{product.quantity}</td>
                      <td className="w-[10rem]">
                        <Button className="bg-[#D7904D] text-white px-[20px] py-[10px] capitalize rounded-xl" onPress={() => handleEditClick(product)}>
                          Edit
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
    </React.Fragment>
  );
};

export default MainPageOperator;
