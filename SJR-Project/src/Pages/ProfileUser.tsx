import React, { useState, useEffect } from "react";
import SidebarUser from "../component/SidebarUser";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";

const ProfileUser = () => {
  // State untuk biodata
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // State untuk password
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Mengambil data pengguna saat komponen di-render
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data from the API
        const response = await axios.get("https://go-restapi-production.up.railway.app/api/user", {
          withCredentials: true, // Ensure cookies are included
        });

        const user = response.data;

        setName(user.username);
        setEmail(user.email);
        setPhoneNumber(user.phoneNumber);

        console.log(user.username);
        console.log(user.email);
        console.log(user.phoneNumber);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  const handleSaveBiodata = async () => {
    try {
  
      await axios.put(
        "https://go-restapi-production.up.railway.app/api/user",
        {
          username: name,
          email: email,
          phone_number: phoneNumber,
        },
        { withCredentials: true }
      );
      alert("Biodata updated successfully");
    } catch (error) {
      console.error("Error updating biodata:", error);
      alert("Failed to update biodata");
    }
  };
  

  // Mengirimkan perubahan kata sandi
  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      alert("New password and confirmation do not match");
      return;
    }

    try {
      await axios.put(
        "/api/user/password",
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        { withCredentials: true }
      );
      alert("Password updated successfully");
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Failed to update password");
    }
  };

  return (
    <div className="body-profile bg-[#F2F2F2] overflow-hidden">
      <div className="container-profile flex flex-row min-h-screen">
        <div className="sidebar">
          <SidebarUser />
        </div>
        <div className="content-profile flex flex-col ml-[35px] mt-[38px]">
          <h2 className="font-bold text-[30px]">Profile</h2>
          <h2 className="font-semibold text-[20px] mt-[40px]">Change Biodata</h2>
          <div className="input-biodata flex flex-col w-[400px] gap-[10px] mt-[20px]">
            <Input
              type="text"
              label="Your Name"
              className="text-[18px] rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              label="Your Email"
              className="text-[18px] rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="number"
              label="Your Phone Number"
              className="text-[18px] rounded-xl"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="button-container flex justify-between mt-[30px]">
            <Button
              className="bg-[#247AF8] text-white px-[30px] text-[18px] font-semibold py-[5px] rounded-xl hover:text-[#247AF8] hover:bg-white border-2 hover:border-2 hover:border-[#247AF8]"
              onClick={handleSaveBiodata}
            >
              Save
            </Button>
          </div>
          <h2 className="font-semibold text-[20px] mt-[20px]">Change Password</h2>
          <div className="input-password flex flex-col w-[400px] gap-[10px] mt-[20px]">
            <Input
              type="password"
              label="Old Password"
              className="text-[18px] rounded-xl"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              type="password"
              label="New Password"
              className="text-[18px] rounded-xl"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              type="password"
              label="Confirm New Password"
              className="text-[18px] rounded-xl"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <div className="button-container flex justify-between mt-[30px]">
            <Button
              className="px-[30px] py-[5px] border-2 border-[#247AF8] bg-white rounded-xl text-[#247AF8] hover:bg-red-600 hover:text-white hover:border-none font-semibold"
            >
              Cancel
            </Button>
            <Button
              className="bg-[#247AF8] text-white px-[30px] text-[18px] font-semibold py-[5px] rounded-xl hover:text-[#247AF8] hover:bg-white border-2 hover:border-2 hover:border-[#247AF8]"
              onClick={handleChangePassword}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
