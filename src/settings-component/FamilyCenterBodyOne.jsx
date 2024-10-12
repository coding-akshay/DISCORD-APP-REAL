import React from 'react'
import './FamilyCenter.css';

const FamilyCenterBody1 = () => {
  return (
    <div>
         <section class="main-content">
                <div className="introbox-main">
              <div class="intro-box">
                <h1>Stay informed about how your teen <br /> is using Discord.</h1>
                <p>We built Family Center to provide you with more context on <br /> how your teen uses Discord so you can work together on <br /> building positive online behaviors. <span>Learn more..</span></p>
                <button>Get Started</button>
                <div className="intro-box-pic">
                <img src="src/assets/asees.svg" alt="Intro Image"/>
                </div>
              </div>
                </div>
        
              <div class="features">
                <div class="feature-box">
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Example.svg" alt="Messages Stay Private Icon"/> */}
                  <svg class="icon_d7c696 chatCheckIcon_d00e26" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.66 21.98c.4-.03.56-.51.28-.8l-.06-.06a3 3 0 1 1 4.24-4.24l.53.52c.2.2.5.2.7 0l2.53-2.52a3 3 0 0 1 .64-.5c.14-.07.24-.2.27-.34a10 10 0 1 0-18.24 3.32c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.22 0 .44 0 .66-.02Z" class=""></path><path fill="currentColor" d="M23.7 17.7a1 1 0 0 0-1.4-1.4L18 20.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z" class=""></path></svg>
                  <h2>Messages stay private</h2>
                  <p>You can see who your teen is talking to, while still respecting their privacy.</p>
                </div>
                <div class="feature-box">
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/SVG_example_square.svg" alt="Transparent Sharing Icon"/> */}
                  <svg class="icon_d7c696" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44a2.5 2.5 0 0 0 3.32 3.32Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M22.89 11.7c.07.2.07.4 0 .6C22.27 13.9 19.1 21 12 21c-7.11 0-10.27-7.11-10.89-8.7a.83.83 0 0 1 0-.6C1.73 10.1 4.9 3 12 3c7.11 0 10.27 7.11 10.89 8.7Zm-4.5-3.62A15.11 15.11 0 0 1 20.85 12c-.38.88-1.18 2.47-2.46 3.92C16.87 17.62 14.8 19 12 19c-2.8 0-4.87-1.38-6.39-3.08A15.11 15.11 0 0 1 3.15 12c.38-.88 1.18-2.47 2.46-3.92C7.13 6.38 9.2 5 12 5c2.8 0 4.87 1.38 6.39 3.08Z" clip-rule="evenodd" class=""></path></svg>
                  <h2>Transparent sharing</h2>
                  <p>You and your teen see the exact same information, so you're on the same page.</p>
                </div>
                <div class="feature-box">
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Sample_QR_code.svg" alt="Easily Connect Icon"/> */}
                  <svg class="icon_d7c696" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM20 6a2 2 0 0 0-2-2h-3a1 1 0 1 1 0-2h3a4 4 0 0 1 4 4v3a1 1 0 1 1-2 0V6Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M5 7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Zm2 0h2v2H7V7ZM5 15c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2Zm2 0h2v2H7v-2ZM13 7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7Zm2 0h2v2h-2V7ZM17.08 13a1.5 1.5 0 0 0-1.42 1.03c-.09.25-.3.47-.56.47H15a2 2 0 0 0-2 2V20c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2h-.1c-.26 0-.47-.22-.56-.47A1.5 1.5 0 0 0 18.92 13h-1.84ZM20 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" clip-rule="evenodd" class=""></path></svg>
                  <h2>Easily connect</h2>
                  <p>Setup is as simple as using your phone to scan the QR code your teen shows you.</p>
                </div>
              </div>
        
              <div class="info-box">
  <h2>What are connected parents able to see?</h2>
  <p>Our goal is to help family members stay informed on how their teens use Discord at a high level. To respect your teen's privacy, we only allow you to see:</p>
  <ul>
    <li>Recently added friends (Names and avatars)</li>
    <li>Servers joined or participated in (Names, icons, and member counts)</li>
    <li>Users messaged or called in direct or group chats (Names, avatars, and times of last message or call)</li>
  </ul>
  <p><strong>Family Center does not share:</strong> What your teen writes or says (You will not be able to see the contents of their messages or calls).</p>
</div>
            </section>
    </div>
  )
}

export default FamilyCenterBody1
