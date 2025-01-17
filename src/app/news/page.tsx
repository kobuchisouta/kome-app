'use client'
import { useState,useEffect } from 'react'
import styles from './page.module.css';
import NewsAc from '../components/NewsAc/NewsAc';
import NewsAcFirst from '../components/NewsAcFirst/NewsAcFirst';

const News = () => {
    const [newIndex, setNewIndex] = useState(3);
    const [popIndex, setPopIndex] = useState(44);
    const [starIndex, setStarIndex] = useState(1);
    const [articles,setArticles] = useState([])
    useEffect(() => {
        const dbapi = async () => {
            const apiKey = "28855e24623f4a09bcd9a264a1a29b70";
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=agriculture&language=en&apiKey=${apiKey}`
            )
            const json = await res.json();
            setArticles(json?.articles);
        }
        dbapi()
    },[])
    

    // if (loading) return <p>Loading...</p>;

    return (
        <div className={styles.newsPage}>
            {/* <h1>Agriculture News</h1> */}
            <ul className={styles.new}>
                <p className={styles.newName}>最新ニュース</p>
                {
                    articles.map((event:any,index:any) => {
                        if (index == 0) {
                            return(
                                <NewsAcFirst jj={event.title} url={event.url} img={event.urlToImage} key={index} />
                            )
                        } else if (index > 0 && index < newIndex) {
                            return(
                                <NewsAc jj={event.title} url={event.url} img={event.urlToImage} key={index} />
                            )
                        }
                    })
                }
                <div className={styles.moreBtn} onClick={() => setNewIndex(newIndex + 3)}><p>もっと記事を読む</p></div>
            </ul>
            <ul className={styles.pop}>
                <p className={styles.popName}>注目記事</p>
                {
                    articles.map((event:any,index:any) => {
                        if (index > 40 && index < popIndex) {
                            return(
                                <NewsAc jj={event.title} url={event.url} img={event.urlToImage} key={index} />
                            )
                        }
                    })
                }
                <div className={styles.moreBtn} onClick={() => setPopIndex(popIndex + 3)}><p>もっと記事を読む</p></div>
            </ul>
            <ul className={styles.star}>
                <p className={styles.starName}>お気に入り</p>
                {
                    articles.map((event:any,index:any) => {
                        if (index < starIndex) {
                            return(
                                <NewsAc jj={event.title} url={event.url} img={event.urlToImage} key={index} />
                            )
                        }
                    })
                }
                <div className={styles.moreBtn} onClick={() => setStarIndex(starIndex + 3)}><p>もっと記事を読む</p></div>
            </ul>
        </div>
    );
}

export default News