import SidebarAdmin from "../component/SidebarAdmin";
import { Select, SelectItem, Input } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const product = [
  { name: "MikrotikRB95UIND", id: "OKD291", category: "Router", brand: "Mikrotik" },
  { name: "MikrotikRB95UIND", id: "OKD291", category: "Router", brand: "Mikrotik" },
  { name: "MikrotikRB95UIND", id: "OKD291", category: "Router", brand: "Mikrotik" },
];

const details = [
  {
    initial: "700",
    firstin: "100",
    firstout: "500",
    stock: "300",
  },
];

const ReportAdmin = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handlePrint = () => {
    const input = document.getElementById("pdf-content");

    if (input) {
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();

          const pdfWidth = pdf.internal.pageSize.width;
          const pdfHeight = pdf.internal.pageSize.height;

          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const newImgWidth = imgWidth * ratio;
          const newImgHeight = imgHeight * ratio;

          pdf.addImage(imgData, "PNG", 0, 0, newImgWidth, newImgHeight);
          pdf.save("report.pdf");
        })
        .catch((err) => {
          console.error("Error generating PDF: ", err);
        });
    } else {
      console.error("Element with id 'pdf-content' not found.");
    }
  };

  return (
    <div className="body-report-admin bg-[#F2F2F2] overflow-hidden">
      <div className="container-report flex flex-row min-h-screen">
        <div className="sidebar-report">
          <SidebarAdmin />
        </div>
        <div className="content-container-report content-container-control flex flex-col ml-[35px] mt-[38px]">
          {/* header */}
          <div className="main-menu flex">
            <h2 className="font-bold text-[30px]">Report</h2>
          </div>
          <div className="search flex flex-row items-center gap-[50px] mt-[30px]">
            <div className="searchbar">
              <Input
                label="Search"
                isClearable
                radius="lg"
                className="w-[350px]"
                placeholder="Search Product..."
                startContent={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                }
              />
            </div>
            <div className="select-month w-[250px]">
              <Select label="Select Month" placeholder="Choose a month" className="max-w-xs">
                {months.map((month, index) => (
                  <SelectItem key={index} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>

          {/*start table*/}
          <div className="table-of-content mt-[25px]">
            <table className="text-left w-[1200px]">
              <thead>
                <tr className="text-[16px]">
                  <th className="font-medium text-[#989898] w-[16rem]">Name</th>
                  <th className="font-medium text-[#989898] w-[12rem]">ID</th>
                  <th className="font-medium text-[#989898] w-[16rem]">Category</th>
                  <th className="font-medium text-[#989898] w-[12rem]">Brand</th>
                  <th className="font-medium text-[#F2F2F2] w-[10rem]">Action</th>
                </tr>
              </thead>
              <tbody>
                {product.map((products, index) => (
                  <tr key={index} className="h-[60px] font-medium">
                    <td className="w-[18rem]">{products.name}</td>
                    <td className="w-[14rem]">{products.id}</td>
                    <td className="w-[18rem]">{products.category}</td>
                    <td className="w-[12rem]">{products.brand}</td>
                    <td>
                      <Button className="bg-[#247AF8] text-white px-[20px] py-[10px] capitalize rounded-xl flex flex-row items-center" onPress={onOpen}>
                        Report{" "}
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                            />
                          </svg>
                        </span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* modal details product */}
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" backdrop="blur">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Product Report</ModalHeader>
                  <ModalBody>
                    <div id="pdf-content">
                      <h2 className="font-medium">
                        Product : <span className="font-medium">MikrotikRB95UIND</span>{" "}
                      </h2>

                      <h2 className="font-medium">
                        ID : <span className="font-medium">OKD291</span>
                      </h2>

                      <h2 className="font-medium">
                        Category : <span className="font-medium">Router</span>
                      </h2>
                      <h2 className="font-medium">
                        Brand : <span className="font-medium">Mikrotik</span>
                      </h2>

                      <div className="table-details-order-user w-full flex flex-col justify-center mt-[20px]">
                        <table>
                          <thead>
                            <tr className="text-[16px] flex justify-between">
                              <th className="text-left font-medium text-[#989898]">Initial Stock</th>
                              <th className="text-left font-medium text-[#989898]">First In</th>
                              <th className="text-left font-medium text-[#989898]">First Out</th>
                              <th className="text-left font-medium text-[#989898]">Stock Availability</th>
                            </tr>
                          </thead>
                        </table>

                        <div className="tbody mt-[10px]">
                          <table>
                            <tbody>
                              {details.map((detail, index) => (
                                <tr key={index} className="h-[50px] font-medium">
                                  <td className="w-[17rem] text-[14px]">{detail.initial}</td>
                                  <td className="w-[14rem] text-[12px]">{detail.firstin}</td>
                                  <td className="w-[17rem] text-[12px]">{detail.firstout}</td>
                                  <td className="text-[12px]">{detail.stock}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" variant="light" className="flex items-center" onPress={onClose}>
                      Chat Operator{" "}
                      <span className="ml-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                          />
                        </svg>
                      </span>
                    </Button>
                    <Button color="primary" onPress={handlePrint}>
                      Print
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          {/* modal details products */}
        </div>
      </div>
    </div>
  );
};

export default ReportAdmin;
