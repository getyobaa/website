import React from "react";
import './page.css';
import WebsiteHeader from "@/components/Layout/Website/WebsiteHeader/WebsiteHeader";
import WebsiteFooter from "@/components/Layout/Website/WebsiteFooter/WebsiteFooter";
import FAQItem from "@/components/FAQItem/FAQItem";

interface Props {

}

export default async function Page(props: Props) {
    return (
        <div className="app">
            <WebsiteHeader />

            <div className='intro'>
                <h1>
                    Welcome to a New Era
                </h1>
                <h1>
                    of Online Payments
                </h1>
                <p>We are empowering users to shop online with</p>
                <p>confidence and receive payments instantly</p>

                <div
                    className="row images-container" >
                    <div className="top-image-container">
                        <img src='/assets/img/about-us-image.png'
                            className="top-image safari-image" />
                    </div>
                </div>
            </div>
            <div className='about-container'>
                <h2>
                    The Yoba Story
                </h2>
                <p className="click-and-pay-text">Click, Pay, Explore. It's that Easy. Go global with Yobaa.</p>
                <div className='about-us-container'>
                    <div className="about-us-story-container">
                        <h3>
                            Innovation Fueled By Frustration
                        </h3>
                        <p>
                            As a Nigerian digital creator, I know all too well the challenges of receiving payments from clients or trying to purchase products and services on international websites. The frustration of finding the perfect item online only to see a "Card Declined" message at checkout can be disheartening.
                        </p>
                        <p>
                            That's where Yobaa comes in. At Yobaa, we are committed to empowering our customers and bridging the gap, enabling you to fully participate in the global financial sphere. Whether it's seamless cross-border transactions or reliable virtual USD cards, Yobaa is here to ensure that your financial interactions are smooth and hassle-free.
                        </p>
                    </div>

                    <div className="erik-image-container">
                        <img src='/assets/img/eric-okafor.png'
                            className="erik-image" />
                        <div className="profile-info">
                            <p>
                                Eric Okafor
                            </p>
                            <p>
                                Co-Founder, Yobaa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='how-it-works-container'>
                <h2>
                    How it works
                </h2>
                <p>Click, Pay, Explore. It's that Easy. Go global with Yobaa.</p>
                <div className='how-it-works-inner-container'>
                    <div className='phone-image-container'>
                        <img src='/assets/img/iphone-yoba.png' className='iphone-image' />
                    </div>
                    <div className='instructions-list'>
                        <div>
                            <div className='instruction-item'>
                                <div className='list-number'>1</div>
                                <div className='list-item-details'>
                                    <div className='list-item-title'>
                                        Download App
                                    </div>
                                    <div className='list-item-description'>
                                        Download Yobaa from the play store or app store
                                    </div>
                                </div>
                            </div>
                            <div className='instruction-item'>
                                <div className='list-number'>2</div>
                                <div className='list-item-details'>
                                    <div className='list-item-title'>
                                        Create your account
                                    </div>
                                    <div className='list-item-description'>
                                        Complete onboarding to create an account
                                    </div>
                                </div>
                            </div>
                            <div className='instruction-item'>
                                <div className='list-number'>3</div>
                                <div className='list-item-details'>
                                    <div className='list-item-title'>
                                        Create your card
                                    </div>
                                    <div className='list-item-description'>
                                        Once your account is set up, you can create your virtual dollar card effortlessly. You can also customize your card to reflect your style and preferences.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='how-it-works-store-links'>
                            <img src="/assets/img/appstore-download.png" />
                            <img src="/assets/img/playstore-download.png" style={{ marginLeft: 10 }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='happy-users-container'>
                <div className='happy-users-textbox'>
                    <h2>
                        Hear from our happy users
                    </h2>
                    <p>Click, Pay, Explore. It's that Easy. Go global with Yobaa.</p>
                </div>
                <div className='happy-users-inner-container'>
                    <div className='chatbox purple-bg'>
                        <p>Shopping from international brands was always a luxury I couldn't afford. Yobaa changed that! No more hidden fees or conversion headaches. Now I can indulge in my fashion passion without breaking the bank</p>
                        <div className='chat-line'></div>
                        <p className='chat-name'>Bola</p>
                        <p>Fashion Enthusiast</p>
                    </div>
                    <div className='chatbox second-blue-bg'>
                        <p>As a fashion designer selling online, managing customer payments was a constant hassle. Yobaa changed everything! Now, with payment links, I can easily receive payments from clients. Yobaa has truly empowered my business to grow.</p>
                        <div className='chat-line'></div>
                        <p className='chat-name'>Adeola</p>
                        <p>Fashion Designer</p>
                    </div>
                    <div className='chatbox deep-blue-bg'>
                        <p>Running a small business in Nigeria often requires quick and secure online transactions. Yobaa has become an essential tool for my business. I use virtual cards for various online purchases, from software subscriptions to marketing tools.</p>
                        <div className='chat-line'></div>
                        <p className='chat-name'>Emeka</p>
                        <p>Business Owner</p>
                    </div>
                    <div className='chatbox second-purple-bg'>
                        <p>I'm always on the lookout for ways to save money and maximize value. Yobaa's virtual cards have helped me do just that! They allow me to take advantage of online discounts and promotions without worrying about hidden fees.</p>
                        <div className='chat-line'></div>
                        <p className='chat-name'>Emeka</p>
                        <p>Business Owner</p>
                    </div>

                    <div className='chatbox pink-bg' style={{ marginRight: 50 }}>
                        <p>As a freelancer, receiving payments from international clients was a nightmare. Traditional money transfer services were expensive and slow. Yobaa's payment links are a godsend! They allow me to get paid quickly and securely.</p>
                        <div className='chat-line'></div>
                        <p className='chat-name'>Felix</p>
                        <p>Business Owner</p>
                    </div>
                </div>
                <img src="/assets/svg/yoba-logo.svg" className="app-logo-large-happy-users" alt="logo" />
            </div>
            <div className='questions-container'>
                <div className='questions-textbox'>
                    <h2>
                        Got Questions
                    </h2>
                    <p>Click, Pay, Explore. It's that Easy. Go global with Yobaa.</p>
                </div>

               
                <FAQItem
                    question="What currencies does Yoba support?"
                    answer="USD and Naira"
                />
                <FAQItem
                    question="Are there any fees associated with using Yoba?"
                    answer="There are no fees associated with using the Yobaa app"
                />
                <FAQItem
                    question="How do i add funds to my Yoba account?"
                    answer={`Simply login to your Yobaa account and click on "Fund Wallet"`}
                />

                <div className='more-questions'>
                    <h3>Still have more questions?</h3>
                    <p>Can’t find the answer you’re looking for? Please send a message to our friendly team help@yooba.ai</p>
                </div>
            </div>
            <WebsiteFooter />
        </div>
    );
}