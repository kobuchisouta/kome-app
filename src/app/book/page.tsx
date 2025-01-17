// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './book.module.css'; // モジュールCSS
"use client";
import Book from '../components/book/Book';
import Preparation from '../components/preparation/Preparation';
import { bookArray } from "../lib/bookArray";
import { bookAboutArray } from "../lib/bookAboutArray";
import style from './book.module.css';
import { useState } from 'react';

export default function BookPage() {
    const [bookState, setBookState] = useState("");

    return (
        <>
            <div className={style.title}>
                <h1>例文書</h1>
            </div>
            {bookArray.map((event: any, index: number) => {
                return (
                    <button
                        className={style.button}
                        key={`book${index}`}
                        onClick={() => setBookState(event.link)}
                    >
                        <Book
                            img={event.img}
                            title={event.title}

                        />
                    </button>
                )
            })}
            <div>
                {bookAboutArray.map((event: any, index: number) => {
                    if (event.name === bookState) {
                        return (
                            <div key={`preparation${index}`} className={style.bookModal}>
                                {event.array.map((e: any, i: number) => {
                                    return (
                                        <Preparation
                                            key={`preparation${i}`}
                                            title={e.title}
                                            text={e.text}
                                        />
                                    )
                                })}
                            </div>
                        )
                    }
                })}
            </div>
        </>
    );
}
