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
import ImportantDate from "../components/sections/ImportantDate";

import UCC_2022_workshops from "../assets/UCC_2022_workshops.csv";
import {csv, groups} from "d3"

class Secondary extends React.Component {

    state = {
        demoModalActive: false,
        workshopList:[],
    }

    openModal = (e) => {
        e.preventDefault();
        this.setState({demoModalActive: true});
    }

    closeModal = (e) => {
        e.preventDefault();
        this.setState({demoModalActive: false});
    }

    componentDidMount() {
        csv(UCC_2022_workshops).then(d=>{
            this.setState({workshopList:d.filter(d=>((d.Potential==='')&&(d.Name!=='')))});
        })
    }

    render() {
        const {workshopList} = this.state;

        return (
            <React.Fragment>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Current Workshop</h2>
                        <ul>
                            {workshopList.map((d,i)=><li><a target="_blank" href={d.Website}>{d.Name}</a></li>)}
                        </ul>
                    </div>
                </GenericSection>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Call for Workshop Proposals Submission</h2>
                        <p>
                            Workshop proposals and any inquiries should be sent by e-mail to the workshops chairs:
                        </p>
                        <ul>
                            <li>Luiz Bittencourt: bit@ic.unicamp.br</li>
                            <li>Nitin Auluck: nitin@iitrpr.ac.in</li>
                            <li>Zichuan Xu: z.xu@dlut.edu.cn</li>
                        </ul>

                        <h4>CONTEXT & SCOPE</h4>
                        <p>
                            UCC is the premier IEEE/ACM conference covering all areas related to utility computing,
                            cloud and edge computing services, and other forms of advanced distributed computing. UCC
                            provides an international forum for leading researchers and practitioners in this
                            fundamental and growing multidisciplinary area.
                        </p>
                        <p>
                            Cloud Computing delivers computational resources on-demand as services that are commoditized
                            and delivered comfortably analogous to traditional utilities such as electricity, gas, water
                            and telephony. Cloud service offerings for compute, storage and communication resources as
                            well as for hosted software and data are growing at a tremendous rate. It is essential to
                            understand how to effectively transform these services into Utilities that provide value to
                            both users and providers. There is also increasing interest from commercial providers to
                            offer business and revenue models around the services they offer, including edge computing
                            capabilities. Understanding how these models could be used to provide utility for users,
                            intermediary brokers (aggregators) and providers is also an area of active research.
                            Moreover, resource management from the edge to the cloud continuum is of paramount
                            importance to efficiently provide utility computing that can support a large set of
                            heterogeneous application with a wide range of requirements.
                        </p>
                        <p>
                            This will be the 15th UCC in a successful conference series of community-driven events.
                            Previous events were held in Shanghai, China (Cloud 2009), Melbourne, Australia (Cloud 2010
                            & UCC 2011), Chennai, India (UCC 2010), Chicago, USA (UCC 2012), Dresden, Germany (UCC
                            2013), London, UK (UCC 2014), Limassol, Cyprus (UCC 2015), Shanghai, China (UCC 2016),
                            Austin, Texas, USA (UCC 2017), Zurich, Switzerland (UCC 2018), and Auckland, New Zealand
                            (UCC 2019), 2020 (online), 2021 (Leicester, UK/hybrid online).
                        </p>
                        <p>
                            Proposals for workshops should be submitted in PDF format, must not exceed 2 pages in length
                            and contain the following information.
                        </p>
                        <ol>
                            <li>Title and brief technical description of the workshop, specifying the goals and the
                                technical issues that will be the focus of the workshop.
                            </li>
                            <li>A brief description of why and to whom the workshop is of interest.</li>
                            <li>A list of related workshops or similar events held in the last 3 years, or to be held in
                                2022.
                            </li>
                            <li>The names and contact information (web page, email address) of the proposed technical
                                program committee. This international committee should consist of at least 10 people
                                knowledgeable about the technical issues to be addressed and preferably not more than
                                two members of the same institution. Ideally, there should also be two organizers from
                                distinct institutions and countries.
                            </li>
                            <li>A description of the qualifications of the organizers (who would be the Workshop Chairs)
                                with respect to organizing this workshop. This can include papers published in the
                                proposed topic area, previous workshop organization, and other relevant information.
                            </li>
                        </ol>

                    </div>
                </GenericSection>
                <ImportantDate topDivider event={[
                    {key: 'Workshop Proposals Due', date: '30 May 2022'},
                    {key: 'Notification of Acceptance', date: '10 June 2022'},
                    {key: 'URL of Workshop', date: '25 June 2022'},
                    {key: 'Camera-ready & Registration', date: '30 September 2022'},
                    {key: 'Workshops', date: '01 December 2022'},
                ]}
                               extra={<p>Note: Workshops may be approved and announced early based on quality of the
                                   proposal.</p>}/>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">TOPICS OF INTEREST</h2>
                        <p>
                            We encourage workshops on both established research topics to promote newly developed ideas
                            as well as workshops on emerging topics with sufficient body of research being carried out.
                            Topics of interest include but are not limited to:
                        </p>
                        <ul>
                            <li>Principles and theoretical foundations of Utility Computing, including pricing and
                                service models
                            </li>
                            <li>Policy languages and programming models, such as cloud-native and cloud-enabled
                                applications
                            </li>
                            <li>Programming models for fog and F2C (fog to cloud) computing.</li>
                            <li>Utility-driven models and mechanisms for Cloud federations</li>
                            <li>Autonomic techniques for Cloud applications</li>
                            <li>Utility-/comfort-driven platforms for Clouds</li>
                            <li>Architectural models to achieve Utility in Clouds</li>
                            <li>Architectural models for F2C (Fog to Cloud)</li>
                            <li>Designs and deployment models for Clouds: private, public, hybrid, federated,
                                aggregated
                            </li>
                            <li>Cloud Computing middleware, stacks, tools, delivery networks and services at all layers
                                (XaaS)
                            </li>
                            <li>Integration of Cloud systems and fog systems with edge devices</li>
                            <li>Cloud to edge continuum for Internet of Things, Smart Industries, and Smart Cities.</li>
                            <li>Virtualization technologies and other enablers</li>
                            <li>Economic models and scenarios of use</li>
                            <li>Scalability and resource management: brokering, scheduling, capacity planning,
                                parallelism and elasticity, as well as marketplaces
                            </li>
                            <li>Cloud management: autonomic, adaptive, self-*, SLAs, performance models and monitoring
                            </li>
                            <li>Fog and edge management: resource discovery, clustering and identification of devices,
                                new SLAs models for fog
                            </li>
                            <li>Applications: games, social networks, scientific computing (e-science) and business, as
                                well as large-scale foundations for Big Data and analytics
                            </li>
                            <li>Mobile and energy-efficient use of Clouds</li>
                            <li>Cloud business and legal implications beyond technology, such as government regulation,
                                security, privacy, trust and jurisdiction especially in Utility Computing contexts
                            </li>
                        </ul>
                    </div>
                </GenericSection>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">RESPONSIBILITIES</h2>
                        <p>
                            Workshop chair(s) will be responsible for the following:
                        </p>
                        <ul>
                            <li>Setup the submission system of your choice.</li>
                            <li>Invite TPC members.</li>
                            <li>Producing a web page and a “Call for Papers/Participation” for their workshop. The URL
                                should be sent to the UCC Workshops chairs. The call must make it clear that the
                                workshop is open to all members of the Cloud, Edge, Fog, Big Data, Grid, and Cluster
                                Computing community. It should mention that at least one author of each accepted
                                submission must attend the workshop and that all workshop participants must register
                                under the UCC 2022 workshop day registration fee or the conference fee. The CfP should
                                make it clear that the registration of at least one author requires the full
                                (non-student, non-workshop) rate.
                            </li>
                            <li>Ensure that all workshop papers are a maximum of 6 pages in length (in IEEE format). It
                                is the responsibility of the workshop organizers to ensure that this page limit has been
                                adhered to. Additional pages may be purchased (in some circumstances) subject to
                                approval by the proceedings chair.
                            </li>
                            <li>Provide a brief description of the workshop for the conference web page and program.
                            </li>
                            <li>Select the participants and the format of the workshop. The publication of proceedings
                                will be by the IEEE in the same volume as the main conference or in a companion volume.
                            </li>
                            <li>Advertising the workshop beyond the conference web page.</li>
                            <li>Assistance in producing a camera-ready version of the workshop proceedings.</li>
                        </ul>
                        <p>
                            The UCC 2022 Conference Organizing Committee will be responsible for the following:
                        </p>
                        <ul>
                            <li>Providing a link to a workshop's local page.</li>
                            <li>Providing logistics support and a meeting place for the workshop.</li>
                            <li>In conjunction with the organizers, determining the workshop date and time.</li>
                            <li>Providing copies of the workshop proceedings to attendees.</li>
                        </ul>
                        <h4>Details and Important Notes</h4>
                        <ol>
                            <li>If the workshop is too small (i.e. does not attract enough submissions) the UCC 2022
                                Organizing Committee may decide to merge that workshop with another. We encourage
                                workshop organizers to attract a large community. In extreme situations we may also
                                cancel workshops if there are not enough submissions.
                            </li>
                            <li>Workshop organizers must ensure that suitable quality measures have been taken to ensure
                                that the accepted papers are of high quality. All papers must be reviewed by an
                                International Technical Program Committee with a minimum of 3 reviews per paper. The
                                workshop organizers should also try to observe an acceptance rate that is no higher than
                                50%.
                            </li>
                            <li>Workshops are not automatically endorsed by IEEE or ACM and should not use the names of
                                these organizations in their titles.
                            </li>
                        </ol>
                    </div>
                </GenericSection>
            </React.Fragment>
        );
    }
}

// inline style
const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
}

export default Secondary;