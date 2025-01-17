import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/home/page.module.css';



export default function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.back}>
                <p>
                    <Link href="./">
                        ←
                    </Link>
                </p>
            </div>
            <div className={styles.q_content}>
                <div className={styles.title}>
                    <h1>エリア調査</h1>
                </div>
                <div className={styles.quiz_questions}>
                    <p className={styles.qq}>
                        水田を作るには、水が十分に確保できる場所を選ぶことが大切です。<br />
                        まず、近くに水源があるか、水を引くことができるか、そして稲作に適した気候かを確認します。<br />
                        土地を買うときは、農地法というルールがあるので、役所に相談しながら進めます。
                    </p>
                </div>
                <Link href={"/quiz"} className={styles.next_btn}>
                    次へ進む
                </Link>
            </div>
            <div className={styles.human}>
                <Image src="/Group 75.png" alt="human" width={60} height={60} />
            </div>
        </div>
    );
}
