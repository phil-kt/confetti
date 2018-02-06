import React, { Component } from 'react';
import './About.css';

import Row from '../../components/row/Row';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

import me from '../../media/about/me.jpg';

class About extends Component {

  render() {

    return (
      <div className="About container">

        <Navbar nextProjectLink={null} nextProjectName={null} color={"grey"}/>

        <div className={"content"}>

          <Row content={
            <div className="my-photo-container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className={"my-photo"}>
                <img src={me} alt={"Me in a ballpit"}/>
              </div>
            </div>
          }/>

          <Row content={
            <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6">Hey there!</h3>
          }/>

          <Row content={
            <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
              Glad you’d like to get more familiar. Here’s a quick overview of who I am:
            </p>
          }/>

          <Row content={
            <ul className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6 list">
              <li>Half-<span className="emoji" role="img" aria-label="swedish flag">🇸🇪</span>half-<span className="emoji" role="img" aria-label="japanese flag">🇯🇵</span>raised mostly in NY <span role="img" aria-label="statue of liberty">🗽</span></li>
              <li>Big fan of craft beer <span className="emoji" role="img" aria-label="clinking beer glasses">🍻</span>and creating cocktails at home <span role="img" aria-label="cocktail glasss">🍸</span></li>
              <li>Read manga pretty much daily <span className="emoji" span role="img" aria-label="stack of books">📚</span>and love everything mecha <span role="img" aria-label="robot">🤖</span></li>
              <li>Into 80's J-Pop, Hip-Hop, and Future Funk 🎶</li>
              <li>An emoji fanboy <span role="img" aria-label="nervous smile">😅</span></li>
            </ul>
          }/>

          <Row content={
            <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
              If that wasn’t enough info, feel free to stalk my social media that I conveniently link to at the bottom.
            </p>
          }/>

          <Row content={
            <p className="about-me-copy col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
              Also, thanks for stopping by my website! Means a lot, hope you like it. If you have any suggestions or just wanna hit me up feel free to send mail to hi [at] philkt [dot] me. (This is a poor attempt to beat spam 🥫)
            </p>
          }/>

        </div>

        <Footer/>


      </div>
    );
  }
}

export default About;
