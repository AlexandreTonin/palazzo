import { forwardRef } from 'react'

const Button = forwardRef(({
    variant = 'primary',
    size = 'default',
    children,
    className = '',
    ...props
}, ref) => {
    const baseStyles = 'btn w-full transition-colors'

    const variants = {
        primary: 'bg-black text-white hover:bg-black/90 border-none',
        outline: 'btn-outline'
    }

    const sizes = {
        default: 'h-12 rounded-lg',
        large: 'h-14 rounded-xl text-lg',
        small: 'h-10 rounded-md text-sm'
    }

    const variantStyles = variants[variant] || variants.primary
    const sizeStyles = sizes[size] || sizes.default

    return (
        <button
            ref={ref}
            className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button'

export { Button }