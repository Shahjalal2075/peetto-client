import { useEffect, useState, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

// Sample images
const banners = [
    "/assets/banner/banner1.png",
    "/assets/banner/banner2.jpg",
    "/assets/banner/banner1.png",
    "/assets/banner/banner2.jpg",
];

const BannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const timeoutRef = useRef(null);

    const delay = 3000; // 5 seconds

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        if (isPlaying) {
            timeoutRef.current = setTimeout(() => {
                setCurrentSlide((prevIndex) =>
                    prevIndex === banners.length - 1 ? 0 : prevIndex + 1
                );
            }, delay);
        }

        return () => resetTimeout();
    }, [currentSlide, isPlaying]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <div className="container mx-auto py-6 relative rounded-xl overflow-hidden">
            <img
                src={banners[currentSlide]}
                alt={`Slide ${currentSlide}`}
                className="w-full h-[50vh] rounded-xl transition-all duration-700 ease-in-out"
            />

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">

                <button
                    onClick={togglePlay}
                    className="mr-4 text-white bg-[#c8102e] p-1 rounded-full text-sm"
                >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                {banners.map((_, index) => (
                    <div
                        key={index}
                        className="w-8 h-1 rounded-full overflow-hidden bg-gray-300"
                    >
                        <div
                            className={`h-full bg-[#c8102e] transition-all duration-500 ${index === currentSlide && isPlaying ? "w-full" : "w-0"
                                }`}
                        />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default BannerSlider;
