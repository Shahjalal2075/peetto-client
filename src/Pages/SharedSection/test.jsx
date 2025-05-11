import { useState } from "react";

const CategoryDropdown = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <div className="bg-[#ffeeee] py-3 relative">
            <div className="container mx-auto flex justify-start gap-8 text-sm font-medium relative">
                {/* Food */}
                <div className="relative">
                    <div
                        onClick={() => toggleDropdown("food")}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <img src="assets/food.png" alt="Food" className="w-6 h-6" />
                        প্রাণীর খাবার
                    </div>
                    {activeDropdown === "food" && (
                        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-3 z-10">
                            <p className="py-1 cursor-pointer">Dry Food</p>
                            <p className="py-1 cursor-pointer">Wet Food</p>
                            <p className="py-1 cursor-pointer">Treats</p>
                        </div>
                    )}
                </div>

                {/* Grooming */}
                <div className="relative">
                    <div
                        onClick={() => toggleDropdown("grooming")}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <img src="assets/nes.png" alt="Grooming" className="w-6 h-6" />
                        প্রাণীর গ্রুমিংসপ
                    </div>
                    {activeDropdown === "grooming" && (
                        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-3 z-10">
                            <p className="py-1 cursor-pointer">Shampoo</p>
                            <p className="py-1 cursor-pointer">Brush</p>
                            <p className="py-1 cursor-pointer">Nail Clipper</p>
                        </div>
                    )}
                </div>

                {/* Medicine */}
                <div className="relative">
                    <div
                        onClick={() => toggleDropdown("medicine")}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <img src="assets/med.png" alt="Medicine" className="w-6 h-6" />
                        প্রাণীর ওষুধ
                    </div>
                    {activeDropdown === "medicine" && (
                        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-3 z-10">
                            <p className="py-1 cursor-pointer">Deworming</p>
                            <p className="py-1 cursor-pointer">Pain Relief</p>
                            <p className="py-1 cursor-pointer">Vitamins</p>
                        </div>
                    )}
                </div>

                {/* Vet */}
                <div className="relative">
                    <div
                        onClick={() => toggleDropdown("vet")}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <img src="assets/doc.png" alt="Vet" className="w-6 h-6" />
                        ভেটেরিনারি ডাক্তার
                    </div>
                    {activeDropdown === "vet" && (
                        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md p-3 z-10">
                            <p className="py-1 cursor-pointer">Online Consultation</p>
                            <p className="py-1 cursor-pointer">Clinic Booking</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryDropdown;
