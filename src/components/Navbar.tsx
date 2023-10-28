'use client'

import {useState, useEffect} from 'react'
import styles from '@/components/Navbar.module.css'
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const closeSidebar = () => {
        setIsOpen(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <a onClick={closeSidebar} href='/'>
                    <img src='/logo.svg' className={styles.navbar__logo}/>
                </a>
                <div onClick={() => setIsOpen(!isOpen)} className={styles.menu}>
                    <div className={isOpen ? `${styles.bar} ${styles.bar1}` : styles.bar}></div>
                    <div className={isOpen ? `${styles.bar} ${styles.bar2}` : styles.bar}></div>
                    <div className={isOpen ? `${styles.bar} ${styles.bar3}` : styles.bar}></div>
                </div>
                <div className={isOpen ? `${styles.navbar__links} ${styles.open}` : styles.navbar__links}>
                    <ul>
                        <li><Link onClick={() => { closeSidebar(); setCurrentPath('/'); }} href='/' className={currentPath === '/' ? styles.active : ''}>홈</Link></li>
                        <li><Link onClick={() => { closeSidebar(); setCurrentPath('/teams'); }} href='/teams' className={currentPath === '/teams' ? styles.active : ''}>팀 찾기</Link></li>
                        <li><Link onClick={() => { closeSidebar(); setCurrentPath('/profile'); }} href='/profile' className={currentPath === '/profile' ? styles.active : ''}>학생 프로필</Link></li>
                        <li><Link onClick={() => { closeSidebar(); setCurrentPath('/info'); }} href='/info' className={currentPath === '/info' ? styles.active : ''}>대외활동 정보</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}