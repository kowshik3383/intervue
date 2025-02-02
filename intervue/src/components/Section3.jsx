import React from "react";

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full h-full sm:w-[350px] border border-gray-200">
      {/* Image Section */}
      <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      {/* Content Section */}
      <h3 className="text-lg font-bold mt-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{description}</p>
      <a href="#" className="text-blue-600 font-semibold mt-4 inline-flex items-center gap-1">
        Know more <span className="text-xl">→</span>
      </a>
    </div>
  );
};

const Section3 = () => {
  const products = [
    {
      image: "https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c6135016fce3dec26c8c4b_technical-interviews.png", // Replace with actual image
      title: "On-demand",
      description:
        "Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us.",
    },
    {
      image: "https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c61350bf2156a87d68512b_programming.png",
      title: "Live interviews",
      description:
        "Assess candidates in real-time with our live coding environment & integrated video calls.",
    },
    {
      image: "https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c616d53601adf691d597e4_detailed-report.png",
      title: "Assessments",
      description:
        "Share assessments across batches with MCQ, Programming and Subjective questions.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 h-full">
      <h2 className="text-3xl font-normal text-center text-gray-900 mb-10">
        Explore more products on Intervue
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Section3;
