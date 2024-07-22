import React from 'react';
import styles from './index.module.css';
export default function WebsiteFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerStackWrapper}>
                <div className={`${styles.stackCard} pink-bg margin-t-20 ${styles.i1}`}>
                    <h2>
                        Join Yobaa Today
                    </h2>
                    <p>Experience the freedom of borderless spending. Claim your free card and unlock a world of possibilities.</p>
                    <div className={styles.joinStoreLinks}>
                        <img className={styles.joinStoreLinksImg} src="/assets/img/appstore-download.png" />
                        <img className={styles.joinStoreLinksImg} src="/assets/img/playstore-download.png" style={{ marginLeft: 10 }} />
                    </div>
                </div>
                <div className={`${styles.stackCard} yellow-bg margin-t-20 ${styles.i2}`} />
                <div className={`${styles.stackCard} purple-bg2 margin-t-20 ${styles.i3}`} />
                <div className={`${styles.stackCard} orange-bg margin-t-20 ${styles.i4}`} />
            </div>

            <div className={styles.footerBottom}>
                <img src="/assets/svg/yoba-logo.svg" className={styles.appLogoFooter} alt="logo" />
                <div className={styles.footerText}>© 2024 Yooba Plc. All Rights Reserved</div>
                <div className='row'>
                    <img src="/assets/img/yoba-instagram.png" className="social-link" alt="social" />
                    <img src="/assets/img/yoba-linkedin.png" className="social-link" alt="social" />
                    <img src="/assets/img/yoba-youtube.png" className="social-link" alt="social" />
                    <img src="/assets/img/yoba-twitter.png" className="social-link" alt="social" />
                </div>
            </div>
        </footer>
    );
}
