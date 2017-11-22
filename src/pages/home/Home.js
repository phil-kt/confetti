import React, { Component } from 'react';
import './Home.css';

import Project from '../../components/project/Project';
import Row from '../../components/row/Row';
import Misc from '../../components/misc/Misc';
import Footer from '../../components/footer/Footer';

import notifi from '../../media/home/vr.jpg';
import macy from '../../media/home/clock.jpg';

class Home extends Component {

  constructor(){
    super();

    const date = new Date();

    let month = date.getUTCMonth() + 1; //months from 1-12
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    let localTime = date.toLocaleTimeString();

    console.log(localTime);
    console.log(parseInt(localTime.split(":")[0]));
    console.log(localTime.split(" ")[0][1] === ":");

    if(localTime.includes("AM")){
      this.state = {
        greeting: "Good morning",
        calendarDate: month + "-" + day + "-" + year
      }
    }
    else if (localTime.split(" ")[0][1] === ":" && parseInt(localTime.split("")[0][0], 10) < 6 || parseInt(localTime.split(":")[0]) === 12){
      this.state = {
        greeting: "Good afternoon",
        calendarDate: month + "-" + day + "-" + year
      }
    }
    else {
      this.state = {
        greeting: "Good evening",
        calendarDate: month + "-" + day + "-" + year
      }
    }
  }

  render() {

    return (
      <div className="Home container">
        <div className="confetti">
        </div>
        <div className="intro">

          <Row content={
            <h3 className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">{this.state.greeting}, I’m</h3>
          }/>

          <Row content={
            <h1 className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 name">Philippe Kimura-Thollander</h1>
          }/>

          <Row content={
            <div className="col-xs-12 col-sm-8 col-md-9 col-lg-6 col-xl-6">
              <p>
                An experience designer passionate about making technology delightful, intuitive, and accessible to
                everyone. (Especially in the realm of emoji, virtual reality, and augmented reality)
              </p>
              <p>
                Currently I'm wrapping up my Master's degree at Georgia Tech's HCI program and searching for opportunities starting Summer 2018 and beyond.
              </p>
              <p>
                Scroll down to see some highlighted projects, or get an overall sense by <a
                href={process.env.PUBLIC_URL + '/philippe_kimura-thollander_resume.pdf'} target="_blank">reading my
                resume.</a>
              </p>
            </div>
          }/>

        </div>

        <Project title="NotifiVR" description="Notifications designed to inform you about the real world when you’re inside a virtual reality environment." image={notifi} link="/notifivr" alt="Person picking up a VR telephone to answer a real life call" color="blue" percentage='20%'/>

        <Project title="Macy’s of the Future" description="Service design project with Macy's to envision their in-store customer experience 5 years from now." link="/macys" image={macy} alt="Macy's flagship store" color="red" percentage='50%'/>


        <Row content={
          <h3 className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 other-stuff"}>Some other stuff I’ve done</h3>
        }/>

        <Misc/>


        <Row content={
          <h3 className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 get-in-touch"}>Get in touch</h3>
        }/>

        <Row content={
          <p className={"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4 contact"}>
            Feel free to <a href="mailto:hi@philkt.me">email me</a> or <a href={"https://calendly.com/philkt/30min/" + this.state.calendarDate}>book time on my calendar</a>.
          </p>
        }/>

        <Footer/>


      </div>
    );
  }
}

export default Home;
