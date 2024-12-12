import SidebarUser from "../component/SidebarUser";
import React, { useEffect, useState } from "react";
import { Select, SelectItem, Input, Button, Checkbox } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import axios from 'axios';

interface Product {
  id: number;
  productName: string;
  brandName: string;
  Category: string;
  price: number;
  quantity: number;
  status: boolean;
  operator_id: string;
}

interface CartItem {
  id: number;
  productId: number;
  userId: string;
  quantity: number;
  Product: Product;
  total_price: number;
  created_at: string;
  updated_at: string;
}

const CartPageUser = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<CartItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);

  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<CartItem | null>(null);
  const [newQuantity, setNewQuantity] = useState<number | null>(null);

  // Modal untuk edit cart
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  // Modal untuk invoice
  const { isOpen: isInvoiceOpen, onOpen: onInvoiceOpen, onClose: onInvoiceClose } = useDisclosure();

  const handleEdit = (cartItem: CartItem) => {
    setSelectedProductId(cartItem.id);
    setSelectedProduct(cartItem);
    setNewQuantity(cartItem.quantity);
    onOpen(); // Buka modal untuk mengedit
  };

  const handleCreateInvoice = async () => {
    try {
      // Prepare data for invoice creation
      const invoiceData = {
        items: selectedItems.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      };
  
      // Send POST request to create invoice
      const response = await axios.post('http://localhost:8080/api/createInvoice', invoiceData, {
        withCredentials: true,
      });
  
      // Handle successful invoice creation
      if (response.status === 201) { // Use 201 Created status
        console.log('Invoice created successfully', response.data);
        onInvoiceClose();  // Close the invoice modal after successful creation
        setSelectedItems([]); // Clear the selected items
        localStorage.removeItem('selectedItems'); // Clear from localStorage as well
        alert('Purchase completed successfully!'); // Notify user
        // Optionally, redirect user to a confirmation page
        // window.location.href = '/confirmation';
        fetchProducts();
      }
    } catch (error) {
      console.error('Error creating invoice:', error);
      alert('Error completing purchase. Please try again.');
    }
  };
  

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  // Menyimpan selectedItems ke localStorage
  useEffect(() => {
    const storedSelectedItems = localStorage.getItem('selectedItems');
    if (storedSelectedItems) {
      try {
        setSelectedItems(JSON.parse(storedSelectedItems));
      } catch (error) {
        console.error('Error parsing selectedItems from localStorage:', error);
        localStorage.removeItem('selectedItems');
      }
    }
  }, []);

  // Menyimpan selectedItems setiap kali berubah
  useEffect(() => {
    if (selectedItems.length > 0) {
      localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    }
  }, [selectedItems]);

  const handleCheckboxChange = (cartItem: CartItem) => {
    // Update selectedItems berdasarkan apakah item sudah ada atau belum
    if (selectedItems.some(item => item.id === cartItem.id)) {
      setSelectedItems(prev => prev.filter(item => item.id !== cartItem.id));
    } else {
      setSelectedItems(prev => [...prev, cartItem]);
    }
  };

  const getSelectedTotalPrice = () => {
    return selectedItems.reduce((total, cartItem) => total + cartItem.total_price, 0);
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/api/itemCart', { withCredentials: true });
      const productsData = response.data as CartItem[];
      setProducts(productsData);

      const uniqueCategories = Array.from(new Set(productsData.map((product: CartItem) => product.Product.Category)));
      const uniqueBrands = Array.from(new Set(productsData.map((product: CartItem) => product.Product.brandName)));

      setCategories(uniqueCategories);
      setBrands(uniqueBrands);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleQuantityChange = (newQuantity: number) => {
    setNewQuantity(newQuantity);
  };

  const filteredProducts = products.filter((cartItem) =>
    cartItem.Product && cartItem.Product.productName &&
    cartItem.Product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateCart = () => {
    if (selectedProduct && newQuantity !== null) {
      const updatedProduct = { ...selectedProduct, quantity: newQuantity };

      // Update quantity, then remove the item from selectedItems if quantity is changed
      if (selectedItems.some(item => item.id === selectedProduct.id)) {
        // Remove the item from selectedItems when the quantity changes
        setSelectedItems(prev => prev.filter(item => item.id !== selectedProduct.id));
      }

      // Now update the cart item on the server
      axios.put(`http://localhost:8080/api/itemCart/edit/${selectedProduct.id}`, updatedProduct, {
        withCredentials: true
      })
        .then(response => {
          console.log('Product updated successfully');
          fetchProducts();
          onClose();
        })
        .catch(error => {
          console.error('Error updating product:', error);
        });
    }
  };

  const handleDelete = async (cartItemId: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/deleteCart/${cartItemId}`, {
        withCredentials: true,
      });
      setProducts(prevProducts => prevProducts.filter(item => item.id !== cartItemId));
      console.log('Product deleted successfully');
      onClose();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleBuyNow = () => {
    onInvoiceOpen(); // Buka modal invoice
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
              <h2 className="font-bold text-[30px]">Cart</h2>
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
                    <th className="font-medium text-[#F2F2F2]">Check</th>
                    <th className="font-medium text-[#989898] w-[15rem]">Product Name</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Brand</th>
                    <th className="font-medium text-[#989898] w-[14rem]">Category</th>
                    <th className="font-medium text-[#989898] w-[9rem]">Price</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Status</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Quantity</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Total Price</th>
                    <th className="font-medium text-[#F2F2F2] w-[10rem]">Actions</th>
                  </tr>
                </thead>
              </table>
              <div className="overflow-y-scroll h-[26rem] mt-[20px]">
                <table className="text-left w-[1200px]">
                  <tbody>
                    {filteredProducts.map((cartItem, index) => (
                      <tr key={index} className="h-[60px] font-medium">
                        <td className="w-[1rem]">
                          <Checkbox
                            size="sm"
                            color="warning"
                            isSelected={selectedItems.some(item => item.id === cartItem.id)}
                            onChange={() => handleCheckboxChange(cartItem)}
                          />
                        </td>
                        <td className="w-[17rem]">{cartItem.Product.productName}</td>
                        <td className="w-[10rem]">{cartItem.Product.brandName}</td>
                        <td className="w-[12rem]">{cartItem.Product.Category}</td>
                        <td className="w-[10rem]">{formatRupiah(cartItem.Product.price)}</td>
                        <td className="w-[10rem]">
                          <h2 className={`font-semibold ${cartItem.Product.status === true ? "text-[#0C7523]" : "text-red-400"}`}>
                            {cartItem.Product.status === true ? 'Ready' : 'Sold out'}
                          </h2>
                        </td>
                        <td className="w-[10rem]">{cartItem.quantity}</td>
                        <td className="w-[10rem]">{formatRupiah(cartItem.total_price)}</td>
                        <td className="w-[10rem]">
                          <Button
                            className="bg-[#D7904D] rounded-xl text-white px-[20px] py-[10px] capitalize"
                            onPress={() => handleEdit(cartItem)}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Modal Edit Cart */}
              <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  <ModalHeader className="flex flex-col gap-1">Edit Cart</ModalHeader>
                  <ModalBody>
                    {selectedProduct ? (
                      <>
                        <h2>Product: {selectedProduct.Product.productName}</h2>
                        <h2>Brand: {selectedProduct.Product.brandName}</h2>
                        <h2>Category: {selectedProduct.Product.Category}</h2>
                        <h2>Price: {formatRupiah(selectedProduct.Product.price)}</h2>
                        <h2 className="flex items-center">
                          Quantity:{" "}
                          <span>
                            <Input
                              label="Quantity"
                              className="ml-[10px] w-[100px]"
                              variant="underlined"
                              type="number"
                              defaultValue={selectedProduct?.quantity.toString()}
                              onChange={(e) => handleQuantityChange(Number(e.target.value))}
                            />
                          </span>
                        </h2>
                        <h2 className="mt-[20px] font-semibold">
                          Total Price: {formatRupiah(selectedProduct.total_price)}
                        </h2>
                      </>
                    ) : (
                      <p>Loading product details...</p>
                    )}
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      className="flex items-center"
                      variant="light"
                      onPress={() => selectedProduct && handleDelete(selectedProduct.id)}
                    >
                      Delete
                    </Button>

                    <Button color="primary" onPress={handleUpdateCart}>
                      Ok
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              {/* Modal Invoice */}
              <Modal backdrop="blur" isOpen={isInvoiceOpen} onOpenChange={onInvoiceClose}>
                <ModalContent>
                  <ModalHeader className="flex flex-col gap-1">Invoice</ModalHeader>
                  <ModalBody>
                    <h2>Invoice Details</h2>
                    <ul>
                      {selectedItems.map((item) => (
                        <li key={item.id}>
                          <p>{item.Product.productName} - {item.quantity} x {formatRupiah(item.Product.price)}</p>
                        </li>
                      ))}
                    </ul>
                    <h3 className="font-semibold mt-5">Total: {formatRupiah(getSelectedTotalPrice())}</h3>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onPress={handleCreateInvoice}>
                      Complete Purchase
                    </Button>
                    <Button color="danger" onPress={onInvoiceClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>

            {/* Confirmation Section */}
            <div className="confirm-form flex justify-between items-center mt-[20px]">
              <h2 className="text-[20px] font-bold">Total: {formatRupiah(getSelectedTotalPrice())}</h2>
              <Button
                className="mr-[20px] bg-[#D7904D] text-white rounded-xl capitalize py-[10px] text-[18px] px-[30px] flex items-center gap-5"
                onPress={handleBuyNow}
              >
                Buy Now{" "}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPageUser;
