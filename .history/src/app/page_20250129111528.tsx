"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css'; // モジュールCSS
import Link from 'next/link';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Head>
        <title>米⭐︎すたー</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        <meta name="description" content="ここに説明文を設定" />
      </Head>

      <main className={styles.main}>
        <div className={styles.contents}>
          <div className={styles.clouds}>
            <p className={styles.cloud1}>
              <Image src="/cloud1.png" alt="雲" width={150} height={80} />
            </p>
            <p className={styles.cloud2}>
              <Image src="/cloud2.png" alt="雲" width={170} height={100} />
            </p>
          </div>

          <div className={styles.tools}>
            <div className={styles.toolBar}>
              <p>
                <Image src="/tools.png" alt="道具" width={50} height={50} />
              </p>
            </div>
            <div className={styles.lookUp}>
              <p>
                <Image src="/pickup.png" alt="見て" width={50} height={50} />
              </p>
            </div>
          </div>

          <div className={styles.stages}>
            <div className={styles.stagePick}>
              <a className={`${styles.stage} ${styles.modalOpen}`} onClick={openModal}>
                <Image src="/pick.png" alt="クリック" width={70} height={70} />
              </a>
              <a className={`${styles.stage} ${styles.modalOpen}`} onClick={openModal}>
                <Image src="/pick.png" alt="クリック" width={70} height={70} />
              </a>
              <a className={`${styles.stage} ${styles.modalOpen}`} onClick={openModal}>
                <Image src="/pick.png" alt="クリック" width={70} height={70} />
              </a>
            </div>

            {isModalOpen && (
              <div className={styles.modal}>
                <div className={styles.modalInner}>
                  <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                      <h1>土地選びと購入準備</h1>
                    </div>
                    <div className={styles.modalBody}>
                      <Link href={"/home"}>エリア調査</Link>
                      <Link href={"/home"}>土地の購入</Link>
                      <a href="#">土地の整地</a>
                      <a href="#">水利権の確認</a>
                      <a href="#">情報収集</a>
                    </div>
                    <div className={styles.modalFooter}>
                      <span className={styles.modalClose} onClick={closeModal}>
                        閉じる
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.stageImg}>
              <a className={styles.stage1} >
                <Image src="/ine.png" alt="稲" width={50} height={50} />
              </a>
              <a className={styles.stage2}>
                <Image src="/makimaki.png" alt="田植え" width={70} height={70} />
              </a>
              <a className={styles.stage3}>
                <Image src="/sawasawa.png" alt="手入れ" width={70} height={70} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}