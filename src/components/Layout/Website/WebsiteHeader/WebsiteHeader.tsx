'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import { Squash as Hamburger } from "hamburger-react";
import { faDownload, faFileDownload, faHome, faInbox, faPhone, faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faContactBook } from '@fortawesome/free-regular-svg-icons';
import { faAppStore } from '@fortawesome/free-brands-svg-icons';
// import './tailwind.css';
export const routes = [
    {
        title: "Home",
        href: "/",
        Icon: faHome,
    },
    {
        title: "Company",
        href: "/company",
        Icon: faBuilding,
    },
    {
        title: "Contact Us",
        href: "mailto:people@getyoba.com",
        Icon: faPhone,
    },
    {
        title: "Download App",
        href: "#",
        Icon: faDownload
    }
];
export default function WebsiteHeader() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <img src="/assets/svg/yoba-logo.svg" className={styles.appLogo} alt="logo" />
            <div className={`${styles.links} btn btn-success`}>
                <a href='/'><div>Home</div></a>
                <a href='/company'><div>Company</div></a>
                <a href="mailto:people@getyoba.com"><div>Contact Us</div></a>
            </div>

            <button className={styles.downloadBtn}>Download App</button>
            <div className={styles.hiddenLg}>
                <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
            </div>
            {
                isOpen && (
                    <div className={styles.mobileNavContainer}>
                        <ul className={styles.navList}>
                            {
                                routes.map(r => <li className={styles.navListItem}>
                                    <a
                                        href={r.href}
                                        className={styles.navLink}>
                                        <span className={styles.navLinkText}>{r.title}</span>
                                        <FontAwesomeIcon className={styles.navIcon} icon={r.Icon} fixedWidth />
                                    </a>
                                </li>)
                            }
                        </ul>
                    </div>
                )
            }

        </header>
    );
}
