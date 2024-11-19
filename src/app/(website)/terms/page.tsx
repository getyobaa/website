import React from 'react';
import styles from './page.module.css';
import './page.css';
export default function Page() {
    return (
        <div className={styles.mainContainer}>
            <title>Terms & Conditions</title>
            {/* <WebsiteHeader /> */}
            <div className={styles.content}>
                <h5>Terms & Conditions</h5>
                <p>Welcome to Yoba! These Terms & Conditions (“Terms”) govern your access
                    to and use of the services provided by Yoba Inc., a Delaware-registered
                    company. By using our platform, you agree to these Terms.</p>

                <h5>
                    1. Introduction
                </h5>
                <p>
                    Yoba offers cross-border payment, digital wallet, and currency conversion
                    services. By creating a Yoba account, you accept these Terms and agree to
                    comply with them.
                </p>
                <h5>2. Definitions</h5>
                <ul>
                    <li>“User”: Any individual or entity accessing Yoba’s services.</li>
                    <li>“Account”: A registered account with Yoba.</li>
                    <li>“USD Wallet” and “NGN Wallet”: Digital wallets allowing transactions in
                        USD and Nigerian Naira.</li>
                    <li>“Virtual Card”: A prepaid card issued by Yoba for transactions.</li>
                </ul>
                <h5>
                    3. Eligibility and Account Security
                </h5>
                <h5>
                    3.1 Eligibility
                </h5>
                <p>You must be 18+ and legally capable of forming contracts.</p>
                <h5>
                    3.2 Account Registration
                </h5>
                <p>Accurate information required, with updates.</p>
                <h5>
                    3.3 Account Security
                </h5>
                <p>Users secure credentials and report unauthorized use.</p>
                <h5>
                    4. Services Overview
                </h5>
                <p>Yoba’s services include:</p>
                <ul>
                    <li>
                        Digital Wallets: Store and transact in multiple currencies.
                    </li>
                    <li>
                        Virtual Cards: Issued for secure online and offline transactions.
                    </li>
                    <li>
                        Currency Conversion: Facilitates cross-currency transactions with real-time rates.
                    </li>
                </ul>

                <h5>
                    5. Fees and Payment Terms
                </h5>

                <p>
                    Fees apply for certain services:
                </p>
                <ul>
                    <li>
                        Transaction Fees: Applicable fees for deposits, withdrawals, and transfers.
                    </li>
                    <li>
                        Currency Conversion Rates: Rates are set by Yoba’s rate management system.
                    </li>
                </ul>

                <h5>
                    6. User Responsibilities and Prohibited Activities
                </h5>
                <p>Users must:</p>
                <ul>
                    <li>
                        Maintain Accurate Information: Ensure information is current.
                    </li>
                    <li>
                        Comply with Law: Prohibited activities include fraud, money laundering.
                    </li>
                </ul>
                <p>Yoba may suspend or terminate accounts for violations.</p>

                <h5>
                    7. Transaction Processing and Dispute Resolution
                </h5>
                <p>Transaction processing includes authorization and refunds:</p>
                <ul>
                    <li>
                        Transaction Authorization: By initiating, you authorize Yoba to process.
                    </li>
                    <li>
                        Refunds and Disputes: Contact frauddesk@getyoba.com within 30 days
                        with evidence for dispute resolution.
                    </li>
                </ul>

                <h5>
                    8. Compliance with Laws
                </h5>
                <p>Users cooperate with KYC and AML checks. Yoba complies with legal data
                    retention</p>

                <h5>
                    9. Intellectual Property
                </h5>
                <p>
                    Yoba retains rights to trademarks, logos, and content. Unauthorized use
                    prohibited.
                </p>
                <h5>
                    10. Limitation of Liability
                </h5>
                <p>
                    To the fullest extent permitted by law:
                </p>
                <ul>
                    <li>
                        Service Interruptions: Not liable for losses due to outages.
                    </li>
                    <li>
                        Unauthorized Access: Yoba is not liable for losses from user negligence
                    </li>
                </ul>
                <p>Disclaimer: Services provided "as is" without warranty.</p>

                <h5>
                    11. Governing Law and Dispute Resolution
                </h5>
                <p>
                    Terms governed by customer’s country of residence. Disputes resolved via
                    arbitration in customer’s jurisdiction, as per local rules.
                </p>
                <h5>
                    12. Termination of Services
                </h5>
                <p>Yoba may suspend or terminate accounts for violations or fraud.</p>
                <h5>
                    13. Updates to Terms
                </h5>
                <p>Periodically updated Terms. Significant changes notified via email.</p>
                <h5>
                    14. Contact Information
                </h5>
                <p>For support:</p>
                <ul>
                    <li>
                        Customer Support: hello@getyoba.com
                    </li>
                    <li>
                        Fraud Desk: frauddesk@getyoba.com
                    </li>
                </ul>

            </div>
            {/* <WebsiteFooter /> */}
        </div>
    );
}

interface ArtCardProps {
    surfaceColor?: string;
    bottomColor?: string;
    text1?: string;
    text2: string;
    text3: string;
    logo?: string;
}
const ArtCard = ({ surfaceColor, bottomColor, text1, text2, text3, logo }: ArtCardProps) => {
    return (
        <div className={styles.artCard}
            style={{
                backgroundColor: bottomColor
            }}>
            <div className={styles.surface}
                style={{
                    backgroundColor: surfaceColor
                }}>

                <div className={styles.surface1}>
                    <div className={styles.text}>
                        <h3>{text1}</h3>
                        <h3>{text2}</h3>
                    </div>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <img className={styles.logoImg} src={logo} />
                        </div>
                    </div>
                </div>
                <div className={styles.surface2}>
                    {text3}
                </div>

            </div>
        </div>
    );
}


interface IconInfoProps {
    text1?: string;
    text2: string;
    logo?: any;
}
const IconInfo = ({ text1, text2, logo }: IconInfoProps) => {
    return (
        <div className={styles.iconInfoContainer}
            style={{
                // backgroundColor: bottomColor
            }}>
            <div className={styles.img}>{logo}</div>
            <h3>{text1}</h3>
            <div className={styles.thinText}>{text2}</div>
        </div>
    );
}
