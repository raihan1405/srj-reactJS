import SidebarUser from "../component/SidebarUser";
import { Input, Button } from "@nextui-org/react";

const ProfileUser = () => {
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
            <Input type="text" label="Your Name" className="text-[18px] rounded-xl" />
            <Input type="text" label="Your Email" className="text-[18px]  rounded-xl" />
            <Input type="number" label="Your Phone Number" className="text-[18px] rounded-xl" />
          </div>
          <h2 className="font-semibold text-[20px] mt-[20px]">Change Password</h2>
          <div className="input-password flex flex-col w-[400px] gap-[10px] mt-[20px]">
            <Input type="password" label="Old Password" className="text-[18px] rounded-xl" />
            <Input type="password" label="New Password" className="text-[18px] rounded-xl" />
            <Input type="password" label="Confirm New Password" className="text-[18px] rounded-xl" />
          </div>
          <div className="button-container flex justify-between mt-[30px]">
            <Button className="px-[30px] py-[5px] border-2 border-[#247AF8] bg-white rounded-xl text-[#247AF8] hover:bg-red-600 hover:text-white hover:border-none font-semibold">Cancel</Button>
            <Button className="bg-[#247AF8] text-white px-[30px] text-[18px] font-semibold py-[5px] rounded-xl hover:text-[#247AF8] hover:bg-white border-2 hover:border-2 hover:border-[#247AF8]">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
