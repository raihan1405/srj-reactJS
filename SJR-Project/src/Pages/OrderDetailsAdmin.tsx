import SidebarAdmin from "../component/SidebarAdmin";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";

const orders = [
  {
    name: "Hogwarts Noir",
    Phone: "0818236287",
    date: "19/01/2024 17.00",
  },
  {
    name: "Valorant San",
    Phone: "0818172312",
    date: "22/04/2024 07.00",
  },
  {
    name: "Han Ben",
    Phone: "0871623128",
    date: "30/05/2024 10.00",
  },
];

const details = [
  {
    product: "Mikrotik RB951UI2ND",
    quantity: "129",
    stock: "500",
    status: "Ready",
  },
  {
    product: "Mikrotik RB951UI2ND",
    quantity: "129",
    stock: "0",
    status: "sold",
  },
  {
    product: "Mikrotik RB951UI2ND",
    quantity: "129",
    stock: "500",
    status: "Ready",
  },
];

const OrderDetailsAdmin = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="body-order-admin overflow-hidden bg-[#F2F2F2]">
      <div className="container-order-admin flex flex-row min-h-screen">
        <div className="sidebar-order-admin">
          <SidebarAdmin />
        </div>
        <div className="content-order-admin flex flex-col ml-[35px] mt-[38px]">
          <div className="main-menu flex flex-col">
            <h2 className="font-bold text-[30px]">Order</h2>
            <div className="searchbar mt-[30px]">
              <Input
                label="Search"
                isClearable
                radius="lg"
                className="w-[350px]"
                placeholder="Search Order..."
                startContent={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                }
              />
            </div>
            <div className="table-of-content mt-[25px]">
              <table className="text-left w-[1200px]">
                <thead>
                  <tr className="text-[16px]">
                    <th className="font-medium text-[#989898] w-[12rem]">Name</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Phone</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Date</th>
                    <th className="font-medium text-[#F2F2F2] w-[10rem]">Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="overflow-y-scroll h-[31rem] mt-[20px]">
              <table className="text-left w-[1200px]">
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="h-[60px] font-medium">
                      <td className="w-[12rem]">{order.name}</td>
                      <td className="w-[12rem]">{order.Phone}</td>
                      <td className="w-[12rem]">{order.date}</td>
                      <td className="w-[10rem]">
                        <Button className="bg-[#247AF8] text-white px-[20px] py-[10px] capitalize rounded-xl flex flex-row items-center" onPress={onOpen}>
                          Order Details{" "}
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                              />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                          </span>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* modal details orders */}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" backdrop="blur">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Order List</ModalHeader>
                    <ModalBody>
                      <h2 className="font-medium">
                        Name : <span className="font-medium">Hogwarts Sen</span>{" "}
                      </h2>

                      <h2 className="font-medium">
                        Order ID : <span className="font-medium">0x3467238</span>
                      </h2>

                      <h2 className="font-medium">
                        Phone : <span className="font-medium">08124612617</span>
                      </h2>

                      <h2 className="font-medium">
                        Status Operator : <span className="font-medium text-green-500">Approve</span>
                      </h2>

                      <div className="table-details-order-user w-full flex flex-col justify-center mt-[20px]">
                        <table>
                          <thead>
                            <tr className="text-[16px]">
                              <th className="w-[15rem] text-left font-medium text-[#989898]">Product</th>
                              <th className="font-medium w-[200px] text-left text-[#989898]">Quantity</th>
                              <th className="font-medium text-left text-[#989898]">Stock Availability</th>
                              <th className="font-medium text-left text-[#989898]">Status</th>
                            </tr>
                          </thead>
                        </table>

                        <div className="tbody overflow-y-scroll h-[8rem] mt-[10px]">
                          <table className="text-left w-full">
                            <tbody>
                              {details.map((detail, index) => (
                                <tr key={index} className="h-[50px] font-medium">
                                  <td className="w-[21rem] text-[14px]">{detail.product}</td>
                                  <td className="w-[22rem] text-[12px]">{detail.quantity}</td>
                                  <td className="w-[24rem] text-[12px]">{detail.stock}</td>
                                  <td className={`w-[8rem] text-[12px] ${detail.status === "Ready" ? "text-green-500" : "text-red-500"}`}>{detail.status}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="sum-total mt-[25px]">
                          <h2 className="font-medium text-[20px]"> Total : Rp.12.500.000</h2>
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
                      <Button color="primary" onPress={onClose}>
                        Ok
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
            {/* modal details orders */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsAdmin;
