import SidebarUser from "../component/SidebarUser";

const MainPageUser = () => {
  return (
    <div className="body-main bg-[#F2F2F2]">
      <div className="container-main flex flex-row min-h-screen">
        <div className="side-bar">
          <SidebarUser />
        </div>
        <div className="main-menu flex ml-[35px] mt-[38px]">
          <h2 className="font-bold text-[30px]">Product</h2>
        </div>
      </div>
    </div>
  );
};

export default MainPageUser;
