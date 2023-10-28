'use client'

import styles from './page.module.css';
import Link from "next/link";

export default function Home() {

    return (
        <div className={styles.container}>
            <Link href="/teams/team"><img src='/teams.svg' /></Link>
        </div>
    );
}
