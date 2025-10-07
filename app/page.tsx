import { FaRegFileAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="flex items-center space-x-3 mb-4">
        <FaRegFileAlt className="text-blue-600 text-4xl" />
        <h1 className="text-4xl font-bold">InstaCV</h1>
      </div>

      <p className="text-lg text-gray-600 mb-8 text-center px-4">
        Build your resume instantly with smart templates and modern design.
      </p>

      <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
        Get Started
        <IoArrowForward className="text-xl" />
      </button>

      <footer className="absolute bottom-4 text-sm text-gray-400">
        © {new Date().getFullYear()} InstaCV. All rights reserved.
      </footer>
    </main>
  );
}
