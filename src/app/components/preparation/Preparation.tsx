import style from "./preparation.module.css";

export default function Preparation(props: any) {
    return (
        <div className={style.preparationWrap}>
            <h2 className={style.title}>{props.title}</h2>
            <p className={style.text}>
                {props.text}
            </p>
        </div>

    )
}
