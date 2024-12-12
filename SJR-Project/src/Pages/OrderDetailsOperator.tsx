import React, { useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import SidebarOperator from "../component/SidebarOperator";
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
  User: User;
}

interface Invoice {
  user: User;
  id: number;
  userID: string;
  total_price: number;
  createdAt: string;
  status: string;
  invoice_items: InvoiceItem[];
}

const OrderDetailsOperator = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [invoiceIDs, setInvoiceIDs] = useState<number[]>([]);

  // Update invoiceIDs saat invoice detail dibuka
  const handleOpenDetails = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setInvoiceIDs([invoice.id]); // Set ID invoice yang dipilih
    onOpen();
  };

  // Format Rupiah currency
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  const handleApprove = async () => {
    setLoading(true);
    setError(null);

    try {
      // Gantilah URL ini sesuai dengan konfigurasi proxy atau gunakan URL absolut
      const approveUrl = 'http://localhost:8080/operator/invoices/approve';
      const response = await axios.put(approveUrl, invoiceIDs, {
        withCredentials: true
      });
      console.log(response.data); // Menampilkan respon dari server
      alert('Invoices successfully approved');
      onClose(); // Tutup modal setelah approve
      // Optional: Refresh invoices setelah approval
      fetchInvoices();
    } catch (err) {
      setError('Failed to approve invoices');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    setLoading(true);
    setError(null);

    try {
      // Gantilah URL ini sesuai dengan konfigurasi proxy atau gunakan URL absolut
      const rejectUrl = 'http://localhost:8080/operator/invoices/reject';
      const response = await axios.put(rejectUrl, invoiceIDs, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_operator')}`, // Pastikan token ada di localStorage
        },
        withCredentials: true
      });
      console.log(response.data); // Menampilkan respon dari server
      alert('Invoices successfully rejected');
      onClose(); // Tutup modal setelah reject
      // Optional: Refresh invoices setelah rejection
      fetchInvoices();
    } catch (err) {
      setError('Failed to reject invoices');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  // Fetch invoices from the server
  const fetchInvoices = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/operator/getAllInvoice', { withCredentials: true });
      const invoicesData = response.data as Invoice[];
      setInvoices(invoicesData);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  // Filter invoices by search term (product name)
  const filteredInvoices = invoices.filter((invoice) =>
    invoice.invoice_items.some((item) =>
      item.product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                    <th className="font-medium text-[#989898] w-[10rem]">Order ID</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Name</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Phone</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Date</th>
                    <th className="font-medium text-[#989898] w-[12rem]">Status</th>
                    <th className="font-medium text-[#989898] w-[16rem]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    filteredInvoices.map((invoice, index) => (
                      <tr key={index} className="h-[60px] font-medium">
                        <td className="w-[12rem]">{invoice.id}</td>
                        <td className="w-[12rem]">{invoice.user.username}</td>
                        <td className="w-[11rem]">{invoice.user.phoneNumber}</td>
                        <td className="w-[10rem]">{formatDate(invoice.createdAt)}</td>
                        <td className="w-[12rem]">
                          {/* Status */}
                          <span
                            className={`font-medium ${invoice.status === "Completed"
                                ? "text-blue-500"
                                : invoice.status === "Approved"
                                  ? "text-green-500"
                                  : invoice.status === "Pending"
                                    ? "text-yellow-500"
                                    : invoice.status === "Rejected"
                                      ? "text-red-500"
                                      : ""
                              }`}
                          >
                            {invoice.status}
                          </span>
                        </td>
                        <td className="w-[16rem]">
                          {/* Actions Column */}
                          <Button
                            className="bg-[#D7904D] text-white px-[20px] py-[10px] capitalize rounded-xl"
                            onPress={() => handleOpenDetails(invoice)}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Invoice Details */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" backdrop="blur">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Order List</ModalHeader>
          <ModalBody>
            {selectedInvoice && (
              <>
                <h2 className="font-medium">Name: <span className="font-medium">{selectedInvoice.user.username}</span></h2>
                <h2 className="font-medium">Order ID: <span className="font-medium">{selectedInvoice.id}</span></h2>
                <h2 className="font-medium">Phone: <span className="font-medium">{selectedInvoice.user.phoneNumber}</span></h2>

                <div className="table-details-order-user w-full flex flex-col justify-center mt-[20px]">
                  <table>
                    <thead>
                      <tr className="text-[16px]">
                        <th className="w-[12rem] font-medium text-[#989898]">Product</th>
                        <th className="font-medium text-[#989898]">Quantity</th>
                        <th className="font-medium text-[#989898]">Stock Availability</th>
                        <th className="font-medium text-[#989898]">Status</th>
                        <th className="font-medium text-[#989898]">Action</th>
                      </tr>
                    </thead>
                  </table>

                  <div className="tbody overflow-y-scroll h-[8rem] mt-[10px]">
                    <table className="text-left w-full">
                      <tbody>
                        {selectedInvoice.invoice_items.map((item, index) => (
                          <tr key={index} className="h-[50px] font-medium">
                            <td className="w-[16rem] text-[14px]">{item.product.productName}</td>
                            <td className="w-[13rem] text-[12px]">{item.quantity}</td>
                            <td className="w-[12rem] text-[12px]">{item.product.quantity > 0 ? 'Available' : 'Out of Stock'}</td>
                            <td className={`w-[8rem] text-[12px] ${item.product.status ? "text-green-500" : "text-red-500"}`}>
                              {item.product.status ? 'Ready' : 'Not Available'}
                            </td>
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

                  <div className="sum-total mt-[25px]">
                    <h2 className="font-medium text-[20px]">Total: {formatRupiah(selectedInvoice.total_price)}</h2>
                  </div>
                </div>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            {error && <div className="error-message text-red-500 mb-2">{error}</div>}
            <Button color="danger" variant="light" onClick={handleReject} disabled={loading}>
              Reject
            </Button>
            <Button color="primary" onClick={handleApprove} disabled={loading}>
              Approve
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OrderDetailsOperator;
