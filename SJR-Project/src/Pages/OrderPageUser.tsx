import SidebarUser from "../component/SidebarUser";
import React, { useState } from "react";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

const category = ["Router", "Switch", "Access Point", "Repeater"];
const brand = ["Mikrotik", "Cisco", "Aruba", "TPLINK"];
const details = [
  {
    product: "Mikrotik RB951UI2ND",
    quantity: "129",
    stock: "500",
    status: "Packing",
  },
  {
    product: "Mikrotik RB951UI2ND",
    quantity: "129",
    stock: "0",
    status: "Delivery",
  },
  {
    product: "Mikrotik RB951UI2ND",
    quantity: "129",
    stock: "500",
    status: "Approve",
  },
];
const products = [
  {
    name: "Mikrotik RB951UI2ND",
    id: "00003345tz",
    purchase: "15/02/2024",
    delivery: "17/02/2024",
    status: "Delivered",
    total: "Rp.51.400.000",
  },
  {
    name: "Ubiquiti NanoStation M2",
    id: "00143345ez",
    purchase: "19/03/2024",
    delivery: "22/03/2024",
    status: "Confirmed",
    total: "Rp.11.400.000",
  },
  {
    name: "TP-Link TL-WR840N",
    id: "1233345yz",
    purchase: "19/03/2024",
    delivery: "22/03/2024",
    status: "Confirmed",
    total: "Rp.16.400.000",
  },
];
const OrderPageUser = () => {
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
              <h2 className="font-bold text-[30px]">Orders</h2>
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
                    <th className="font-medium text-[#989898] w-[17rem]">Product Name</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Order ID</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Purchase Date</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Delivery Date</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Status</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Total</th>
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
                        <td className="w-[12rem]">{product.id}</td>
                        <td className="w-[12rem]">{product.purchase}</td>
                        <td className="w-[10rem]">{product.delivery}</td>
                        <td className="w-[11rem]">
                          <h2 className={`font-semibold ${product.status.toLowerCase() === "delivered" ? "text-yellow-500" : product.status.toLowerCase() === "confirmed" ? "text-green-500" : "text-red-400"}`}>{product.status}</h2>
                        </td>
                        <td className="w-[10rem]">{product.total}</td>
                        <td className="w-[10rem]">
                          <Button className="bg-[#D7904D] text-white px-[20px] py-[10px] capitalize rounded-xl" onPress={onOpen}>
                            Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* modal details orders */}
              <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" backdrop="blur">
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Order List</ModalHeader>
                      <ModalBody>
                        <h2 className="font-medium">
                          Name : <span className="font-medium">Hogwarts Sen</span>{" "}
                        </h2>

                        <h2 className="font-medium">
                          Order ID : <span className="font-medium">0x3467238</span>
                        </h2>

                        <h2 className="font-medium">
                          Phone : <span className="font-medium">08124612617</span>
                        </h2>
                        <h2 className="font-medium">
                          Delivery : <span className="font-medium">#HSDG27121817S</span>
                        </h2>

                        <div className="table-details-order-user w-full flex flex-col justify-center mt-[20px]">
                          <table>
                            <thead>
                              <tr className="text-[16px]">
                                <th className="font-medium text-[#989898]">Product</th>
                                <th className="font-medium text-[#989898]">Quantity</th>
                                <th className="font-medium text-[#989898]">Stock Availability</th>
                                <th className="font-medium text-[#989898]">Status</th>
                              </tr>
                            </thead>
                          </table>

                          <div className="tbody overflow-y-scroll h-[8rem] mt-[10px]">
                            <table>
                              <tbody>
                                {details.map((detail, index) => (
                                  <tr key={index} className="h-[50px] font-medium">
                                    <td className="w-[16rem] text-[14px]">{detail.product}</td>
                                    <td className="w-[17rem] text-[12px]">{detail.quantity}</td>
                                    <td className="w-[14rem] text-[12px]">{detail.stock}</td>
                                    <td className={`text-[12px] ${detail.status === "Delivery" ? "text-green-500" : "text-red-500"}`}>{detail.status}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="sum-total mt-[25px]">
                          <h2 className="font-medium text-[20px]">Rp.12.500.000</h2>
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="success" variant="light" className="flex items-center" onPress={onClose}>
                          Chat Operator{" "}
                          <span className="ml-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
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
              {/* modal details orders */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderPageUser;
