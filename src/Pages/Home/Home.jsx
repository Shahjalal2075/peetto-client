import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BannerSlider from '../SharedSection/BannerSlider/BannerSlider';
import ProductSwepeer from '../SharedSection/ProductSwepeer/ProductSwepeer';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import BlogSwepeer from '../SharedSection/BlogSwepeer/BlogSwepeer';
import Subscriber from '../SharedSection/Subscriber/Subscriber';
import Footer from '../SharedSection/Footer/Footer';
import DoctorSwepeer from '../SharedSection/DoctorSwepeer/DoctorSwepeer';

const Home = () => {

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const petFoods = [
        {
            id: 1,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/food (5).png",
            rating: 4.5,
            reviews: 38,
        },
        {
            id: 2,
            name: "Aumüller Ferret Cat Toy",
            price: 340,
            image: "assets/product/food (4).png",
            rating: 4.0,
            reviews: 8,
        },
        {
            id: 3,
            name: "Almo Nature 6 x 70g",
            price: 676,
            image: "assets/product/food (3).png",
            rating: 4.5,
            reviews: 8,
        },
        {
            id: 4,
            name: "Cosma Nature 6 x 70g",
            price: 800,
            image: "assets/product/food (2).png",
            rating: 5,
            reviews: 6,
        },
        {
            id: 5,
            name: "Gourmet Gold Pâté Recipes Saver ...",
            price: 890,
            image: "assets/product/food (1).png",
            rating: 4.5,
            reviews: 12,
        },
        {
            id: 6,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/food (5).png",
            rating: 4.5,
            reviews: 38,
        },
        {
            id: 7,
            name: "Aumüller Ferret Cat Toy",
            price: 340,
            image: "assets/product/food (4).png",
            rating: 4.0,
            reviews: 8,
        },
        {
            id: 8,
            name: "Almo Nature 6 x 70g",
            price: 676,
            image: "assets/product/food (3).png",
            rating: 4.5,
            reviews: 8,
        },
        {
            id: 9,
            name: "Cosma Nature 6 x 70g",
            price: 800,
            image: "assets/product/food (2).png",
            rating: 5,
            reviews: 6,
        },
        {
            id: 10,
            name: "Gourmet Gold Pâté Recipes Saver ...",
            price: 890,
            image: "assets/product/food (1).png",
            rating: 4.5,
            reviews: 12,
        },

    ];

    const petNess = [
        {
            id: 1,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/ness (1).png",
            rating: 4.5,
            reviews: 38,
        },
        {
            id: 2,
            name: "Trixie Easy Claw Pet Clippers",
            price: 340,
            image: "assets/product/ness (6).png",
            rating: 4.0,
            reviews: 8,
        },
        {
            id: 3,
            name: "Almo Nature 6 x 70g",
            price: 676,
            image: "assets/product/ness (5).png",
            rating: 4.5,
            reviews: 8,
        },
        {
            id: 4,
            name: "Cosma Nature 6 x 70g",
            price: 800,
            image: "assets/product/ness (4).png",
            rating: 5,
            reviews: 6,
        },
        {
            id: 5,
            name: "Gourmet Gold Pâté Recipes Saver ...",
            price: 890,
            image: "assets/product/ness (3).png",
            rating: 4.5,
            reviews: 12,
        },
        {
            id: 6,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/ness (2).png",
            rating: 4.5,
            reviews: 38,
        },
        {
            id: 7,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/ness (1).png",
            rating: 4.5,
            reviews: 38,
        },
        {
            id: 8,
            name: "Trixie Easy Claw Pet Clippers",
            price: 340,
            image: "assets/product/ness (6).png",
            rating: 4.0,
            reviews: 8,
        },
        {
            id: 9,
            name: "Almo Nature 6 x 70g",
            price: 676,
            image: "assets/product/ness (5).png",
            rating: 4.5,
            reviews: 8,
        },
        {
            id: 10,
            name: "Cosma Nature 6 x 70g",
            price: 800,
            image: "assets/product/ness (4).png",
            rating: 5,
            reviews: 6,
        },
        {
            id: 11,
            name: "Gourmet Gold Pâté Recipes Saver ...",
            price: 890,
            image: "assets/product/ness (3).png",
            rating: 4.5,
            reviews: 12,
        },
        {
            id: 12,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/ness (2).png",
            rating: 4.5,
            reviews: 38,
        },

    ];

    const petMedi = [
        {
            id: 2,
            name: "Trixie Easy Claw Pet Clippers",
            price: 340,
            image: "assets/product/medi (6).png",
            rating: 4.0,
            reviews: 8,
        },
        {
            id: 3,
            name: "Almo Nature 6 x 70g",
            price: 676,
            image: "assets/product/medi (5).png",
            rating: 4.5,
            reviews: 8,
        },
        {
            id: 4,
            name: "Cosma Nature 6 x 70g",
            price: 800,
            image: "assets/product/medi (4).png",
            rating: 5,
            reviews: 6,
        },
        {
            id: 5,
            name: "Gourmet Gold Pâté Recipes Saver ...",
            price: 890,
            image: "assets/product/medi (3).png",
            rating: 4.5,
            reviews: 12,
        },
        {
            id: 6,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/medi (2).png",
            rating: 4.5,
            reviews: 38,
        },
        {
            id: 7,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/medi (1).png",
            rating: 4.5,
            reviews: 38,
        },
        {
            id: 8,
            name: "Trixie Easy Claw Pet Clippers",
            price: 340,
            image: "assets/product/medi (6).png",
            rating: 4.0,
            reviews: 8,
        },
        {
            id: 9,
            name: "Almo Nature 6 x 70g",
            price: 676,
            image: "assets/product/medi (5).png",
            rating: 4.5,
            reviews: 8,
        },
        {
            id: 10,
            name: "Cosma Nature 6 x 70g",
            price: 800,
            image: "assets/product/medi (4).png",
            rating: 5,
            reviews: 6,
        },
        {
            id: 11,
            name: "Gourmet Gold Pâté Recipes Saver ...",
            price: 890,
            image: "assets/product/medi (3).png",
            rating: 4.5,
            reviews: 12,
        },
        {
            id: 12,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/medi (2).png",
            rating: 4.5,
            reviews: 38,
        },
        {
            id: 1,
            name: "Cat's Best Original Cat litter",
            price: 740,
            image: "assets/product/medi (1).png",
            rating: 4.5,
            reviews: 38,
        }

    ];

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4101d8]"></div>
            </div>
        );
    }

    return (
        <div className="bg-[#fff]">
            {/* Banner */}
            <BannerSlider />

            {/* Pranir Khabar */}
            <div className="bg-[#fff]">
                <div className="container mx-auto py-8">
                    <div className="flex justify-between items-center border border-[#EDEDED] border-x-0 border-t-0 pb-4">
                        <h2 className='font-kdam font-medium text-2xl text-[#000]'>প্রাণীর খাবার</h2>
                        <Link className='font-kdam font-medium text-base text-[#FF5653] flex justify-center items-center gap-1'>সব দেখুন <FaChevronRight /></Link>
                    </div>
                    <ProductSwepeer products={petFoods} />
                </div>
            </div>

            {/* Pranir Jinishpatro */}
            <div className="bg-[#fff8f8]">
                <div className="container mx-auto py-8">
                    <div className="flex justify-between items-center">
                        <h2 className='font-kdam font-medium text-2xl text-[#000]'>প্রাণীর জিনিসপত্র</h2>
                        <Link className='font-kdam font-medium text-base text-[#FF5653] flex justify-center items-center gap-1'>সব দেখুন <FaChevronRight /></Link>
                    </div>
                    <ProductSwepeer products={petNess} />
                </div>
            </div>

            {/* Biraler porichoi tag banner */}
            <div className="bg-[#fff] py-8">
                <div className="container mx-auto">
                    <img src="assets/banner/cat-tag.png" alt="" />
                </div>
            </div>

            {/* Vetenari Doctor */}
            <div className="bg-[#FFF]">
                <div className="container mx-auto py-8">
                    <div className="flex justify-between items-center border border-[#EDEDED] border-x-0 border-t-0 pb-4">
                        <h2 className='font-kdam font-medium text-2xl text-[#000]'>ভেটেরিনারি ডাক্তার</h2>
                        <Link className='font-kdam font-medium text-base text-[#FF5653] flex justify-center items-center gap-1'>সব দেখুন <FaChevronRight /></Link>
                    </div>
                    <DoctorSwepeer />
                </div>
            </div>

            {/* Vetenari Medicine */}
            <div className="bg-[#FFF0FD]">
                <div className="container mx-auto py-8">
                    <div className="flex justify-between items-center">
                        <h2 className='font-kdam font-medium text-2xl text-[#000]'>ভেটেরিনারি মেডিসিন</h2>
                        <Link className='font-kdam font-medium text-base text-[#FF5653] flex justify-center items-center gap-1'>সব দেখুন <FaChevronRight /></Link>
                    </div>
                    <ProductSwepeer products={petMedi} />
                </div>
            </div>

            {/* Posha Pranir Jibondhara Blog */}
            <div className="bg-[#fff]">
                <div className="container mx-auto py-8">
                    <div className="flex justify-between items-center">
                        <h2 className='font-kdam font-medium text-2xl text-[#000]'>পোষা প্রাণীর জীবনধারা</h2>
                        <Link className='font-kdam font-medium text-base text-[#FF5653] flex justify-center items-center gap-1'>সব দেখুন <FaChevronRight /></Link>
                    </div>
                    <BlogSwepeer />
                </div>
            </div>

            {/* Subscriber Section */}
            <div className="py-8">
                <Subscriber />
            </div>

            {/* Footer Section */}
            <div className="py-8">
                <Footer />
            </div>
        </div>
    );
};

export default Home;