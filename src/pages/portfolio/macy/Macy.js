import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import ImageZoom from 'react-medium-image-zoom'
import VisibilitySensor from 'react-visibility-sensor';
import './Macy.css';

import Button from '../../../components/button/Button';
import ProjectPage from '../../../components/project-page/ProjectPage';
import Process from '../../../components/process/Process';
import ProjectStats from '../../../components/project-stats/ProjectStats';
import ProjectSection from "../../../components/project-section/ProjectSection";
import Row from '../../../components/row/Row';
import Lightbox from '../../../components/lightbox/Lightbox';
import Video from '../../../components/video/Video';
import Callout from '../../../components/callout/Callout';


//research icons
import dept from '../../../media/macy/icons/dept.svg';
import star from '../../../media/macy/icons/star.svg';
import docs from '../../../media/macy/icons/docs.svg';
import phone from '../../../media/macy/icons/phone.svg';

//research
import hero from '../../../media/macy/macy_hero.jpg';
import bazaar from '../../../media/macy/research/bazaar.png';
import annual_report from '../../../media/macy/research/annual_report.png';
import reimplement_brand from '../../../media/macy/reimplement_brand.png';
import storefront from '../../../media/macy/research/storefront.png';

//insights icons
import trend from '../../../media/macy/icons/trend.svg';
import pain from '../../../media/macy/icons/pain.svg';
import stimulus_overload from '../../../media/macy/stimulus_overload.jpg';

