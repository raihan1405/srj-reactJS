import React, { useState } from "react";
import bglanding from "../assets/bg-landing.jpg";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("https://go-restapi-production.up.railway.app/api/register", {
        username,
        email,
        phoneNumber,
        password,
      });
      console.log(response.data);
      navigate("/loginuser");
    } catch (error) {
      console.error("Error registering user:", error);
      console.log("Gabisa rid");
    }
  };

  return (
    <React.Fragment>
      <div className="landing flex flex-row justify-center items-center min-h-screen lg:justify-start bg-[#F2F2F2]">
        <div className="landing-body bg-cover bg-center min-h-screen lg:w-[500px] 2xl:w-[900px] hidden lg:flex " style={{ backgroundImage: `url(${bglanding})` }}>
          <div className="img-container items-center lg:mx-[200px] 2xl:mx-[200px] hidden 2xl:flex">
            <div className="img-content bg-black bg-opacity-60 backdrop-blur-sm  flex flex-col rounded-[30px] px-[40px] py-[60px]">
              <h2 className="text-white text-[50px] font-bold">
                <span className="text-[rgb(215,144,77)]">Inventory</span> Management System
              </h2>
              <h2 className="text-white font-semibold mt-[70px] text-[20px]">Simplest and most efficient web-based order fulfillment and inventory management software</h2>
            </div>
          </div>
        </div>
        <div className="landing-role flex flex-col items-center lg:ml-[70px] lg:items-start">
          <h2 className="text-[40px] font-bold flex flex-row items-center">
            <span className="text-[#D7904D]">My</span>Invento{" "}
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </span>
          </h2>
          <h2 className="font-semibold text-[18px] lg:text-[16px]">Manage your online business easy </h2>
          <h2 className="font-semibold text-[20px] mt-[40px] mb-[40px]">Register User</h2>
          <Input type="text" label="Enter your Username" className="pl-[10px] px-[20px] py-[10px] lg:px-0 lg:py-0 rounded-xl w-[300px] lg:w-[400px] lg:pl-0" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input type="text" label="Email" className="pl-[10px] px-[20px] py-[10px] rounded-xl lg:px-0 lg:py-0 w-[300px] lg:w-[400px] mt-[20px] lg:mt-[10px] lg:pl-0" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" label="Password" className="pl-[10px] px-[20px] py-[10px] lg:px-0 lg:py-0 rounded-xl w-[300px] lg:w-[400px] mt-[20px] lg:mt-[10px] lg:pl-0" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input type="number" label="Phone Number" className="pl-[10px] lg:px-0 lg:py-0 px-[20px] py-[10px] rounded-xl w-[300px] lg:w-[400px] mt-[20px] lg:mt-[10px] lg:pl-0" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <div className="button-register flex flex-col items-center">
            <Button className="w-[300px] lg:w-[400px] px-[20px] py-[15px] bg-[#247AF8] text-white rounded-xl mt-[20px] capitalize font-semibold" onClick={handleRegister}>
              Register
            </Button>
            <h2 className="text-[12px] font-semibold mt-[10px]">
              Have an account ?{" "}
              <span className="text-[#247AF8]">
                <button className="hover:text-[#D7904D]" onClick={() => navigate("/loginuser")}>
                  Login
                </button>
              </span>{" "}
            </h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterUser;
