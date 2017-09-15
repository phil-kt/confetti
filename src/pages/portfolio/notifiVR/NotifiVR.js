import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import VisibilitySensor from 'react-visibility-sensor';
import './NotifiVR.css';

import Button from '../../../components/button/Button';
import ProjectPage from '../../../components/project-page/ProjectPage';
import Process from '../../../components/process/Process';
import ProjectSection from "../../../components/project-section/ProjectSection";
import Row from '../../../components/row/Row';
import Lightbox from '../../../components/lightbox/Lightbox';
import Video from '../../../components/video/Video';

import hero from '../../../media/notifiVR/pickup.png';
import sharing from '../../../media/notifiVR/sharing.jpg';
import playing_env from '../../../media/notifiVR/playing_env.png';
import framework from '../../../media/notifiVR/framework.png';
import developer_storyboard from '../../../media/notifiVR/developer_storyboard.png';

import phone from '../../../media/notifiVR/sketches/phone.jpg';
import phone_booth from '../../../media/notifiVR/sketches/phone_booth.jpg';
import physical from '../../../media/notifiVR/sketches/physical.jpg';
import popup from '../../../media/notifiVR/sketches/popup.jpg';
import watch from '../../../media/notifiVR/sketches/watch.jpg';
import footsteps from '../../../media/notifiVR/sketches/footstep.jpg';

import phone_video from '../../../media/notifiVR/video/denwa_c.mp4';
import phone_booth_video from '../../../media/notifiVR/video/pb_fc_c.mp4';
import watch_video from '../../../media/notifiVR/video/watch_c.mp4';
import popup_video from '../../../media/notifiVR/video/slack.mp4';

class NotifiVR extends Component {

  constructor () {
    super();

    this.state = {
      lightboxIsOpen: false,
      index: 0,
      environmentOpen: false,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.collapseEnvironment = this.collapseEnvironment.bind(this);
  }

  openLightbox(index, event) {
    console.log(index);
    this.setState({
      lightboxIsOpen: true,
      index: index
    })
  }

  collapseEnvironment() {
    this.setState({
      environmentOpen: !this.state.environmentOpen
    })
  }

  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 col-xl-offset-3 col-xl-6";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

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

    let images = [phone, phone_booth, popup, watch, physical, footsteps];

    let self = this;

    return (
      <div className="NotifiVR">
        <ProjectPage
          title={"NotifiVR"}
          hero={hero}
          heroAlt={"User testing of a person testing the Vive VR headset."}
          content={
            <span>
              <ProjectSection
                title={"Problem"}
                content={
                  <Row content={
                    <p className={pStyle}>
                      When playing a virtual reality environment, you lose your connection to the outside world.
                      Sound, vision, and
                      movement are all mirrored and reflected in VR, which is great for immersion, but sometimes you
                      need to know when
                      you’re getting a call from your spouse or about to hit a chair. We explored different methods of
                      alerting players
                      in VR about important information from real life.
                    </p>
                  }/>
                }
              />

              <ProjectSection
                title={"Process"}
                content={
                  <Row content={
                    <div
                      className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-1 col-xl-10">
                      <Process
                        team={"5 person team"}
                        duty={"Interaction, Visual, Software design role"}
                        time={"Feb ’17 to May ‘17"}
                        steps={steps}/>
                    </div>
                  }/>
                }
              />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Prior to me joining this project, some preliminary work had been done in the form of a survey to
                        VR enthusiasts that asked people to rate the priority of various forms of interruptions (call
                        from a boss, text from a spouse, about to collide with a wall, new post on Facebook, etc) when
                        experiencing VR. From their answers we understood that people were primarily interested in
                        notifications about their physical surroundings, as well as calls and texts. Some key quotes
                        include:
                      </p>
                    }/>

                    <Row content={
                      <p className={quoteStyle}>
                        "I was standing near a couch. When I turned to look at something behind me I bumped into the
                        couch."
                      </p>
                    }/>

                    <Row content={
                      <p className={quoteStyle}>
                        "My phone was ringing and I missed the call. It was quite an important call. I would like an app
                        that shows who is calling on the phone my HMD."
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Taking the results of this survey, we then held a 2 hour participatory design activity with
                        professional VR Designers in the Atlanta area to help get their perspective on how we might solve for those problems. We provided 2 different environments to think about while designing notifications: a closed and busy scenario like a shooter game, and a more open relaxed game like Tilt Brush. At the end of the activity everyone shared the designs and concerns they had written on Post-it notes and we collected them for further coding and grouping.
                      </p>
                    }/>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <img className="feature-image" src={sharing}
                            alt="One person at a whiteboard sharing their design ideas"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Sharing and discussing ideas at our participatory design event
                      </p>
                    }/>
                  </span>
                }

