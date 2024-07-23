import { IconButton, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Alert, Input, Drawer, Card } from "@material-tailwind/react";
import React from "react";
import { PowerIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const SidebarUser = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="body-sidebar">
      <Card color="transparent" shadow={false} className="min-h-screen w-full p-4 hidden lg:flex bg-white rounded-none">
        <div className="mb-2 flex items-center gap-4 p-4">
          <Typography variant="h5" className="text-[35px] font-semibold" color="blue-gray">
            <span className="text-[#D7904D]">My</span>Invento
          </Typography>
        </div>
        <List>
          <Accordion>
            <ListItem className="p-0" selected={open === 1} onClick={() => navigate("/mainuser")}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#D7904D]">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal" onClick={() => navigate("/mainuser")}>
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
          </Accordion>
          <Accordion>
            <ListItem className="p-0" selected={open === 2} onClick={() => navigate("/cartuser")}>
              <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#D7904D]">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Cart
                </Typography>
                <ListItemSuffix>
                  <Chip value="3" size="sm" variant="ghost" color="blue-gray" className="rounded-full bg-transparent border-2 border-[#D7904D] text-[#D7904D]" />
                </ListItemSuffix>
              </AccordionHeader>
            </ListItem>
          </Accordion>
          <Accordion>
            <ListItem className="p-0" selected={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#D7904D]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Order
                </Typography>
                <ListItemSuffix>
                  <Chip value="1" size="sm" variant="ghost" color="blue-gray" className="rounded-full bg-transparent border-2 border-[#D7904D] text-[#D7904D]" />
                </ListItemSuffix>
              </AccordionHeader>
            </ListItem>
          </Accordion>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#D7904D]">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="w-[1.5rem] h-[1.5rem] text-[#D7904D]" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

      {/*mobile view*/}
      <IconButton className="ml-[15px] mt-[15px] lg:hidden" variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? <XMarkIcon className="h-8 w-8 stroke-2" /> : <Bars3Icon className="h-8 w-8 stroke-2" />}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card color="transparent" shadow={false} className="h-[calc(100vh-2rem)] w-full p-4">
          <div className="mb-2 flex items-center gap-4 p-4">
            <Typography variant="h5" className="text-[25px] font-semibold" color="blue-gray">
              <span className="text-[#D7904D]">My</span>Invento
            </Typography>
          </div>
          <List>
            <Accordion>
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#D7904D]">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <Accordion>
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#D7904D]">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Cart
                  </Typography>
                  <ListItemSuffix>
                    <Chip value="3" size="sm" variant="ghost" color="blue-gray" className="rounded-full bg-transparent border-2 border-[#D7904D] text-[#D7904D]" />
                  </ListItemSuffix>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <Accordion>
              <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#D7904D]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Order
                  </Typography>
                  <ListItemSuffix>
                    <Chip value="1" size="sm" variant="ghost" color="blue-gray" className="rounded-full bg-transparent border-2 border-[#D7904D] text-[#D7904D]" />
                  </ListItemSuffix>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#D7904D]">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="w-[1.5rem] h-[1.5rem] text-[#D7904D]" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </div>
  );
};

export default SidebarUser;
