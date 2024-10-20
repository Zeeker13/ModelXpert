"use client";

import React, { useState } from "react";

const Predictor = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        // 50MB limit
        setError("File size should be under 50MB.");
        return;
      }
      if (!["image/png", "image/jpeg"].includes(file.type)) {
        setError("Please upload a PNG or JPG file.");
        return;
      }
      setSelectedImage(file);
      setError("");
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      setError("Please select an image to upload.");
      return;
    }
    // Handle the image upload here (e.g., send it to the server)
    console.log("Image uploaded:", selectedImage);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white px-4"
      style={{ backgroundImage: "url('/Untitled-1.png')" }}
    >
      <h1 className="text-5xl font-bold mb-2">WELCOME</h1>
      <p className="text-xl mb-10">to Car Model Predictor</p>
      <div className="text-center mb-10">
        <p className="text-2xl font-semibold">
          Upload Low-Quality Car Photos Here
        </p>
        <p className="text-sm text-gray-400">PNG or JPG up to 50 MB</p>
      </div>
      <div className="flex flex-col items-center">
        <input
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          id="imageUpload"
          onChange={handleImageUpload}
        />
        <label
          htmlFor="imageUpload"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded cursor-pointer"
        >
          + Upload Photos
        </label>
        {selectedImage && (
          <p className="text-sm mt-2">Selected file: {selectedImage.name}</p>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <p className="text-sm text-gray-400 mt-6">
        *For best results, use images from CCTV footage or other low-resolution
        sources. Ensure the car is visible.
        <a href="#" className="text-blue-400 hover:underline ml-1">
          View example images
        </a>
      </p>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded mt-6"
      >
        Submit
      </button>
    </div>
  );
};

export default Predictor;
