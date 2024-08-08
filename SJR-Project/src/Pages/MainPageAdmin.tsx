import SidebarAdmin from "../component/SidebarAdmin";
import React, { useState } from "react";
import { Select, SelectItem, Input } from "@nextui-org/react";
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

const MainPageAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <React.Fragment>
      <div className="body-main-user bg-[#F2F2F2] overflow-hidden">
        <div className="container-body flex flex-row min-h-screen">
          <div className="sidebar">
            <SidebarAdmin />
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

export default MainPageAdmin;
