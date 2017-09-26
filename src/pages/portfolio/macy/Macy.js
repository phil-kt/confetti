import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import VisibilitySensor from 'react-visibility-sensor';
import './Macy.css';

import Button from '../../../components/button/Button';
import ProjectPage from '../../../components/project-page/ProjectPage';
import Process from '../../../components/process/Process';
import ProjectSection from "../../../components/project-section/ProjectSection";
import Row from '../../../components/row/Row';
import Lightbox from '../../../components/lightbox/Lightbox';
import Video from '../../../components/video/Video';

import hero from '../../../media/notifiVR/pickup.png';
import bazaar from '../../../media/macy/bazaar.png';
import annual_report from '../../../media/macy/annual_report.png';
import reimplement_brand from '../../../media/macy/reimplement_brand.png';
import storefront from '../../../media/macy/storefront.png';
import stimulus_overload from '../../../media/macy/stimulus_overload.jpg';

// persona previews
import michelle from '../../../media/macy/personas/michelle.png';
import carol from '../../../media/macy/personas/carol.png';
import david from '../../../media/macy/personas/david.png';
import diane from '../../../media/macy/personas/diane.png';
import stacy from '../../../media/macy/personas/stacy.png';
import stephy from '../../../media/macy/personas/stephy.png';
import bruno from '../../../media/macy/personas/bruno.png';
import heather from '../../../media/macy/personas/heather.png';
import kevin from '../../../media/macy/personas/kevin.png';

//persona full
import michelle_full from '../../../media/macy/personas_full/michelle.png';
import carol_full from '../../../media/macy/personas_full/carol.png';
import david_full from '../../../media/macy/personas_full/david.png';
import diane_full from '../../../media/macy/personas_full/diane.png';
import stacy_full from '../../../media/macy/personas_full/stacy.png';
import stephy_full from '../../../media/macy/personas_full/stephy.png';
import bruno_full from '../../../media/macy/personas_full/bruno.png';
import heather_full from '../../../media/macy/personas_full/heather.png';
import kevin_full from '../../../media/macy/personas_full/kevin.png';

import current_journey from '../../../media/macy/current_journey.svg';
import stakeholder_map from '../../../media/macy/stakeholder_map.png';

import bar_and_style from '../../../media/macy/bar_and_style.png';
import robots from '../../../media/macy/robots.png';

class Macy extends Component {

  constructor () {
    super();

    this.state = {
      researchLightboxIsOpen: false,
      personaLightboxIsOpen: false,
      index: 0
    };

    this.openLightbox = this.openLightbox.bind(this);
  }


  openLightbox(index, type, event) {
    if(type === "research") {

      this.setState({
        researchLightboxIsOpen: true,
        personaLightboxIsOpen: false,
        index: index
      })
    }

    if(type === "persona") {
      this.setState({
        personaLightboxIsOpen: true,
        researchLightboxIsOpen: false,
        index: index
      })
    }
  }

  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 col-xl-offset-3 col-xl-6";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

    let steps = [
      {
        title: "Research",
        processes: ["Competitive Analysis", "Observations in Store", "Literature Review"]
      },
      {
        title: "Synthesize",
        processes: ["Personas", "Journey Maps", "Service Blueprint"]
      },
      {
        title: "Design",
        processes: ["Brand Approach", "Store Layout", "Service Concept"]
      },
      {
        title: "Prototype",
        processes: ["Mobile App", "3D Models", "Unity Environment"]
      },
      {
        title: "Present",
        processes: ["Presentation", "Poster Session", "PDF Report"]
      }
    ];

    let images = [annual_report, bazaar, reimplement_brand, storefront];
    let personas_1 = [michelle, carol, david];
    let personas_2 = [diane, stacy, stephy];
    let personas_3 = [bruno, heather, kevin];


    let self = this;

