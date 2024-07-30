import SidebarUser from "../component/SidebarUser";

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
          <div className="input-biodata flex flex-col w-[400px] gap-[20px] mt-[20px]">
            <input type="text" placeholder="Your Name" className="text-[18px] pl-[10px] py-[5px] rounded-xl" />
            <input type="text" placeholder="Your Email" className="text-[18px] pl-[10px] py-[5px] rounded-xl" />
            <input type="number" placeholder="Your Phone Number" className="text-[18px] pl-[10px] py-[5px] rounded-xl" />
          </div>
          <h2 className="font-semibold text-[20px] mt-[60px]">Change Password</h2>
          <div className="input-password flex flex-col w-[400px] gap-[20px] mt-[20px]">
            <input type="password" placeholder="Old Password" className="text-[18px] pl-[10px] py-[5px] rounded-xl" />
            <input type="password" placeholder="New Password" className="text-[18px] pl-[10px] py-[5px] rounded-xl" />
            <input type="password" placeholder="Confirm New Password" className="text-[18px] pl-[10px] py-[5px] rounded-xl" />
          </div>
          <div className="button-container flex justify-between mt-[30px]">
            <button className="px-[30px] py-[5px] border-2 border-[#247AF8] rounded-xl text-[#247AF8] hover:bg-red-600 hover:text-white hover:border-none font-semibold">Cancel</button>
            <button className="bg-[#247AF8] text-white px-[30px] text-[18px] font-semibold py-[5px] rounded-xl hover:text-[#247AF8] hover:bg-white border-2 hover:border-2 hover:border-[#247AF8]">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
