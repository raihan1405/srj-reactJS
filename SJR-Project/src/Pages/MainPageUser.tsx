import SidebarUser from "../component/SidebarUser";
import React, { useState } from "react";
import { Menu, MenuHandler, Button, MenuList, MenuItem, Checkbox, Input } from "@material-tailwind/react";
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
const MainPageUser = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className="body-main bg-[#F2F2F2] overflow-hidden">
      <div className="container-main flex flex-row min-h-screen">
        <div className="side-bar">
          <SidebarUser />
        </div>

        <div className="content-container flex flex-col ml-[35px] mt-[38px]">
          {/* header */}
          <div className="main-menu flex">
            <h2 className="font-bold text-[30px]">Product</h2>
          </div>

          {/* search engine */}
          <div className="search flex flex-row items-center gap-[80px] mt-[30px]">
            <div className="category">
              <Menu dismiss={{ itemPress: false }}>
                <MenuHandler>
                  <Button className="bg-white px-[50px] py-[7px] text-black text-[14px] capitalize font-normal rounded-2xl">Category</Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="p-0">
                    <label htmlFor="item-1" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-1" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 1
                    </label>
                  </MenuItem>
                  <MenuItem className="p-0">
                    <label htmlFor="item-2" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-2" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 2
                    </label>
                  </MenuItem>
                  <MenuItem className="p-0">
                    <label htmlFor="item-3" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-3" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 3
                    </label>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="brand">
              <Menu dismiss={{ itemPress: false }}>
                <MenuHandler>
                  <Button className="bg-white px-[60px] py-[7px] text-black text-[14px] capitalize font-normal rounded-2xl">Brand</Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="p-0">
                    <label htmlFor="item-1" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-1" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 1
                    </label>
                  </MenuItem>
                  <MenuItem className="p-0">
                    <label htmlFor="item-2" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-2" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 2
                    </label>
                  </MenuItem>
                  <MenuItem className="p-0">
                    <label htmlFor="item-3" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-3" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 3
                    </label>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="searchbar">
              <Input
                label="Search product...."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                }
                className="bg-white border-none rounded-[400px] w-[350px] shadow-md text-black"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="table-of-content mt-[40px]">
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
                        <Button className="bg-[#D7904D] text-white px-[20px] py-[10px] capitalize">Add</Button>
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
  );
};

export default MainPageUser;
