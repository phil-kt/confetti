import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotifiVR.css';

import Button from '../../../components/button/Button';
import PortfolioPage from '../../../components/project-page/ProjectPage';
import Process from '../../../components/process/Process';

import hero from '../../../media/notifiVR/pickup.png';
import ProjectSection from "../../../components/project-section/ProjectSection";


class Project extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: undefined,
    description: undefined,
    link: undefined,
    image: undefined,
    alt: undefined,
    color: undefined
  }
  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-2 col-xl-8";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8 col-xl-offset-3 col-xl-6";

    let steps = [
      {
        title: "Research",
        processes: ["Survey", "Participatory Design", "Literature Review"]
      },
      {
        title: "Synthesize",
        processes: ["Mind Map", "Affinity Map", "Actionable Insights"]
      },
      {
        title: "Design",
        processes: ["Sketches", "Unity Framework", "3D Models"]
      },
      {
        title: "Prototype",
        processes: ["Unity VR Environment", "Android App", "Notification Methods"]
      },
      {
        title: "Evaluate",
        processes: ["Post-demo Questionnare", "Design Guidelines", "Academic Paper"]
      }
    ];


    return (
      <div className="NotifiVR container">
        <PortfolioPage
          title={"NotifiVR"}
          hero={hero}
          heroAlt={"User testing of a person testing the Vive VR headset."}
          content={
            <span>
              <ProjectSection
                title={"Problem"}
                content={
                  <p className={pStyle}>
                    When immersed in a virtual reality environment, you lose your connection to the outside world. Sound, vision,
                    movement, are all mirrored and reflected in VR, which is great, but sometimes you need to know when you’re getting
                    a call from your spouse or boss. We explored different methods of alerting players in VR about notifications
                    involving calls and text messages.
                  </p>
                }
              />

              <ProjectSection
                title={"Process"}
                content={
                  <div className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-1 col-xl-10">
                    <Process
                    team={"5 person team"}
                    duty={"Interaction, Visual, Software design role"}
                    time={"Feb ’17 to May ‘17"}
                    steps={steps}/>
                  </div>
                }/>

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                  <p className={pStyle}>
                    Prior to me joining this project, some preliminary work had been done in the form of a survey to VR enthusiasts that asked people to rate the priority of various forms of interruptions (call from a boss, text from a spouse, about to collide with a wall, new tag on Facebook) when experiencing VR. From this survey we understood that people were primarily interested in notifications about their physical surroundings, as well as calls and texts. Some key quotes include:
                  </p>

                  <p className={quoteStyle}>
                    "I was standing near a couch. When I turned to look at something behind me I bumped into the couch."
                  </p>

                  <p className={quoteStyle}>
                    "My phone was ringing and I missed the call. It was quite an important call. I would like an app that shows who is calling on the phone my HMD."
                  </p>

                  <p className={pStyle}>

                  </p>
                  </span>
                }
              />
              


            </span>

          }
        />
      </div>
    );
  }
}

export default Project;
