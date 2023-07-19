import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";


export default function CardMagang() {
    return (
        <>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                    <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                            <polygon
                                points="-30,95 583,95 583,65"
                                className="text-lightBlue-500 fill-current"
                            ></polygon>
                        </svg>
                        <div className="flex space-x-4">
                            <h4 className="text-xl font-bold text-white">Nama Perusahaan</h4>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Web Developer</span>
                        </div>
                        <p className="text-md font-light mt-2 text-white">
                            Deskripsi perusahaan Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.
                        </p>
                        <div className="mt-8 border-none">
                            <Link
                                href={"https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"}
                                target="_blank"
                                className="get-started text-white font-bold px-2 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-400
                                                active:bg-gray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                                Pilih Sekarang
                            </Link>
                        </div>
                    </blockquote>
                </div>
            </div>
        </>
    )
}

