import SidebarOperator from "../component/SidebarOperator";
import { Select, SelectItem } from "@nextui-org/react";

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
    status: "Delivery",
  },
  {
    name: "Tiara",
    id: "IDX2346",
    date: "15/02/2024",
    status: "Delivery",
  },
];

const statusOptions = ["Approve", "Reject", "Process", "Delivery"];

const ControlOperator = () => {
  return (
    <div className="body-control bg-[#F2F2F2] overflow-hidden">
      <div className="container-control flex flex-row min-h-screen">
        <div className="sidebar-control">
          <SidebarOperator />
        </div>
        <div className="content-container-control flex flex-col ml-[35px] mt-[38px]">
          {/* header */}
          <div className="main-menu flex">
            <h2 className="font-bold text-[30px]">Control</h2>
          </div>

          {/*start table*/}
          <div className="table-of-content mt-[25px]">
            <table className="text-left w-[1200px]">
              <thead>
                <tr className="text-[16px]">
                  <th className="font-medium text-[#989898] w-[12rem]">Name</th>
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
                    <td className="w-[12rem]">{lists.name}</td>
                    <td className="w-[12rem]">{lists.id}</td>
                    <td className="w-[12rem]">{lists.date}</td>
                    <td className="w-[12rem]">
                      <Select placeholder="Select status" defaultSelectedKeys={[lists.status]} className="max-w-[15rem]">
                        {statusOptions.map((status, idx) => (
                          <SelectItem key={idx} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </Select>
                    </td>
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

export default ControlOperator;
