import './btn.css'

export const Btn = (
    {func, text}
) => {
    return(
        <button className="btn" onClick={() => window.location.href=func}>{text}</button>
    )
}