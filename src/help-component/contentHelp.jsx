import React from "react";
import './content.css'
import iconhelp from '/src/assets/help-images/icons-help.png'
import announce from '/src/assets/help-images/announcement.svg'
// import discordbasics from '/src/assets/help-images/discordbasics1.svg'
import accountSettings from '/src/assets/help-images/accountSettings.svg'
import serverSettings from '/src/assets/help-images/serverSettings.svg'
import appsActivities from '/src/assets/help-images/appsActivities.svg'
import shopServer from '/src/assets/help-images/shopServer.svg'
import promotions from '/src/assets/help-images/promotions.svg'
import payments from '/src/assets/help-images/payments.svg'
import privacy from '/src/assets/help-images/privacy.svg'
import bugs from '/src/assets/help-images/bugs.svg'
import developer from '/src/assets/help-images/developer.svg'
import twitter from '/src/assets/help-images/twitter.svg'

function ContentHelp() {
  const card = [
    { id: 1, heading: "Announcements", para: "We've got our ear to the ground.Here's what you need to know", url: announce },
    // { id: 2, heading: "Discord Basics", para: "Start off on the right foot! Not the left one!", url: discordbasics },
    { id: 3, heading: "Announcement", para: "You're a special snowflake and so is your account", url: accountSettings },
    { id: 4, heading: "Server Settings", para: "Almost as exciting as interior decorating", url: serverSettings },
    { id: 5, heading: "Apps Activities", para: "Bringing people together from all around the globe (and occasionally Mars).", url: appsActivities },
    { id: 6, heading: "Nitro,Shop & Server Boosting", para: "please don't shop until you drop.Let us help", url: shopServer },
    { id: 7, heading: "Quets,Promotions", para: "welcome,Weary travler!Would you like to see our quets?", url: promotions },
    { id: 8, heading: "Payments and Billing", para: "That feel when you look at your bank account.", url: payments },
    { id: 9, heading: "Safety, Privacy & Policy", para: "Keep things safe & sound for you and your buddies.", url: privacy },
    { id: 10, heading: "Known Issues, Bugs & Troubleshooting", para: "Keep things safe & sound for you and your buddies.", url: bugs }

  ];

  const secCard = [
    {id: 11, heading: "Developer Support", para:"Your home for support with developing bots, apps, & games using our API and SDK!",url: developer},
    {id: 12, heading: "Twitter", para:"Have a quick question? Hit us up on Twitter!",url: twitter}
  ];


  return (
    <div className="contenthelp">
      <section className="intro">
        <h1 className="introHeading">Need help? We've got your back.</h1>
        <p className="introPara">From account settings to permissions, find help for everything Discord<br />
          If you're new to Discord and looking for tips, check out our<a className="beginner" href="">Beginner's Guide</a></p>
        <div className="helpbuttonDiv"><button className="helpButton"><img className="helpicon" src={iconhelp} alt="" />Help</button></div>
      </section>

      <section className="cardSection">
        <div className='box'>
          {card.map(item => (
            <div className='helpcard'>
              <img className="cardimg" src={item.url} alt="" />
              <h1 className="cardHead">{item.heading}</h1>
              <p className="line"></p>
              <p className="cardPara">{item.para}</p>
            </div>
          ))}
        </div>

      <h1 className="otherHead">Other ways to find help.</h1>
       
      <div className="secBox">
      {secCard.map(item =>(
        <div key={item.id} className='helpcard'>
          <img className="cardimg" src={item.url} alt="" />
          <h1 className="cardHead">{item.heading}</h1>
          <p className="line"></p>
          <p className="cardPara">{item.para}</p>
        </div>
      ))}
      </div>
      </section>
    </div>
  )
}

export default ContentHelp