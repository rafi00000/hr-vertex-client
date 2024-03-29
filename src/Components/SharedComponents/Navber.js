"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import Button from "@/Components/ClintSideComponents/Button";
import { coreContext } from "@/provider/AuthContext";

const Navber = () => {
  const { user, logOut } = useContext(coreContext);
  // console.log(user?.displayName)
  const [show, setshow] = useState(false);

  const showmenu = () => {
    setshow(!show);
  };
  // console.log(show);
  return (
    <div className=" border-t text-black-500 py-2 max-w-[1366px] mx-auto relative px-5 shadow-2xl">
      <div
        id="meinmenu"
        className={`transition-all overflow-hidden ${
          show
            ? "flex flex-col justify-center items-start opacity-100 h-auto w-64 p-4 shadow-2xl rounded-lg bg-emerald-500 text-black"
            : "w-0 h-0 opacity-0"
        } md:h-auto md:w-auto opacity-100 md:flex md:justify-between md:items-center py-2 `}
      >
        <span className="font-bold text-4xl text-emerald-500">hr-vertex</span>
        <div
          className={`uppercase ${
            show ? "flex-col justify-center items-start" : "flex-row"
          } flex md:justify-center md:items-center gap-2`}
        >
          <Link className="hover:scale-105 active:scale-95" href="/">
            home
          </Link>
          <Link className="hover:scale-105 active:scale-95" href="/about">
            about
          </Link>
          <Link className="hover:scale-105 active:scale-95" href="/contact">
            contact
          </Link>
          {
           user && <Link className="hover:scale-105 active:scale-95" href="/dashboard">
            dashboard
          </Link>
          }
          
        </div>
        <div className="flex justify-end items-center gap-2">
          {user?.displayName ? (
            <>
              <span>{user?.displayName}</span>
              <Button handeler={logOut} text="sign out" />
            </>
          ) : (
            <Link href="/login">
              <Button text={"SING IN"} />
            </Link>
          )}
        </div>
      </div>
      <span
        className={`md:hidden flex justify-between items-center ml-auto absolute w-full top-3 `}
      >
        <span
          className={`font-bold text-4xl ${
            show ? "h-0 w-0" : "h-auto w-auto"
          } overflow-hidden`}
        >
          hr-vertex
        </span>
        <span className={`${show ? "rotate-90" : "rotate-0"} transition-all`}>
          <Button
            text={<IoMenuSharp />}
            handeler={showmenu}
            textcolor="text-emerald-500"
            background="bg-transparent"
            textsize="text-3xl"
          />
        </span>
      </span>
    </div>
  );
};

export default Navber;
