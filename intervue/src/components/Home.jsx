import { useState } from "react";
import { Search, MoveUpRight, UserRound, Menu, X } from "lucide-react";

const resources = [
  { level: "Easy", color: "bg-blue-800 text-white" },
  { level: "Medium", color: "bg-yellow-500 text-white" },
  { level: "Hard", color: "bg-green-500 text-white" },
];

export default function TechnicalResources() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => setIsMenuOpen((prev) => !prev); // Toggle menu

  return (
    <div className="min-h-screen px-6 py-5 font-[Sora]">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-4 lg:px-6">
        <img
          src="https://d2b1cooxpkirg1.cloudfront.net/publicAssets/intervue.svg"
          alt="Logo"
          className="object-contain"
        />
        <div className="lg:hidden"> {/* Hamburger Menu Icon */}
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={24} className="text-gray-600" />
            ) : (
              <Menu size={24} className="text-gray-600" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-gray-600 text-sm font-medium">
          <a href="#" className="hover:text-black flex items-center font-semibold gap-2">
            <UserRound size={18} /> Become an Interviewer <MoveUpRight size={16} />
          </a>
          <a href="#" className="hover:text-black">Features</a>
          <a href="#" className="hover:text-black">Pricing</a>
          <a href="#" className="hover:text-black">Start a Trial</a>
          <button className="border border-gray-400 px-4 py-2 rounded-md hover:border-black">
            Login
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Signup
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          <a href="#" className="text-gray-600 hover:text-black text-lg">Become an Interviewer</a>
          <a href="#" className="text-gray-600 hover:text-black text-lg">Features</a>
          <a href="#" className="text-gray-600 hover:text-black text-lg">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-black text-lg">Start a Trial</a>
          <button className="text-gray-600 border border-gray-400 px-4 py-2 rounded-md hover:border-black">
            Login
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Signup
          </button>
        </nav>
      </div>

      {/* Main Section */}
      <main className="text-center mt-10 lg:mt-16">
        <h2 className="text-2xl lg:text-4xl font-medium tracking-tight">
          Technical Interview Resources
        </h2>
        <p className="text-gray-500 mt-3 lg:mt-4 text-md lg:text-lg">
          Find all the technical interview resources here
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg mx-auto mt-5 lg:mt-6">
          <input
            type="text"
            placeholder="Search skills, role, seniority"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-12 py-3 rounded-full bg-white focus:outline-none shadow-sm text-sm lg:text-base"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-8 lg:mt-10">
          {Array.from({ length: 9 }).map((_, i) => {
            const res = resources[i % resources.length];
            return (
              <div
                key={i}
                className="bg-white p-5 lg:p-6 rounded-lg shadow-md border border-gray-300 text-left max-w-sm mx-auto lg:max-w-none"
              >
                {/* Level Badge & Category */}
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold rounded-md px-3 py-1 ${res.color}`}>
                    {res.level}
                  </span>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Data Structures & Algorithms
                  </p>
                </div>
                {/* Resource Title */}
                <h3 className="font-semibold mt-3 text-base lg:text-lg">
                  Design a Free Food App
                </h3>
                {/* Description */}
                <p className="text-sm text-gray-600 mt-2 lg:mt-3 leading-relaxed">
                  We created this guide after speaking with our community of
                  interviewers, which includes over 100 current and former
                  Amazon engineers, as well as our corpus of mock interviews.
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
