const CustomerStory = () => {
	return (
	  <div className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-lg shadow-md">
		{/* Left: Video Thumbnail with Cut Shape */}
		<div className="relative w-full sm:w-1/2 overflow-hidden rounded-r-full">
		  <video
			id="customer-stories-videojs-player_html5_api"
			muted
			autoPlay
			loop
			preload="true"
			className="w-full h-auto object-cover"
			src="https://d26rchw36216zf.cloudfront.net/public/assets/homepage_temp_assets/b970b78d-517b-4a9e-be2f-fad79e018e5a.mp4"
		  >
			<source src="https://d26rchw36216zf.cloudfront.net/public/assets/homepage_temp_assets/b970b78d-517b-4a9e-be2f-fad79e018e5a.mp4" />
		  </video>
		</div>
  
		{/* Right: Text Content */}
		<div className="w-full sm:w-1/2 pl-0 sm:pl-6 flex flex-col justify-center text-center sm:text-left mt-4 sm:mt-0">
		  <p className="text-gray-700 text-lg leading-relaxed">
			After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.
		  </p>
		  <p className="font-bold text-lg mt-4">Niket Gupta</p>
		  <p className="text-gray-500 text-sm">Group head of talent acquisition, Yubi</p>
		  <a href="#" className="text-blue-600 font-semibold mt-4 inline-block">
			See more customer stories →
		  </a>
		</div>
	  </div>
	);
  };
  
  export default CustomerStory;
  