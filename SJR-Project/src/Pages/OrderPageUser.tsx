import React, { useState, useEffect } from "react";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import SidebarUser from "../component/SidebarUser";
import axios from 'axios';

interface Product {
  id: number;
  productName: string;
  brandName: string;
  price: number;
  quantity: number;
  Category: string;
  status: boolean;
}

interface User {
  id: string;
  email: string;
  phoneNumber: string;
  username: string;
  password?: string;
}

interface InvoiceItem {
  id: number;
  invoiceID: number;
  productID: number;
  quantity: number;
  price: number;
  total: number;
  product: Product;
  User : User; 
}

interface Invoice {
  user: any;
  id: number;
  userID: string;
  total_price: number;
  createdAt: string;
  status: string;
  invoice_items: InvoiceItem[];
}

const OrderPageUser = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };
  
  // Fetch invoices from the API
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/getInvoice', { withCredentials: true });
        const invoicesData = response.data as Invoice[]; // Ensure the data is of type Invoice[]
        setInvoices(invoicesData);
        console.log(invoicesData); // For debugging purposes
      } catch (error) {
        console.error('Error fetching invoices:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchInvoices();
  }, []);

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.invoice_items.some((item) =>
      item.product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleOpenDetails = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    onOpen();
  };

  return (
    <React.Fragment>
      <div className="body-main bg-[#F2F2F2] overflow-hidden">
        <div className="container-main flex flex-row min-h-screen">
          <div className="side-bar">
            <SidebarUser />
          </div>

          <div className="content-container flex flex-col ml-[35px] mt-[38px]">
            {/* header */}
            <div className="main-menu flex">
              <h2 className="font-bold text-[30px]">Orders</h2>
            </div>

            {/* search engine */}
            <div className="search flex flex-row items-center gap-[50px] mt-[30px]">
              <div className="searchbar">
                <Input
                  label="Search"
                  isClearable
                  radius="lg"
                  className="w-[350px]"
                  placeholder="Search Product..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  startContent={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="table-of-content mt-[25px]">
              <table className="text-left w-[1200px]">
                <thead>
                  <tr className="text-[16px]">
                    <th className="font-medium text-[#989898] w-[10rem]">Order ID</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Purchase Date</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Status</th>
                    <th className="font-medium text-[#989898] w-[10rem]">Total</th>
                    <th className="font-medium text-[#F2F2F2] w-[10rem]">Actions</th>
                  </tr>
                </thead>
              </table>

              <div className="overflow-y-scroll h-[31rem] mt-[20px]">
                <table className="text-left w-[1200px]">
                  <tbody>
                    {filteredInvoices.map((invoice, index) => (
                      <tr key={index} className="h-[60px] font-medium">
                        <td className="w-[12rem]">{invoice.id}</td>
                        <td className="w-[12rem]">{new Date(invoice.createdAt).toLocaleDateString()}</td>
                        <td className="w-[11rem]">
                          <h2 className={`font-medium ${invoice.status === "Completed"
                                ? "text-blue-500"
                                : invoice.status === "Approved"
                                  ? "text-green-500"
                                  : invoice.status === "Pending"
                                    ? "text-yellow-500"
                                    : invoice.status === "Rejected"
                                      ? "text-red-500"
                                      : ""
                              }`}>{invoice.status}</h2>
                        </td>
                        <td className="w-[10rem]">{formatRupiah(invoice.total_price)}</td>
                        <td className="w-[10rem]">
                          <Button className="bg-[#D7904D] text-white px-[20px] py-[10px] capitalize rounded-xl" onPress={() => handleOpenDetails(invoice)}>
                            Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal for invoice details */}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" backdrop="blur">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Order List</ModalHeader>
                    <ModalBody>
                      {selectedInvoice && (
                        <>
                          <h2 className="font-medium">
                            Name: <span className="font-medium">{selectedInvoice.user.username}</span>
                          </h2>
                          <h2 className="font-medium">
                            Order ID: <span className="font-medium">{selectedInvoice.id}</span>
                          </h2>
                          <h2 className="font-medium">
                            Phone: <span className="font-medium">{selectedInvoice.user.phoneNumber}</span>
                          </h2>
                          <h2 className="font-medium">
                            Delivery: <span className="font-medium">#HSDG27121817S</span>
                          </h2>

                          <div className="table-details-order-user w-full flex flex-col justify-center mt-[20px]">
                            <table className="w-full table-auto table-layout-fixed border-collapse">
                              <thead>
                                <tr className="text-[16px] border-b-2 border-[#ddd]">
                                  <th className="font-medium text-[#989898] px-4 py-2 border-r border-[#ddd]">Product</th>
                                  <th className="font-medium text-[#989898] px-4 py-2 border-r border-[#ddd]">Quantity</th>
                                  <th className="font-medium text-[#989898] px-4 py-2 border-r border-[#ddd]">Price</th>
                                  <th className="font-medium text-[#989898] px-4 py-2">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {selectedInvoice.invoice_items.map((item, index) => (
                                  <tr key={index} className="h-[50px] font-medium border-b border-[#ddd]">
                                    <td className="text-[14px] px-4 py-2 border-r border-[#ddd]">{item.product.productName}</td>
                                    <td className="text-[14px] px-4 py-2 border-r border-[#ddd]">{item.quantity}</td>
                                    <td className="text-[14px] px-4 py-2 border-r border-[#ddd]">{formatRupiah(item.price)}</td>
                                    <td className="text-[14px] px-4 py-2">{formatRupiah(item.total)}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <div className="sum-total mt-[25px]">
                            <h2 className="font-medium text-[20px]">{formatRupiah(selectedInvoice.total_price)}</h2>
                          </div>
                        </>
                      )}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="success" variant="light" className="flex items-center" onPress={onClose}>
                        Chat Operator{" "}
                        <span className="ml-[5px]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
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


          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderPageUser;
