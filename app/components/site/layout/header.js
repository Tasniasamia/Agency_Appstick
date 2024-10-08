"use client";
import { Dropdown } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return "light"; // Default theme if none is set in localStorage
    }
  });

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="dark:bg-[#0F172A] h-[120px] flex flex-col items-center">
      <div className="container flex justify-between items-center ">
        <Image
          src="/images/icon/logo-light.png"
          alt="logo"
          width={167.67}
          height={43.67}
          className="h-[43.67px] w-[167.67px] object-fill dark:hidden block"
        />
        <Image
          src="/images/icon/logo-dark.png"
          alt="logo"
          width={167.67}
          height={43.67}
          className="h-[43.67px] w-[167.67px] object-fill dark:block hidden"
        />
        <div className="lg:flex hidden gap-[60px] items-center">
          <Dropdown
            trigger="hover"
            overlay={
              <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
                <>
                  <div
                    className={`py-2 flex items-center gap-2 group ${
                      pathname == "/"
                        ? "bg-primary text-white"
                        : "text-black bg-white"
                    } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                  >
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/"}
                    >
                      Home 1
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-2"}
                    >
                      Home 2
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-3"}
                    >
                      Home 3
                    </Link>
                  </div>
                </>
              </div>
            }
          >
            <div className="flex h-full items-center gap-x-2 cursor-pointer group">
              <GoDotFill className="text-primary !text-[14px]" />

              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Home
              </p>
              <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
            </div>
          </Dropdown>
          <Dropdown
            trigger="hover"
            overlay={
              <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
                <>
                  <div
                    className={`py-2 flex items-center gap-2 group ${
                      pathname == "/"
                        ? "bg-primary text-white"
                        : "text-black bg-white"
                    } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                  >
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/"}
                    >
                      Home 1
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-2"}
                    >
                      Home 2
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-3"}
                    >
                      Home 3
                    </Link>
                  </div>
                </>
              </div>
            }
          >
            <div className="flex h-full items-center gap-x-2 cursor-pointer group">
              <GoDotFill className="text-primary !text-[14px]" />

              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Page
              </p>
              <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
            </div>
          </Dropdown>
          <Dropdown
            trigger="hover"
            overlay={
              <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
                <>
                  <div
                    className={`py-2 flex items-center gap-2 group ${
                      pathname == "/"
                        ? "bg-primary text-white"
                        : "text-black bg-white"
                    } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                  >
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/"}
                    >
                      Home 1
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-2"}
                    >
                      Home 2
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-3"}
                    >
                      Home 3
                    </Link>
                  </div>
                </>
              </div>
            }
          >
            <div className="flex h-full items-center gap-x-2 cursor-pointer group">
              <GoDotFill className="text-primary !text-[14px]" />

              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Service
              </p>
              <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
            </div>
          </Dropdown>
          <Dropdown
            trigger="hover"
            overlay={
              <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
                <>
                  <div
                    className={`py-2 flex items-center gap-2 group ${
                      pathname == "/"
                        ? "bg-primary text-white"
                        : "text-black bg-white"
                    } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                  >
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/"}
                    >
                      Home 1
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-2"}
                    >
                      Home 2
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-3"}
                    >
                      Home 3
                    </Link>
                  </div>
                </>
              </div>
            }
          >
            <div className="flex h-full items-center gap-x-2 cursor-pointer group">
              <GoDotFill className="text-primary !text-[14px]" />

              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Portfolio
              </p>
              <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
            </div>
          </Dropdown>
          <Dropdown
            trigger="hover"
            overlay={
              <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
                <>
                  <div
                    className={`py-2 flex items-center gap-2 group ${
                      pathname == "/"
                        ? "bg-primary text-white"
                        : "text-black bg-white"
                    } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                  >
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/"}
                    >
                      Home 1
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-2"}
                    >
                      Home 2
                    </Link>
                  </div>
                  <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                    {/* {item?.icon} */}
                    <Link
                      className="group-hover:text-white transition-all duration-200"
                      href={"/home-3"}
                    >
                      Home 3
                    </Link>
                  </div>
                </>
              </div>
            }
          >
            <div className="flex h-full items-center gap-x-2 cursor-pointer group">
              <GoDotFill className="text-primary !text-[14px]" />

              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Blog
              </p>
              <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
            </div>
          </Dropdown>
          <div className={`nav-link `} onClick={handleToggle}>
            <div>
              {theme === "light" ? (
                <MdDarkMode
                  className="text-black cursor-pointer"
                  title="dark mode"
                />
              ) : (
                <MdLightMode
                  className="text-white cursor-pointer"
                  title={"light mode"}
                />
              )}
            </div>
          </div>
          <button className="bg-primary px-[28px] py-[12px]  text-white cursor-pointer">
            Log In
          </button>
        </div>
        <div className="lg:hidden block">
          {!open ? (
            <FaBars
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl dark:text-white text-black cursor-pointer"
            />
          ) : (
            <IoMdClose
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl dark:text-white text-black cursor-pointer"
            />
          )}
        </div>
      </div>
      {/* For mobile screen */}
      <div
        className={`absolute dark:bg-[#0F172A] bg-white bg-opacity-[92%] z-50 top-[120px] left-0 w-[100%] lg:hidden  pt-5 pb-10 flex flex-col px-5 gap-5 ${
          open ? "flex" : "hidden"
        } transition-all duration-300`}
        style={{ filter: "drop-shadow(0px  20px 10px rgba(0, 0, 0, 0.20))" }}
      >
        <Dropdown
          trigger="hover"
          overlay={
            <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
              <>
                <div
                  className={`py-2 flex items-center gap-2 group ${
                    pathname == "/"
                      ? "bg-primary text-white"
                      : "text-black bg-white"
                  } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                >
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/"}
                  >
                    Home 1
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-2"}
                  >
                    Home 2
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-3"}
                  >
                    Home 3
                  </Link>
                </div>
              </>
            </div>
          }
        >
          <div className="flex h-full items-center justify-between cursor-pointer group">
            <div className="flex gap-x-2 items-center">
              <GoDotFill className="text-primary !text-[14px]" />
              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Home
              </p>
            </div>
            <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
          </div>
        </Dropdown>
        <Dropdown
          trigger="hover"
          overlay={
            <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
              <>
                <div
                  className={`py-2 flex items-center gap-2 group ${
                    pathname == "/"
                      ? "bg-primary text-white"
                      : "text-black bg-white"
                  } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                >
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/"}
                  >
                    Home 1
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-2"}
                  >
                    Home 2
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-3"}
                  >
                    Home 3
                  </Link>
                </div>
              </>
            </div>
          }
        >
          <div className="flex h-full items-center justify-between cursor-pointer group">
            <div className="flex gap-x-2 items-center">
              <GoDotFill className="text-primary !text-[14px]" />
              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Page
              </p>
            </div>

            <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
          </div>
        </Dropdown>
        <Dropdown
          trigger="hover"
          overlay={
            <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
              <>
                <div
                  className={`py-2 flex items-center gap-2 group ${
                    pathname == "/"
                      ? "bg-primary text-white"
                      : "text-black bg-white"
                  } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                >
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/"}
                  >
                    Home 1
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-2"}
                  >
                    Home 2
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-3"}
                  >
                    Home 3
                  </Link>
                </div>
              </>
            </div>
          }
        >
          <div className="flex h-full items-center justify-between cursor-pointer group">
            <div className="flex gap-x-2 items-center">
              <GoDotFill className="text-primary !text-[14px]" />

              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Service
              </p>
            </div>
            <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
          </div>
        </Dropdown>
        <Dropdown
          trigger="hover"
          overlay={
            <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
              <>
                <div
                  className={`py-2 flex items-center gap-2 group ${
                    pathname == "/"
                      ? "bg-primary text-white"
                      : "text-black bg-white"
                  } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                >
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/"}
                  >
                    Home 1
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-2"}
                  >
                    Home 2
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-3"}
                  >
                    Home 3
                  </Link>
                </div>
              </>
            </div>
          }
        >
          <div className="flex h-full items-center justify-between cursor-pointer group">
            <div className="flex gap-x-2 items-center">
              <GoDotFill className="text-primary !text-[14px]" />

              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Portfolio
              </p>
            </div>
            <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
          </div>
        </Dropdown>
        <Dropdown
          trigger="hover"
          overlay={
            <div className="rounded-sm bg-white relative top-3  shadow-sm w-fit">
              <>
                <div
                  className={`py-2 flex items-center gap-2 group ${
                    pathname == "/"
                      ? "bg-primary text-white"
                      : "text-black bg-white"
                  } hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200`}
                >
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/"}
                  >
                    Home 1
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-2"}
                  >
                    Home 2
                  </Link>
                </div>
                <div className="py-2 flex items-center gap-2 group hover:bg-primary hover:text-white rounded-sm text-base text-secondary px-4 transition-all duration-200">
                  {/* {item?.icon} */}
                  <Link
                    className="group-hover:text-white transition-all duration-200"
                    href={"/home-3"}
                  >
                    Home 3
                  </Link>
                </div>
              </>
            </div>
          }
        >
          <div className="flex h-full items-center justify-between cursor-pointer group">
            <div className="flex gap-x-2 items-center">
              <GoDotFill className="text-primary !text-[14px]" />
              <p className="nav-link dark:text-white !text-[18px] text-[#02050A] group-hover:text-primary duration-200 transition-all">
                Blog
              </p>
            </div>
            <FaPlus className="font-bold dark:text-white text-[#02050A] !text-[12px] group-hover:text-primary duration-300 transition-all" />
          </div>
        </Dropdown>
        <div className={`nav-link `} onClick={handleToggle}>
          <div>
            {theme === "light" ? (
              <MdDarkMode
                className="text-black cursor-pointer"
                title="dark mode"
              />
            ) : (
              <MdLightMode
                className="text-white cursor-pointer"
                title={"light mode"}
              />
            )}
          </div>
        </div>
        <button className="cursor-pointer bg-primary text-white px-[32px] py-[16px] hover:scale-105 duration-300 rounded-[4px] transition-all">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Header;