    return (
      <div className="Macy">
        <ProjectPage
          title={"Macy’s of the Future"}
          hero={hero}
          heroAlt={"User testing of a person testing the Vive VR headset."}
          content={
            <span>

              <ProjectSection
                title={"Problem"}
                content={
                  <Row content={
                    <p className={pStyle}>
                      Department stores are one of the many retail stalwarts that find themselves being consumed by the convenience and ubiquity of online shopping. Macy’s came to our service design class seeking a vision on what their shopping experience might look like 5 years in the future with the current advancements in technology and the emerging trends in retail.
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
                        We began our approach by looking at the current status of Macy’s and current retailer trends. We read through financial reports, brand guidelines, retail news, corporate policies, internal documents,  peer reviewed articles, and a bunch of other relevant information.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We also conducted in-store research, both at Macy’s and their competitors, browsing between different departments, observing customers, and noting any challenges or problems within the store environment, and had calls with Macy’s corporate to ask questions regarding what we discovered in-store and find out the direction the brand was heading towards.
                      </p>
                    }/>

                    <Lightbox
                      images={[
                        {
                          src: annual_report,
                          caption: 'Macy’s 2016 report for shareholders'
                        },
                        {
                          src: bazaar,
                          caption: 'Bazaarvoice’s trends report for retail'
                        },
                        {
                          src: reimplement_brand,
                          caption: 'Case study on uniting the Macy’s brand'
                        },
                        {
                          src: storefront,
                          caption: 'Entrance picture from store visit'
                        }
                      ]}
                      open={this.state.researchLightboxIsOpen}
                      index={this.state.index}
                    />

                    <Row content={
                      images.map(function (image, index) {
                        return (
                          <div key={"assets" + index} onClick={(e) => self.openLightbox(index, "research", e)}
                               className={"col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3"}>
                            <img className="mini-image" src={image} alt=""/>
                          </div>
                        )
                      })
                    }/>


                    <Row content={
                      <p className={pStyle + " caption no-margin-bottom"}>
                        Various assets from researching
                      </p>
                    }/>

                  </span>
                }
              />

              <ProjectSection
                title={"Findings"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        From all our investigation we gathered a lot of different important information, ranging from what customers currently desire to the challenges shoppers face when inside the store. Here are some of the highlights:
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Retail Trends</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Retailtainment</em>, the blending of shopping and entertainment, has been popular with consumers the past few years to provide unique, only-in-store experiences that rewards shoppers to coming to physical locations. Customers are more likely to engage with retailers who incorporate lifestyle elements into their stores, such as boutique coffee shops or virtual reality experiences.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Omnichannel</em> is the name of the game if you have a digital and physical presence. Having consistent pricing and promotions across both fronts, engaging with customers with the platform they're on, whether that be Facebook or Snapchat, and enabling a consistent experience with your brand across every touchpoint is vital for the modern consumer.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>In-store Pain Points</h4>
                    }/>


                    <Row content={
                      <p className={pStyle}>
                        <em>Absent service</em> was evident through our store trips, as we regularly found unattended customer service booths and just a general difficulty in finding associates to assist us. A personal stylist service was advertised on location, however they were not in any of the times we visited.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Stimulus overload</em> was a real problem throughout all the stores we visited, with an abundance of touchpoints and densely packed merchandise and displays. There was no sense of curation or targeted messaging, making it difficult for the consumer to find anything they’d want to purchase.
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle}>
                        <img className="feature-image" src={stimulus_overload}
                            alt="Displays and racks of shoes upon shoes with no real focus"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Could you sort through all this?
                      </p>
                    }/>


                    <Row content={
                      <h4 className={pStyle}>Macy's Brand</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <em>Magic</em> is Macy’s favorite term for describing themselves. Per their careers page magic is "an energy you feel when you walk in the door – a special connection and a sense that good things are happening." Unfortunately this goal is not being met in-store.
                      </p>
                    }/>
                  </span>
                }
              />

              <ProjectSection
                title={"Synthesize"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        With all these insights, we then began to figure out how all these factors connect to one another to shape the customer experience. We began developing personas, creating journey maps, identifying stakeholder relationships, and identifying which problems we wanted to tackle.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Personas</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Macy’s is a national corporation with a target audience that is essentially everyone, which made it tricky deciding on personas of shoppers at Macy's. We ended up identifying and creating nine persona types that we thought best represented the majority of shoppers at Macy’s.
                      </p>
                    }/>

                    <Lightbox
                      images={[
                        {
                          src: michelle_full,
                          caption: 'Michelle shops for fun'
                        },
                        {
                          src: carol_full,
                          caption: 'Carol is a deal hunter'
                        },
                        {
                          src: david_full,
                          caption: 'David got dragged along'
                        },
                        {
                          src: diane_full,
                          caption: 'Diane shops for others'
                        },
                        {
                          src: stacy_full,
                          caption: 'Stacy shops to hang out'
                        },
                        {
                          src: stephy_full,
                          caption: 'Stephy focuses on fashion'
                        },
                        {
                          src: bruno_full,
                          caption: 'Bruno doesn’t know what to get'
                        },
                        {
                          src: heather_full,
                          caption: 'Heather helps others shop'
                        },
                        {
                          src: kevin_full,
                          caption: 'Kevin wants to be in and out'
                        }
                      ]}
                      open={this.state.personaLightboxIsOpen}
                      index={this.state.index}
                    />