//synthesize icons
import personas from '../../../media/macy/icons/personas.svg';
import cust_journey from '../../../media/macy/icons/cust_journey.svg';
import stakeholders from '../../../media/macy/icons/stakeholder.svg';

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
      researchOpen: false,
      insightsOpen: false,
      synthesizeOpen: false,
      index: 0
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.collapseResearch = this.collapseResearch.bind(this);
    this.collapseInsight = this.collapseInsight.bind(this);
    this.collapseSynthesize = this.collapseSynthesize.bind(this);
    this.closeLightboxes = this.closeLightboxes.bind(this);
  }

  collapseResearch() {
    this.closeLightboxes();
    this.setState({
      researchOpen: !this.state.researchOpen
    })
  }

  collapseInsight() {
    this.closeLightboxes();
    this.setState({
      insightsOpen: !this.state.insightsOpen
    })
  }

  collapseSynthesize() {
    this.closeLightboxes();
    this.setState({
      synthesizeOpen: !this.state.synthesizeOpen
    })
  }

  closeLightboxes() {
    this.setState({
      researchLightboxIsOpen: false,
      personaLightboxIsOpen: false,
      customerLightboxIsOpen: false,
      associateLightboxIsOpen: false
    })
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

    let pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
    let quoteStyle = "quote col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-offset-4 col-xl-4";

    let steps = [
      {
        title: "Research",
        processes: ["Observations in Store", "Literature Review", "Calls with Corporate"]
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
          description={"A shopping experience focused on personal assistance and a smaller store footprint"}
          hero={hero}
          heroAlt={"Our Macy's app on top of a bag."}
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

                  </span>
                }
              />

              <ProjectSection
                title={"Solution"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Four different notification methods that were prototyped and tested with real users to inform us how to design alerts in VR.
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
                      <div
                        className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-1 col-xl-10">
                        <Process
                          steps={steps}/>
                      </div>
                    }/>

                     <ProjectStats
                       team={["8 designers", "(Research & Synthesize)", "2 designers", "(Design onwards)"]}
                       responsibilities={["Interaction Design", "Journey Maps", "App Concept & Design", "Unity Prototype"]}
                       time={"Jan ’17 - April ’17"}
                     />
                  </span>

                }
              />

              <ProjectSection
                title={"Research"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        Our research began by both visiting Macy's stores and reading as many documents as we could relating to either Macy's or retail in general. We also had several calls with Macy's employees to talk about our findings and also learn about the internal workings of the company.
                      </p>
                    }/>

                    <div className="row">
                      <Callout
                        image={dept}
                        altText={"deaprtment store icon"}
                        title={"Store Visits"}
                        description={"Went to Macy's and their competitors to see store environments"}
                        first={true}
                      />

                      <Callout
                        image={docs}
                        altText={"papers stacked"}
                        title={"Literature Review"}
                        description={"Read financial reports, news articles, trend reports, retail journals, etc"}
                      />

                      <Callout
                        image={phone}
                        altText={"phone icon"}
                        title={"Conference Calls"}
                        description={"Discussed internal structure and brand vision with corporate contacts"}
                        middle={true}
                      />
                    </div>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseResearch}>
                        <Button
                          label={this.state.researchOpen ? "Hide Research Process" : "See Research Process"}
                          color={"green"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.researchOpen}>

                    <Row content={
                      <h4 className={pStyle}>Store Visits</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We conducted in-store research, both at Macy’s and their competitors like Nordstrom and Nieman Marcus, browsing between different departments and observing customers. We documented and photographed any problems we encountered with the store environment, and also noted where their competitors were succeeding.
                      </p>
                    }/>

                    <Row content={
                      <h4 className={pStyle}>Literature Review</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                         We also read through financial reports, brand guidelines, retail news, corporate policies, internal documents,  peer reviewed articles, and a bunch of other relevant information to help us understand Macy's situation and the current retail landscape.
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

                    <Row content={
                      <h4 className={pStyle}>Conference Calls</h4>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        We had several calls with Macy's corporate, where we asked them questions regarding problems or promotions we encountered in-store, as well as news articles and interviews regarding Macy’s future plans. These helped us to understand where Macy’s saw themselves going in the next year or two, as well as
                      </p>
                    }/>

                    </Collapse>

                  </span>
                }
              />

              <ProjectSection
                title={"Insights"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        From all our investigation we gathered a lot of different important information, ranging from what customers currently desire to the challenges shoppers face when inside the store. Here are the highlights:
                      </p>
                    }/>

                    <div className="row">
                      <Callout
                        image={trend}
                        altText={"line graph icon"}
                        title={"Retail Trends"}
                        description={"Bringing entertainment in-store and a consistent experience with the brand"}
                        first={true}
                      />

                      <Callout
                        image={pain}
                        altText={"pain emoji"}
                        title={"Pain Points"}
                        description={"Absent service and stimulus overload plague in-store environments"}
                      />

                      <Callout
                        image={star}
                        altText={"macy's star"}
                        title={"Macy’s Brand"}
                        description={"Core principles of Macy’s not being conveyed to customers"}
                        middle={true}
                      />
                    </div>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseInsight}>
                        <Button
                          label={this.state.insightsOpen ? "Hide Detailed Insights" : "See Detailed Insights"}
                          color={"green"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.insightsOpen}>

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
                        <em>Magic</em> is Macy’s favorite term for describing themselves. Per their careers page magic is "an energy you feel when you walk in the door – a special connection and a sense that good things are happening." It also serves as an acronym:
                      </p>
                    }/>

                    <Row content={
                      <p className={quoteStyle}>
                        "The M is for meet and make a connection; the A, ask questions and listen; G, give options and give advice; I, inspire to buy; and C, celebrate the purchase."
                      </p>
                    }/>

                    <Row content={
                      <p className={pStyle}>
                        Unfortunately, while visiting the store we felt none of those moments. We felt as though this strong brand message was getting lost somewhere along the way and it was important our solution brought it to the forefront.
                      </p>
                    }/>

                    </Collapse>


                  </span>
                }
              />

              <ProjectSection
                title={"Synthesize"}
                content={
                  <span>
                    <Row content={
                      <p className={pStyle}>
                        With all these insights, we then began to figure out how all these factors connect to one another to shape the customer experience. We began developing personas, creating journey maps, and identifying stakeholder relationships which led us to identifying which problems to solve.
                      </p>
                    }/>

                    <div className="row">
                      <Callout
                        image={personas}
                        altText={"people lined up"}
                        title={"Personas"}
                        description={"Developed identities of who we were designing for"}
                        first={true}
                      />

                      <Callout
                        image={cust_journey}
                        altText={"map icon"}
                        title={"Customer Journeys"}
                        description={"Mapped out current in-store experiences with highs and lows"}
                      />

                      <Callout
                        image={stakeholders}
                        altText={"graph icon"}
                        title={"Stakeholder Map"}
                        description={"Identified key relationships that affect the business strategy"}
                        middle={true}
                      />
                    </div>

                    <Row content={
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 button-wrapper" onClick={this.collapseSynthesize}>
                        <Button
                          label={this.state.synthesizeOpen ? "Hide Detailed Synthesis" : "See Detailed Synthesis"}
                          color={"outline red"}
                        />
                      </div>
                    }/>

                    <Collapse isOpened={this.state.synthesizeOpen}>

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
                        <ImageZoom
                          image={{
                            src: current_journey,
                            alt: 'Displays and racks of shoes upon shoes with no real focus',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: current_journey,
                            alt: 'Displays and racks of shoes upon shoes with no real focus'
                          }}
                        />
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
                        <ImageZoom
                          image={{
                            src: stakeholder_map,
                            alt: 'Map of Macy’s relations with customer, suppliers, malls, associates, etc',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: stakeholder_map,
                            alt: 'Map of Macy’s relations with customer, suppliers, malls, associates, etc'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        A lot of relationships going on
                      </p>
                    }/>

                    </Collapse>

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
                        <li>Make shopping in-store more personal and more rewarding</li>
                        <li>The difficulty of associates having work the front and back of the store at the same time</li>
                        <li>The disconnect of Macy’s idealized brand identity versus the perceived image</li>
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
                        <ImageZoom
                          image={{
                            src: bar_and_style,
                            alt: 'Two Macy’s brands on street level stores',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: bar_and_style,
                            alt: 'Two Macy’s brands on street level stores'
                          }}
                        />
                      </div>
                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Getting Macy's out of the mall and into the streets
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
                      <span className={pStyle + " video-holder"}>
                        <span className="aspect-keeper">
                          <iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=acc0b6c2-33b3-4be9-bb45-052f385cb8bf" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" allowFullScreen />
                        </span>
                      </span>

                    }/>

                    <Row content={
                      <p className={"caption " + pStyle}>
                        Click to play around with my <a href="https://www.lauranesaliou.me/" target="_blank" rel="noopener noreferrer" >partner's</a> store model
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
                        <ImageZoom
                          image={{
                            src: design_journey,
                            alt: 'Customer journey, with a private assistant',
                            className: 'feature-image'
                          }}
                          zoomImage={{
                            src: design_journey,
                            alt: 'Customer journey, with a private assistant'
                          }}
                        />
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
                        <a href="http://philkt.me/macys-service-design" target="_blank" rel="noopener noreferrer" >
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
                          If you're REALLY interested in diving into the details (even moreso than I did here), here are links to the <a href="http://philkt.me/files/macys_presentation.pdf" target="_blank" rel="noopener noreferrer" >presentation</a> and <a href="http://philkt.me/files/macys_doc.pdf" target="_blank" rel="noopener noreferrer" >document</a> that we ultimately handed off to Macy’s.
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
