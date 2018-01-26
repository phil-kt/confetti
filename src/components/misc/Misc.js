import React, { Component } from 'react';
import ProjectIcon from '../project-icon/ProjectIcon';
import './Misc.css';

import hbo from '../../media/misc/icons/hbo.svg';
import hbo_now from '../../media/misc/pics/hbo.jpg';

import capital_one from '../../media/misc/icons/capital_one_logo.svg';
import capone_page from '../../media/misc/pics/capitalone.jpg';

import derez from '../../media/misc/icons/derez.svg';
import rc from '../../media/misc/pics/rc.jpg';

import design_club from '../../media/misc/icons/design_club.svg';
import gt_design from '../../media/misc/pics/gt_design.svg';

import magnet from '../../media/misc/icons/magnet.svg';
import magnet_emoji from '../../media/misc/pics/magnet.jpg';

import dribbble from '../../media/misc/icons/sherlock_dribbble.svg';
import sherlock from '../../media/misc/pics/dribbble.png';

import graffiti from '../../media/misc/icons/graffiti.svg';
import graffiti_use from '../../media/misc/pics/graffiti.jpg';

import argon from '../../media/misc/icons/argon.svg';
import argon_use from '../../media/misc/pics/argon.jpg';

class Misc extends Component {

  constructor() {
    super();

    this.state = {
      visible: true
    }
  }

  static propTypes = {
  }

  static defaultProps = {
  }


  render() {
    return (
      <div className="misc">
        <div className="row">
          <ProjectIcon
            svg={derez}
            title={"Derez"}
            image={rc}
            first={true}
            alt={"A stylized D"}
            description={
              <span>
                <p>
                  Made in 36 hours, Derez allows you to race through AR maps you create from a first-person view of an RC car. This project won Best AR/VR Hack at PennApps XVII.
                </p>
                <p>
                  I worked on the Unity 3D assets, the UI of the game, the Tron-themed branding, and streaming the view to a PC.
                </p>
              </span>
            }
            square={true}
            links={[
              {
                title: "Devpost",
                url: "https://devpost.com/software/derez"
              },
              {
                title: "Youtube",
                url: "https://www.youtube.com/watch?v=wxSy4dfLm_U"
              }
            ]}
          />
          <ProjectIcon
            svg={capital_one}
            title={"Capital One"}
            image={capone_page}
            alt={"Japanese character for standing"}
            description={
              <span>
                <p>Over the summer of 2017 I worked at Capital One creating the basis of a design system for the website ecosystem.</p>
                <p>Unfortunately my work is under NDA, but it was a rewarding experience designing across an enterprise!</p>
              </span>
            }
          />
          <ProjectIcon
            square={true}
            svg={design_club}
            title={"GT Design"}
            image={gt_design}
            alt={"GT design club logo"}
            description={
              <span>
                <p>At school, I lead the design club for Georgia Tech, teaching undergrads various design principles and approaches.</p>
                <p>I also build the design community at GT through a group called GT Design dedicated to connecting student designers and fostering discussion.</p>
              </span>
            }

            links={[
              {
                title: "Design Club",
                url: "https://www.facebook.com/gtdesignclub/"
              },
              {
                title: "GT Design",
                url: "https://www.facebook.com/groups/designatgt"
              }
            ]}
          />
          <ProjectIcon
            square={true}
            svg={magnet}
            title={"Emoji"}
            image={magnet_emoji}
            alt={"screenshot of magnet emoji featured on snapchat"}
            description={
              <span>
                <p>In my free time I design and submit emoji to the Unicode Consortium. Currently both the magnet and gravestone emoji are candidates for 2018.</p>
              </span>
            }
          />
        </div>

        <div className="row">
          <ProjectIcon
            round={true}
            svg={dribbble}
            title={"A Study in Pink"}
            image={sherlock}
            first={true}
            alt={"Dribbble logo wearing a sherlock hat"}
            description={
              <span>
                <p>I and two teammates studied the online community of Dribbble to see what sort of thoughts they had on the site and of the people on it.</p>
                <p>From our research, we wrote a detailed article on the highs and lows of Dribbble, as well as how both the site and its users might act to make it more a place for criticism, instead of empty compliments.</p>
            </span>
            }

            links={[
              {
                title: "Medium",
                url: "https://medium.com/@LinkCable/a-study-in-pink-insights-from-interviewing-the-dribbble-community-a01936f8d3ce"
              }
            ]}
          />
          <ProjectIcon
            square={true}
            svg={graffiti}
            title={"Graffiti"}
            image={graffiti_use}
            alt={"Person drawing on a screen over a wall"}
            description={
              <span>
                <p>Made in 36 hours at PennApps XIV, Graffiti is an augmented reality app that allows you draw over your environment and leave art for others to see.</p>
                <p>I designed the app and coded the front-end in Swift, using various libraries to finish in time.</p>
            </span>
            }

            links={[
              {
                title: "Github",
                url: "https://github.com/sayalvarun/graffiti"
              },
              {
                title: "Devpost",
                url: "https://devpost.com/software/graffiti-l3v85w"
              }
            ]}
          />
          <ProjectIcon
            square={true}
            svg={argon}
            title={"Argon"}
            image={argon_use}
            alt={"a phone looking at a piece of paper with pokemon coming out of it"}
            description={
              <span>
                <p>I worked with Professor Jay Bolter and a teammate to create an AR storybook using the lab’s Argon framework.</p>

                 <p>The book depicts 10 key moments in AR history, and was made using Twine and 3D models I created in Blender.</p>
              </span>
            }

            links = {[
              {
                title: "Github",
                url: "https://github.com/LinkCable/understanding-ar-twine"
              }
            ]
            }

          />
          <ProjectIcon
            svg={hbo}
            title={"HBO"}
            image={hbo_now}
            alt={"Homepage of HBO NOW"}
            description={
              <span>
                <p>In summer 2015 I interned at HBO proposing designs for the then-recently launched HBO NOW service.</p>
                <p>As it is with corporations, my work is under NDA. However, I can say that this internship helped me learn how design fits into a business.</p>
            </span>
            }
          />
        </div>
      </div>
    );
  }
}

export default Misc;
