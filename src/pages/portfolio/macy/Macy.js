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

import hero from '../../../media/macy/macy_hero.jpg';
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

//app screens
import searching from '../../../media/macy/app/Searching.png';
import match_found from '../../../media/macy/app/Match_Found.png';
import rate from '../../../media/macy/app/Rate.png';
import search from '../../../media/macy/app/Search.png';
import single_prod from '../../../media/macy/app/Single_Product.png';
import suggest from '../../../media/macy/app/Suggestions_White_Dress.png';

//kiosk screens
import k_initial from '../../../media/macy/kiosk/Kiosk_Initial.png';

import bar_and_style from '../../../media/macy/bar_and_style.png';
import robots from '../../../media/macy/robots.png';
import design_journey from '../../../media/macy/designed_journey.svg';
import get_in_out from '../../../media/macy/get_in_out_journey.svg';

import unity from '../../../media/macy/unity.png';

class Macy extends Component {

  constructor () {
    super();

    this.state = {
      researchLightboxIsOpen: false,
      personaLightboxIsOpen: false,
      customerLightboxIsOpen: false,
      associateLightboxIsOpen: false,
      index: 0
    };

    this.openLightbox = this.openLightbox.bind(this);
  }


  openLightbox(index, type, event) {
    if(type === "research") {

      this.setState({
        researchLightboxIsOpen: true,
        personaLightboxIsOpen: false,
        customerLightboxIsOpen: false,
        associateLightboxIsOpen: false,
        index: index
      })
    }

    if(type === "persona") {
      this.setState({
        personaLightboxIsOpen: true,
        researchLightboxIsOpen: false,
        customerLightboxIsOpen: false,
        associateLightboxIsOpen: false,
        index: index
      })
    }

    if(type === "customer_app") {
      this.setState({
        personaLightboxIsOpen: false,
        researchLightboxIsOpen: false,
        customerLightboxIsOpen: true,
        associateLightboxIsOpen: false,
        index: index
      })
    }

    if(type === "associate_app") {
      this.setState({
        personaLightboxIsOpen: false,
        researchLightboxIsOpen: false,
        customerLightboxIsOpen: false,
        associateLightboxIsOpen: true,
        index: index
      })
    }
  }

