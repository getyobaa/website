import React from 'react';
import styles from './index.module.css';
export default function WebsiteHeader() {
    return (
        <header className={styles.header}>
                <img src="/assets/svg/yoba-logo.svg" className="app-logo" alt="logo" />
                <div className='links'>
                    <a><div>Home</div></a>
                    <a><div>Company</div></a>
                    <a><div>Contact Us</div></a>
                </div>

                <button>Download App</button>

            </header>
    );
}
