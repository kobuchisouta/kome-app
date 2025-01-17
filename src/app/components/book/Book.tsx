import React from 'react'
import style from './book.module.css'
import Image from 'next/image'

const Book = (props: any) => {
    return (
        <div className={style.main1}>
            <Image src={props.img} alt="本" width={60} height={60} />
            <p>{props.title}</p>
        </div>
    )
}

export default Book
