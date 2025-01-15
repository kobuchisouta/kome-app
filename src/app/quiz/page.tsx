"use client";

import { useState, useEffect, useRef } from "react";
import style from "./quiz.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Quiz() {
    const [quizCorrect, setQuizCorrect] = useState(null); // null: 未選択, true: 正解, false: 不正解
    const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの状態
    const quizRef = useRef(null);

    const playsound = (soundpath) => {
        const audio = new Audio(soundpath);
        audio.play();
    };

    const handleAnswerClick = (isCorrect) => {
        setQuizCorrect(isCorrect);
        if (isCorrect) {
            playsound("/correct006.mp3");
        } else {
            playsound("/不正解.mp3");
        }
    };

    const handleClickOutside = (event) => {
        if (quizRef.current && !quizRef.current.contains(event.target)) {
            setQuizCorrect(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={style.main}>
            <div className={style.back}>
                <p>
                    <Link href={"/home"}>←</Link>
                </p>
            </div>
            <div className={style.q_content}>
                <div className={style.title}>
                    <h1>エリア調査</h1>
                </div>
                <div className={style.quiz_questions}>
                    <p className={style.qq}>
                        Q. 水田を作るためには十分な水のある場所を確保する必要があるが、
                        その他にも稲作に適した何を確認することが大切か？
                    </p>
                    <div
                        id="quizAns"
                        className={style.quiz_ans}
                        style={{ display: quizCorrect === true ? "block" : "none" }}
                    >
                        <p>正解</p>
                        <span>
                            <Image src="/true1.svg" alt="正解" width={300} height={300} />
                        </span>
                    </div>
                    <div
                        id="wrongAns"
                        className={style.quiz_ans}
                        style={{ display: quizCorrect === false ? "block" : "none" }}
                    >
                        <p>A. 気候</p>
                        <span>
                            <Image src="/false1.svg" alt="不正解" width={300} height={300} />
                        </span>
                    </div>
                    <div>
                        <div>
                            <div className={style.quiz_btn}>
                                <button
                                    type="button"
                                    data-correct="true"
                                    onClick={() => handleAnswerClick(true)}
                                >
                                    <p>気候</p>
                                </button>
                                <button
                                    type="button"
                                    data-correct="false"
                                    onClick={() => handleAnswerClick(false)}
                                >
                                    <p>気温や温度</p>
                                </button>
                                <button
                                    type="button"
                                    data-correct="false"
                                    onClick={() => handleAnswerClick(false)}
                                >
                                    <p>虫の量</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={"/"} className={style.next_btn}>
                    項目選択へ
                </Link>
                <Link href={"/home"} className={style.next_btn}>
                    学び直す
                </Link>

                {/* モーダルを開くボタン */}
                <div
                    className={style.explanation}
                    style={{ display: quizCorrect !== null ? "block" : "none" }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <Image src="/Group 109.png" alt="explanation" width={50} height={70} />
                </div>
            </div>

            {/* モーダルウィンドウ */}
            {isModalOpen && (
                <div className={style.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div
                        className={style.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>稲作と気候</h2>
                        <p>稲作は気候の影響を大きく受けます。
                            平均気温が25度くらいで、日光がたくさんある事が
                            重要です。昼夜の寒暖差が大きいとデンプンが米粒に多く残り、大きくて良質なお米が育ちます。
                            雪解け水が豊富な地域では水不足の心配が少なく稲作に適しています。</p>
                        <button onClick={() => setIsModalOpen(false)}>閉じる</button>
                    </div>
                </div>
            )}

            <div
                className={style.human}
                style={{ display: quizCorrect !== null ? "block" : "none" }}
            >
                <Image src="/Group 75.png" alt="human" width={60} height={60} />
            </div>
        </div>
    );
}
