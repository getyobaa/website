import React from 'react';
import styles from './page.module.css';
import './page.css';
import WebsiteHeader from '@/components/Layout/Website/WebsiteHeader/WebsiteHeader';
import WebsiteFooter from '@/components/Layout/Website/WebsiteFooter/WebsiteFooter';

export default function Page() {
    return (
        <div className={styles.mainContainer}>
            <title>Privacy Policy</title>
            {/* <WebsiteHeader /> */}
            <div className={styles.content}>
                <h5>Privacy Policy</h5>
                <p>Welcome to Yoba! This Privacy Policy describes how Yoba, collects, uses,
                    shares, and protects your personal information when you use our platform at
                    www.getyoba.com or our mobile applications.
                    We value your privacy and commit to safeguarding your data in line with
                    industry standards and legal requirements. By using Yoba’s services, you
                    agree to the terms of this Privacy Policy. For any questions, please reach out
                    to us at hello@getyoba.com.</p>

                <h5>
                    1. Information We Collect
                </h5>
                <p>
                    We collect information in a variety of ways to support our platform’s
                    functionality, fulfill regulatory obligations, and improve your experience.
                </p>
                <h5>1.1 Personal Information You Provide</h5>
                <p>
                    When you open an account or use Yoba’s services, we may collect:
                </p>
                <ul>
                    <li>Identification Information: Full name, date of birth, nationality, and
                        government-issued ID (e.g., passport or driver’s license).</li>
                    <li>Contact Information: Email address, residential address, and phone
                        number.</li>
                    <li>Financial Information: Bank account details, card information, and
                        transaction history.</li>
                    <li>Verification Information: Biometric data, such as facial recognition, and
                        government identification numbers.</li>
                </ul>
                <h5>
                    1.2 Automatically Collected Information
                </h5>
                <p>Automatically gathered information helps improve services:</p>
                <ul>
                    <li>
                        Device and Usage Data: IP address, browser type, device model, and
                        unique device identifiers.
                    </li>
                    <li>
                        Activity Data: Logs of actions like wallet funding, transaction histories, and
                        login times.
                    </li>
                </ul>

                <h5>
                    1.3 Cookies and Tracking Technologies
                </h5>

                <p>
                    Cookies and tracking technologies are used for secure, optimized experience:
                </p>
                <ul>
                    <li>
                        Essential Cookies: Necessary for core functionalities.
                    </li>
                    <li>
                        Analytical Cookies: Analyze user behavior and improve platform performance.
                    </li>
                    <li>
                        Security Cookies: Detect unauthorized access and prevent fraudulent activity
                    </li>
                </ul>
                <p>
                    Manage cookies in your browser settings. Disabling cookies may impact certain platform features.
                </p>

                <h5>
                    1.4 Information from Third-Party Sources
                </h5>
                <p>Additional information may be collected from:</p>
                <ul>
                    <li>
                        Payment Processors and Financial Institutions: To facilitate transactions
                        and resolve disputes.
                    </li>
                    <li>
                        Verification Providers: For identity confirmation and fraud prevention.
                    </li>
                    <li>
                        Partners: Business partners that offer complementary services.
                    </li>
                </ul>

                <h5>
                    2. How We Use Your Information
                </h5>
                <p>We use data to ensure services, compliance, and improved experience:</p>
                <ul>
                    <li>
                        Service Provision: Account creation, transaction processing, and digital
                        wallets.
                    </li>
                    <li>
                        Security and Verification: For identity verification, fraud detection, and
                        platform security.
                    </li>
                    <li>
                        Legal Compliance: Meeting AML, KYC, and consumer protection laws.
                    </li>
                    <li>
                        Customer Support: Addressing inquiries, technical issues, and dispute
                        resolution.
                    </li>
                </ul>

                <h5>
                    2.2 Personalization and Marketing
                </h5>
                <p>Personalization and Marketing may include:</p>
                <ul>
                    <li>
                        Personalized Services: Suggested features based on account history.
                    </li>
                    <li>
                        Promotional Communications: Emails about Yoba’s products, promotions,
                        and offers, with opt-out options.
                    </li>
                </ul>
                <h5>
                    2.3 Platform Improvement and Analytics
                </h5>
                <p>
                    Aggregated data helps understand usage trends, enhance features, and
                    refine our offerings.
                </p>
                <h5>
                    3. Sharing of Information
                </h5>
                <p>
                    Information sharing follows strict confidentiality:
                </p>
                <ul>
                    <li>
                        With Service Providers: Such as payment processors, verification services,
                        and analytics partners.
                    </li>
                    <li>
                        Legal Obligations: Sharing data as required by law with regulatory
                        authorities.
                    </li>
                    <li>
                        Corporate Transactions: Data may be transferred in mergers, acquisitions,
                        or asset sales.
                    </li>
                </ul>

                <h5>
                    4. International Data Transfers
                </h5>
                <p>
                    Yoba operates internationally, and data may be transferred for processing.
                    Safeguards like Standard Contractual Clauses are used for protection.
                </p>
                <h5>
                    5. Data Security
                </h5>
                <p>Security measures to protect data include:</p>
                <ul>
                    <li>
                        Encryption: Encrypting sensitive data in transit and at rest.
                    </li>
                    <li>
                        Access Controls: Restricting access to authorized personnel.
                    </li>
                    <li>
                        Regular Audits: Frequent security audits and infrastructure updates.
                    </li>
                </ul>

                <h5>
                    6. Your Rights
                </h5>
                <p>
                    Depending on your location, rights may include:
                </p>
                <ul>
                    <li>
                        Access: Obtain details about your information.
                    </li>
                    <li>
                        Correction: Update any incorrect or incomplete data.
                    </li>
                    <li>
                        Deletion: Request removal of data where applicable.
                    </li>
                    <li>
                        Data Portability: Request data in a structured format.
                    </li>
                    <li>
                        Withdraw Consent: For data processing based on consent.
                    </li>
                </ul>
                <p>
                    Contact hello@getyoba.com to exercise rights.
                </p>
                <h5>
                    7. Data Retention
                </h5>
                <p>
                Data retention aligns with purposes outlined in this policy, with extended 
                retention for regulatory compliance.
                </p>
                <h5>
                    8. Changes to This Privacy Policy
                </h5>
                <p>
                Updates to this policy may be communicated via email or website 
                notifications.
                </p>
                <h5>
                    9. Contact Us
                </h5>
                <p>
                Questions? Contact us:
                </p>
                <ul>
                    <li>
                    Email: hello@getyoba.com
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
