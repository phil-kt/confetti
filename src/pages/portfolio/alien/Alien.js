import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import VisibilitySensor from 'react-visibility-sensor';
import ImageZoom from 'react-medium-image-zoom';
import Isvg from 'react-inlinesvg';
import './Alien.css';

import Button from '../../../components/button/Button';
import ProjectPage from '../../../components/project-page/ProjectPage';
import Process from '../../../components/process/Process';
import ProjectStats from '../../../components/project-stats/ProjectStats';
import ProjectSection from "../../../components/project-section/ProjectSection";
import Row from '../../../components/row/Row';
import Callout from '../../../components/callout/Callout';
import Video from '../../../components/video/Video';

import hero from '../../../media/alien/hero.jpg';
import problem from '../../../media/alien/vr_input.svg';

import globe from '../../../media/alien/icons/globe.svg';
import prior_work from '../../../media/alien/icons/prior_work.svg';


import wave from '../../../media/alien/gestures/Wave.svg';
import point from '../../../media/alien/gestures/Point.svg';
import grab from '../../../media/alien/gestures/Grab.svg';
import give from '../../../media/alien/gestures/Give.svg';
import bow from '../../../media/alien/gestures/Bowing.svg';

import storyboard from '../../../media/alien/storyboard.jpg';
import storylines from '../../../media/alien/storylines.png';

import alien from '../../../media/alien/icons/alien.svg';
import terrain from '../../../media/alien/icons/terrain.svg';
import ten from '../../../media/alien/icons/ten.svg';

import gremlynx from '../../../media/alien/icons/gremlynx.svg';
import island from '../../../media/alien/icons/island.svg';
import twelve from '../../../media/alien/icons/twelve.svg';

import gesture_doodles from '../../../media/alien/gesture_doodles.jpg';
import first_touch from '../../../media/alien/first_contact.jpg';
import job_simulator from '../../../media/alien/job_simulator.jpg';
import bank_robber from '../../../media/alien/bank_robber.jpg';
import scene from '../../../media/alien/scene.jpg';
import user_test_1 from '../../../media/alien/user_test_1.jpg';
import user_test_2 from '../../../media/alien/user_test_2.jpg';

import wave_webm from '../../../media/alien/wave.webm';
import wave_mp4 from '../../../media/alien/wave.mp4';

class Alien extends Component {

  constructor () {
    super();

    this.state = {
      researchOpen: false,
      writingOpen: false
    };

    this.collapseResearch = this.collapseResearch.bind(this);
    this.collapseWriting = this.collapseWriting.bind(this);
  }


  collapseResearch() {
    this.setState({
      researchOpen: !this.state.researchOpen
    })
  }

  collapseWriting() {
    this.setState({
      writingOpen: !this.state.writingOpen
    })
  }


  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

    let steps = [
      {
        title: "Research",
        processes: ["Gesture Review", "Prior Work", "World Exploration"]
      },
      {
        title: "Write",
        processes: ["Storyboard", "Script"]
      },
      {
        title: "Design & Test",
        processes: ["Character", "Environment", "User Test I"]
      },
      {
        title: "Design & Test II",
        processes: ["Character", "Environment", "User Test II"]
      },
      {
        title: "Present",
        processes: ["Video", "Poster"]
      }
    ];

    return (
      <div className="Alien">
        <ProjectPage
          title={"Alien Encounter"}
          description={"An exploration of gestural communication in VR using a Star Trek narrative"}
          hero={hero}
          heroAlt={"Our friendly purple alien"}
          navbarColor={"purple"}
          content={
            <span>
              <ProjectSection
                title={"Problem"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Communication is one of the largest difficulties in virtual reality right now. How do you talk or convey an idea to your fellow players or characters within game? Keyboard entry is cumbersome and time-consuming, and not all headsets or games support voice. This leaves one final avenue of communication: gestures. <b>Our team explored how might we communicate with characters in a VR game using only gestures.</b>
                      </p>
                    }/>

                    <Row content={
                      <Isvg className={pStyle} src={problem}/>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Keyboards and voice recognition are still being worked out in VR and not appropriate for all environments
                      </p>
                    }/>
                  </span>
                }/>

              <ProjectSection
                title={"Solution"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        A Star Trek themed game where you are beamed down to communicate with an alien creature to establish a line of contact between them and the Federation. All communication with the alien is done through gestures like waving or pointing.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <span className={pStyle + " video-holder"}>
                          <span className="aspect-keeper">
                            <iframe src="https://www.youtube.com/embed/4A_V-faElRc?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen={true} title="Video of Alien Encounter"/>
                          </span>
                      </span>
                    }/>
                  </span>
                }/>

