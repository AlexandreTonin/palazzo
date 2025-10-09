'use client'
import { useState } from "react";
import { KeyRound, Mail } from "lucide-react";
import Link from "next/link";
import { FormInput } from '../ui/FormInput'
import { Button } from '../ui/Button'
import { SocialDivider } from '../ui/SocialDivider'
import { GoogleLoginButton } from '../ui/GoogleLoginButton'

export function RegisterForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            console.error('Passwords do not match!')
            alert('Passwords do not match!')
            return
        }

        console.log('Registration attempt:', {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            timestamp: new Date().toISOString()
        })

        console.log('Form submitted successfully!')
    }

    const handleGoogleLogin = () => {
        console.log('Google registration attempt:', {
            method: 'google',
            timestamp: new Date().toISOString()
        })
    }
    return (
        <div className="w-full bg-white xl:w-[80%]">
            {/* Login Title */}
            <h1 className="text-xl font-bold text-center md:mb-8 mb-4 text-gray-900">
                CADASTRO
            </h1>

            <form onSubmit={handleSubmit} className="xl:space-y-6 space-y-3">
                <FormInput
                    label="Nome completo"
                    type="text"
                    placeholder="Digite seu nome completo"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                />

                {/* Email Field */}
                <FormInput
                    label="Email"
                    type="email"
                    icon={Mail}
                    placeholder="Mail@site.com"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
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
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    validationHint={
                        <>
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </>
                    }
                />

                <FormInput
                    label="Confirmar Senha"
                    type="password"
                    icon={KeyRound}
                    placeholder="Confirmar senha"
                    required
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    validationHint={
                        <>
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </>
                    }
                />

                {/* Register Button */}
                <Button type="submit" variant="primary">
                    Cadastrar
                </Button>
            </form>

            {/* Divider */}
            <SocialDivider />

            {/* Google Login Button */}
            <GoogleLoginButton onClick={handleGoogleLogin} />

            {/* Register Link */}
            <div className="text-center mt-8 text-sm">
                <span className="text-gray-600">Já possui uma conta? </span>
                <Link
                    href="/login"
                    className="text-black font-medium hover:underline"
                >
                    Fazer login
                </Link>
            </div>
        </div>
    )
}