import SidebarOperator from "../component/SidebarOperator";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from "@nextui-org/react";

const category = ["Router", "Switch", "Access Point", "Repeater"];
const brand = ["Mikrotik", "Cisco", "Aruba", "TPLINK"];
const products = [
  {
    name: "Mikrotik RB951UI2ND",
    brand: "Mikrotik",
    category: "Router",
    price: "Rp.760.000",
    status: "Ready",
    quantity: 180,
  },
  {
    name: "Ubiquiti NanoStation M2",
    brand: "Ubiquiti",
    category: "Access Point",
    price: "Rp.1.200.000",
    status: "Ready",
    quantity: 100,
  },
  {
    name: "TP-Link TL-WR840N",
    brand: "TP-Link",
    category: "Router",
    price: "Rp.250.000",
    status: "Ready",
    quantity: 250,
  },
  {
    name: "TP-Link TL-WR840N",
    brand: "TP-Link",
    category: "Router",
    price: "Rp.250.000",
    status: "Ready",
    quantity: 250,
  },
  {
    name: "TP-Link TL-WR840N",
    brand: "TP-Link",
    category: "Router",
    price: "Rp.250.000",
    status: "Ready",
    quantity: 250,
  },
  {
    name: "TP-Link TL-WR840N",
    brand: "TP-Link",
    category: "Router",
    price: "Rp.250.000",
    status: "Ready",
    quantity: 250,
  },
  {
    name: "TP-Link TL-WR840N",
    brand: "TP-Link",
    category: "Router",
    price: "Rp.250.000",
    status: "Ready",
    quantity: 250,
  },
  {
    name: "TP-Link TL-WR840N",
    brand: "TP-Link",
    category: "Router",
    price: "Rp.250.000",
    status: "Soldout",
    quantity: 0,
  },
  {
    name: "TP-Link TL-WR840N",
    brand: "TP-Link",
    category: "Router",
    price: "Rp.250.000",
    status: "Ready",
    quantity: 250,
  },
  {
    name: "TP-Link TL-WR840N",
    brand: "TP-Link",
    category: "Router",
    price: "Rp.250.000",
    status: "Ready",
    quantity: 250,
  },
];

const MainPageOperator = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen: isAddModalOpen, onOpen: onAddModalOpen, onOpenChange: onAddModalOpenChange } = useDisclosure();
  const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onOpenChange: onEditModalOpenChange } = useDisclosure();

  const handleEditClick = (product: any) => {
    setSelectedProduct(product);
    onEditModalOpen();
  };

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <React.Fragment>
      <div className="body-main-op bg-[#F2F2F2] overflow-hidden">
        <div className="container-op flex flex-row min-h-screen">
          <div className="sidebar-op">
            <SidebarOperator />
          </div>
          <div className="content-container flex flex-col ml-[35px] mt-[38px]">
            {/* header */}
            <div className="main-menu flex">
              <h2 className="font-bold text-[30px]">Product</h2>
            </div>

            {/* search engine */}
            <div className="search flex flex-row items-center gap-[50px] mt-[30px]">
              <div className="category">
                <Select size="md" label="Select Category" className="w-[220px]">
                  {category.map((kategori) => (
                    <SelectItem key={kategori} value={kategori}>
                      {kategori}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="brand">
                <Select size="md" label="Select Brand" className="w-[220px]">
                  {brand.map((brands) => (
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
              <div className="add">
                <Button size="md" className="bg-[#247AF8] text-white font-medium text-[16px]" onPress={onAddModalOpen}>
                  Add New Product +
                </Button>
              </div>
            </div>

            {/* Add New Product Modal */}
            <Modal backdrop="blur" isOpen={isAddModalOpen} onOpenChange={onAddModalOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">New Product</ModalHeader>
                    <ModalBody>
                      <Input size={"md"} type="text" label="Product Name" />
                      <Input size={"md"} type="text" label="Brand" />
                      <Input size={"md"} type="text" label="Category" />
                      <Input size={"md"} type="text" label="Price" />
                      <Input size={"md"} type="number" label="Quantity" />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Add
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

            {/* Edit Product Modal */}
            {selectedProduct && (
              <Modal backdrop="blur" isOpen={isEditModalOpen} onOpenChange={onEditModalOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Edit Product</ModalHeader>
                      <ModalBody>
                        <Input size={"md"} type="text" label="Product Name" />
                        <Input size={"md"} type="text" label="Brand" />
                        <Input size={"md"} type="text" label="Category" />
                        <Input size={"md"} type="text" label="Price" />
                        <Input size={"md"} type="number" label="Quantity" />
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
              </table>
              <div className="overflow-y-scroll h-[31rem] mt-[20px]">
                <table className="text-left w-[1200px]">
                  <tbody>
                    {filteredProducts.map((product, index) => (
                      <tr key={index} className="h-[60px] font-medium">
                        <td className="w-[17rem]">{product.name}</td>
                        <td className="w-[10rem]">{product.brand}</td>
                        <td className="w-[12rem]">{product.category}</td>
                        <td className="w-[10rem]">{product.price}</td>
                        <td className="w-[10rem]">
                          <h2 className={`font-semibold ${product.status.toLowerCase() === "soldout" ? "text-red-400" : "text-[#0C7523]"}`}>{product.status}</h2>
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
      </div>
    </React.Fragment>
  );
};

export default MainPageOperator;