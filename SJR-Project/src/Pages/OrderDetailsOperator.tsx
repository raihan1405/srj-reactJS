import SidebarOperator from "../component/SidebarOperator";
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

const OrderDetailsOperator = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="body-order-detail bg-[#F2F2F2] overflow-hidden">
      <div className="container-order flex flex-row min-h-screen">
        <div className="sidebar-order-details">
          <SidebarOperator />
        </div>
        <div className="content-order-details flex flex-col ml-[35px] mt-[38px]">
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

                      <div className="table-details-order-user w-full flex flex-col justify-center mt-[20px]">
                        <table>
                          <thead>
                            <tr className="text-[16px]">
                              <th className="w-[12rem] font-medium text-[#989898]">Product</th>
                              <th className="font-medium text-[#989898]">Quantity</th>
                              <th className="font-medium text-[#989898]">Stock Availability</th>
                              <th className="font-medium text-[#989898]">Status</th>
                              <th className="font-medium text-white">Action</th>
                            </tr>
                          </thead>
                        </table>

                        <div className="tbody overflow-y-scroll h-[8rem] mt-[10px]">
                          <table className="text-left w-full">
                            <tbody>
                              {details.map((detail, index) => (
                                <tr key={index} className="h-[50px] font-medium">
                                  <td className="w-[16rem] text-[14px]">{detail.product}</td>
                                  <td className="w-[13rem] text-[12px]">{detail.quantity}</td>
                                  <td className="w-[12rem] text-[12px]">{detail.stock}</td>
                                  <td className={`w-[8rem] text-[12px] ${detail.status === "Ready" ? "text-green-500" : "text-red-500"}`}>{detail.status}</td>
                                  <td>
                                    <button>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-danger-500">
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                      </svg>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Reject
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Approve
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

export default OrderDetailsOperator;
