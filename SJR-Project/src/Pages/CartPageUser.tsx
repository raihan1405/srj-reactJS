import SidebarUser from "../component/SidebarUser";
import React, { useState } from "react";
import { Select, SelectItem, Input, Button, Checkbox } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

const category = ["Router", "Switch", "Access Point", "Repeater"];
const brand = ["Mikrotik", "Cisco", "Aruba", "TPLINK"];
const products = [
  {
    name: "Mikrotik RB951UI2ND",
    brand: "Mikrotik",
    category: "Router",
    price: "Rp.760.000",
    status: "Ready",
    quantity: 10,
    total_price: "Rp.7.600.000",
  },
  {
    name: "Ubiquiti NanoStation M2",
    brand: "Ubiquiti",
    category: "Access Point",
    price: "Rp.1.200.000",
    status: "Ready",
    quantity: 50,
    total_price: "Rp.7.600.000",
  },
  {
    name: "TP-Link TL-WR840N",
    brand: "TP-Link",
    category: "Router",
    price: "Rp.250.000",
    status: "Ready",
    quantity: 20,
    total_price: "Rp.7.600.000",
  },
];
const CartPageUser = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <React.Fragment>
      <div className="body-main bg-[#F2F2F2] overflow-hidden">
        <div className="container-main flex flex-row min-h-screen">
          <div className="side-bar">
            <SidebarUser />
          </div>

          <div className="content-container flex flex-col ml-[35px] mt-[38px]">
            {/* header */}
            <div className="main-menu flex">
              <h2 className="font-bold text-[30px]">Cart</h2>
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
            </div>
            <div className="table-of-content mt-[25px]">
              <table className="text-left w-[1200px]">
                <thead>
                  <tr className="text-[16px]">
                    <th className="font-medium text-[#F2F2F2]">Check</th>
                    <th className="font-medium text-[#989898] w-[17rem]">Product Name</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Brand</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Category</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Price</th>
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
                    {filteredProducts.map((product, index) => (
                      <tr key={index} className="h-[60px] font-medium">
                        <td className="w-[1rem]">
                          <Checkbox defaultSelected size="sm" color="warning" />
                        </td>
                        <td className="w-[17rem]">{product.name}</td>
                        <td className="w-[10rem]">{product.brand}</td>
                        <td className="w-[12rem]">{product.category}</td>
                        <td className="w-[10rem]">{product.price}</td>
                        <td className="w-[10rem]">
                          <h2 className={`font-semibold ${product.status.toLowerCase() === "soldout" ? "text-red-400" : "text-[#0C7523]"}`}>{product.status}</h2>
                        </td>
                        <td className="w-[10rem]">{product.quantity}</td>
                        <td className="w-[10rem]">{product.total_price}</td>
                        <td className="w-[10rem]">
                          <Button className="bg-[#D7904D] rounded-xl text-white px-[20px] py-[10px] capitalize" onPress={onOpen}>
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/*modal edit cart*/}
              <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Edit Cart</ModalHeader>
                      <ModalBody>
                        <h2>Product : Mikrotik RB951UI2ND</h2>
                        <h2>Brand : Mikrotik</h2>
                        <h2>Category : Router</h2>
                        <h2>Price : Rp.760.000</h2>
                        <h2 className="flex items-center">
                          Quantity :{" "}
                          <span>
                            <Input className="ml-[10px] w-[100px]" variant="underlined" type="number" />
                          </span>
                        </h2>
                        <h2 className="mt-[20px] font-semibold">Total Price : Rp.1.045.000</h2>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" className="flex items-center" variant="light" onPress={onClose}>
                          Delete{" "}
                          <span className="ml-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </span>
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Ok
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
              {/*modal edit cart*/}
            </div>
            {/*confirm*/}
            <div className="confirm-form flex justify-between items-center mt-[20px]">
              <h2 className="text-[20px] font-bold">Total : Rp.25.000.000</h2>
              <Button className="mr-[20px] bg-[#D7904D] text-white rounded-xl capitalize py-[10px] text-[18px] px-[30px] flex items-center gap-5">
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
