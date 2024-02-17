export default function Button({text, onClick, className}) {
    return (
       <button onClick={onClick} className={className}>{text}</button>
    )
}