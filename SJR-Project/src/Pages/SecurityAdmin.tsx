import SidebarAdmin from "../component/SidebarAdmin";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
const SecurityAdmin = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="body-main bg-[#F2F2F2] overflow-hidden">
      <div className="container-security flex flex-row min-h-screen">
        <div className="side-bar">
          <SidebarAdmin />
        </div>
        <div className="content-container flex flex-col ml-[35px] mt-[38px]">
          {/* header */}
          <div className="main-menu flex">
            <h2 className="font-bold text-[30px]">Security</h2>
          </div>

          <div className="operator-auth mt-[50px]">
            <h2 className="font-medium">Operator Authentication</h2>
            <h2 className="flex flex-row items-center mt-[30px]">
              Code : 2X56EHD{" "}
              <span className="ml-[10px]">
                <Button onPress={onOpen} className="bg-transparent" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </Button>
              </span>
            </h2>
          </div>

          <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Edit Operator Authentication</ModalHeader>
                  <ModalBody>
                    <h2>Current Code : 2X56EHD </h2>
                    <h2>Input New Code</h2>
                    <Input type="password" variant={"underlined"} label="New Code" />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Save
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SecurityAdmin;
