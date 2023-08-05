"use client";
import React from "react";
import Link from "next/link";

// components

import Navbar from "../../components/Navbars/AuthNavbar.js";
import Footer from "../../components/Footers/Footer.js";
import CardMagang from "../../components/Cards/CardMagang.js";


export default function Magang() {
    return (
        <>
            <Navbar transparent />
            <main>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                        }}>
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Selamat Datang
                                    </h1>
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        Temukan tempat pilihan magang yang sesuai dengan keinginan ataupun minat dan bakat serta jurusanmu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16" style={{ transform: "translateZ(0)" }}>
                        {/* efek melengkung jumbotron */}
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Mitra Terbaik</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Divide details about your product or agency work into
                                            parts. A paragraph describing a feature will be enough.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Terpercaya</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Keep you user engaged by providing meaningful information.
                                            Remember that by this time, the user is curious.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Perusahaan Terverifikasi</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Write a few lines about each one. A paragraph describing a
                                            feature will be enough. Keep you user engaged!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                            <div className="w-full lg:w-full px-4 ml-auto mr-auto text-center mt-16">
                                <div className="pr-12">
                                    <h1 className="font-semibold text-3xl">Cari Tempat Magang</h1>
                                </div>
                            </div>
                        <div className="flex items-center border border-gray-400 rounded-lg p-4 mt-5">
                            <input type="search" className="w-full px-4 py-3 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari..." />
                            <button className="ml-2 bg-lightBlue-500 hover:bg-lightBlue-600 text-white rounded-md px-4 py-2 focus:outline-none">Cari</button>
                        </div>

                        <div className="flex flex-wrap items-center mt-16">
                            <CardMagang />
                            <CardMagang />
                            <CardMagang />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
