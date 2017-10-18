import React, { Component } from 'react';
import './Home.css';
import Project from '../../components/project/Project';
import Row from '../../components/row/Row';
import ProjectIcon from '../../components/project-icon/ProjectIcon';

import notifi from '../../media/home/diego_2.jpg';
import macy from '../../media/home/macy.jpg';

class Home extends Component {


  constructor(){
    super();

    const date = new Date();
    let localTime = date.toLocaleTimeString();

    if(localTime.includes("AM")){
      this.state = {
        greeting: "Good morning"
      }
    }
    else if (localTime.split(" ")[0][1] === ":" && parseInt(localTime.split("")[0][0], 10) < 6){
      this.state = {
        greeting: "Good afternoon"
      }
    }
    else {
      this.state = {
        greeting: "Good evening"
      }
    }
  }

  render() {
    return (
      <div className="Home container">
        <div className="intro">

          <Row content={
            <h3 className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">{this.state.greeting}, I'm</h3>
          }/>

          <Row content={
            <h1 className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">Philippe Kimura-Thollander</h1>
          }/>

          <Row content={
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-6">
              <p>
                A user experience designer passionate about making technology delightful, intuitive, and accessible to
                everyone. (Especially in the realm of emoji, virtual reality, and augmented reality)
              </p>
              <p>
                Currently I'm wrapping up my Master's degree at Georgia Tech's HCI program and searching for full-time
                opportunities starting May 2018.
              </p>
              <p>
                Scroll down to see some highlighted projects, or get an overall sense by <a
                href={process.env.PUBLIC_URL + '/philippe_kimura-thollander_resume.pdf'} target="_blank">reading my
                resume.</a>
              </p>
            </div>
          }/>

        </div>

        <Project title="NotifiVR" description="Designing and delivering real world notifications when you’re inside a virtual reality environment." image={notifi} link="/notifivr" alt="Picking up a VR telephone to answer a real life call" color="blue"/>
        
        <Project title="Macy’s of the Future" description="Project done in collaboration with Macy's to envision their in-store customer experience 5 years from now." link="/macys" image={macy} alt="Macy's flagship store" color="red"/>

        <Row content={
          <h3 className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 other-stuff"}>Some other stuff I've done</h3>
        }/>

        <div className="misc">
            <ProjectIcon/>
            <ProjectIcon/>
            <ProjectIcon/>
            <ProjectIcon/>
            <ProjectIcon/>
            <ProjectIcon/>
            <ProjectIcon/>
            <ProjectIcon/>
            <ProjectIcon/>


        </div>


      </div>
    );
  }
}

export default Home;
