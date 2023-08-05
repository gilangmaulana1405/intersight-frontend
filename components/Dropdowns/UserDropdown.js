import {React,useState, createRef } from "react";
import { createPopper } from "@popperjs/core";
import Link from "next/link";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <Link
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}>
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/team-1-800x800.jpg"
            />
          </span>
        </div>
      </Link>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }>
        <Link
          href="/admin/profile"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }>
          Profile
        </Link>
        <Link
          href="/admin/settings"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }>
          Settings
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <Link
          href="/logout"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }>
          Logout
        </Link>
      </div>
    </>
  );
};

export default UserDropdown;
