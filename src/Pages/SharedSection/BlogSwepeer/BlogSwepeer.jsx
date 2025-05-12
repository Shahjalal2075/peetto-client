import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "বিড়াল এবং কুকুর একসাথে থাকার পদ্ধতি",
    date: "৮ জানুয়ারি, ২০২৫",
    excerpt: "শীতকালে বিড়ালদের শরীরের তাপমাত্রা ঠিক রাখা এবং তাদের স্বাস্থ্য সুরক্ষিত রাখা অনেক গুরুত্বপূর্ণ। পোষা প্রাণীর, বিশেষ করে বিড়াল, কুকুরের যত্ন এবং পরিচর্যা হাইপোথার্মিয়া...",
    link: "#",
    image: "assets/product/blog1.png"
  },
  {
    id: 2,
    title: "বিড়ালদের জন্য ঘরে তৈরি শীতকালীন খাবার: সুরক্ষার এবং স্বাস্থ্যকর পুষ্টি",
    date: "৮ জানুয়ারি, ২০২৫",
    excerpt: "শীতকালে বিড়ালদের শরীরের তাপমাত্রা ঠিক রাখা এবং তাদের স্বাস্থ্য সুরক্ষিত রাখা অনেক গুরুত্বপূর্ণ পুষ্টিকর খাবার, পুষ্টির ঘাটতি, কুকুরের যত্ন এবং পরিচর্যা হাইপোথার্মিয়া...",
    link: "#",
    image: "assets/product/blog2.png"
  },
  {
    id: 3,
    title: "বিড়ালের শীতকালীন মগ্ন: সঠিক উপায়ে বিড়ালকে সুস্থ ও আরামদায়ক রাখা",
    date: "৮ জানুয়ারি, ২০২৫",
    excerpt: "শীতকালে বিড়ালদের শরীরের তাপমাত্রা ঠিক রাখা এবং তাদের স্বাস্থ্য সুরক্ষিত রাখা অনেক গুরুত্বপূর্ণ পুষ্টিকর খাবার, কুকুরের যত্ন এবং পরিচর্যা হাইপোথার্মিয়া...",
    link: "#",
    image: "assets/product/blog3.png"
  }
];

const BlogSwepeer = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <div key={post.id} className="transition duration-300">
            <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-2xl" />
            <div className="py-4">
              <p className="text-base font-medium text-[#616161] mb-3">{post.date}</p>
              <h2 className="text-xl font-semibold text-[#000] mb-3">{post.title}</h2>
              <p className="text-[#616161] text-base font-medium mb-4">{post.excerpt}</p>
              <Link to={post.link} className="text-[#FF5653] text-base font-medium hover:underline flex justify-start items-center gap-1">বিস্তারিত পড়ুন <FaChevronRight /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSwepeer;
