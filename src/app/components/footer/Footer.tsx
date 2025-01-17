
import Image from 'next/image';
import styles from './style.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href='/book' className={styles.book}>
                <Image src="/book.png" alt="book" width={30} height={30} />
            </a>
            <a href='/' className={styles.home}>
                <Image src="/house.png" alt="house" width={30} height={30} />
            </a>
            <a href='/news' className={styles.globe}>
                <Image src="/globe.png" alt="globe" width={30} height={30} />
            </a>
        </footer>
    );
}