                    <Row content={
                      personas_1.map(function (persona, index) {
                        return (
                          <div key={"persona" + index} onClick={(e) => self.openLightbox(index, "persona", e)}
                               className={index === 0 ? "col-xs-4 col-sm-4 col-md-4 col-lg-offset-1dot5 col-lg-3 col-xl-offset-1dot5 col-xl-3" : "col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-3" }>
                            <img className="mini-image" src={persona} alt=""/>
                          </div>
                        )
                      })
                    }/>

                    <Row content={
                      personas_2.map(function (persona, index) {
                        return (
                          <div key={"persona" + index+3} onClick={(e) => self.openLightbox(index+3, "persona", e)}
                               className={index === 0 ? "col-xs-4 col-sm-4 col-md-4 col-lg-offset-1dot5 col-lg-3 col-xl-offset-1dot5 col-xl-3" : "col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-3" }>
                            <img className="mini-image" src={persona} alt=""/>
                          </div>
                        )
                      })
                    }/>

                    <Row content={
                      personas_3.map(function (persona, index) {
                        return (
                          <div key={"persona" + index+6} onClick={(e) => self.openLightbox(index+6, "persona", e)}
                               className={index === 0 ? "col-xs-4 col-sm-4 col-md-4 col-lg-offset-1dot5 col-lg-3 col-xl-offset-1dot5 col-xl-3" : "col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-3" }>
                            <img className="mini-image" src={persona} alt=""/>
                          </div>
                        )
                      })
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Click to see each shopper's full details
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Customer Journeys</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        After we had our personas developed, we then developed in-store journeys for them to help us identify key problems to tackle in our designs. The example below highlights the pains of walking between departments and having to interact with different associates at each one.
                      </p>
                    }/>

                    <Row content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
                        <img className="feature-image" src={current_journey}
                             alt="Displays and racks of shoes upon shoes with no real focus"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        You can see there's quite a few negative moments
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Stakeholder Map</h4>
                    }/>


                    <Row content={
                      <p className={pStyle}>
                        We also had to consider the context of which our solution would be launched in. A large corporation like Macy’s deals with a lot of different stakeholder on a daily basis, and how our solution would affect those relationships. To help illustrate and consider these factors, we created a stakeholder map.
                      </p>
                    }/>

                    <Row content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-offset-1 col-lg-10 col-xl-offset-1 col-xl-10"}>
                        <img className="feature-image" src={stakeholder_map}
                             alt="Displays and racks of shoes upon shoes with no real focus"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        A lot of relationships going on
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Problems to Tackle</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        After mapping out all of this information, we finally mananged to narrow down some of the problems in the Macy’s shopping experience we wanted to tackle:
                      </p>
                    }/>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li>The disconnect of Macy’s idealized brand identity versus the actual</li>
                        <li>The difficulty of associates having work the front and back of the store at the same time</li>
                        <li>Make shopping in-store more personal and more rewarding</li>
                        <li>Rearrange store departments to create a smoother experience</li>
                      </ul>
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
                        Once we had identified the problems we wanted to tackle, we began to brainstorm solutions. Because we had the flexibility of thinking of technical developments five years in the future, we leveraged cutting edge commercial innovations that we thought will be commonplace in five years.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Shopping as a Service</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        With the rise of the sharing economy businesses have increasingly about providing a service, like taxis (Uber, Lyft) or lodging (Airbnb). These companies don't actually own the physical entities that enable their product, however Macy’s does have a vast stock of physical merchandise, and we thought that we could leverage that to create the best of both worlds.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Restructuring the Band</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Currently Macy’s brand does not resonate with any real core demographic, symptoms of the curse of being a department store meant to carry "everything". However within Macy’s they do have their own in-house brands, which do have specific target demographics, such as Bar III and Style&co.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We thought there was an opportunity to take advantage of those brands, by spinning them out into their own stores that could live outside of Macy’s department stores. Malls are seeing less and less foot traffic, so this tactic would allow them greater market penetration in smaller markets.
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle}>
                        <img className={"feature-image"} src={bar_and_style}/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Getting Macy's out of the mall and into the streets
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Supporting the Employees</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Macy’s employees are often caught running between the customer and the backroom checking stock and supplies, and we figured that their time was more valuably spent interacting with the customer rather than checking what was available in the back.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        In order to facilitate more forward-facing time, we imagined a stockroom that was managed by autonomous robots, where an employee could enter what a shopper wanted and the backroom would gather the objects and set them aside in changing room so at the end of their shopping trip, a customer would merely pop into a changing room with their desired clothing waiting for them to try on.
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle}>
                        <img className={"feature-image"} src={robots}/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        An army of automation for fetching clothing
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Resulting Customer Journey</h4>
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

export default Macy;
