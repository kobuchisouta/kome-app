
import Image from 'next/image';
import styles from './style.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.book}>
                <Image src="/book.png" alt="book" width={30} height={30} />
            </div>
            <div className={styles.home}>
                <Image src="/house.png" alt="house" width={30} height={30} />
            </div>
            <div className={styles.globe}>
                <Image src="/globe.png" alt="globe" width={30} height={30} />
            </div>
        </footer>
    );
}