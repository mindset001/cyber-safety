"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setStep(2), 1000);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setTimeout(() => router.push("/login"), 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          {step === 1 ? "Reset Password" : "Set New Password"}
        </h2>
        <p className="text-center text-gray-500">
          {step === 1 ? "Enter your email to reset your password" : "Enter a new password"}
        </p>

        {step === 1 ? (
          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#A1E3F9] p-3 text-white transition hover:bg-blue-700">
              Send Reset Link
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <button type="submit" className="w-full rounded-lg bg-[#A1E3F9] p-3 text-white transition hover:bg-blue-700">
              Reset Password
            </button>
          </form>
        )}

        <p className="text-center text-sm text-gray-500">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
