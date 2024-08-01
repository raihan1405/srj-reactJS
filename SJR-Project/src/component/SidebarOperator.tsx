import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarOperator = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="body-sidebar min-h-screen w-[250px] bg-white pt-[30px] pl-[25px] pr-[25px]">
        <div className="title">
          <h2 className="text-[35px] font-bold">
            <span className="text-[#D7904D]">My</span>Invento
          </h2>
        </div>
        <div className="body flex flex-col mt-[50px]">
          <button onClick={() => navigate("/mainoperator")}>
            <div className="dashboard flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#D7904D]">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>

              <h2 className="text-black font-medium ml-[15px] text-[18px]">Dashboard</h2>
            </div>
          </button>

          <button>
            <div className="cart flex items-center mt-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#D7904D]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>

              <h2 className="text-black font-medium ml-[15px] text-[18px]">Statistic</h2>
            </div>
          </button>

          <button onClick={() => navigate("/orderdetailsop")}>
            <div className="order flex items-center mt-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#D7904D] ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>

              <h2 className="text-black font-medium ml-[15px] text-[18px]">Order</h2>
            </div>
          </button>

          <hr className="border-grey mt-[30px]"></hr>
          <button onClick={() => navigate("/profileuser")}>
            <div className="profile flex items-center mt-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 text-[#D7904D]">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <h2 className="text-black font-medium ml-[15px] text-[18px]">Profile</h2>
            </div>
          </button>
          <button onClick={() => navigate("/")}>
            <div className="logout flex items-center mt-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#D7904D]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
              </svg>

              <h2 className="text-black font-medium ml-[15px] text-[18px]">Log Out</h2>
            </div>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SidebarOperator;