              />

              <ProjectSection
                title={"Insights"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Once we gathered all the design results from the event, we then mapped them all in order to find
                        common themes and ideas that we could use to guide what designs we could create and test with
                        users. In the end, we had <em>three main notification methods:</em>
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Audio</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>3D sound</em> was often mentioned to denote physical entities. Some examples included
                        footsteps being mapped to the actual location someone was coming from, or piping in audio from
                        the real world when relevant so you can hear someone talking to you or a pet barking.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Metaphors</em> were also very popular. Sounds like a door creak to signify someone entering
                        the room, or having an hourly chime to help keep track of how long you've been in VR. The
                        designers also mentioned using sounds you were familiar with, like your ring tone or text tone,
                        to alert you when you've received a message.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Visual</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>3D representations</em> of real world objects were the most common solutions shared.
                        Examples included a hand or person model appearing when someone is waving or trying to talk to
                        you, or a digital wireframe of your couch in the environment so you don't bump into it. This
                        also extended into ideas like smart watches or phones for digital notifications.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Pop-ups</em> or small billboards were common choices for "digital notifications". For the
                        less energetic environment it was suggested tha messages could appear on different objects in
                        the game, and for more cognitively demanding environments they could appear next to or on the
                        controller, so as to be more immediately noticeable.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Haptic</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Metaphorical vibrations</em> were very common, such as using feet vibrations to warn you
                        about stepping on a pet, or a tap vibration for someone trying ot get your attention. One idea
                        even played with using a ring finger vibration to indicate you had a call or message from your
                        spouse.
                      </p>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Design"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Taking our insights of possible solutions generated from our participatory exercise, we then began to sketch and ideate different designs to prototype. There were two necessary tasks to establish our testing environment:
                      </p>
                    }/>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li>
                          Design the notifications to display in the virtual reality world
                        </li>

