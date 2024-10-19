const Body = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Untitled-1.png')" }}
    >
      <div className="container  px-5">
        <div className="flex flex-col justify-center items-start h-full p-10">
          <h1 className="text-white text-5xl md:text-9xl font-bold">WELCOME</h1>
          <h2 className="text-white text-xl md:text-3xl ml-5 font-bold mt-1">to VMMR</h2>
        </div>

        {/* Upload Section */}
        <div className="flex flex-col items-center max-w-lg mt-20 ml-10 md:ml-40">
          <h3 className="text-2xl md:text-3xl text-white font-bold text-center">
            Drag and Drop Photos of the Damage Here
          </h3>
          <p className="text-gray-300 mt-2 text-center">PNG or JPG up to 50 MB</p>

          {/* Upload Button */}
          <label className="w-full bg-gray-700 text-white p-3 mt-5 rounded-lg cursor-pointer flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Upload Photos
            <input type="file" accept="image/*" className="hidden" />
          </label>

          {/* Info below the button */}
          <p className="text-gray-400 text-sm mt-3 text-center">
            *Photos should be taken under good lighting, with damage clearly
            visible.{" "}
            <a href="#" className="underline">
              Show an example
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
