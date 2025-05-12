import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductSwiper = ({ products }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative px-6 py-10">
            <button
                ref={prevRef}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center shadow"
            >
                <ChevronLeft className="w-3 h-3" />
            </button>
            <button
                ref={nextRef}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center shadow"
            >
                <ChevronRight className="w-3 h-3" />
            </button>

            <Swiper
                spaceBetween={20}
                slidesPerView={2.2}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                modules={[Navigation]}
                breakpoints={{
                    640: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="bg-white rounded-lg p-3 text-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-contain mb-2"
                            />
                            <div className="text-sm text-orange-500">
                                {'★'.repeat(Math.floor(product.rating))}
                                {'☆'.repeat(5 - Math.floor(product.rating))} ({product.reviews})
                            </div>

                            <p className="text-base font-medium text-[#000] mt-1">{product.name}</p>
                            <p className="text-[#FF5653] text-base font-semibold mt-1">৳{product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSwiper;
