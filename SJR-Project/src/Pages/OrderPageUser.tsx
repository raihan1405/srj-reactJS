import SidebarUser from "../component/SidebarUser";
import React, { useState } from "react";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";
const category = ["Router", "Switch", "Access Point", "Repeater"];
const brand = ["Mikrotik", "Cisco", "Aruba", "TPLINK"];
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
                          <Button className="bg-[#D7904D] text-white px-[20px] py-[10px] capitalize rounded-xl">Details</Button>
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

export default OrderPageUser;
