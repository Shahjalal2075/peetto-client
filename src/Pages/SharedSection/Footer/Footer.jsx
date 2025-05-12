import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-16">
                <div className="">
                    <img className="w-28 cursor-pointer" src="assets/logo-b.png" alt="" />
                    <p className="flex items-start justify-start text-[#000] gap-2 text-base mt-6">
                        <IoLocationOutline className="text-[#FF5653] text-xl mt-1" />
                        শেখ হাসিনা সফটওয়্যার টেকনোলজি পার্ক, যশোর
                    </p>
                </div>
                <div className="">
                    <h3 className="text-xl font-semibold mb-3 text-[#000]">আমাদের পণ্যমূহ</h3>
                    <div className="text-[#565454] text-base font-medium flex flex-col gap-2">
                        <Link className="hover:text-[#ff5e5b]">প্রাণীর খাবার</Link>
                        <Link className="hover:text-[#ff5e5b]">প্রাণীর এক্সেসরিজ</Link>
                        <Link className="hover:text-[#ff5e5b]">প্রাণীর ওষুধ</Link>
                        <Link className="hover:text-[#ff5e5b]">ভেটেরিনারি ডাক্তার</Link>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl font-semibold mb-3 text-[#000]">সুবিধাসমূহ</h3>
                    <div className="text-[#565454] text-base font-medium flex flex-col gap-2 ">
                        <Link className="hover:text-[#ff5e5b]">লয়ালটি প্রোগ্রাম</Link>
                        <Link className="hover:text-[#ff5e5b]">বন্ধুকে রেফার করুন</Link>
                        <Link className="hover:text-[#ff5e5b]">প্রাণীর ওষুধ</Link>
                        <Link className="hover:text-[#ff5e5b]">পিট্টো রিপিট</Link>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl font-semibold mb-3">আমাদের অনুসরণ করুন</h3>
                    <div className="flex gap-4 text-xl">
                        <Link className="border border-[#555] p-2 rounded-full text-[#555] hover:text-[#ff5e5b] hover:border-[#ff5e5b]"><FaFacebookF className="text-sm" /></Link>
                        <Link className="border border-[#555] p-2 rounded-full text-[#555] hover:text-[#ff5e5b] hover:border-[#ff5e5b]"><FaInstagram className="text-sm" /></Link>
                        <Link className="border border-[#555] p-2 rounded-full text-[#555] hover:text-[#ff5e5b] hover:border-[#ff5e5b]"><FaLinkedinIn className="text-sm" /></Link>
                        <Link className="border border-[#555] p-2 rounded-full text-[#555] hover:text-[#ff5e5b] hover:border-[#ff5e5b]"><FaYoutube className="text-sm" /></Link>
                    </div>
                </div>
            </div>
            {/* Payment Methods Section */}
            <div className="pt-10 pb-6">
                <img src="assets/banner/payment-banner.png" alt="" />
            </div>

            <div className="text-center text-base text-[#000] border-2 border-[#EDEDED] border-x-0 border-b-0 pt-8">
                <p><strong>Peetto.Com© 2025</strong> All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
