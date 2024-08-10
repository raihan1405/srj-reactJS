import SidebarAdmin from "../component/SidebarAdmin";

const list = [
  {
    name: "Faried Gunawan",
    id: "IDX2346",
    date: "15/02/2024",
    status: "Approve",
  },
  {
    name: "Salsabila Hidi",
    id: "IDX2346",
    date: "15/02/2024",
    status: "Delivery",
  },
  {
    name: "Raihan Abdurahman",
    id: "IDX2346",
    date: "15/02/2024",
    status: "Process",
  },
  {
    name: "Tiara",
    id: "IDX2346",
    date: "15/02/2024",
    status: "Reject",
  },
];

const getStatusColor = (status: any) => {
  switch (status) {
    case "Approve":
      return "text-green-500";
    case "Reject":
      return "text-red-500";
    case "Process":
      return "text-yellow-500";
    case "Delivery":
      return "text-blue-500";
    default:
      return "text-gray-500";
  }
};

const MonitorAdmin = () => {
  return (
    <div className="body-control bg-[#F2F2F2] overflow-hidden">
      <div className="container-control flex flex-row min-h-screen">
        <div className="sidebar-control">
          <SidebarAdmin />
        </div>
        <div className="content-container-control flex flex-col ml-[35px] mt-[38px]">
          {/* header */}
          <div className="main-menu flex">
            <h2 className="font-bold text-[30px]">Operator Monitoring</h2>
          </div>

          {/*start table*/}
          <div className="table-of-content mt-[25px]">
            <table className="text-left w-[1200px]">
              <thead>
                <tr className="text-[16px]">
                  <th className="font-medium text-[#989898] w-[12rem]">Customer</th>
                  <th className="font-medium text-[#989898] w-[12rem]">ID</th>
                  <th className="font-medium text-[#989898] w-[12rem]">Date</th>
                  <th className="font-medium text-[#989898] w-[10rem]">Status</th>
                </tr>
              </thead>
            </table>
          </div>
          {/*end of head table*/}

          <div className="overflow-y-scroll h-[35rem] mt-[20px]">
            <table className="text-left w-[1200px]">
              <tbody>
                {list.map((lists, index) => (
                  <tr key={index} className="h-[60px] font-medium">
                    <td className="w-[16rem]">{lists.name}</td>
                    <td className="w-[17rem]">{lists.id}</td>
                    <td className="w-[18rem]">{lists.date}</td>
                    <td className={`w-[15rem] ${getStatusColor(lists.status)}`}>{lists.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorAdmin;
