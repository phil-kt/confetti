import React, { Component } from 'react';
import './Home.css';
import Project from '../../components/project/Project';

import notifi from '../../media/home/diego_2.jpg';
import macy from '../../media/home/macy.jpg';

class Home extends Component {

  render() {
    return (
      <div className="Home container">
        <div className="intro row">
          <h3 className="col-lg-4">Good morning, I'm</h3>
          <h1 className="col-lg-12">Philippe Kimura-Thollander</h1>
          <div className="col-lg-6">
            <p>
              A user experience designer passionate about making technology delightful, intuitive, and accessible to everyone. (Especially in the realm of emoji, virtual reality, and augmented reality). Currently I'm wrapping up my Master's degree at Georgia Tech's HCI program and searching for full-time opportunities.
            </p>
            <p>
              Scroll down to see some highlighted projects, or get an overall sense by reading my resume.
            </p>
          </div>

        </div>

        <Project title="NotifiVR" description="Framework to provide you with notifications such as texts and phone calls when you’re inside a virtual reality environment." image={notifi} link="/notifivr" alt="Picking up a VR telephone to answer a real life call" color="blue"/>
        
        <Project title="Future of Macy's" description="Service design project done in collaboration with Macy's to help envision their customer experience both in and out of the store 5 years from now." link="http://macys.com" image={macy} alt="Macy's flagship store" color="red"/>
      </div>
    );
  }
}

export default Home;
