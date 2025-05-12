import React from 'react';
import { Link } from 'react-router-dom';

const doctors = [
    {
        name: 'ড. আফিফুর রাশি',
        image: 'assets/product/doctor1.png',
    },
    {
        name: 'ড. নুসরাত খানম',
        image: 'assets/product/doctor2.png',
    },
    {
        name: 'ড. নিধি মোহাম্মদ আব্দুল',
        image: 'assets/product/doctor3.png',
    },
    {
        name: 'ড. মো. নজরুল ইসলাম',
        image: 'assets/product/doctor4.png',
    },
];

const DoctorSwepeer = () => {
    return (
        <div className="flex justify-between items-center py-10">
            {doctors.map((doctor, index) => (
                <div key={index} className="text-center">
                    <div className="w-60 h-60 mx-auto rounded-full overflow-hidden mb-6 border border-gray-200">
                        <img src={doctor.image} alt={doctor.name} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="font-semibold text-[#000] mb-8">{doctor.name}</h3>
                    <Link className="border border-[#FF5653] text-[#FF5653] hover:bg-[#FF5653] hover:text-[#fff] font-bold px-4 py-2 pt-3 rounded-full bg-[#fff]">
                        অ্যাপয়েন্টমেন্ট বুক করুন
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default DoctorSwepeer;
