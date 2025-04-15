import style from "./card.module.css"

export const Card = (props) => {
    return(
        <div className={style.wrapCard}>
            <h3>{props.text}</h3>
            <img src={props.img} alt={props.text} />
        </div>
    )
}