"use client";

import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "../../components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleScrollViewSyaratKetentuan = () => {
    const sectionSyaratKetentuan = document.getElementById('sectionSyaratKetentuanID')
    sectionSyaratKetentuan.scrollIntoView({behavior:'smooth'})
  }
  const handleScrollViewSektorIndustri = () => {
    const sectionSektorIndustri = document.getElementById('sectionSektorIndustriID')
    sectionSektorIndustri.scrollIntoView({behavior:'smooth'})
  }
  const handleScrollViewMitraMagang = () => {
    const sectionMitraMagang = document.getElementById('sectionMitraMagangID')
    sectionMitraMagang.scrollIntoView({behavior:'smooth'})
  }

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/" className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                Intersight
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning">
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <button onClick={handleScrollViewSyaratKetentuan} className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold border-0">Syarat Ketentuan</button>
              </li>
              <li className="flex items-center">
                <button onClick={handleScrollViewSektorIndustri} className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">Sektor Industri</button>
              </li>
              <li className="flex items-center">
                <button onClick={handleScrollViewMitraMagang} className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">Mitra Magang</button>
              </li>
              <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button">
                  <i className="fas fa-user"></i> Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
