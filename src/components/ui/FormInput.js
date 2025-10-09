import { forwardRef } from 'react'

const FormInput = forwardRef(({
    label,
    icon: Icon,
    type = 'text',
    placeholder,
    required = false,
    minLength,
    pattern,
    title,
    validationHint,
    className = '',
    ...props
}, ref) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <label className="input validator border border-black rounded-lg w-full h-12">
                {Icon && <Icon className="opacity-50 h-[1em]" />}
                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    minLength={minLength}
                    pattern={pattern}
                    title={title}
                    {...props}
                />
            </label>
            {validationHint && (
                <div className="validator-hint hidden">{validationHint}</div>
            )}
        </div>
    )
})

FormInput.displayName = 'FormInput'

export { FormInput }