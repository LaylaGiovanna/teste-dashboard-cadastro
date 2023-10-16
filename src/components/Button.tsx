
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    icon: React.ReactNode;
    onClick: () => void
}

export default function Button({text, icon, ...props}: ButtonProps){
    return (
        <>
            <button type="button" className="flex flex-row  items-center justify-center gap-3 bg-button-color rounded-2xl w-2/4 h-8" {...props}>
                <p className="">{text}</p>
                {icon}
            </button>
        </>
    )
}