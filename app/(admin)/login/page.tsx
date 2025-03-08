import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500">Sign in to your account</p>

        {/* Email & Password Inputs */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
           <Link href='/resetpassword'> <p className="text-[10px] text-[red]">Forgot Password</p></Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 text-white transition hover:bg-blue-700"
          >
          <Link href='/dashboard'>  Sign In</Link>
          </button>
        </form>

        {/* OR Divider */}
        {/* <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div> */}

        {/* Social Login */}
        {/* <div className="space-y-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 p-3 transition hover:bg-gray-100">
            <FcGoogle className="text-2xl" />
            <span>Sign in with Google</span>
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 p-3 transition hover:bg-gray-100">
            <FaGithub className="text-2xl text-black" />
            <span>Sign in with GitHub</span>
          </button>
        </div> */}

        {/* Footer */}
        {/* <p className="text-center text-sm text-gray-500">
          Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p> */}
      </div>
    </div>
  );
}
