import { useState } from "react";
import { FaChevronDown, FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaUser, FaWhatsapp } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            console.log("Search Term:", searchTerm);
        }
    };

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const handleWtsp = () => {

    }

    const handleHome = () => {

    }

    return (
        <div className="bg-[#fff]">
            <div className="container mx-auto flex justify-between items-center py-6">
                <p className="text-base font-medium text-[#565656] font-julee">পোষা প্রাণীর চিকিৎসক, খাবার, ওষুধ ও অ্যাক্সেসরিজ – সব এক জায়গায়!</p>
                <button className="flex justify-center items-center gap-2 text-sm bg-[#325863] text-[#fff] font-medium px-5 py-2 rounded-full font-outfit cursor-pointer" onClick={handleWtsp}>
                    <FaWhatsapp />
                    WhatsApp-এ অর্ডার করুন
                </button>
            </div>

            {/* Search Bar */}
            <div className="bg-[url('/assets/search_bg.png')] bg-cover bg-center py-6">
                <div className="container mx-auto flex justify-between items-center">

                    <img onClick={handleHome} className="w-28 cursor-pointer" src="assets/logo.png" alt="" />

                    <div className="relative w-[50%]">
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="খাদ্য, ওষুধ, ডাক্তার এবং আরও অনেক কিছু খুঁজুন..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full bg-[#f6f6f6] pr-4 pl-10 py-2 rounded-full outline-none text-sm font-outfit"
                        />
                    </div>

                    <div className="flex items-center gap-6 text-white text-base font-medium font-inter">
                        <button className="flex justify-center items-center gap-2 cursor-pointer">
                            <FiShoppingCart />
                            ক্রয়ের ঝুঁড়ি
                        </button>
                        <button className="flex justify-center items-center gap-2 cursor-pointer">
                            <FaRegUser />
                            অ্যাকাউন্ট
                        </button>
                    </div>
                </div>
            </div>

            {/* Navbar */}

            <div className="bg-[#fff2f2] relative my-6">
                <div className="container mx-auto flex justify-center items-center gap-8 text-sm font-medium relative font-kdam">
                    <div className="relative">
                        <div
                            onClick={() => toggleDropdown("food")}
                            className="flex items-center gap-2 cursor-pointer text-base font-medium"
                        >
                            <img src="assets/food.png" alt="Food" className="w-12 h-12" />
                            প্রাণীর খাবার
                            <FaChevronDown className="w-[10px]" />
                        </div>
                        {activeDropdown === "food" && (
                            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-3 z-10">
                                <p className="py-1 cursor-pointer">A1</p>
                                <p className="py-1 cursor-pointer">A2</p>
                                <p className="py-1 cursor-pointer">A3</p>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <div
                            onClick={() => toggleDropdown("grooming")}
                            className="flex items-center gap-2 cursor-pointer font-medium text-base"
                        >
                            <img src="assets/nes.png" alt="Grooming" className="w-12 h-12" />
                            প্রাণীর জিনিসপত্র
                            <FaChevronDown className="w-[10px]" />
                        </div>
                        {activeDropdown === "grooming" && (
                            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-3 z-10">
                                <p className="py-1 cursor-pointer">B1</p>
                                <p className="py-1 cursor-pointer">B2</p>
                                <p className="py-1 cursor-pointer">B3</p>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <div
                            onClick={() => toggleDropdown("medicine")}
                            className="flex items-center gap-2 cursor-pointer text-base font-medium"
                        >
                            <img src="assets/med.png" alt="Medicine" className="w-12 h-12" />
                            প্রাণীর ওষুধ
                            <FaChevronDown className="w-[10px]" />
                        </div>
                        {activeDropdown === "medicine" && (
                            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-3 z-10">
                                <p className="py-1 cursor-pointer">C1</p>
                                <p className="py-1 cursor-pointer">C2</p>
                                <p className="py-1 cursor-pointer">C3</p>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <div
                            onClick={() => toggleDropdown("vet")}
                            className="flex items-center gap-2 cursor-pointer text-base font-medium"
                        >
                            <img src="assets/doc.png" alt="Vet" className="w-12 h-12" />
                            ভেটেরিনারি ডাক্তার
                            <FaChevronDown className="w-[10px]" />
                        </div>
                        {activeDropdown === "vet" && (
                            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-3 z-10">
                                <p className="py-1 cursor-pointer">D1</p>
                                <p className="py-1 cursor-pointer">D2</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;