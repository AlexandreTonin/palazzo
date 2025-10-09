'use client'
import { useState } from "react";
import { KeyRound, LoaderCircle, Mail } from "lucide-react";
import Link from "next/link";
import { FormInput } from '../ui/FormInput'
import { Button } from '../ui/Button'
import { SocialDivider } from '../ui/SocialDivider'
import { GoogleLoginButton } from '../ui/GoogleLoginButton'
import { useRegister } from "@/hooks/useRegister";

export function RegisterForm() {
    const { register, error, isLoading, success } = useRegister()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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

        register({
            name: formData.name,
            email: formData.email,
            phone: formData.phone.toString(),
            password: formData.password,
            confirmPassword: formData.confirmPassword
        })

        if (success) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: ''
            })
        }
    }

    return (
        <div className="w-full bg-white xl:w-[80%]">
            {/* Login Title */}
            <h1 className="text-xl font-bold text-center md:mb-8 mb-4 text-gray-900">
                CADASTRO
            </h1>

            {error && <p className="text-red-500 text-center">Erro ao realizar cadastro</p>}
            {success && <p className="text-green-500 text-center">Usuário criado com sucesso</p>}

            <form onSubmit={handleSubmit} className="xl:space-y-6 space-y-3">
                <FormInput
                    label="Nome completo"
                    type="text"
                    placeholder="Digite seu nome completo"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />

                <FormInput
                    label="Telefone"
                    type="number"
                    placeholder="Digite seu telefone"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
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
                <Button type="submit" variant="primary" disabled={isLoading || success}>
                    {isLoading ? <LoaderCircle className='animate-spin' /> : 'Cadastrar'}
                </Button>
            </form>

            {/* Divider */}
            <SocialDivider />

            {/* Google Login Button */}
            <GoogleLoginButton onClick={() => { }} />

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