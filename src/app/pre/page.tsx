import style from "./preparation.module.css";

export default function Preparation() {
    return (
        <div className={style.preparationWrap}>
            <h2 className={style.title}>エリア調査</h2>
            <p className={style.text}>
                水田を作るには、水が十分に確保できる場所を選ぶことが大切です。
                まず、近くに水源があるか、水を引くことができるか、そして稲作に適した気候かを確認します。
                土地を買うときは、農地法というルールがあるので、役所に相談しながら進めます。
            </p>
        </div>

    )
}

