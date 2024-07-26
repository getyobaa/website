'use client';
import React, { useState } from "react";
import styles from './index.module.css';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = (props: FAQItemProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`${styles.question} ${open ? styles.open : ''}`}>
            <div className={styles.top}>
                <div>{props.question}</div>
                <img 
                onClick={() => {
                    setOpen(!open);
                }}
                src="/assets/svg/arrow-down.svg" className={`${styles.arrowDown} ${open ? styles.rotate : ''}`} alt="arrow-down" />
            </div>

            {
                open && (
                    <p>{props.answer}</p>
                )
            }
        </div>
    )
}

export default FAQItem;