import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Subscriber = () => {
    const [petType, setPetType] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation (optional)
        if (!petType || !email) {
            alert('দয়া করে সব ফিল্ড পূরণ করুন।');
            return;
        }

        // Console log the form data
        console.log('📝 সাবস্ক্রিপশন ডিটেইলস:', {
            petType,
            email,
        });

        // Clear fields after submission (optional)
        setPetType('');
        setEmail('');
    };

    return (
        <div className="bg-[#ff5e5b]">
            <div className="container mx-auto py-16 ">
                <h2 className="text-white text-2xl md:text-3xl font-extrabold text-start mb-8">
                    ব্যক্তিগত অফার, ছাড় এবং কুপনের সুযোগ হাতছাড়া করবেন না!
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mx-auto"
                >
                    {/* Dropdown */}
                    <div className="relative w-full md:w-4/12">
                        <select
                            value={petType}
                            onChange={(e) => setPetType(e.target.value)}
                            className="w-full appearance-none px-5 py-5 rounded-xl bg-white text-black text-sm font-medium border-none focus:outline-none focus:ring-0"
                        >
                            <option value="">পোষা প্রাণীর ধরন নির্বাচন করুন</option>
                            <option value="কুকুর">কুকুর</option>
                            <option value="বিড়াল">বিড়াল</option>
                            <option value="পাখি">পাখি</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500 text-sm">
                            <FaChevronDown />
                        </div>
                    </div>

                    {/* Email input */}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ইমেইল ঠিকানা"
                        className="w-full md:w-5/12 px-5 py-5 rounded-xl bg-[#fff] text-[#000] text-base font-medium border-none focus:outline-none focus:ring-0"
                    />

                    {/* Subscribe button */}
                    <button
                        type="submit"
                        className="bg-[#325863] w-full md:w-3/12 hover:bg-[#325863] text-[#fff] font-semibold px-6 py-5 rounded-full focus:outline-none focus:ring-0 cursor-pointer"
                    >
                        সাবস্ক্রাইব করুন
                    </button>
                </form>


            </div>
        </div>
    );
};

export default Subscriber;
