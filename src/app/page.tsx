'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

interface ApiResponse {
    result: string;
}

export default function Home() {
    const [data, setData] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.sspzoa.io/predict');
                const result: ApiResponse = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {data && <h1>{data.result}</h1>}
        </div>
    );
}