  render() {

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 col-xl-offset-3 col-xl-6";

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

    let customer_app = [searching, match_found, rate];
    let associate_app = [search, single_prod, suggest];

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
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Department stores are one of the many retail stalwarts that find themselves being consumed by the convenience and ubiquity of online shopping. Macy’s came to our service design class seeking a vision on what their shopping experience might look like 5 years in the future with the current advancements in technology and the emerging trends in retail.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <a href="#solution">Click here to skip to the end and see how we solved this.</a>
                      </p>
                    }/>
                  </span>
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
                        With all these insights, we then began to figure out how all these factors connect to one another to shape the customer experience. We began developing personas, creating journey maps, identifying stakeholder relationships, and identifying which problems to solve.
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
                             alt="MAp of Macy's relations with customer, suppliers, malls, associates, etc"/>
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
                        After mapping out all of this information, we managed to narrow down the problems in the Macy’s shopping experience we wanted to tackle:
                      </p>
                    }/>

                    <Row content={
                      <ul className={pStyle + " list"}>
                        <li>The difficulty of associates having work the front and back of the store at the same time</li>
                        <li>Make shopping in-store more personal and more rewarding</li>
                        <li>The disconnect of Macy’s idealized brand identity versus the actual</li>
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
                        Once we had identified the issues to address, we began to brainstorm solutions. Because we had the flexibility of thinking of technical developments five years in the future, we leveraged cutting edge commercial innovations that we thought will be commonplace in five years.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Shopping as a Service</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        With the rise of the sharing economy businesses have increasingly been about providing a service, like taxis (Uber, Lyft) or lodging (Airbnb). These companies don't actually own the physical entities that enable their product, however, Macy’s does have a vast stock of physical merchandise, and we thought that we could leverage that to create the best of both worlds.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        In order to do so, we decided to reposition the store associates as personal shoppers, there to assist the customers with style advice, navigating the store, and overall creating a unique, only-in-store experience. To facilitate this, customers would be paired with an associate when they enter the store.
                      </p>
                    }/>

                    <Lightbox
                      images={[
                        {
                          src: searching,
                          caption: 'In store, the app searches for an associate'
                        },
                        {
                          src: match_found,
                          caption: 'Once a match is found, just sit tight'
                        },
                        {
                          src: rate,
                          caption: 'Rate your service so Macy’s can improve'
                        }
                      ]}
                      open={this.state.customerLightboxIsOpen}
                      index={this.state.index}
                    />

                    <Row content={
                     customer_app.map(function (screen, index) {
                        return (
                          <div key={"customer_screen" + index} onClick={(e) => self.openLightbox(index, "customer_app", e)}
                              className={index === 0 ? "col-xs-4 col-sm-4 col-md-4 col-lg-offset-1dot5 col-lg-3 col-xl-offset-1dot5 col-xl-3" : "col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-3" }>
                            <img className="mini-image" src={screen} alt=""/>
                          </div>
                        )
                      })
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        The customer app pairs you with an associate
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        But what if they don’t have or want to download an app you say? We thought of that too, by reusing the kiosks that Macy’s currently has throughout their stores to manage their cart on their own and also call for an assistant if or when they'd like one. Shoppers can take an RFID tag off the item rack, scan it, and then receive an assigned fitting room to go to where their scanned items will be waiting.
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle}>
                        <img className={"feature-image"} src={k_initial} alt="Kiosk screen asking if you want to scan, search, or request help"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        No need to download another app
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The customer is able to rate their shopping experience at the end which provides feedback to Macy’s on their associate's perfomance. On the employee side, they are able to add objects to a customer's bag as they encounter them and are provided suggested pairings. The associate can decide which one is most relevant to the customer to recommend.
                      </p>
                    }/>

                    <Lightbox
                      images={[
                        {
                          src: search,
                          caption: 'Search for the product the customer wants'
                        },
                        {
                          src: single_prod,
                          caption: 'Add products to the customer’s bag'
                        },
                        {
                          src: suggest,
                          caption: 'Curate auto-generated suggestions'
                        }
                      ]}
                      open={this.state.associateLightboxIsOpen}
                      index={this.state.index}
                    />

                    <Row content={
                      associate_app.map(function (screen, index) {
                        return (
                          <div key={"associate_screen" + index} onClick={(e) => self.openLightbox(index, "associate_app", e)}
                               className={index === 0 ? "col-xs-4 col-sm-4 col-md-4 col-lg-offset-1dot5 col-lg-3 col-xl-offset-1dot5 col-xl-3" : "col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-3" }>
                            <img className="mini-image" src={screen} alt=""/>
                          </div>
                        )
                      })
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        The associate app lets them manage a customer's cart
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
                        <img className={"feature-image"} src={bar_and_style} alt="Two Macy's brands on street level stores"/>
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
                      <span>
                        <p className={pStyle}>
                          In order to facilitate more forward-facing time, we imagined a stockroom that was managed by autonomous robots, where an employee could enter what a shopper wanted and the backroom would gather the objects and set them aside in changing room so at the end of their shopping trip, a customer would merely pop into a changing room with their desired clothing waiting for them to try on.
                        </p>
                      </span>
                    }/>

                    <Row content={
                      <div className={pStyle}>
                        <img className={"feature-image"} src={robots} alt="Storeroom using autonomous robots"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        An army of automation for fetching clothing
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Rethinking the Store Layout</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        By sizing down the stock room, it also allowed us to play with the store layout to provide a focus on the fitting room experience. We dedicated the entire end of the store to trying on clothes, so that a customer could simply try out their clothes and leave behind the articles they didn't like. The more expansive floor also allows for a more social environment when shopping with friends or family.
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        <iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=acc0b6c2-33b3-4be9-bb45-052f385cb8bf&width=580&height=326" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" width="580" height="326" allowFullScreen />
                      </p>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Click to play around with my <a href="https://www.lauranesaliou.me/" target="_blank">partner's</a> store model
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Resulting Customer Journey</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        The result of all these innovations led to a customer journey with a pretty robust system of actors, with the customer and associate always paired up, leaving automation to handle the fetching of clothes and assisting the stylist with fashion suggestions.
                      </p>
                    }/>

                    <Row content={
                      <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-offset-1 col-lg-10 col-xl-offset-1 col-xl-10"}>
                        <img className="feature-image" src={design_journey}
                             alt="Customer journey, with a private assistant"/>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        A more intricate system, involving AI, robots, and dedicated fitting room associates
                      </p>
                    }/>

                  </span>
                }
              />

              <ProjectSection
                title={"Prototype"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        In order to help you get a better idea of how this all plays out I took the 3D model my teammate created and placed in a Unity environment so that you could walk around and get a better feel for what the store experience might feel like.
                      </p>
                    }/>

                    <Row content={
                      <div className={pStyle}>
                        <a href="http://philkt.me/macys-service-design" target="_blank">
                          <img className={"feature-image"} src={unity} alt="Unity demo link"/>
                        </a>
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Click above to try out the Unity demo
                      </p>
                    }/>


                  </span>
                }
              />

              <ProjectSection
                title={"Presentation"}
                content={
                  <span id="solution">
                    <Row content={
                      <span>
                        <p className={pStyle}>
                          At the end of the semester, all of our work had to be nicely wrapped up to be presented to various Macy‘s VIPs and documented in order to provide an easy method to circulate our ideas around the company. The following video encapsulates most of our ideas in a cool 2 minutes and 30 seconds.
                        </p>
                      </span>
                    }/>

                    <Row content={
                      <span className={pStyle + " video-holder"}>
                          <span className="aspect-keeper">
                            <iframe src="https://www.youtube.com/embed/ivBOMyQble8" frameBorder="0" allowFullScreen />
                          </span>
                      </span>
                    }/>

                    <Row content={
                      <span>
                        <p className={pStyle}>
                          If you're REALLY interested in diving into the details (even moreso than I did here), here are links to the <a href="http://philkt.me/files/macys_presentation.pdf" target="_blank">presentation</a> and <a href="http://philkt.me/files/macys_doc.pdf" target="_blank">document</a> that we ultimately handed off to Macy’s.
                        </p>
                      </span>
                    }/>
                  </span>
              }/>

            </span>
          }
        />
      </div>
    );
  }
}

export default Macy;
