import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import VisibilitySensor from 'react-visibility-sensor';
import ImageZoom from 'react-medium-image-zoom';
import Isvg from 'react-inlinesvg';
import './Tachiyomi.css';

import Button from '../../../components/button/Button';
import ProjectPage from '../../../components/project-page/ProjectPage';
import Process from '../../../components/process/Process';
import ProjectStats from '../../../components/project-stats/ProjectStats';
import ProjectSection from "../../../components/project-section/ProjectSection";
import Row from '../../../components/row/Row';
import Callout from '../../../components/callout/Callout';
import Video from '../../../components/video/Video';

import hero from '../../../media/tachiyomi/hero.jpg';

import app_screens from '../../../media/tachiyomi/app-screens.png';
import problem from '../../../media/tachiyomi/google.png';

// Research assets
import online_comments from '../../../media/tachiyomi/icons/comments.svg';
import heuristic from '../../../media/tachiyomi/icons/heuristic-eval.svg';
import user_test from '../../../media/tachiyomi/icons/user-test.svg';

import how_to_install from '../../../media/tachiyomi/research/how_to_install.png';
import how_to_install_2 from '../../../media/tachiyomi/research/how_to_install_2.png';
import library_help from '../../../media/tachiyomi/research/library_help.png';

import eval_grid from '../../../media/tachiyomi/eval_grid.png';
import user_test_finger from '../../../media/tachiyomi/user-test.jpg';


// Design assets
import empty_state from '../../../media/tachiyomi/icons/empty-state.svg';
import poor_feedback from '../../../media/tachiyomi/icons/poor-feedback.svg';
import material from '../../../media/tachiyomi/icons/material.svg';

import empty_library from '../../../media/tachiyomi/designs/library/empty_library.png'
import empty_library_fixed from '../../../media/tachiyomi/designs/library/empty_library_fixed.png'

import empty_category from '../../../media/tachiyomi/designs/categories/category_empty.png'
import empty_category_fixed from '../../../media/tachiyomi/designs/categories/category_empty_fixed.png';

import filter from '../../../media/tachiyomi/designs/filter/filter.png';
import filter_fixed from '../../../media/tachiyomi/designs/filter/filter_fixed.png';

import add_to_library_mp4 from '../../../media/tachiyomi/designs/add_to_library/add_to_library.mp4';
import add_to_library_webm from '../../../media/tachiyomi/designs/add_to_library/add_to_library.webm';
import add_to_library_fixed_mp4 from '../../../media/tachiyomi/designs/add_to_library/add_to_library_fixed.mp4';
import add_to_library_fixed_webm from '../../../media/tachiyomi/designs/add_to_library/add_to_library_fixed.webm';

import read_me_before from '../../../media/tachiyomi/read-me-before.png';
import read_me_after from '../../../media/tachiyomi/read-me-after.png';

import bookmark_outline from '../../../media/tachiyomi/icons/bookmark_border.svg';
import bookmark_outline_plus from '../../../media/tachiyomi/icons/bookmark-plus-outline.svg';

// Share assets
import present from '../../../media/tachiyomi/icons/present.svg';
import github_issues from '../../../media/tachiyomi/icons/github-issues.svg';
import ux_audit from '../../../media/tachiyomi/ux_audit.jpg';
import github_discussion from '../../../media/tachiyomi/github-discussion.png';

// Discuss assets
import technical from '../../../media/tachiyomi/icons/technical.svg';
import use_case from '../../../media/tachiyomi/icons/use-case.svg';
import tech_1 from '../../../media/tachiyomi/tech-1.png';
import tech_2 from '../../../media/tachiyomi/tech-2.png';
import use_case_1 from '../../../media/tachiyomi/use-case-1.png';
import use_case_2 from '../../../media/tachiyomi/use-case-2.png';

// Deploy assets
import pull_request from '../../../media/tachiyomi/icons/pull_request.svg';
import visual from '../../../media/tachiyomi/icons/visual_qa.svg';
import github_1 from '../../../media/tachiyomi/github-1.png';
import github_2 from '../../../media/tachiyomi/github-2.png';
import github_3 from '../../../media/tachiyomi/github-3.png';
import github_4 from '../../../media/tachiyomi/github-4.png';

