export function SocialDivider({ text = "login social" }) {
    return (
        <div className="flex items-center my-8">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 bg-white text-xs">{text}</span>
            <div className="flex-1 border-t border-gray-300"></div>
        </div>
    )
}