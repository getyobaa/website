import React from "react";

interface Props {

}

export default async function Page(props: Props){
    return (
        <div className="app">
      
      <header className="header">
        <img src={logo} className="app-logo" alt="logo" />
        <div className='links'>
          <a><div>Home</div></a>
          <a><div>Company</div></a>
          <a><div>Contact Us</div></a>
        </div>

        <button>Download App</button>

      </header>

      <div className='intro'>
        <h1>
          Your Instant
        </h1>
        <h1>
          Virtual Dollar Card
        </h1>
        <p>Click, Pay, Explore. It's that Easy. Go global with Yobaa.</p>
        <div className='store-links'>
          <img src="./appstore-download.png" />
          <img src="./playstore-download.png" style={{ marginLeft: 10 }} />
        </div>
      </div>
      <div className='functions-container'>
        <h2>
          Discover the Yoba Advantage
        </h2>
        <p>Click, Pay, Explore. It's that Easy. Go global with Yobaa.</p>
        <div className='yoba-box-container'>
          <div className='yoba-box1'>
            <p className='yoba-box-text'>Shop globally from anywhere, access international brands and subscriptions easily</p>
          </div>
          <div className='yoba-box2'>
            <p className='yoba-box-text'>Control your card, track spending, and manage funds on the go</p>
          </div>
          <div className='yoba-inner-box-container'>
            <div className='yoba-box3'>
              <p className='yoba-box-text'>Zero conversion or maintenance fees</p>
            </div>
            <div className='yoba-box4'>
              <p className='yoba-box-text'>Download the app</p>
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
            <img src='./iphone-yoba.png' className='iphone-image' />
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
              <img src="./appstore-download.png" />
              <img src="./playstore-download.png" style={{ marginLeft: 10 }} />
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
          <div className='chatbox deep-blue-bg'>
            <p>Shopping from international brands was always a luxury I couldn't afford. Yobaa changed that! No more hidden fees or conversion headaches. Now I can indulge in my fashion passion without breaking the bank</p>
            <div className='chat-line'></div>
            <p className='chat-name'>Bola</p>
            <p>Fashion Enthusiast</p>
          </div>
          <div className='chatbox light-blue-bg'>
            <p>Shopping from international brands was always a luxury I couldn't afford. Yobaa changed that! No more hidden fees or conversion headaches. Now I can indulge in my fashion passion without breaking the bank</p>
            <div className='chat-line'></div>
            <p className='chat-name'>Bola</p>
            <p>Fashion Enthusiast</p>
          </div>
          <div className='chatbox light-blue-bg'>
            <p>Shopping from international brands was always a luxury I couldn't afford. Yobaa changed that! No more hidden fees or conversion headaches. Now I can indulge in my fashion passion without breaking the bank</p>
            <div className='chat-line'></div>
            <p className='chat-name'>Bola</p>
            <p>Fashion Enthusiast</p>
          </div>
        </div>
        <img src={logo} className="app-logo-large-happy-users" alt="logo" />
      </div>
      <div className='questions-container'>
        <div className='questions-textbox'>
          <h2>
            Got Questions
          </h2>
          <p>Click, Pay, Explore. It's that Easy. Go global with Yobaa.</p>
        </div>

        <div className='question'>
          <div>What currencies does Yoba support?</div>
          <img src={arrowDown} className="arrow-down" alt="arrow-down" />
        </div>
        <div className='question'>
          <div>Are there any fees associated with using Yoba?</div>
          <img src={arrowDown} className="arrow-down" alt="arrow-down" />
        </div>
        <div className='question'>
          <div>How do i add funds to my Yoba account?</div>
          <img src={arrowDown} className="arrow-down" alt="arrow-down" />
        </div>

        <div className='more-questions'>
          <h3>Still have more questions?</h3>
          <p>Can’t find the answer you’re looking for? Please send a message to our friendly team help@yooba.ai</p>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-stack-wrapper'>
          <div className='stack-card pink-bg margin-t-20 i-1'>
            <h2>
              Join Yobaa Today
            </h2>
            <p>Experience the freedom of borderless spending. Claim your free card and unlock a world of possibilities.</p>
            <div className='join-store-links'>
              <img src="./appstore-download.png" />
              <img src="./playstore-download.png" style={{ marginLeft: 10 }} />
            </div>
          </div>
          <div className='stack-card yellow-bg margin-t-20 i-2' />
          <div className='stack-card purple-bg2 margin-t-20 i-3' />
          <div className='stack-card orange-bg margin-t-20 i-4' />
        </div>

        <div className='footer-bottom'>
          <img src={logo} className="app-logo-footer" alt="logo" />
          <div className='footer-text'>© 2024 Yooba Plc. All Rights Reserved</div>
          <div className='row'>
            <img src="/yoba-instagram.png" className="social-link" alt="social" />
            <img src="/yoba-linkedin.png" className="social-link" alt="social" />
            <img src="/yoba-youtube.png" className="social-link" alt="social" />
            <img src="/yoba-twitter.png" className="social-link" alt="social" />
          </div>
        </div>
      </div>
    </div>
    );
}