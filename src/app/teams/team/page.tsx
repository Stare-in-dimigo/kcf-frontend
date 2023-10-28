'use client'

import styles from './page.module.css';
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <a href="mailto:example@gmail.com">
                <img src='/team.svg' />
            </a>
        </div>
    );
}
