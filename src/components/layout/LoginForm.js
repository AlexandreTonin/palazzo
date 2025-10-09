'use client'
import { useState } from 'react'
import { KeyRound, Mail } from 'lucide-react'
import Link from 'next/link'
import { FormInput } from '../ui/FormInput'
import { Button } from '../ui/Button'
import { SocialDivider } from '../ui/SocialDivider'
import { GoogleLoginButton } from '../ui/GoogleLoginButton'

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Login attempt:', {
            email,
            password,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        })

        console.log('Form submitted successfully!')
    }

    const handleGoogleLogin = () => {
        console.log('Google login attempt:', {
            method: 'google',
            timestamp: new Date().toISOString()
        })
    }

    return (
        <div className="w-full bg-white xl:w-[80%]">
            {/* Login Title */}
            <h1 className="text-xl font-bold text-center md:mb-8 mb-4 text-gray-900">
                LOGIN
            </h1>

            <form onSubmit={handleSubmit} className="xl:space-y-6 space-y-3">
                {/* Email Field */}
                <FormInput
                    label="Email"
                    type="email"
                    icon={Mail}
                    placeholder="Mail@site.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    validationHint="Enter valid email address"
                />

                {/* Password Field */}
                <FormInput
                    label="Senha"
                    type="password"
                    icon={KeyRound}
                    placeholder="Senha"
                    required
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    validationHint={
                        <>
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </>
                    }
                />

                {/* Login Button */}
                <Button type="submit" variant="primary">
                    Login
                </Button>
            </form>

            {/* Divider */}
            <SocialDivider />

            {/* Google Login Button */}
            <GoogleLoginButton onClick={handleGoogleLogin} />

            {/* Register Link */}
            <div className="text-center mt-8 text-sm">
                <span className="text-gray-600">Ainda não possui uma conta? </span>
                <Link
                    href="/register"
                    className="text-black font-medium hover:underline"
                >
                    Cadastrar
                </Link>
            </div>
        </div>
    )
}