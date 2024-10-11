'use client'
import React, { useState } from "react";
import './page.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
interface Props {

}

export default function Page(props: Props) {
    const [page, setPage] = useState('currency');
    const [paymentData, setPaymentData] = useState();
    return (
        <div className="app">
            {
                page == 'currency' ?
                    <CurrencyDetails
                        onProceed={(data) => {
                            setPaymentData(data);
                            setPage('payment')
                        }}
                    /> : undefined
            }

            {
                page == 'payment' ?
                    <PaymentDetails
                        onProceed={() => {
                            // Start payment
                            setPage('summary')

                        }}
                    /> : undefined
            }

            {
                page == 'summary' ?
                    <SummaryDetails
                        onProceed={() => {

                        }}
                    /> : undefined
            }


        </div>
    );
}

interface CurrencyDetailsProps {
    onProceed: (data: any) => void;
}

const CurrencyDetails = (props: CurrencyDetailsProps) => {
    const { onProceed } = props;
    const [currency, setCurrency] = useState('ngn');
    return (
        <div className="currency-details">
            <Header />

            <img src="/assets/svg/yoba-logo.svg" className="app-logo" alt="logo" />

            <h2 className="title">Help your sister survive in school</h2>
            <div className="desc">Please fill the form to complete payment</div>

            <div className="amount-container">
                <div className="amount-text">Amount:</div>
                <div className="amount-value">NGN 9,384.77</div>
            </div>
            <div className="select-container">
                <div className="input-title">What currency would you like to pay in?</div>

                <select
                    value={currency}
                    onChange={(e) => {
                        // @ts-ignore
                        const val = e.target.value;

                    }}
                    className="currency-select"
                >
                    <option value="ngn">Nigerian Naira (NGN)</option>

                </select>
            </div>

            <div
                onClick={() => {
                    onProceed(currency);
                }}
                className="button">
                <div>Next</div>
            </div>

        </div>
    );
}


interface PaymentDetailsProps {
    onProceed: () => void;
}

const PaymentDetails = (props: PaymentDetailsProps) => {
    const { onProceed } = props;
    const [currency, setCurrency] = useState('ngn');
    return (
        <div className="payment-details">
            <Header />

            <img src="/assets/svg/yoba-logo.svg" className="app-logo" alt="logo" />

            <h2 className="title">Payment Details</h2>
            <div className="desc">Please make a transfer of NGN 9,384.77 to Seun Arowolo using the account details below</div>

            <div className="payment-info-container">
                <InfoRow
                    head="ACCOUNT NUMBER:"
                    value="12345678900"
                />
                <div className="divider-line" />
                <InfoRow
                    head="AMOUNT:"
                    value="NGN 9,384.77"
                />
                <div className="divider-line" />
                <InfoRow
                    head="BANK:"
                    value="Union Bank"
                />
                <div className="divider-line" />
                <InfoRow
                    head="ACCOUNT NAME:"
                    value="Beatrice Ojo"
                />

            </div>


            <div
                onClick={() => onProceed()}
                className="button">
                <div>I've sent the money</div>
            </div>

        </div>
    );
}


interface SummaryDetailsProps {
    onProceed: () => void;
}

const SummaryDetails = (props: SummaryDetailsProps) => {
    const { onProceed } = props;
    const [currency, setCurrency] = useState('ngn');
    return (
        <div className="payment-details">
            <Header />
            <img src="/assets/svg/yoba-logo.svg" className="app-logo" alt="logo" />
            <div className="check-icon-container">
                <FontAwesomeIcon className="check-icon" icon={faCheck} />
            </div>
            <div className="payment-status-text">Payment successful</div>
            <div className="amount-desc-text">Amount</div>
            <h2 className="amount-title">NGN 9,384.77</h2>
            {/* <div className="desc">NGN 9,384.77</div> */}

            <div className="summary-info-container">
                <SummaryRow
                    left="Status"
                    right="Successful"
                />
                <div className="divider-line" />
                <SummaryRow
                    left="Transaction ID:"
                    right="19234878957MN"
                />
                <div className="divider-line" />
                <SummaryRow
                    left="To"
                    right="Yoba Naira Wallet"
                />
                <div className="divider-line" />
                <SummaryRow
                    left="Sender"
                    right="Titilope Ayobegbengaju"
                />
                <div className="divider-line" />
                <SummaryRow
                    left="Amount Sent:"
                    right="NGN 9,384.77"
                />
                <div className="divider-line" />
                <SummaryRow
                    left="Amount Received:"
                    right="NGN 9,384.77"
                />
                <div className="divider-line" />
                <SummaryRow
                    left="Date"
                    right="13 Jul 2023, 12:42 AM    "
                />

            </div>

        </div>
    );
}

const InfoRow = (props: any) => {
    const { head, value } = props;
    return (
        <div className="info-row">
            <div className="info-column">
                <div className="info-head">{head}</div>
                <div className="info-value">{value}</div>
            </div>

            {/* <div className="info-right"> */}
            <FontAwesomeIcon icon={faCopy} size="lg" color="rgba(183, 186, 191, 1)" />
            {/* </div> */}

        </div>
    )
}

interface SummaryRowProps {
    left: string;
    right: any;
}


const SummaryRow = (props: any) => {
    const { right, left } = props;
    return (
        <div className="info-row">
            <div className="info-column">
                <div className="info-value">{left}</div>
            </div>

            <div className="info-right">
                {right}
            </div>

        </div>
    )
}

const Header = (props: any) => {
    return (
        <header>
            <img src="/assets/svg/yoba-logo.svg" className="app-logo-header" alt="logo" />

        </header>
    )
}