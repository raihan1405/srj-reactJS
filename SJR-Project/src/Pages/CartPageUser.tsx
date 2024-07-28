import SidebarUser from "../component/SidebarUser";
import React, { useState } from "react";

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
              <h2 className="font-bold text-[30px]">Product</h2>
            </div>

            {/* search engine */}
            <div className="search flex flex-row items-center gap-[80px] mt-[30px]">
              <div className="category">
                <button className="bg-white px-[50px] py-[7px] text-black text-[14px] capitalize font-normal rounded-2xl">Category</button>
              </div>
              <div className="brand">
                <button className="bg-white px-[60px] py-[7px] text-black text-[14px] capitalize font-normal rounded-2xl">Brand</button>
              </div>
              <div className="searchbar">
                <input placeholder="Search product...." className="bg-white border-none rounded-[15px] px-[20px] py-[5px] w-[350px] shadow-md text-black" onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
            </div>
            <div className="table-of-content mt-[40px]">
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
                          {" "}
                          <input type="checkbox" className="w-[40px]" />
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
                          <button className="bg-[#D7904D] rounded-xl text-white px-[20px] py-[10px] capitalize">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/*confirm*/}
            <div className="confirm-form flex justify-between items-center mt-[10px]">
              <h2 className="text-[20px] font-bold">Total : Rp.25.000.000</h2>
              <button className="mr-[20px] bg-[#D7904D] text-white rounded-xl capitalize py-[10px] text-[18px] px-[30px] flex items-center gap-5">
                Buy Now{" "}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPageUser;
