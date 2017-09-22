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

import michelle from '../../../media/macy/personas/michelle.png';
import carol from '../../../media/macy/personas/carol.png';
import david from '../../../media/macy/personas/david.png';
import diane from '../../../media/macy/personas/diane.png';
import stacy from '../../../media/macy/personas/stacy.png';
import stephy from '../../../media/macy/personas/stephy.png';
import bruno from '../../../media/macy/personas/bruno.png';
import heather from '../../../media/macy/personas/heather.png';
import kevin from '../../../media/macy/personas/kevin.png';


class Macy extends Component {

  constructor () {
    super();

    this.state = {
      researchLightboxIsOpen: false,
      personaLightboxIsOpen: false,
      index: 0
    }

    this.openLightbox = this.openLightbox.bind(this);
  }


  openLightbox(index, type, event) {

    if(type === "research") {

      this.setState({
        researchLightboxIsOpen: true,
        index: index
      })
    }

    if(type === "persona") {
      this.setState({
        personaLightboxIsOpen: true,
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
        title: "Build",
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
          title={"The Future of Macy’s"}
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
                          caption: 'Macy\'s 2016 report for shareholders'
                        },
                        {
                          src: bazaar,
                          caption: 'Bazaarvoice\'s trends report for retail'
                        },
                        {
                          src: reimplement_brand,
                          caption: 'Case study on uniting the Macy\'s brand'
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
                        Various asses from researching
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
                          src: '',
                          caption: 'Casual Browser, Bargain Seeker, and Bored Companion'
                        },
                        {
                          src: '',
                          caption: 'Bazaarvoice\'s trends report for retail'
                        },
                        {
                          src: '',
                          caption: 'Case study on uniting the Macy\'s brand'
                        }
                      ]}
                      open={this.state.personaLightboxIsOpen}
                      index={this.state.index}
                    />

                    <Row content={
                      personas_1.map(function (persona, index) {
                        return (
                          <div key={"persona" + index} onClick={(e) => self.openLightbox(index, "persona", e)}
                               className={index === 0 ? "col-xs-4 col-sm-4 col-md-4 col-lg-offset-1 col-lg-3 col-xl-offset-1 col-xl-3" : "col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-3" }>
                            <img className="mini-image" src={persona} alt=""/>
                          </div>
                        )
                      })
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
