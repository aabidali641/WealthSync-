import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute w-96 h-96 bg-pink-500 rounded-full opacity-30 blur-3xl animate-glow"></div>

      {/* Content */}
      <div className="text-center relative z-10">
        <h1 className="text-9xl font-bold text-white animate-float">404</h1>
        <h2 className="text-4xl font-semibold text-white mt-4">
          Lost in the Digital Void?
        </h2>
        <p className="text-lg text-white mt-2 max-w-md mx-auto">
          Looks like you've wandered off the path. Don't worry, even the best
          explorers get lost sometimes. Let's find your way back!
        </p>
        <div className="mt-8 space-y-4">
          <p className="text-white text-sm">While you're here, did you know?</p>
          <p className="text-white text-sm italic">
            "The number 404 is often associated with missing web pages because
            it's the HTTP status code for 'Not Found.'"
          </p>
        </div>
        <Link
          href="/"
          className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
        >
          Take Me Home
        </Link>
      </div>

      {/* 3D Cube Animation */}
      <div className="absolute w-40 h-40 transform rotate-45 animate-spin-slow">
        <div className="w-full h-full bg-purple-600 opacity-50"></div>
      </div>
    </div>
  );
}
