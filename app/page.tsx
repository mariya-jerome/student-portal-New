import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center space-y-6 w-[420px]">
        <h1 className="text-3xl font-bold text-purple-600 flex items-center justify-center gap-2">
          🎓 Student Management Portal
        </h1>

        <div className="flex flex-col gap-4">
          {/* Manage Students */}
          <Link href="/students">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition">
              Manage Students
            </button>
          </Link>

          {/* Manage Events */}
          <Link href="/events">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
              Manage Events
            </button>
          </Link>

          {/* Dashboard */}
          <Link href="/dashboard">
            <button className="w-full border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-semibold transition">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
