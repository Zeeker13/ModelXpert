"use client";

import React from "react";

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-black px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/gg.png')",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></div>

      <div className="p-8 rounded-lg text-center bg-opacity-80 shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Honda Model Predictor</h1>
        <p className="text-xl mb-6">
          Ever wondered which Honda car model you're looking at? Whether it's a blurry CCTV image, an old photo from the street, or a low-resolution shot, our tool is designed to help you identify Honda car models with ease.
        </p>
        <h2 className="text-3xl font-semibold mb-2">How it Works</h2>
        <p className="text-lg mb-4">
          Simply upload a low-quality photo of a Honda car, and our predictor will do the rest! The system is optimized for recognizing Honda models from images with low resolution, including those captured from security cameras or old photographs.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Image Requirements</h2>
        <p className="text-lg mb-4">
          Make sure your image is in <strong>PNG or JPG format</strong> and under <strong>50 MB</strong>. The clearer the car is in the image, the better the prediction accuracy.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <p className="text-lg mb-4">
          With our cutting-edge technology, identifying Honda car models from low-resolution photos has never been easier. We understand that not every car photo is picture-perfect, which is why we've optimized our tool to handle even the toughest, grainiest images.
        </p>
        
      </div>
    </div>
  );
};

export default About;
