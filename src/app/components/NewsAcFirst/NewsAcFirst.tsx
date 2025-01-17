import React from 'react'
import styles from './style.module.css';

const NewsAcFirst = (props:any) => {
  return (
    <a href={props.url} className={styles.NewsAc}>
      <p className={styles.date}>2025.11.1</p>
      <p className={styles.title}>{props.jj}</p>
      <img src={props.img} alt="" />
    </a>
  )
}

export default NewsAcFirst