'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


const SignupPage = () => {
    const router = useRouter()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error] = useState('')

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#ad2e00] to-[#ad2e00]">
            <div className="bg-[#fff8dc] p-8 rounded-lg shadow-md w-full max-w-md my-8">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-[#ad2e00]">Create an Account</h1>
                    <p className="text-[#ad2e00]">Join us today and get started</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md text-sm">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#ad2e00] mb-1">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 text-[#ad2e00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad2e00]"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#ad2e00] mb-1">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 text-[#ad2e00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad2e00]"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-[#ad2e00] mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 text-[#ad2e00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad2e00]"
                        placeholder="your@email.com"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-[#ad2e00] mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 text-[#ad2e00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad2e00]"
                        placeholder="••••••••"
                    />
                    <p className="mt-1 text-xs text-[#ad2e00]">Must be at least 8 characters long</p>
                </div>

                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#ad2e00] mb-1">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 text-[#ad2e00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ad2e00]"
                        placeholder="••••••••"
                    />
                </div>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        router.push('/dashboard');
                    }}
                    type="submit"
                    className="w-full bg-[#ad2e00] hover:bg-[#e65520] text-white py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e65520] transition duration-150"
                >
                    Sign Up
                </button>

                <div className="mt-6 text-center">
                    <p className="text-sm text-[#ad2e00]">
                        Already have an account?{' '}
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/auth/login');
                            }}
                            className="text-[#ad2e00] hover:text-[#e65520] font-medium cursor-pointer"
                        >
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