               <ProjectSection
                 title={"Process"}
                 content={
                   <span>
                    <Row content={
                      <div
                        className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-2 col-xl-8">
                        <Process
                          steps={steps}/>
                      </div>
                    }/>
                  </span>
                 }
               />

              <ProjectSection
                title={"Logistics"}
                content={
                  <ProjectStats
                    team={["2 designers", "1 developer", "1 project manager"]}
                    responsibilities={["Interaction Design", "Environment Design", "User Testing", "3D Modeling & Animation"]}
                    time={"Sept ’17 – Dec ’17"}
                  />
                }
              />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        We started with seeking a narrative which to frame our VR experience and figuring out what gestures we could include in our game as "universally" understood. These were the key building blocks of what we needed to figure out before we could craft a storyboard.
                      </p>
                    }/>

                    <div className="row callouts">
                      <Callout
                        image={wave}
                        altText={"hand waving"}
                        title={"Gestures"}
                        description={"Researched what gestures to include for the game"}
                        first={true}
                        className={"gestures"}
                        delay={0}
                      />

                      <Callout
                        image={prior_work}
                        altText={"coffee and oculus icons"}
                        title={"Prior Work"}
                        description={"Looked at Job Simulator and Oculus First Contact"}
                        delay={150}
                      />

                      <Callout
                        image={globe}
                        altText={"world icon"}
                        title={"World Exploration"}
                        className={"callout-text"}
                        description={"Determined the setting of our VR narrative"}
                        middle={true}
                        delay={300}
                      />
                    </div>


                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseResearch}>
                        <Button
                          label={this.state.researchOpen ? "Hide Research Process" : "See Research Process"}
                          color={"outline purple"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.researchOpen}>

                    <Row content={
                      <h4 className={pStyle}>Gestures</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Defining what are “universal” gestures was a tricky thing. Browsing through Wikipedia lists of gestures and reading various studies revealed that there are none that are truly “universal”. For example, <span role="img" aria-label="ok">👌</span> is seen as "OK" in most Western countries, but is offensive in Brazil or American Sign Language.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: gesture_doodles,
                            alt: 'Sketches of gestures like waving, pointing, clapping',
                            className: 'feature-image tall-image'
                          }}
                          zoomImage={{
                            src: gesture_doodles,
                            alt: 'Sketches of gestures like waving, pointing, clapping'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        My doodles of potential gestures we could use
                      </p>
                    }/>

                    <Row content={
                     <p className={pStyle}>
                       This complicated what exactly we could use in our game to ensure that it would be universal. Our other alternative was to come up with gestures completely on our own, but we were worried people would not understand the gestures or their intent if we did so. In the end we focused on Western-based gestures to use in our scenario.
                     </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Prior Work</h4>
                    }/>

                    <div className="row one-margin-top">
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img className="feature-image" src={job_simulator}
                             alt="Screenshot of job simulator"/>
                      </div>

                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img className="feature-image" src={first_touch}
                             alt="Screenshot of Oculus First Contact"/>
                      </div>
                    </div>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Job Simulator and Oculus First Contact
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We also looked at what other VR games have done in the realm of gestures to help inspire us. Specifically we looked at Job Simulator and Oculus First Contact, both environments heavily focused on gestures and interaction with objects within the scene. By playing these games we got a better sense of what was possible with the Touch controllers and to what extent we could reflect hand movement.
                      </p>
                    }/>



                    <Row content={
                      <h4 className={pStyle}>World Exploration</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The core of our environment was of course the context the player was going to be immersed in. The narrative of our game was a key part in development, especially because this was part of Dr. Janet Murray's project studio.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We started with an alien scenario, believing it be the easiest way to explain why you couldn't talk to the NPCs in the game. We then went on to trying a Western robbery, where you were a teller held at gunpoint who would be shot if you spoke. However we ran into issues of agency and the problem of talking, eventually settling back on the alien scenario, specifically in the world of Star Trek.
                      </p>
                    }/>

                     <Row className="one-margin-top" content={
                       <div className={pStyle}>

                         <ImageZoom
                           image={{
                             src: bank_robber,
                             alt: 'Storyboard of a teller of a bank being robbed',
                             className: 'feature-image'
                           }}
                           zoomImage={{
                             src: bank_robber,
                             alt: 'Storyboard of a teller of a bank being robbed'
                           }}
                         />
                       </div>
                     }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        One of the earlier storyboards
                      </p>
                    }/>

                    </Collapse>

                  </span>

                }
              />

              <ProjectSection
                title={"Write"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        After all the research, our next task was to write. We were making a game, so we needed to come up with a story that would integrate all our gestures in a way that made sense. We also had to narrow down what gestures to have the player perform, as it would inform the script as to what would happen. We eventually settled on these five:
                      </p>
                    }/>

                    <div className="row callouts gestures">
                      <Callout
                        image={wave}
                        altText={"hand waving"}
                        title={"Wave"}
                        description={"To say hello to the alien"}
                        first={true}
                        number={5}
                      />

                      <Callout
                        image={point}
                        altText={"finger pointing"}
                        title={"Point"}
                        description={"To indicate what you want"}
                        delay={150}
                        number={5}
                      />


                      <Callout
                        image={grab}
                        altText={"hand grabbing"}
                        title={"Grab"}
                        description={"To take their gift"}
                        delay={300}
                        number={5}
                      />

                      <Callout
                        image={give}
                        altText={"two hands extended"}
                        title={"Give"}
                        description={"To give the transponder"}
                        delay={450}
                        middleOffset={true}
                        number={5}
                      />


                      <Callout
                        image={bow}
                        altText={"person bowing"}
                        title={"Bow"}
                        description={"To say thanks and goodbye"}
                        middle={true}
                        delay={600}
                        number={5}
                      />
                    </div>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseWriting}>
                        <Button
                          label={this.state.writingOpen ? "Hide Writing Process" : "See Writing Process"}
                          color={"outline purple"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.writingOpen}>

                    <Row content={
                      <h4 className={pStyle}>Storyboard</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We began by drafting out a storyboard that incorporated gestures we wanted to use. The scenario was that of greeting an alien on their world, trying to give them a transponder. We also had to take into account what gestures we were going to perform, and factor them into the story.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Most of our gesture choices were driven by the fact that the Oculus Touch has a limited range of gestures it supports. Only the pointer and thumb fingers are supported as individual digits, the other three finders move as one block. This makes it difficult to incorporate gestures that use fingers in ways other Oculus designed, for example we could not detect Spock's famous Vulcan salute <span role="img" aria-label="live long and prosper">🖖</span>
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        These restrictions, plus our scenario of encountering an alien species and giving them a transponder, led us to focus on gestures involving greeting and trading.
                      </p>
                    }/>

                     <Row className="one-margin-top" content={
                       <div className={pStyle}>

                         <ImageZoom
                           image={{
                             src: storyboard,
                             alt: 'Storyboard of a visiting an alien planet for trade',
                             className: 'feature-image'
                           }}
                           zoomImage={{
                             src: storyboard,
                             alt: 'Storyboard of a teller of a bank being robbed'
                           }}
                         />
                       </div>
                     }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        A storyboard with our final alien
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Script</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Because this game was also going to feature full voice acting for the character of Captain Janeway, we had to write out an entire script for the voice actor. This required a lot of mapping out different branches to provide appropriate prompts depending on how many attempts at the gesture had been done.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: storylines,
                            alt: 'Image of Unity animator controller showing connections of story path',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: storylines,
                            alt: 'Image of Unity animator controller showing connections of story path'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Our Unity animation flow provides insight into all the paths we had to write
                      </p>
                    }/>

                    </Collapse>



                  </span>

                }
              />

              <ProjectSection
                title={"Design & Test"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        When it comes to creating a VR experience, the most important thing you need to impart to your player is a sense of being. They need to feel as if they really are on another planet, or exploring a medieval empire. Because of this both character and environment design are vital to ensure this sense of immersion. I made ample use of <a href="https://sketchfab.com" target="_blank" rel="noopener noreferrer" >Sketchfab</a> to grab basic models to tweak and animate for ourselves to cut down the 3D time.
                      </p>
                    }/>


                    <div className="row callouts">
                      <Callout
                        image={alien}
                        altText={"domed headed alien"}
                        title={"Character Design"}
                        description={"Chose and animated 3D model of the alien"}
                        first={true}
                        delay={0}
                      />

                      <Callout
                        image={terrain}
                        altText={"two hills and a valley"}
                        title={"Environment Design"}
                        description={"Created an environment using Unity's terrian tool"}
                        delay={150}
                      />

                      <Callout
                        image={ten}
                        altText={"ten"}
                        title={"Users Tested"}
                        className={"callout-text"}
                        description={"Put people in our game as early as possible"}
                        middle={true}
                        delay={300}
                      />
                    </div>


                    <Row content={
                      <h4 className={pStyle}>Character Design</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Since this was an alien focused game, my first instinct was to have a model that conformed to the stereotypical image of an alien: a grey suited humanoid shape with a helmet obscuring its face. <b>A humanoid appearance was important so that a person would be primed to mimic the character due to their similar stature.</b>
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <div className="aspect-keeper">
                          <iframe width="640" height="480" src="https://sketchfab.com/models/602051ff61fe429e800c66da4f6d0318/embed?camera=0" frameBorder={0} allowFullScreen={true} title={"Our first alien character"}></iframe>
                        </div>
                      </p>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Our first alien
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Environment Design</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        As for the environment, we thought that it should be a more muted environment, so that the player would be more focused on the alien in front of them instead of getting too engrossed in their surroundings. So I just created a basic landmass using Unity's terrain editor and placed our alien inside it.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                        <img className="feature-image" src={scene} style={{width: "100%"}}
                             alt="A basic terrain of mountains and some grass"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Our first terrain demo
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>User Test I</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        With our first round of assets done it was time to user test. We had an informal demo session with fellow members in the lab, as well as some passers-by during a public lab session.
                      </p>
                    }/>

                    <Row content={
                      <p className={quoteStyle}>
                        “Should I be using three fingers or five?”
                      </p>
                    }/>

                    <Row content={
                      <p className={quoteStyle}>
                        “There's not much here is there?”
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Based on their input, we realized that our current <b>alien was not expressive enough to elicit an emotional response and that the environment was not as engrossing to truly immerse participants into the VR world.</b>
                      </p>
                    }/>


                    <Row className="one-margin-top" content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: user_test_1,
                            alt: 'Person wearing Oculus headset interacting with alien',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: user_test_1,
                            alt: 'Person wearing Oculus headset interacting with alien'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        The first user test session
                      </p>
                    }/>

                  </span>
                }
              />
              <ProjectSection
                title={"Design & Test II"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        After our first round of design and testing, we quickly realized that our game was missing an essence of humanity and at the same time a more extraterrestrial touch. Players were expecting a more humanistic feedback system, while at the same time wanting a more ”out of this world” experience.
                      </p>
                    }/>

                     <div className="row callouts">
                      <Callout
                        image={gremlynx}
                        altText={"a dog-like alien"}
                        title={"Character Design"}
                        description={"Switched to an animal-like alien for more expression and connection with the user"}
                        first={true}
                        delay={0}
                      />

                      <Callout
                        image={island}
                        altText={"a floating island"}
                        title={"Environment Design"}
                        description={"Chose a more detailed and mystical landscape to immerse players in an alien world"}
                        delay={150}
                      />

                      <Callout
                        image={twelve}
                        altText={"twelve"}
                        title={"Users Tested"}
                        className={"callout-text"}
                        description={"Held a demo day for outside visitors"}
                        middle={true}
                        delay={300}
                      />
                    </div>

                    <Row content={
                      <h4 className={pStyle}>Character Design</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        One of the main complaints was our character design, <b>our alien felt lifeless and also difficult to engage with</b>. This was likely due the fact that our alien was helmeted and their facial features could not be seen. In order to alleviate this, I <b>took a more animalistic approach using an alien model which more resembled a domestic dog or cat in order to make it more relatable</b> to players, as well as being more expressive due to the addition of ears and a tail.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <div className="aspect-keeper">
                          <iframe width="640" height="480" src="https://sketchfab.com/models/f321f28f6a224ecfba50ea4d33e4a6ba/embed" frameBorder={0} allowFullScreen={true} title={"Gremlynx"}></iframe>
                        </div>
                      </p>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Our more friendly second alien
                      </p>
                    }/>


                    <Row content={
                      <h4 className={pStyle}>Environment Design</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Despite the belief that a more muted environment would make players focus on the alien in front of them, it actually had the opposite effect. Players would quickly become disinterested in the environment, leading them to become less invested in the scenario. <b>In order to keep them engaged in our game of interacting with an alien species, we had to find a terrain sufficiently “alien” as well.</b>
                      </p>
                    }/>

                    <Row content={
                      <p className={"col-xs-12 col-sm-12 col-md-12 col-lg-offset-1 col-lg-10 col-xl-offset-1 col-xl-10"}>
                        <div className="aspect-keeper">
                          <iframe width="640" height="480" src="https://sketchfab.com/models/212b035107f14114b5fb92cb39356565/embed" frameBorder={0} allowFullScreen={true} title={"Our immersive terrain"}></iframe>
                        </div>
                      </p>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        A new engrossing terrain
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>User Test II</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Our second user test provided very useful feedback on the nature of the gestures, as we identified some "problem" gestures. Pointing especially created difficulty, due to both technical detection problems and unclear environmental cues as to what the alien was pointing at. Exchanging gifts was also a pain point, as our detection was too fast so objects would teleport between the player and the alien.
                      </p>
                    }/>

                     <Row content={
                       <p className={quoteStyle}>
                         “He was understanding of my mistakes, and happy about teaching you things.”
                       </p>
                     }/>


                    <Row content={
                      <p className={quoteStyle}>
                        “By using gesture you add another level of sentiment...a more of a human touch.”
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        On the plus side our testers had great things to say about the alien, using words like "patient", "kind" and "friendly." They also felt that the <b>gestural communication provided a more human touch</b> to games, rather than the typical button press, and saw it having applications in other VR experiences, like telling a teammate "Good job!" or establishing a standard gestural language.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: user_test_2,
                            alt: 'Girl wearing VR headset waving to alien',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: user_test_2,
                            alt: 'Girl wearing VR headset waving to alien'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Our second test
                      </p>
                    }/>

                  </span>

                }
              />


              <ProjectSection
                title={"Present"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        We took the last user testing feedback, which mostly involved polishing up the code and fine tuning some animations, to create the final version of the game. We then hosted one final demo day to share out our work with various GT students and Atlanta VR professionals.
                      </p>
                    }/>


                    <Row className="one-margin-top" content={
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={pStyle}>
                            <Video
                              autoplay={isVisible}
                              webMsrc={wave_webm}
                              mp4src={wave_mp4}
                              className={"vertical-video"}
                              caption={"A visitor joyously waving at our demo"}/>
                          </div>
                        }
                      </VisibilitySensor>
                    }/>


                  </span>
              }/>


              <ProjectSection
                title={"Conclusion"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        This project was a lot of fun and fulfilling creatively. It really helped me develop both skills in creating narrative for VR as well as how to do more exploratory technical work.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Some key takeaways from this project include:
                      </p>
                    }/>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li>Gestures are a promising input for VR</li>
                        <li>However, current controllers need to allow higher fidelity gestures to be ubiquitous (think VR gloves)</li>
                        <li>Using gestures with no embedded semantic meaning may be easier to detect rather than ones already established in culture</li>
                        <li>Emotional affect is very important to building an immersive VR experience, you cannot rely on the novelty alone</li>
                      </ul>
                    }/>

                  </span>
                }/>

              <ProjectSection
                title={"Links"}
                content={
                  <Row content={
                    <p className={pStyle + " links"}>
                      <a href="https://github.com/DaBackPack/Alien-Encounter">Github</a>
                      <a href="https://www.youtube.com/watch?v=4A_V-faElRc">Youtube</a>
                    </p>
                  }/>
                }
              />

            </span>
          }
        />
      </div>
    );
  }
}

export default Alien;