                        <li>
                          Create the Unity environment and framework that would allow us to quickly edit notification
                          methods and to test users with
                        </li>
                      </ul>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Notification Design</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Taking to heart the insights that we found, we then began to sketch out what possible methods we
                        use to could display a notification to a user in VR, and how they might be delivered.
                      </p>
                    }/>

                    <Lightbox
                      images={[
                        {
                          src: phone,
                          caption: 'Displaying call information over a controller'

                        },
                        {
                          src: phone_booth,
                          caption: 'Popping up a phone booth to answer a call'
                        },
                        {
                          src: watch,
                          caption: 'A smartwatch showing info using 3D space'
                        },
                        {
                          src: popup,
                          caption: 'Message popups over the game environment'
                        },
                        {
                          src: physical,
                          caption: 'Sydney, Australia - Photo by Jill Smith',
                        },
                        { src: footsteps}
                      ]}
                      open={this.state.lightboxIsOpen}
                      index={this.state.index}
                    />

                    <Row content={
                      images.map(function (image, index) {
                        return (
                          <div key={"sketch" + index} onClick={(e) => self.openLightbox(index, e)}
                               className={"col-xs-4 col-sm-4 col-md-2 col-lg-2 col-xl-2"}>
                            <img className="mini-image" src={image} alt=""/>
                          </div>
                        )
                      })
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Sketches of different notification approaches
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        After brainstorming, we ended up with four different notifications type we wanted to pursue for this part of the project, which were all aimed at conveying the status of digital notifications you'd received.
                      </p>
                    }/>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li>
                          A phone overlaid on the controller for incoming calls
                        </li>
                        <li>
                          A phone booth in the environment for incoming calls
                        </li>
                        <li>
                          Popups on the environments for messages
                        </li>
                        <li>
                          A smart watch on the wrist to show messages
                        </li>
                      </ul>
                    }/>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseEnvironment}>
                        <Button
                          label={this.state.environmentOpen ? "Hide Unity Details" : "See Unity Details"}
                          color={"green"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.environmentOpen}>

                    <Row content={
                      <h4 className={pStyle}>Unity Environment and Framework</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        For user comfort and time restraint reasons, we decided to use a low energy environment for
                        testing purposes. The environment modeled was one where the user would pick up a ball using the
                        HTC Vive controllers and place it in a glowing ring on the floor in a giant warehouse. As the
                        user repeated this task, different notifications and signifiers would be triggered randomly,
                        like a vibration and a pop up to indicate you have a message, or spawning a phone booth in the
                        player's field of view to inform you of an incoming call.
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle}>
                        <img className="feature-image" src={playing_env}
                             alt="Screen capture of our game environement with a controller, a blue ball, and a yellow circle goal in the distance"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        A look at our warehouse demo
                      </p>
                    }/>


                    <Row content={
                      <p className={pStyle}>
                        We also had to design a software framework that would work within Unity taking outside
                        notifications and triggering the proper cue on the proper object. I and another teammate worked
                        on this part, as we wanted the framework to be easily usable by developers wishing to add
                        notifications to their VR experience. In the end we came up with this:
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle}>
                        <img className="feature-image" src={framework} alt="Framework architecture"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        The abstracted process
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The premise is that a Unity scene has a Notification Manager, which watches for incoming
                        triggers like phone calls, text messages, or physical entrances. The Manager also keeps track of
                        what Notifier objects exist, which are the game objects that actually spawn and inform you of
                        the notification that you received. A developer is able to pick what sort of feedback the
                        Notifier object provides, and how it manifests itself.
                      </p>
                    }/>

                    <Row content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                        <img className="feature-image" src={developer_storyboard}
                             alt="One person at a whiteboard sharing their design ideas"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Storyboard of the developer process
                      </p>
                    }/>

                    </Collapse>

                  </span>
                }
              />

              <ProjectSection
                title={"Prototype"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        After we had the designs, framework, and the environment decided upon, it was time to combine them and start testing. We used models from the asset store and hacked together some of our own, wired them up to the environment using our framework and some help from our good old friend the Wizard of Oz to fake the outside triggers.
                      </p>
                    }/>
                    <Row content={
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={pStyle}>
                            <Video
                              autoplay={isVisible}
                              src={phone_video}
                              caption={"Receiving a phone call on the controller"}/>
                          </div>
                        }
                      </VisibilitySensor>

                    }/>

                    <Row content={
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={pStyle}>
                            <Video
                              autoplay={isVisible}
                              src={phone_booth_video}
                              caption={"Answering a call in a phone booth"}/>
                          </div>
                        }
                      </VisibilitySensor>
                    }/>

                    <Row content={
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={pStyle}>
                            <Video
                              autoplay={isVisible}
                              src={popup_video}
                              caption={"Getting a message from Slack on a wall"}/>
                          </div>
                        }
                      </VisibilitySensor>
                    }/>

                    <Row content={
                      <VisibilitySensor>
                       {({isVisible}) =>
                         <div className={pStyle}>
                           <Video
                             autoplay={isVisible}
                             src={watch_video}
                             caption={"Checking email on a watch"}/>
                         </div>
                       }
                      </VisibilitySensor>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        For testing these interactions, we recruited 14 participants, all with variable experience with virtual reality. We began with getting each user accustomed to the controls of the Vive, by having them teleport and place the ball in the ring several times until they felt comfortable. Each participant was then presented each notification in a counterbalanced order according to a latin square of 12 conditions (4 notification methods, 3 modes of feedback). Participants were encouraged to think-aloud as they encountered each notification and the system logged their reaction time.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        After the test, we then had users fill out a questionnare to rate the notifications on a Likert scale for five different metrics:
                      </p>
                    }/>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li>Noticeability (How easy was it to notice?)</li>
                        <li>Understandability (Could you understand what it was conveying?)</li>
                        <li>Interactibility (how was the level of interaction?)</li>
                        <li>Believability (Did you believe it was coming from the real world?)</li>
                        <li>Intrusiveness (how much did it affect your immersion?)</li>
                      </ul>
                    }/>


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

export default NotifiVR;
