"use client";

import { useContext } from "react";

import { MyContext } from "@/context/MyContext";
 import {useStore} from "@/state-management/zustand/store"
import Link from "next/link";

function Navbar() {
    const [Mydata,setMydata] = useStore((state)=>[state.Mydata,state.setMydata])
    console.log("my data in navbar" , Mydata);
  const { data } = useContext(MyContext);

  return (
    <header
      className="bg-white py-2 border-b"
      style={{ height: "15vh", marginBottom: "18px" }}
    >
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">{data}</div>

          <div
            className="flex items-center space-x-2 ml-auto"
            style={{ height: "15vh" }}
          >
            <Link
              href="/about"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <i className="text-gray-400 w-5 fa fa-user"></i>
              <span className="inline ml-1">About</span>
            </Link>
          </div>
          <div
            className="flex items-center space-x-2 ml-auto"
            style={{ height: "15vh" }}
          >
            <Link
              href="/"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <i className="text-gray-400 w-5 fa fa-user"></i>
              <span className="inline ml-1">Home</span>
            </Link>
          </div>

          {/* <div className=" ml-2">
          <button
          type="button"
          className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
          >
          <span className="sr-only">Open menu</span>
          <i className="fa fa-bars fa-lg"></i>
          </button>
        </div> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