import acclaim from '../../../media/tachiyomi/social-proof/acclaim.png';

class Tachiyomi extends Component {

  constructor () {
    super();

    this.state = {
      researchOpen: false,
      presentOpen: false,
      discussOpen: false,
      deployOpen: false,
    }

    this.collapseResearch = this.collapseResearch.bind(this);
    this.collapsePresent = this.collapsePresent.bind(this);
    this.collapseDiscuss = this.collapseDiscuss.bind(this);
    this.collapseDeploy = this.collapseDeploy.bind(this);
  }

  collapseResearch() {
    this.setState({
      researchOpen: !this.state.researchOpen
    })
  }

  collapsePresent() {
    this.setState({
      presentOpen: !this.state.presentOpen
    })
  }

  collapseDiscuss() {
    this.setState({
      discussOpen: !this.state.discussOpen
    })
  }

  collapseDeploy() {
    this.setState({
      deployOpen: !this.state.deployOpen
    })
  }

  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

    let steps = [
      {
        title: "Research",
        processes: ["Online Comments", "Heuristic Evaluation", "User Testing"]
      },
      {
        title: "Design",
        processes: ["Mobile Screens", "User Flows"]
      },
      {
        title: "Present",
        processes: ["Slide Show", "Github Issues"]
      },
      {
        title: "Discuss",
        processes: ["Technical Challenges", "Use Cases"]
      },
      {
        title: "Deploy",
        processes: ["Pull Requests", "Visual QA"]
      }
    ];

    let compareStylesScroll = { borderRight: "3px dotted red" };


    return (
      <div className="Tachiyomi">
        <ProjectPage
          title={"Tachiyomi"}
          hero={hero}
          heroAlt={"User testing of a person testing the Vive VR headset."}
          description={"Creating the UX of the most popular open-source manga reading app"}
          navbarColor={"blue"}
          content={
            <span>
              <ProjectSection
                title={"Introduction"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Tachiyomi is an open-source Android app that allows manga readers to read manga from their
                        favorite websites, like Batoto, Kissmanga, Mangafox, etc. As the original and only designer on the project, I help out with integrating new features from developers and suggesting design changes for visual consistency or better user experience.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <img className="feature-image tachiyomi-preview" src={app_screens}
                             alt="Three screens of tachiyomi"/>
                      </div>
                    }/>

                    <Row className="one-margin-bottom" content={
                      <p className={"caption " + pStyle}>
                        Tachiyomi at a glance
                      </p>
                    }/>

                  </span>
                }
              />

              <ProjectSection
                title={"Problem"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Often what happens with open-source development is that <b>contributors become focused with adding new features for current users, without considering the first-time user experience.</b> Tachiyomi was an app guilty of this problem:
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle + " problem-image"} >
                        <img className={"feature-image"} src={problem} alt={"tachiyomi related searches: how to use tachiyomi"}/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Not a great sign when the first suggested search is how does your app even work.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Because of this, <b>I recently tackled how to make the app to be more accessible to first-time users.</b> Making the app a better experience for newcomers would help win over new fans and also decrease the amount of support we had to provide on Github and on our Discord.
                      </p>
                    }/>

