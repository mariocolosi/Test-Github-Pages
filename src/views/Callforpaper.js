import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Team from '../components/sections/Team';
import Roadmap from '../components/sections/Roadmap';
import Testimonial from '../components/sections/Testimonial';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import classNames from "classnames";
import ImportantDate from "../components/sections/ImportantDate";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container/Container";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";

class Callforpaper extends React.Component {

    render() {
        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            ...props
        } = this.props;

        const genericSection04Header = {
            title: 'Paper Submission'
        };
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">

                        <GenericSection>
                                <h2>Call for Papers</h2>
                                <p>The digital transformation of all areas of life is accelerated in this decade by novel cloud services, e-infrastructures, data platforms and cyber-physical system integration. This broader scope of cloud computing calls for technically sound contributions that combine scale with convenience and reliability. Society and economy depend on cloud applications delivering compute power on demand in every location along data paths as a general service to the public, in analogy to conventional utilities. The engineering of such systems and applications calls for scientifically proven approaches, methods, tools and technologies.</p>
                                <p>Providing a forum to review and discuss possible solutions, UCC is the premier IEEE/ACM conference for areas related to Cloud Computing as a Utility where leading researchers and practitioners in this important and growing field gather on an annual basis.</p>

                                <p>This will be the 15th UCC in a successful conference series of community-driven events. Previous events were held in Shanghai, China (Cloud 2009), Melbourne, Australia (Cloud 2010 & UCC 2011), Chennai, India (UCC 2010), Chicago, USA (UCC 2012), Dresden, Germany (UCC 2013), London, UK (UCC 2014), Limassol, Cyprus (UCC 2015), Shanghai, China (UCC 2016), Austin, Texas, USA (UCC 2017), Zurich, Switzerland (UCC 2018), Auckland, New Zealand (UCC 2019), online during the pandemic (UCC 2020), and Leicester, UK (UCC 2021).</p>

                                <p>UCC 2022 will be hosted at Washington State University.  Portland, Oregon’s largest city, sits on the Columbia and Willamette rivers, in the shadow of snow-capped Mount Hood.</p>

                                <p>UCC 2022 offers a technical programme, workshops, tutorials, and a doctoral symposium. The event will have a co-located 9th International Conference on Big Data Computing Applications and Technologies (BDCAT 2022).</p>

                                <p>Authors are invited to submit original, unpublished research manuscripts in all areas of Cloud and Utility Computing and related computing paradigms such as Fog/Edge, Serverless and Distributed Computing.</p>

                                <p>Authors of accepted papers can opt into reproducible research decoration to publish according to open science conventions; the details are described below.</p>

                        </GenericSection>
                        <GenericSection topDivider>
                            <h2>Topics of interest include (but not limited to)</h2>
                            <ul>
                                <li>Formal and qualitative aspects of Cloud technology</li>
                                <li>Security, trust, privacy and policies in Clouds, and Cloud-hosted Blockchains</li>
                                <li>Artificial intelligence in Clouds, and Cloud applications</li>
                                <li>Architectural models and patterns to achieve Utility in Clouds</li>
                                <li>Cloud business and legal implications beyond technology</li>
                                <li>Cloud Computing middleware, stacks, tools, delivery networks and services at all layers (XaaS)</li>
                                <li>Cloud large-scale foundations for Big Data, IoT, and real-time analytics</li>
                                <li>Cloud management: autonomic, adaptive, self-*, SLAs, and monitoring</li>
                                <li>Cloud-native application design, programming models, engineering and serverless/microservice implementation</li>
                                <li>Cloud, Micro data centers, Fog and edge/mobile devices management, hierarchy models, and business models</li>
                                <li>Designs and deployment models for Clouds: private, public, hybrid, federated, aggregated, intercloud</li>
                                <li>Economic and business models of Clouds and services</li>
                                <li>High Performance Computing and the Cloud</li>
                                <li>Innovative cloud applications and experiences, including quantum clouds and IoT-fog/edge-cloud continuums</li>
                                <li>Mobile and energy-efficient use of Clouds</li>
                                <li>Networking for clouds and data centers</li>
                                <li>Performance analysis and modelling of cloud systems and applications</li>
                                <li>Principles and theoretical foundations of Utility Computing</li>
                                <li>Resource management and scalability: brokering, scheduling, capacity planning, and elasticity</li>
                                <li>Utility-driven platforms for Clouds</li>
                                <li>Utility-driven models and mechanisms for cloud applications in all domains (smart cities, mobility, e-health, industry etc.)</li>
                                <li>Virtualization, containerization, composition, orchestration and other enablers</li>
                            </ul>
                        </GenericSection>
                        <GenericSection topDivider>
                            <h2>Paper Submission</h2>
                            <p>
                                Submitted manuscripts must represent original unpublished research that is not currently under review for any other conference or journal. Manuscripts are submitted in PDF format and may not exceed ten (10) single-spaced double-column pages using 10-point size font on 8.5x11 inch pages (IEEE conference style), including figures, tables, and references. The limit is six (6) pages for workshop papers.
                            </p>
                            <p>
                                All manuscripts will be reviewed and judged on correctness, originality, technical strength, rigor in analysis, quality of results, quality of presentation, and interest and relevance to the conference attendees.
                            </p>
                            <p>
                                Accepted papers will be invited to undergo an artefact evaluation process that will determine availability of code/data or even reproducibility. An independent committee will handle this process and send the invite along with instructions after the acceptance notification.
                            </p>
                            <p>
                                At least one author of each paper must be registered for the conference in order for the paper to be published in the proceedings.  The proceedings will be published by the IEEE Computer Society and will be made available online through the IEEE Digital Library, as well as through the ACM Digital Library.
                            </p>
                            <p>
                                Formatting:  <a href={"https://www.ieee.org/conferences/publishing/templates.html"} target={"_blank"}>https://www.ieee.org/conferences/publishing/templates.html</a>
                            </p>
                            <p>
                                Main track submissions:  <a href={"https://easychair.org/conferences/?conf=ucc2022"} target={"_blank"}>https://easychair.org/conferences/?conf=ucc2022</a>
                            </p>
                            <p>
                                Workshop submissions: see respective workshop information
                            </p>
                        </GenericSection>

                        <GenericSection>

                                <ImportantDate  topDivider className="gradient-section" style={{paddingTop:0}} topOuterDivider={false}/>
                                <p>Check separate UCC calls for workshops, tutorials and other tracks.</p>

                        </GenericSection>


                </Container>
            </React.Fragment>
        );
    }
}

// inline style
const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
}

export default Callforpaper;
