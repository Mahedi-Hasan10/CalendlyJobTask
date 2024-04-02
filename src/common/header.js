import MyButton from "../components/myButton";
import { Dropdown, Drawer } from "antd";
import { useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-between lg:p-5 p-2 flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900">
          <img
            src="/cal.png"
            className="md:h-[40px] h-[30px] md:w-[50px] w-[40px] object-fill"
            alt="logo"
          ></img>
          <span className="ml-1 md:text-xl text-md">Calendly</span>
        </a>
        <nav className="md:ml-auto md:mr-auto lg:flex hidden flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-black text-bold">
            Individuals
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-black text-bold">
            Teams
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-black text-bold">
            Enterprise
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-black text-bold">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <button className="flex gap-1 items-center">
                Products <IoIosArrowDown />{" "}
              </button>
            </Dropdown>
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-black text-bold">
            Pricing
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-black text-bold">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <button className="flex gap-1 items-center hover:text-opacity-70 cursor-pointer text-black text-bold">
                Resources <IoIosArrowDown />{" "}
              </button>
            </Dropdown>
          </a>
        </nav>
        <div className="flex items-center lg:gap-4 gap-3">
          <button className="hover:text-opacity-70 cursor-pointer text-black lg:text-lg text-base text-bold">
            Log In
          </button>
          <MyButton title="Get Started" />
          <FaBars
            onClick={showDrawer}
            className="text-xl lg:hidden text-textGray cursor-pointer"
          />
        </div>
      </div>
      <Drawer
        closeIcon={false}
        placement={"left"}
        onClose={onClose}
        open={open}
        className="lg:!hidden !text-white !bg-black"
      >
        <div className="w-full flex flex-col gap-5 pb-2 border-b border-gray-600 ">
          <div className=" w-full flex items-center justify-between ">
            <a className="flex title-font font-medium items-center text-white">
              <img
                src="/cal.png"
                className="md:h-[40px] h-[30px] md:w-[50px] w-[40px] object-fill"
                alt="logo"
              ></img>
              <span className="ml-1 md:text-xl text-md">Calendly</span>
            </a>
            <IoMdClose onClick={onClose} className="text-2xl cursor-pointer" />
          </div>
        </div>
        <nav className="flex flex-col gap-6 mt-4">
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-white text-bold">
            Individuals
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-white text-bold">
            Teams
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-white text-bold">
            Enterprise
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-white text-bold">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <button className="flex gap-1 items-center">
                Products <IoIosArrowDown />{" "}
              </button>
            </Dropdown>
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-white text-bold">
            Pricing
          </a>
          <a className="mr-5 hover:text-opacity-70 cursor-pointer text-white text-bold">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <button className="flex gap-1 items-center hover:text-opacity-70 cursor-pointer text-white text-bold">
                Resources <IoIosArrowDown />{" "}
              </button>
            </Dropdown>
          </a>
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