                  </span>
                }
              />

              <ProjectSection
                title={"Solution"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        The addition of a new onboarding sequence, and a series of visual tweaks here in there, including copious addition of empty states and content tweaking, order to make the app more approachable to newcomers.
                      </p>
                    }/>

                  </span>
                }
              />

               <ProjectSection
                 title={"Process"}
                 content={
                   <span>
                     <Row content={
                       <p className={pStyle}>
                         When it comes to designing for open-source, there is no clear cut process. If you take a break for a week from the project, you might see that a feature was added that doesn't match the visual design of the rest of the app, or has a confusing interaction pattern that you have to get another developer to fix.
                       </p>
                     }/>

                     <Row content={
                       <p className={pStyle}>
                         Other times, you might make a design suggestion, but developers will implement it with their own twist, and you have to convince them of the logic behind your design. In the case of designing for new users, here's roughly how it went:
                       </p>
                     }/>

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
                     team={["1 designer", "6 or so developers"]}
                     responsibilities={["Interaction Design", "Visual Design", "User Testing", "Content Strategy"]}
                     time={"Nov 1, 2015 - now"}
                   />
                 }
               />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Research for an ongoing open-source project, especially with a narrow niche like manga, can be difficult at times. Thankfully Tachiyomi is a decently popular app, so there are plenty of Github issues and online comments to reference when designing new features or finding out what's confusing to users. Evaluating it with my own design skills helps, and I luckily also had some classmates who read manga and had never used the app whom I could user test on.
                      </p>
                    }/>

                    <div className="row callouts">
                      <Callout
                        image={online_comments}
                        altText={"word bubble"}
                        title={"Online Comments"}
                        description={"Read Reddit testimonials and Github issues"}
                        first={true}
                        delay={0}
                      />

                      <Callout
                        image={heuristic}
                        altText={"magnifying glass over a phone"}
                        title={"Heuristic Evaluation"}
                        description={"Used expertise to note awkward or confusing UX"}
                        delay={150}
                      />

                      <Callout
                        image={user_test}
                        altText={"finger hovering over a phone"}
                        title={"User Testing"}
                        description={"Had three users try completing tasks with a fresh install"}
                        middle={true}
                        delay={300}
                      />
                    </div>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseResearch}>
                        <Button
                          label={this.state.researchOpen ? "Hide Research Process" : "See Research Process"}
                          color={"outline blue"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.researchOpen}>
                    <Row content={
                      <h4 className={pStyle}>Online Comments</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The first place to look for instant feedback is always the Internet. Each major release was posted to Reddit, so I looked at the comments to find what people mentioned they were struggling with or what sort of features they mentioned wanting in the next release.
                      </p>
                    }/>

                    <Row className={"one-margin-top"} content={
                      <div className={pStyle} >
                        <img className={"feature-image"} src={how_to_install} alt={"Sorry, I'm a real noob at this kind of stuff, but what do I download from the Github page? Do I just click the apk? Thanks again!"}/>
                      </div>
                    }/>

                     <Row content={
                       <div className={pStyle} >
                         <img className={"feature-image"} src={how_to_install_2} alt={"Hi, I'm new to this. Is there a guide on how to download this? Sorry for asking."}/>
                       </div>
                     }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Some had trouble figuring out how to install the app
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: library_help,
                            alt: 'Reddit thread with someone asking how to add manga to their library',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: library_help,
                            alt: 'Reddit thread with someone asking how to add manga to their library'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        While others couldn't figure how to start reading
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Seeing these type of comments it became evident that a better introduction to the app was necessary so people could actually get into the app and start reading their favorite manga.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Heuristic Evaluation</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        It had been a while since I had taken a critical eye to Tachiyomi, and lots of features had been added since my last design review. I took some time to holistically examine the app and compare new designs to the <a href="https://material.io/guidelines/" target="_blank" rel="noopener noreferrer">Material Design guidelines</a>.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-offset-2 col-lg-8 col-xl-offset-2 col-xl-8"}>
                        <img className={"feature-image"} src={eval_grid} alt={"Comparing Google's guidelines on their website to the app."}/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Comparing our grid list to the guidelines
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        I did end up finding some instances of us breaking convention, as well as not maintaining a consistent visual or interaction design pattern across the app for similar features, which came into play when redesigning those screens.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>User Testing</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The most informative of the three research techniques, I recruited three manga-reading students who had never used Tachiyomi to try it out in front of me to get in-the-moment insight into where the app's stumbling blocks were.
                      </p>
                    }/>

                    <Row className="one-margin-top" content={
                      <div className={pStyle}>

                        <ImageZoom
                          image={{
                            src: user_test_finger,
                            alt: 'Finger hovering over Tachiyomi screen',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: user_test_finger,
                            alt: 'Finger hovering over Tachiyomi screen'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Testing the app live
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        For the user testing, I had participants use a fresh install of Tachiyomi, and gave them a list of tasks to complete:
                      </p>
                    }/>

                    <Row content={
                      <ol className={pStyle + " list"}>
                        <li>Find a manga that you enjoy and add it to your library</li>
                        <li>Filter to add a SciFi manga to your library</li>
                        <li>Change the reading direction to your preference</li>
                        <li>Download a manga chapter for offline access</li>
                        <li>Delete the chapter</li>
                        <li>Create a category for your library, and add a manga to it</li>
                        <li>Connect your Batoto account</li>
                        <li>Sync a series to your MyAnimeList account</li>
                        <li>Create a back up of your library</li>
                      </ol>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        From their stumbles I learned a lot of struggles the first time user faces, especially in the app's initial screens due to a lack of information conveyed by the writing.
                      </p>
                    }/>
                    </Collapse>


                  </span>
                }
              />

              <ProjectSection
                title={"Design"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Findings from the research were evident: Tachiyomi is kind of hard to figure out. The main problems encountered had to do with <b>three main areas:</b>
                      </p>
                    }/>

                    <div className="row callouts">
                      <Callout
                        image={empty_state}
                        altText={"screen with question mark"}
                        title={"Poor Empty States"}
                        description={"Blank or uninformative first-time screens"}
                        first={true}
                        delay={0}
                      />

                      <Callout
                        image={poor_feedback}
                        altText={"two circular arrows with exclamation mark"}
                        title={"Lack of Feedback"}
                        description={"Confusion regarding button presses and information provided"}
                        delay={150}
                      />

                      <Callout
                        image={material}
                        altText={"google with x over it"}
                        title={"Broken Guidelines"}
                        description={"Several instances of breaking material design standards"}
                        middle={true}
                        delay={300}
                      />
                    </div>

                    <Row content={
                      <h4 className={pStyle}>Poor Empty States</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The My Library screen is the first screen the user encounters when they start the app, and in its current state it <b>provided no useful information on how to get started.</b> No wonder people were wondering how to read manga.
                      </p>
                    }/>

                    <div className={"row"}>
                      <div className={"col-xs-6 col-sm-6 col-md-offset-1 col-md-4 col-lg-offset-2 col-lg-3 col-xl-offset-2 col-xl-3"}>
                        <img className={"feature-image"} src={empty_library} alt={"A screen that says Empty library."}/>
                        <p className={"caption"}>Original</p>
                      </div>
                      <div className={"col-xs-6 col-sm-6 col-md-offset-2 col-md-4 col-lg-offset-2 col-lg-3 col-xl-offset-2 col-xl-3"}>
                        <img className={"feature-image"} src={empty_library_fixed} alt={"A screen that prompts you to go to the Catalogues to add to your library."}/>
                        <p className={"caption"}>Revised</p>
                      </div>
                    </div>

                    <Row content={
                      <p className={pStyle}>
                        In my revision, I made the copy give actual instructions on how you can start adding series to read, and also asked my friend <a href="http://horyun.design" target="_blank" rel="noopener noreferrer">Horyun</a> for illustrations that I could use to provide a little more fun to the empty states rather than just having an icon.
                      </p>
                    }/>


                    <Row content={
                      <p className={pStyle}>
                        The Edit Categories screen also suffered from a poor empty state, but this time there's nothing at all to tell you what to do!
                      </p>
                    }/>

                    <div className={"row"}>
                      <div className={"col-xs-6 col-sm-6 col-md-offset-1 col-md-4 col-lg-offset-2 col-lg-3 col-xl-offset-2 col-xl-3"}>
                        <img className={"feature-image"} src={empty_category} alt={"Blank screen with a blue plus button."}/>
                        <p className={"caption"}>Original</p>
                      </div>
                      <div className={"col-xs-6 col-sm-6 col-md-offset-2 col-md-4 col-lg-offset-2 col-lg-3 col-xl-offset-2 col-xl-3"}>
                        <img className={"feature-image"} src={empty_category_fixed} alt={"Illustrated screen prompting you to press the blue button to make a Category."}/>
                        <p className={"caption"}>Revised</p>
                      </div>
                    </div>

                    <Row content={
                      <p className={pStyle}>
                        The most important message to convey here was to explain what exactly the user was looking at, as well as what the Plus button actually does. In testing, some users thought there would be predefined categories based on different genres, or what the Plus button was there for.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Lack of Feedback</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Probably the second most important feature in Tachiyomi after reading, adding series to your library to manage is a core part of the app. Unfortunately in user testing however, people didn't understand how to do so. <b>The default bookmark icon used did not have a connotation of adding to your library, nor was there any feedback after pressing it.</b>
                      </p>
                    }/>


                    <div className="row one-margin-top">
                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={"col-xs-6 col-sm-6 col-md-offset-1 col-md-4 col-lg-offset-2 col-lg-3 col-xl-offset-2 col-xl-3"}>
                            <Video
                              autoplay={isVisible}
                              webMsrc={add_to_library_mp4}
                              mp4src={add_to_library_webm}
                              caption={"Original"}/>
                          </div>
                        }
                      </VisibilitySensor>

                      <VisibilitySensor>
                        {({isVisible}) =>
                          <div className={"col-xs-6 col-sm-6 col-md-offset-2 col-md-4 col-lg-offset-2 col-lg-3 col-xl-offset-2 col-xl-3"}>
                            <Video
                              autoplay={isVisible}
                              webMsrc={add_to_library_fixed_mp4}
                              mp4src={add_to_library_fixed_webm}
                              caption={"Revised"}/>
                          </div>
                        }
                      </VisibilitySensor>

                    </div>

                    <Row content={
                      <p className={pStyle}>
                        Instead, I swapped out the bookmark outline (<Isvg className="inline-svg" src={bookmark_outline}/>) for one with a plus (<Isvg className="inline-svg" src={bookmark_outline_plus}/>) to better convey the meaning of adding to a library. Adding an explicit toast message also gives the user immediate feedback on what just happened.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Another issue to address didn't even have anything do with the actual app interface, but rather the README file! As seen above, lots of people were struggling to figure out how to download Tachiyomi in the first place, so it was important we made it clear where to get from the beginning.
                      </p>
                    }/>

                    <div className={"row"}>
                      <div className={"col-xs-12 col-sm-12 col-md-6 col-lg-offset-1 col-lg-5 col-xl-offset-2 col-xl-4"}>
                        <ImageZoom
                          image={{
                            src: read_me_before,
                            alt: 'Original, short README',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: read_me_before,
                            alt: 'Original, short README'
                          }}
                        />
                        <p className={"caption"}>Original</p>
                      </div>
                      <div className={"col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-offset-0 col-xl-4"}>
                        <ImageZoom
                          image={{
                            src: read_me_after,
                            alt: 'README with Download and FAQ sections',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: read_me_after,
                            alt: 'README with Download and FAQ sections'
                          }}
                        />
                        <p className={"caption"}>Revised</p>
                      </div>
                    </div>

                    <Row content={
                      <p className={pStyle}>
                        By adding explicit Download and FAQ sections the average person who's never used Github can quickly see where to get the app, and by including images they can get a sense of the app's look and feel to decide whether they actually want to try it.
                      </p>
                    }/>

                     <Row content={
                       <h4 className={pStyle}>Breaking Guidelines</h4>
                     }/>

                    <Row content={
                      <p className={pStyle}>
                        Tachiyomi also has the ability to filter manga from different sources, so if you're looking for an action manga, or a specific author, you can find it quickly. However, the original filter list broke some common design paradigms, such as the buttons being at the top, and did not dismiss the overlay after hitting Search.
                      </p>
                    }/>

                    <div className={"row"}>
                      <div className={"col-xs-6 col-sm-6 col-md-offset-1 col-md-4 col-lg-offset-2 col-lg-3 col-xl-offset-2 col-xl-3"}>
                        <img className={"feature-image"} src={filter} alt={"Screen with red circle over visual defects."}/>
                        <p className={"caption"}>Original</p>
                      </div>
                      <div className={"col-xs-6 col-sm-6 col-md-offset-2 col-md-4 col-lg-offset-2 col-lg-3 col-xl-offset-2 col-xl-3"}>
                        <img className={"feature-image"} src={filter_fixed} alt={"Visual defects corrected."}/>
                        <p className={"caption"}>Revised</p>
                      </div>
                    </div>

                    <Row content={
                      <p className={pStyle}>
                        Instead, I decided to move Search to the bottom so it was always close to your thumb to press, and more in line with how fixed position elements in lists are typically placed at the bottom. I also noted that the Search button should dismiss the Filter screen, because if you tapped it didn't go away, leading users to think their search was not completed.
                      </p>
                    }/>


                    <ProjectSection
                      title={"Share"}
                      content={
                        <span>
                          <Row content={
                            <p className={pStyle}>
                              Once I had identified and created the design suggestions, it was time to package them up for the dev team and for the greater community to discuss the proposed changes.
                            </p>
                          }/>

                          <div className="row callouts">
                            <Callout
                              image={present}
                              altText={"presenter"}
                              title={"Presentation"}
                              description={"For devs to read through design suggestions and explanations"}
                              first={true}
                              delay={0}
                              number={2}
                            />

                            <Callout
                              image={github_issues}
                              altText={"exclamation mark in circle"}
                              title={"Github Issues"}
                              description={"To inform the community of changes and for feedback"}
                              delay={150}
                              number={2}
                            />
                          </div>

                          <Row content={
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapsePresent}>
                              <Button
                                label={this.state.presentOpen ? "Hide Share Process" : "See Share Process"}
                                color={"outline blue"}
                              />
                            </div>
                          }/>

                          <Collapse isOpened={this.state.presentOpen}>
                          <Row content={
                            <h4 className={pStyle}>Presentation</h4>
                          }/>

                          <Row content={
                            <p className={pStyle}>
                              Tachiyomi has a developer Discord that we all use to chat about the app and future features and pull requests. In order to share my findings and my suggestions, I simply dropped a link to a Google Slides that I had created for them to read through and comment on.
                            </p>
                          }/>

                          <Row content={
                            <div className={pStyle} >
                              <a href="https://files.philkt.me/tachiyomi/ux_audit.pdf" target="_blank" rel="noopener noreferrer">
                              <img className={"feature-image"} src={ux_audit} alt={"Tachiyomi UX audit"}/>
                              </a>
                            </div>
                          }/>

                          <Row className="one-margin-bottom" content={
                            <p className={"caption " + pStyle}>
                              Click above to see the report
                            </p>
                          }/>

                          <Row content={
                            <h4 className={pStyle}>Github Issues</h4>
                          }/>

                          <Row content={
                            <p className={pStyle}>
                              An important aspect of open-source development is to be transparent, so I also created Github issues of the proposed changes to users could see what we were proposing to change about the current app. It also adds the benefit of being able to refer to these designs when making pull requests addressing them.
                            </p>
                          }/>

                          <Row content={
                            <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-offset-2 col-lg-8 col-xl-offset-2 col-xl-8"}>
                              <img className={"feature-image"} src={github_discussion} alt={"Screenshot of Github issues"}/>
                            </div>
                          }/>

                          <Row className="one-margin-bottom" content={
                            <p className={"caption " + pStyle}>
                              It's good to see what the community has to say
                            </p>
                          }/>

                         </Collapse>



                        </span>
                      }
                    />

                    <ProjectSection
                      title={"Discuss"}
                      content={
                        <span>
                          <Row content={
                            <p className={pStyle}>
                              After everyone had read about the designs, then it was time to discuss the technical challenges and effort involved, and what use cases these improvements were for and if they were worth the investment.
                            </p>
                          }/>


                          <div className="row callouts">
                            <Callout
                              image={technical}
                              altText={"wrench"}
                              title={"Technical Challenges"}
                              description={"Addressed what makes implementation hard"}
                              first={true}
                              delay={0}
                              number={2}
                            />

                            <Callout
                              image={use_case}
                              altText={"person with multiple choices"}
                              title={"Use Cases"}
                              description={"Decided on how it fits it with existing work flows"}
                              delay={150}
                              number={2}
                            />
                          </div>

                          <Row content={
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseDiscuss}>
                              <Button
                                label={this.state.researchOpen ? "Hide Discussion Process" : "See Discussion Process"}
                                color={"outline blue"}
                              />
                            </div>
                          }/>

                          <Collapse isOpened={this.state.discussOpen}>

                          <Row content={
                            <h4 className={pStyle}>Technical Challenges</h4>
                          }/>

                          <Row content={
                            <p className={pStyle}>
                              As with any proposed design changes, there will always be technical limitations to consider for implementation. Thankfully most of my proposed designs had no evident problems, but some hit a couple roadblocks.
                            </p>
                          }/>

                          <Row className={"one-margin-top"} content={
                            <div className={pStyle} >
                              <img className={"feature-image"} src={tech_1} alt={"A proposed filter view is a little touch"}/>
                            </div>
                          }/>

                          <Row content={
                            <p className={"caption " + pStyle}>
                              UIs get complicated under the hood
                            </p>
                          }/>

                          <Row className={"one-margin-top"} content={
                            <div className={pStyle} >
                              <img className={"feature-image"} src={tech_2} alt={"One API does not return images"}/>
                            </div>
                          }/>

                          <Row content={
                            <p className={"caption " + pStyle}>
                              APIs not giving data you want is always a pain
                            </p>
                          }/>

                          <Row content={
                            <p className={pStyle}>
                              However, with some refactoring and a clever use of a Search API instead of a direct lookup API, we were able to get everything working.
                            </p>
                          }/>

                          <Row content={
                            <h4 className={pStyle}>Use Cases</h4>
                          }/>

                          <Row content={
                            <p className={pStyle}>
                              Another important thing to consider were whether all these designs were warranted and fit the wide variety of how people use the app.
                            </p>
                          }/>

                          <Row className={"one-margin-top"} content={
                            <div className={pStyle} >
                              <img className={"feature-image"} src={use_case_1} alt={"One developer uses our default category as an All category, while some delete it entirely"}/>
                            </div>
                          }/>

                          <Row content={
                            <p className={"caption " + pStyle}>
                              Discussing whether to change our Default category to an All category displaying all manga
                            </p>
                          }/>

                          <Row className={"one-margin-top"} content={
                            <div className={pStyle} >
                              <img className={"feature-image"} src={use_case_2} alt={"User wants to move genres into a table view, but would reduce clickability"}/>
                            </div>
                          }/>

                          <Row content={
                            <p className={"caption " + pStyle}>
                              Debate regarding a proposed change regarding how we position a manga's genres
                            </p>
                          }/>

                          <Row content={
                            <p className={pStyle}>
                              Working together usually the designs I come up with are accepted due to the reasoning behind them, but I also cooperate with developers and users to determine what's the best approach for Tachiyomi.
                            </p>
                          }/>
                          </Collapse>


                        </span>
                      }
                    />


                    <ProjectSection
                      title={"Deploy"}
                      content={
                        <span>
                          <Row content={
                            <p className={pStyle}>
                              Once discussion has finished, developers code up the features, and I ensure that PRs are addressed in a timely manner and that they accurately reflect my designs.
                            </p>
                          }/>

                          <div className="row callouts">
                            <Callout
                              image={pull_request}
                              altText={"pull request logo"}
                              title={"Pull Requests"}
                              description={"Realizing the designs and mockups as actual code"}
                              first={true}
                              delay={0}
                              number={2}
                            />

                            <Callout
                              image={visual}
                              altText={"eye"}
                              title={"Visual QA"}
                              description={"Comparing implementation and designs to ensure quality"}
                              delay={150}
                              number={2}
                            />
                          </div>

                          <Row content={
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseDeploy}>
                              <Button
                                label={this.state.deployOpen ? "Hide Deploy Process" : "See Deploy Process"}
                                color={"outline blue"}
                              />
                            </div>
                          }/>

                          <Collapse isOpened={this.state.deployOpen}>

                          <Row content={
                            <h4 className={pStyle}>Pull Requests</h4>
                          }/>

                          <Row content={
                            <p className={pStyle}>
                              The most vital part of this process is to ensure that my designs actually get deployed. Thankfully Tachiyomi's developers value my input in making the UX of the app better and are willing to dive into Android Studio to turn my ideas into real code.
                            </p>
                          }/>


                          <Row className={"one-margin-top"} content={
                            <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-offset-2 col-lg-8 col-xl-offset-2 col-xl-8"}>
                               <img className={"feature-image"} src={github_4} alt={"Pull request addressing my designs"}/>
                            </div>
                          }/>

                           <Row content={
                             <p className={"caption " + pStyle}>
                               CarlosEsco volunteered to code up my designs
                             </p>
                           }/>


                          <Row className={"one-margin-top"} content={
                            <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-offset-2 col-lg-8 col-xl-offset-2 col-xl-8"}>
                              <img className={"feature-image"} src={github_1} alt={"Pull request with 68 comments"}/>
                            </div>
                          }/>

                          <Row content={
                            <p className={"caption " + pStyle}>
                              Some PRs can generate a lot of back and forth
                            </p>
                          }/>

                          <Row content={
                            <h4 className={pStyle}>Visual QA</h4>
                          }/>

                          <Row content={
                            <p className={pStyle}>
                              I always appreciate when developers are willing to code up my designs, but it's important that I review them before they are merged in so that they accurately reflect my intent.
                            </p>
                          }/>

                          <Row className={"one-margin-top"} content={
                            <div className={pStyle}>
                              <ImageZoom
                                image={{
                                  src: github_3,
                                  alt: 'Removing manga from toast message',
                                  className: 'feature-image'
                                }}
                                zoomImage={{
                                  src: github_3,
                                  alt: 'Removing manga from toast message'
                                }}
                              />
                            </div>
                          }/>

                          <Row content={
                            <p className={"caption " + pStyle}>
                              Making sure the content is right
                            </p>
                          }/>

                          <Row className={"one-margin-top"} content={
                            <div className={pStyle}>
                              <ImageZoom
                                image={{
                                  src: github_2,
                                  alt: 'Discussion of pixel size of icon',
                                  className: 'feature-image'
                                }}
                                zoomImage={{
                                  src: github_2,
                                  alt: 'Discussion of pixel size of icon'
                                }}
                              />
                            </div>
                          }/>

                          <Row content={
                            <p className={"caption " + pStyle}>
                              Diving into the pixel details
                            </p>
                          }/>

                          </Collapse>
                        </span>
                      }
                    />

                    <ProjectSection
                      title={"Conclusion"}
                      content={
                        <span>
                          <Row content={
                            <p className={pStyle}>
                              Working on open source is super rewarding, because you help contribute to the tech community as a whole and can engage directly with your users. We're always striving to make Tachiyomi the best app it can be, so it can provide the best experience to everyone who uses it.
                            </p>
                          }/>

                           <Row className={"one-margin-top"} content={
                             <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                               <img className='feature-image acclaim' src={acclaim} alt='Removing manga from toast message' />
                             </div>
                           }/>

                           <Row content={
                             <p className={"caption " + pStyle}>
                               In the end it's all for the fans 😄
                             </p>
                           }/>


                        </span>
                      }
                    />

                    <ProjectSection
                      title={"Links"}
                      content={
                        <Row content={
                          <p className={pStyle + " links"}>
                            <a href="https://github.com/inorichi/tachiyomi">Github</a>
                            <a href="https://files.philkt.me/tachiyomi/ux_audit.pdf">Presentation</a>
                          </p>
                        }/>
                      }
                    />

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

export default Tachiyomi;
