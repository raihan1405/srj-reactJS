import SidebarUser from "../component/SidebarUser";
import { Menu, MenuHandler, Button, MenuList, MenuItem, Checkbox, Input } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, Typography, CardBody, Chip, CardFooter, Avatar, IconButton, Tooltip } from "@material-tailwind/react";

const TABLE_HEAD = ["Product Name", "Brand", "Category", "Price", "Status", "Quantity", ""];

const TABLE_ROWS = [
  {
    name: "Mikrotik RB951UI2ND",
    brand: "Mikrotik",
    category: "Router",
    price: "Rp.750.000/pcs",
    status: "ready",
    quantity: "1900",
  },
  {
    name: "Mikrotik RB951UI2ND",
    brand: "Mikrotik",
    category: "Router",
    price: "Rp.750.000/pcs",
    status: "ready",
    quantity: "1900",
  },
  {
    name: "Mikrotik RB951UI2ND",
    brand: "Mikrotik",
    category: "Router",
    price: "Rp.750.000/pcs",
    status: "soldout",
    quantity: "1900",
  },
  {
    name: "Mikrotik RB951UI2ND",
    brand: "Mikrotik",
    category: "Router",
    price: "Rp.750.000/pcs",
    status: "ready",
    quantity: "1900",
  },
  {
    name: "Mikrotik RB951UI2ND",
    brand: "Mikrotik",
    category: "Router",
    price: "Rp.750.000/pcs",
    status: "ready",
    quantity: "1900",
  },
  {
    name: "Mikrotik RB951UI2ND",
    brand: "Mikrotik",
    category: "Router",
    price: "Rp.750.000/pcs",
    status: "ready",
    quantity: "1900",
  },
];

const MainPageUser = () => {
  return (
    <div className="body-main bg-[#F2F2F2]">
      <div className="container-main flex flex-row min-h-screen">
        <div className="side-bar">
          <SidebarUser />
        </div>

        <div className="content-container flex flex-col ml-[35px] mt-[38px]">
          {/*header*/}
          <div className="main-menu flex">
            <h2 className="font-bold text-[30px]">Product</h2>
          </div>

          {/*search engine*/}
          <div className="search flex flex-row items-center gap-[80px] mt-[30px]">
            <div className="category">
              <Menu
                dismiss={{
                  itemPress: false,
                }}
              >
                <MenuHandler>
                  <Button className="bg-white px-[50px] py-[7px] text-black text-[14px] capitalize font-normal rounded-2xl">Category</Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="p-0">
                    <label htmlFor="item-1" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-1" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 1
                    </label>
                  </MenuItem>
                  <MenuItem className="p-0">
                    <label htmlFor="item-2" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-2" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 2
                    </label>
                  </MenuItem>
                  <MenuItem className="p-0">
                    <label htmlFor="item-3" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-3" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 3
                    </label>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="brand">
              <Menu
                dismiss={{
                  itemPress: false,
                }}
              >
                <MenuHandler>
                  <Button className="bg-white px-[60px] py-[7px] text-black text-[14px] capitalize font-normal rounded-2xl">Brand</Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="p-0">
                    <label htmlFor="item-1" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-1" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 1
                    </label>
                  </MenuItem>
                  <MenuItem className="p-0">
                    <label htmlFor="item-2" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-2" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 2
                    </label>
                  </MenuItem>
                  <MenuItem className="p-0">
                    <label htmlFor="item-3" className="flex cursor-pointer items-center gap-2 p-2">
                      <Checkbox ripple={false} id="item-3" containerProps={{ className: "p-0" }} className="hover:before:content-none" />
                      Menu Item 3
                    </label>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="searchbar">
              <Input
                label="Search product...."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                }
                className="bg-white border-none rounded-[200px] w-[400px] shadow-md text-black"
              />
            </div>
          </div>
          <div className="table-of-content mt-[10px]">
            <Card className="h-full w-[1200px] bg-transparent shadow-none">
              <CardBody className="px-0">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-y-none border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map(({ name, brand, category, price, status, quantity }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={name} className="overflow-y-scroll">
                          <td className={classes}>
                            <div className="flex items-center">
                              <Typography variant="small" color="blue-gray" className="font-bold">
                                {name}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {brand}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {category}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {price}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="w-max">
                              <Chip size="sm" variant="ghost" value={status} color={status === "ready" ? "green" : status === "seol" ? "red" : "red"} />
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {quantity}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Tooltip content="Add to cart">
                              <Button className="bg-[#D7904D]">Add</Button>
                            </Tooltip>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardBody>
              <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-0">
                <Button variant="outlined" size="sm">
                  Previous
                </Button>
                <div className="flex items-center gap-2">
                  <IconButton variant="outlined" size="sm">
                    1
                  </IconButton>
                  <IconButton variant="text" size="sm">
                    2
                  </IconButton>
                  <IconButton variant="text" size="sm">
                    3
                  </IconButton>
                  <IconButton variant="text" size="sm">
                    ...
                  </IconButton>
                  <IconButton variant="text" size="sm">
                    8
                  </IconButton>
                  <IconButton variant="text" size="sm">
                    9
                  </IconButton>
                  <IconButton variant="text" size="sm">
                    10
                  </IconButton>
                </div>
                <Button variant="outlined" size="sm">
                  Next
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageUser;
