import React from 'react';
import Image from '../components/elements/Image';
import classNames from "classnames";
// import "../assets/agenda/resources/sheet.css"
import "./Program.css"
import {CardMedia, Tab, Tabs} from "@mui/material";
import {a11yProps, TabPanel} from "../components/elements/TabPanel";
import Paper from "@mui/material/Paper";

class Program extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: 0
        }
    }

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

        const outerClasses = classNames(
            'hero section center-content',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'hero-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        return (
            <React.Fragment>
                <section
                    {...props}
                    className={outerClasses}
                    id="overview"
                >
                    <div className="container">
                        <div className={innerClasses}>
                            <div className="hero-content">
                                <h3>UCC/BDCAT Program at A Glance</h3>
                                <div className="ritz grid-container" dir="ltr">
                                    <table className="waffle overview" cellSpacing="0" cellPadding="0">
                                        <colgroup>
                                            <col style={{width: "132px"}}></col>
                                            <col style={{minWidth: "221px"}}></col>
                                            <col style={{width: "120px"}}></col>
                                            <col style={{width: "120px"}}></col>
                                            <col style={{width: "120px"}}></col>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <td className="s1 head" rowSpan="2">Date/Time</td>
                                            <td className="s1 head" rowSpan="2">Activity</td>
                                            <td className="s1 head" colSpan="3">Room/Location (7th Floor Ballroom)</td>
                                        </tr>
                                        <tr>

                                            <td className="s1 head">Cava</td>
                                            <td className="s1 head">Bordeaux</td>
                                            <td className="s1 head">Chianti</td>
                                        </tr>
                                        <tr>

                                            <td className="s0  button-primary" colSpan="5">December 6, 2022</td>
                                        </tr>
                                        <tr>
                                            <td className="s3">08:00 -- 18:00</td>
                                            <td className="s4" colSpan="4">Registration</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">09:00 - 12:00</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5" dir="ltr">CloudAM 1-2</td>
                                            <td className="s5" dir="ltr">REU</td>
                                            <td className="s5">BlockCPS (online)</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">12:00 - 13:00</td>
                                            <td className="s4" colSpan="4">Lunch</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">13:00 - 17:00</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5" dir="ltr">DML-ICC 1-2</td>
                                            <td className="s5" dir="ltr">REU</td>
                                            <td className="s5">BlockCPS (online)</td>
                                        </tr>
                                        <tr style={{height: "20px"}}>
                                        </tr>
                                        <tr>

                                            <td className="s0  button-primary" colSpan="5">December 7, 2022</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">08:00 -- 18:00</td>
                                            <td className="s4" colSpan="4">Registration</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">08:45 - 09:00</td>
                                            <td className="s4">Opening</td>
                                            <td className="s5" colSpan="3">Opening</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">09:00 - 10:00</td>
                                            <td className="s4">Plenary Keynote 1</td>
                                            <td className="s5" colSpan="3">Tania Lorido Botran</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">10:00 - 10:30</td>
                                            <td className="s4" colSpan="4">Tea/Coffee break</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">10:30 - 12:00</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5">UCC 1</td>
                                            <td className="s5">BDCAT 1</td>
                                            <td className="s5" dir="ltr">CloudAM 3</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">12:00 - 13:00</td>
                                            <td className="s4" colSpan="4">Lunch</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">13:00 - 14:00</td>
                                            <td className="s4">Plenary Keynote 2</td>
                                            <td className="s5" colSpan="3">Gul Agha</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">14:00 - 15:00</td>
                                            <td className="s4">Poster Flash Talk</td>
                                            <td className="s5" colSpan="3">Poster Flash Talk</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">15:00 - 15:30</td>
                                            <td className="s4" colSpan="4">Tea/Coffee break</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">15:30 - 17:00</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5">UCC 2</td>
                                            <td className="s5">BDCAT 2</td>
                                            <td className="s5" dir="ltr">Intel4EC + MLHI</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">17:00 - 18:30</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5" colSpan="3"><a href={"https://daac-general.nsfcac.org/daac-2022"} target={"_blank"}>DAAC</a> (For remote online participation  <a href={"https://www.eventbrite.com/e/daac-2022-reducing-hpcs-carbon-footprint-tickets-477704636427"} target={"_blank"}>registration link</a>)</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">18:30 - 20:30</td>
                                            <td className="s4" colSpan="4">Reception (Posters Display)</td>
                                        </tr>
                                        <tr style={{height: "20px"}}>

                                        </tr>
                                        <tr>

                                            <td className="s0  button-primary" colSpan="5">December 8, 2022</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">08:00 -- 18:00</td>
                                            <td className="s4" colSpan="4">Registration</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">9:00 - 10:00</td>
                                            <td className="s4">Plenary Keynote 3</td>
                                            <td className="s5" colSpan="3">Weisong Shi</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">10:00 - 10:30</td>
                                            <td className="s4" colSpan="4">Tea/Coffee break</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">10:30 - 12:00</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5">UCC 3</td>
                                            <td className="s5">BDCAT 3</td>
                                            <td className="s5" dir="ltr">Intel4EC 2</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">12:00 - 13:00</td>
                                            <td className="s4" colSpan="4">Lunch</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">13:00 - 14:00</td>
                                            <td className="s4">Plenary Keynote 4</td>
                                            <td className="s5" dir="ltr" colSpan="3">Michela Taufer</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">14:00 - 15:30</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5">UCC 4</td>
                                            <td className="s5">BDCAT 4</td>
                                            <td className="s5" dir="ltr">Intel4EC 3</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">15:30 - 16:00</td>
                                            <td className="s4" colSpan="4">Tea/Coffee break</td>
                                        </tr>

                                        <tr>

                                            <td className="s3">18:00 - 20:30</td>
                                            <td className="s4" colSpan="4">Best Paper Awards/Planning for 2023/Banquet
                                            </td>
                                        </tr>
                                        <tr style={{height: "20px"}}>

                                        </tr>
                                        <tr className={"top"}>
                                            <td className="s1 head" rowSpan="2">Date/Time</td>
                                            <td className="s1 head" rowSpan="2">Activity</td>
                                            <td className="s1 head" colSpan="3">Room/Location (1st Floor Ballroom)</td>
                                        </tr>
                                        <tr>

                                            <td className="s1 head">Andorra</td>
                                            <td className="s1 head">Basque</td>
                                            <td className="s1 head">Catalonia</td>
                                        </tr>
                                        <tr>

                                            <td className="s0  button-primary" colSpan="5">December 9, 2022</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">08:00 -- 12:00</td>
                                            <td className="s4" colSpan="4">Registration</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">09:00 - 10:00</td>
                                            <td className="s4">Plenary Keynote 5</td>
                                            <td className="s5" dir="ltr" colSpan="3">Nalini Venkatasubramanian</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">10:00 - 10:30</td>
                                            <td className="s4" colSpan="4">Tea/Coffee break</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">10:30 - 12:30</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5">UCC 5</td>
                                            <td className="s5">BDCAT 5</td>
                                            <td className="s5" dir="ltr">CIFS</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">12:30 - 13:30</td>
                                            <td className="s4" colSpan="4">Lunch</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">13:30 - 15:30</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5">UCC 6</td>
                                            <td className="s5">BDCAT 6</td>
                                            <td className="s5" dir="ltr">CIFS</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">15:30 - 16:00</td>
                                            <td className="s4" colSpan="4">Tea/Coffee break</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">16:00</td>
                                            <td className="s4" colSpan={4}>Closing</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className={innerClasses} style={{paddingTop:0}}>
                            <div className="hero-content">
                                <Tabs value={this.state.selectedPlace}
                                      onChange={(event, newValue) => this.setState({selectedPlace: newValue})} centered>
                                    <Tab label="UCC" {...a11yProps(0)}/>
                                    <Tab label="BDCAT" {...a11yProps(1)}/>
                                    <Tab label="REU Symposium" {...a11yProps(2)}/>
                                    <Tab label="Posters" {...a11yProps(3)}/>
                                </Tabs>
                                <div className={"tabsPanel"}>
                                    <TabPanel value={this.state.selectedPlace} index={0}>
                                        <div>
                                            <h3>UCC 2022 Agenda</h3>
                                            <div className="ritz grid-container" dir="ltr">
                                                <table className="waffle" cellSpacing="0" cellPadding="0">
                                                    <colgroup>
                                                        <col id="1554768505C0" style={{width: "94px"}}></col>
                                                        <col id="1554768505C1" style={{minWidth: "373px"}}></col>
                                                        <col id="1554768505C2" style={{width: "373px"}}></col>
                                                    </colgroup>
                                                    <tbody>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session UCC 1 -
                                                            Wednesday Dec 7
                                                            morning 10:30 - 12:00 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Predictive and Autonomic Cloud Computing (Session Chair: Vincenzo De Maio)		</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">Enabling Awareness of Quality of Training and
                                                            Costs in Federated
                                                            Machine Learning
                                                            Marketplaces
                                                        </td>
                                                        <td className="s5" dir="ltr">Tien-Dung Cao, Hong-Linh Truong, Tram
                                                            Truong-Huu and Minh-Tri
                                                            Nguyen
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">8604</td>
                                                        <td className="s4" dir="ltr">Proactive Autonomic Cloud Application
                                                            Management
                                                        </td>
                                                        <td className="s5" dir="ltr">Marta Różańska and Geir Horn</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">8004</td>
                                                        <td className="s4" dir="ltr">Cloud Storage and Processing Service Selection
                                                            considering
                                                            Tiered Pricing and Data
                                                            Regulations
                                                        </td>
                                                        <td className="s5" dir="ltr">Pankaj Sahu, Shubhro Shovan Roy, Dr. Mangesh
                                                            Gharote, Sutapa
                                                            Mondal and Sachin
                                                            Lodha
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session UCC 2 -
                                                            Wednesday Dec 7
                                                            afternoon
                                                            15:30 - 17:00 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Edge-Cloud Computing Paradigms		</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">2327</td>
                                                        <td className="s4" dir="ltr">DEMon: Decentralized Monitoring for Highly
                                                            Volatile Edge
                                                            Environments
                                                        </td>
                                                        <td className="s5" dir="ltr">Shashikant Ilager, Jakob Fahringer, Samuel
                                                            Carlos de Lima Dias
                                                            and Ivona Brandic
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">3544</td>
                                                        <td className="s4" dir="ltr">VECFlex: Reconfigurablity and Scalability for
                                                            Trustworthy
                                                            Volunteer Edge-Cloud
                                                            supporting Data-intensive Scientific Computing
                                                        </td>
                                                        <td className="s5" dir="ltr">Mauro Lemus Alarcon, Minh Nguyen, Ashish
                                                            Pandey, Saptarshi
                                                            Debroy and Prasad
                                                            Calyam
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">7498</td>
                                                        <td className="s4" dir="ltr">Polaris Scheduler: SLO- and Topology-aware
                                                            Microservices
                                                            Scheduling at the Edge
                                                        </td>
                                                        <td className="s5" dir="ltr">Thomas Werner Pusztai, Stefan Nastic, Andrea
                                                            Morichetta, Víctor
                                                            Casamayor Pujol,
                                                            Philipp Raith, Schahram Dustdar, Deepak Vij, Ying Xiong and Zhaobo Zhang
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session UCC 3 -
                                                            Thursday Dec 8 morning 10:30 - 12:00 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Edge-Cloud Machine Learning (Session Chair: Jingshu Chen)		</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">822</td>
                                                        <td className="s4" dir="ltr">Edge-MultiAI: Multi-Tenancy of
                                                            Latency-Sensitive Deep Learning
                                                            Applications on
                                                            Edge
                                                        </td>
                                                        <td className="s5" dir="ltr">Sm Zobaed, Ali Mokhtari, Jaya Prakash Champati,
                                                            Mathieu Kourouma
                                                            and Mohsen Amini
                                                            Salehi
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s13 s3" dir="ltr">Invited</td>
                                                        <td className="s4" dir="ltr">Scaling Data Analysis Services in a Federated
                                                            Learning Environment at the Edge
                                                        </td>
                                                        <td className="s5" dir="ltr">Alessio Catalfamo, Lorenzo Carnevale, Antonino
                                                            Galletta, Antonio
                                                            Celesti, Maria
                                                            Fazio, Massimo Villari
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">7199</td>
                                                        <td className="s4" dir="ltr">CrossFit: Fine-grained Benchmarking of
                                                            Serverless Application
                                                            Performance across
                                                            Cloud Providers
                                                        </td>
                                                        <td className="s5" dir="ltr">Joel Scheuner, Rui Deng, Jan-Philipp Steghöfer
                                                            and Philipp
                                                            Leitner
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session UCC 4 -
                                                            Thursday Dec 8 afternoon 14:00 - 15:30 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Cloud and Edge
                                                            Platforms and
                                                            Mobility
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">7835</td>
                                                        <td className="s4" dir="ltr">Mobile-Kube: Mobility-aware and
                                                            Energy-efficient Service
                                                            Orchestration on
                                                            Kubernetes Edge Servers
                                                        </td>
                                                        <td className="s5" dir="ltr">Saeid Ghafouri, Alireza Karami, Danial
                                                            Bakhtiarvand, Aliakbar
                                                            Bigdeli, Sukhpal
                                                            Singh Gill and Joseph Doyle
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">9993</td>
                                                        <td className="s4" dir="ltr">Mobility-Aware Serverless Function Adaptations
                                                            Across the
                                                            Edge-Cloud Continuum
                                                        </td>
                                                        <td className="s5" dir="ltr">Philipp Raith, Thomas Rausch, Fabiana Rossi,
                                                            Valeria Cardellini,
                                                            Schahram Dustdar
                                                            and Rajiv Ranjan
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">9021</td>
                                                        <td className="s4" dir="ltr">Arktos: A Hyperscale Cloud Infrastructure for
                                                            Building
                                                            Distributed Cloud
                                                        </td>
                                                        <td className="s5" dir="ltr">Deepak Vij, Ying Xiong, Ying Huang, Yunwen Bai, and Peng Du</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s12"></td>
                                                        <td className="s12"></td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session UCC 5 -
                                                            Friday Dec 9
                                                            morning 10:30 - 12:30 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Cloud Networking
                                                            and Data
                                                            Services
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">413</td>
                                                        <td className="s4" dir="ltr">Open Source Compiling for V1Model RMT Switch:
                                                            Making Data Center
                                                            Networking
                                                            Innovation Accessible
                                                        </td>
                                                        <td className="s5" dir="ltr">Debobroto Das Robin and Javed I. Khan</td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">738</td>
                                                        <td className="s4" dir="ltr">NSDF-Catalog: Lightweight Indexing Service for
                                                            Democratizing Data
                                                            Delivering
                                                        </td>
                                                        <td className="s5" dir="ltr">Jakob Luettgau, Giorgio Scorzelli, Valerio
                                                            Pascucci, Glenn
                                                            Tarcea, Christine R.
                                                            Kirkpatrick and Michela Taufer
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">5913</td>
                                                        <td className="s4" dir="ltr">Online Self-Evolving Anomaly Detection for
                                                            Reliable Cloud
                                                            Computing
                                                        </td>
                                                        <td className="s5" dir="ltr">Tianyu Bai, Haili Wang, Jingda Guo, Xu Ma,
                                                            Mahendra Talasila,
                                                            Sihai Tang, Song Fu
                                                            and Qing Yang
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">8091</td>
                                                        <td className="s4" dir="ltr">Resolution Matters: Revisiting Prediction-Based
                                                            Job Co-location
                                                            in Public Clouds
                                                        </td>
                                                        <td className="s5" dir="ltr">Justin Kur, Jingshu Chen, Ji Xue and Jun
                                                            Huang
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session UCC 6 -
                                                            Friday Dec 9
                                                            afternoon 13:30 - 15:30 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Cloud/Serverless
                                                            Applications and
                                                            Workflows
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">2421</td>
                                                        <td className="s4" dir="ltr">TAROT: Spatio-Temporal Function Placement for
                                                            Serverless Smart
                                                            City Applications
                                                        </td>
                                                        <td className="s5" dir="ltr">Vincenzo De Maio, David Bermbach and Ivona
                                                            Brandic
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">1100</td>
                                                        <td className="s4" dir="ltr">Performance Evaluation of Serverless Edge
                                                            Computing for Machine
                                                            Learning
                                                            Applications
                                                        </td>
                                                        <td className="s5" dir="ltr">Quoc Lap Trieu, Bahman Javadi, Jim Basilakis
                                                            and Adel N. Toosi
                                                        </td>


                                                    </tr>

                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">7707</td>
                                                        <td className="s4" dir="ltr">FedComm: Understanding Communication Protocols
                                                            for Edge-based
                                                            Federated Learning
                                                        </td>
                                                        <td className="s5" dir="ltr">Gary Cleland, Di Wu, Rehmat Ullah and Blesson
                                                            Varghese
                                                        </td>


                                                    </tr>

                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">4230</td>
                                                        <td className="s4" dir="ltr">Developing a Secure Architecture for Internet
                                                            of Medical Things
                                                            Using
                                                            Attribute-Based Encryption
                                                        </td>
                                                        <td className="s5" dir="ltr">Milad Ghanbarafjeh, Masoud Barati and Omer
                                                            Rana
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={this.state.selectedPlace} index={1}>
                                        <div>
                                            <h3>BDCAT 2022 Agenda</h3>
                                            <div className="ritz grid-container" dir="ltr">
                                                <table className="waffle" cellSpacing="0" cellPadding="0">
                                                    <colgroup>
                                                        <col id="1554768505C0" style={{width: "94px"}}></col>
                                                        <col id="1554768505C1" style={{minWidth: "373px"}}></col>
                                                        <col id="1554768505C2" style={{width: "373px"}}></col>
                                                    </colgroup>
                                                    <tbody>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session
                                                            BDCAT 1 - Wednesday Dec 7 morning 10:30 - 12:00 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Big
                                                            Data Analysis
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">2634</td>
                                                        <td className="s4" dir="ltr">Detection of Uncertainty in
                                                            Exceedance of Threshold (DUET): An Adversarial Patch
                                                            Localizer
                                                        </td>
                                                        <td className="s5" dir="ltr">Terence Jie Chua, Wenhan Yu, Chang
                                                            Liu and Jun Zhao
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">8227</td>
                                                        <td className="s4" dir="ltr">Fast Exploratory Analysis with
                                                            Spatio-temporal Aggregation over Polygonal Regions
                                                        </td>
                                                        <td className="s5" dir="ltr">Catherine Higgins and Suprio Ray
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">4817</td>
                                                        <td className="s4" dir="ltr">Context-aware Resemblance Detection
                                                            based Deduplication Ratio Prediction for Cloud Storage
                                                        </td>
                                                        <td className="s5" dir="ltr">Yuqing Geng, Wenlong Tian, Ruixuan
                                                            Li, Weijun Xiao, Chunping Ouyang, Yongbing Liu, Qifei
                                                            Liu, Jing Li, Xuming Ye and Zhiyong Xu
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session
                                                            BDCAT 2 - Wednesday Dec 7 afternoon 15:30 - 17:00 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Big
                                                            Data Computation and Systems
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">702</td>
                                                        <td className="s4" dir="ltr">Compressed Matrix Computations</td>
                                                        <td className="s5" dir="ltr">Matthieu Martel</td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">3612</td>
                                                        <td className="s4" dir="ltr">Development of Open-Source, Edge
                                                            Energy Management System for Tactical Power Networks
                                                        </td>
                                                        <td className="s5" dir="ltr">Syed Wali, Irfan Khan, Yasir Ali
                                                            Farrukh, Muhammad Areeb Fasih, Muhammad Hassan-Ul-Haq and
                                                            Majida Kazmi
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">5738-short</td>
                                                        <td className="s4" dir="ltr">Supporting Green Neuromorphic
                                                            Computing: Machine Learning Guided Microfabrication for
                                                            Resistive Random Access Memory
                                                        </td>
                                                        <td className="s5" dir="ltr">Abdi Yamil Vicenciodelmoral, Md
                                                            Mehedi Hasan Tanim, Feng Zhao and Xinghui Zhao
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session
                                                            BDCAT 3 - Thursday Dec 8 morning 10:30 - 12:00 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Big Data for Cybersecurity (chair Abdulkabir Abdulraheem)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3">509</td>
                                                        <td className="s4">Triggerability of Backdoor Attacks in
                                                            Multi-Source
                                                            Transfer Learning-based Intrusion
                                                            Detection
                                                        </td>
                                                        <td className="s5">Nour Alhussien, Ahmed Aleroud, Reza
                                                            Rahaeimehr and
                                                            Alexander Schwarzmann
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3">8432</td>
                                                        <td className="s4">Payload-Byte: A Tool for Extracting and
                                                            Labeling Packet
                                                            Capture Files of Modern Network
                                                            Intrusion Detection Datasets
                                                        </td>
                                                        <td className="s5">Yasir Ali Farrukh, Irfan Khan, Syed Wali,
                                                            David
                                                            Bierbrauer, John A. Pavlik and Nathaniel D.
                                                            Bastian
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3">8448 short</td>
                                                        <td className="s4" dir="ltr">A Comprehensive Review of Anomaly
                                                            Detection in
                                                            Web Logs
                                                        </td>
                                                        <td className="s5" dir="ltr">Mehryar Majd, Pejman Najafi, Seyed
                                                            Ali
                                                            Alhosseini, Feng Cheng and Christoph
                                                            Meinel
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session
                                                            BDCAT 4 - Thursday Dec 8 afternoon 14:00 - 15:30 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Big Data for Earth (chair Shangping Ren)</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">429</td>
                                                        <td className="s4">MT-IceNet - A Spatial and Multi-Temporal Deep
                                                            Learning Model for Arctic Sea Ice
                                                            Forecasting
                                                        </td>
                                                        <td className="s5">Sahara Ali and Jianwu Wang</td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3">3603</td>
                                                        <td className="s4">Atmospheric Gravity Wave Detection Using
                                                            Transfer
                                                            Learning Techniques
                                                        </td>
                                                        <td className="s5">Jorge López González, Theodore Chapman,
                                                            Kathryn Chen,
                                                            Hannah Nguyen, Logan Chambers, Jianwu
                                                            Wang, Seraj A.M. Mostafa, Sanjay Purushotham, Chenxi Wang
                                                            and Jia Yue
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3">6026</td>
                                                        <td className="s4">Enhanced Deep Learning Super-Resolution for
                                                            Bathymetry
                                                            Data
                                                        </td>
                                                        <td className="s5">Xingyan Li, Jian Li, Zachary Williams, Xin
                                                            Huang, Mark
                                                            Carroll and Jianwu Wang
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s12"></td>
                                                        <td className="s12"></td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session
                                                            BDCAT 5 - Friday Dec 9 morning 10:30 - 12:30 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Big
                                                            Data Applications
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3">8045</td>
                                                        <td className="s4" dir="ltr">JobViewer: Graph-based
                                                            Visualization for
                                                            Monitoring High-Performance Computing
                                                            System
                                                        </td>
                                                        <td className="s5" dir="ltr">Tommy Dang, Ngan Nguyen, Jie Li,
                                                            Jon Hass,
                                                            Alan Sill and Yong Chen
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">3796</td>
                                                        <td className="s4" dir="ltr">Circular Economy and Construction
                                                            Supply
                                                            Chains
                                                        </td>
                                                        <td className="s5" dir="ltr">Dan Incorvaja, Yasin Celik, Ioan
                                                            Petri and Omer
                                                            Rana
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3">2091</td>
                                                        <td className="s4" dir="ltr">Extracting Relations Between
                                                            Sectors
                                                        </td>
                                                        <td className="s5" dir="ltr">Atakan Kara, F. Serhan Daniş, Günce
                                                            Keziban
                                                            Orman and Sultan Nezihe Turhan
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">5899-short</td>
                                                        <td className="s4">Surrogate-based Digital Twin for Predictive
                                                            Fault
                                                            Modelling and Testing of Cyber Physical
                                                            Systems
                                                        </td>
                                                        <td className="s5">Hayatullahi Adeyemo, Rami Bahsoon and Peter
                                                            Tino
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session
                                                            BDCAT 6 - Friday Dec 9 afternoon 13:30 - 15:30 (PST)
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Security in Big Data
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3">7773</td>
                                                        <td className="s4">GeauxTrace: A Scalable Privacy-Protecting
                                                            Contact Tracing
                                                            App Design Using Blockchain
                                                        </td>
                                                        <td className="s5">Tao Lu, John Ner, Tianqing Feng, Fang Qi and
                                                            Lu Peng
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">2146 short</td>
                                                        <td className="s4" dir="ltr">Privacy-Preserving Adversarial
                                                            Network (PPAN)
                                                            for Continuous non-Gaussian
                                                            Attributes
                                                        </td>
                                                        <td className="s5" dir="ltr">Mohammadhadi Shateri and Fabrice
                                                            Labeau
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">283 short</td>
                                                        <td className="s4" dir="ltr">Learning and Preserving
                                                            Relationship Privacy in
                                                            Photo Sharing
                                                        </td>
                                                        <td className="s5" dir="ltr">Jialin Liu, Lin Li and Na Li</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">3061</td>
                                                        <td className="s4">Mining Large Data to Create a Balanced
                                                            Vulnerability
                                                            Detection Dataset for Linux Embedded
                                                            system
                                                        </td>
                                                        <td className="s5">Mansour Alqarni and Akramul Azim</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={this.state.selectedPlace} index={2}>
                                        <div>
                                            <h3>REU Symposium 2022 Agenda</h3>
                                            <div className="ritz grid-container" dir="ltr">
                                                <table className="waffle" cellSpacing="0" cellPadding="0">
                                                    <colgroup>
                                                        <col id="1554768505C0" style={{width: "94px"}}></col>
                                                        <col id="1554768505C1" style={{minWidth: "373px"}}></col>
                                                        <col id="1554768505C2" style={{width: "373px"}}></col>
                                                    </colgroup>
                                                    <tbody>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session REU Symposium 1 - Tuesday, December 06 morning 09:00-10:20</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Chair: Dr. Jianwu Wang</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">1411</td>
                                                        <td className="s4" dir="ltr">Multi-Layer Recurrent Neural
                                                            Networks for the Classification of Compton Camera
                                                            Based Imaging Data for Proton Beam Cancer Treatment
                                                        </td>
                                                        <td className="s5" dir="ltr">Joseph Clark, Anaise Gaillard,
                                                            Justin Koe, Nithya Navarathna, Daniel Kelly,
                                                            Matthias Gobbert, Carlos Barajas and Jerimy Polf
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">1175</td>
                                                        <td className="s4" dir="ltr">Networked and Multimodal 3D
                                                            Modeling of Cities for Collaborative Virtual
                                                            Environments
                                                        </td>
                                                        <td className="s5" dir="ltr">Benjamin Hall, Joseph Kessler,
                                                            Osayamen Edo-Ohanba, Jaired Collins, Haoxiang Zhang,
                                                            Nick Allegreti, Ye Duan, Songjie Wang, Kannappan Palaniappan
                                                            and Prasad Calyam
                                                        </td>


                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">175</td>
                                                        <td className="s4" dir="ltr">Population-Based Hierarchical
                                                            Non-Negative Matrix Factorization for Survey Data
                                                        </td>
                                                        <td className="s5" dir="ltr">Xiaofu Ding, Xinyu Dong, Olivia
                                                            McGough, Amy Shen, Annie Ulichney, Ruiyao Xu,
                                                            William Swartworth, Jocelyn Chi and Deanna Needell
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">847</td>
                                                        <td className="s4" dir="ltr">Differences in Monitoring the DNS
                                                            Root Over IPv4 and IPv6
                                                        </td>
                                                        <td className="s5" dir="ltr">Tarang Saluja, John Heidemann and
                                                            Yuri Pradkin
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session REU Symposium 2 - Tuesday, December 06 morning 10:30-11:50</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Chair: Dr. Jianwu Wang
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">2969</td>
                                                        <td className="s4" dir="ltr">Accuracy, Fairness, and
                                                            Interpretability of Machine Learning Criminal Recidivism
                                                            Models
                                                        </td>
                                                        <td className="s5" dir="ltr">Eric Ingram, Furkan Gursoy and
                                                            Ioannis Kakadiaris
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">6712</td>
                                                        <td className="s4" dir="ltr">Accuracy-Fairness Tradeoff in
                                                            Parole Decision Predictions: A Preliminary Analysis
                                                        </td>
                                                        <td className="s5" dir="ltr">John William Gardner, Furkan Gursoy
                                                            and Ioannis Kakadiaris
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">4384</td>
                                                        <td className="s4" dir="ltr">Data Quality and Linguistic Cues
                                                            for Domain-independent Deception Detection
                                                        </td>
                                                        <td className="s5" dir="ltr">Casey Hanks and Rakesh Verma</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">5551</td>
                                                        <td className="s4" dir="ltr">Understanding DNS Query Composition
                                                            at B-Root
                                                        </td>
                                                        <td className="s5" dir="ltr">Jacob Ginesin and Jelena Mirkovic
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session REU Symposium 3 - Tuesday, December 06 afternoon 13:00-14:20</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Chair: Dr. Matthias Gobbert</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">6082</td>
                                                        <td className="s4" dir="ltr">Simulated Forest Environment and
                                                            Robot Control Framework for Integration with Cover
                                                            Detection Algorithms
                                                        </td>
                                                        <td className="s5" dir="ltr">Avi Spector, Wanying Zhu, Jumman
                                                            Hossain and Nirmalya Roy
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">8631</td>
                                                        <td className="s4" dir="ltr">Image Processing and Machine
                                                            Learning for Tumor Tissue Detection Using MRI Images
                                                            in Bacteria Based Cancer Therapy
                                                        </td>
                                                        <td className="s5" dir="ltr">Sarah Hodges, Emily Hitchcock,
                                                            Kevin Zuang, Rosy Lu, Yuanwei Jin, Qiuhong He and
                                                            Enyue Lu
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">2921</td>
                                                        <td className="s4" dir="ltr">An Experimental Analysis on Mining
                                                            Proportional Process Patterns from Process
                                                            Logs
                                                        </td>
                                                        <td className="s5" dir="ltr">Joo-Eun Bae, Jin-Hyoung Lee,
                                                            So-Hyang Park, Young-In Park, Kyoung-Sook Kim and
                                                            Kwang-Hoon Kim
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">5066</td>
                                                        <td className="s4" dir="ltr">Focused Stochastic Neighbor
                                                            Embedding
                                                        </td>
                                                        <td className="s5" dir="ltr">Rafael Ramirez, Sanuj Kumar, Tuan
                                                            Le and Huiping Cao
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session REU Symposium 4 - Tuesday, December 06 afternoon 14:30-15:30</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Chair: Dr. Matthias Gobbert</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">3981</td>
                                                        <td className="s4" dir="ltr">Iterative Methods for
                                                            Multi-objective Optimization in Fair Machine Learning
                                                        </td>
                                                        <td className="s5" dir="ltr">Sean Wang, Arielle Carr and Sihong
                                                            Xie
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">5673</td>
                                                        <td className="s4" dir="ltr">FaultHunter: Automatically
                                                            Detecting Vulnerabilities in C against Fault Injection
                                                            Attacks
                                                        </td>
                                                        <td className="s5" dir="ltr">Logan Reichling, Ikran Warsame,
                                                            Shane Reilly, Austen Brownfield, Nan Niu and Boyang
                                                            Wang
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">2286</td>
                                                        <td className="s4" dir="ltr">Identifying Evolution of Software
                                                            Metrics by Analyzing Vulnerability History in
                                                            Open Source Projects
                                                        </td>
                                                        <td className="s5" dir="ltr">Erik Maza and Kazi Zakia Sultana
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={this.state.selectedPlace} index={3}>
                                        <div>
                                            <div className="ritz grid-container" dir="ltr">
                                                <table className="waffle" cellSpacing="0" cellPadding="0">
                                                    <colgroup>
                                                        <col id="1554768505C0" style={{width: "94px"}}></col>
                                                        <col id="1554768505C1" style={{minWidth: "373px"}}></col>
                                                        <col id="1554768505C2" style={{width: "373px"}}></col>
                                                    </colgroup>
                                                    <tbody>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Joint Poster Session - Wednesday, December 07 afternoon 18:30 - 20:30 (During Reception)</td>

                                                    </tr>
                                                    {/*<tr style={{height: "20px"}}>*/}

                                                    {/*    <td className="s1 button-secondary" dir="ltr" colSpan="2">Chair: Dr. Jianwu Wang</td>*/}

                                                    {/*</tr>*/}
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">432</td>
                                                        <td className="s4" dir="ltr">An Effective Supplementation of Insufficient Data by Generative Adversarial Networks</td>
                                                        <td className="s5" dir="ltr">Abdulkabir Abdulraheem and Im Jung</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">781</td>
                                                        <td className="s4">Communication and Energy Efficient Edge
                                                            Intelligence
                                                        </td>
                                                        <td className="s5">Sabtain Ahmad</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">2621</td>
                                                        <td className="s4">Physics Informed Neural Networks: Reducing
                                                            Data Size Requirements via Hybrid Learning
                                                        </td>
                                                        <td className="s5">Charlotte Lew</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">7972</td>
                                                        <td className="s4">Anomaly detection of high-dimensional data
                                                            based on Ensemble GANs with Dropout
                                                        </td>
                                                        <td className="s5">Wanghu Chen, Jilong Yao, Meilin Zhou, Jing Li
                                                            and Mengyang Shen
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">9907</td>
                                                        <td className="s4">Honey-CNT based Resistive Switching Device
                                                            for Neuromorphic Computing Application
                                                        </td>
                                                        <td className="s5 softmerge">Md Mehedi Hasan Tanim,
                                                                Abdi Yamil
                                                                Vicenciodelmoral, Zoe Templin, Xinghui Zhao and Feng
                                                                Zhao
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">5253</td>
                                                        <td className="s4">A Legal Analysis of Educational Data in the
                                                            Cloud
                                                        </td>
                                                        <td className="s5">Ben Cohen, Ashley Hu, Deisy Patino and Joel
                                                            Coffman
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">8329</td>
                                                        <td className="s4">Microservices vs Serverless Deployment in
                                                            AWS: A Case Study with an Image Processing
                                                            Application
                                                        </td>
                                                        <td className="s5">Raju Shrestha and Beebu Nisha</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">9361</td>
                                                        <td className="s4">Analyzing Data Intensive Networks on Chips
                                                        </td>
                                                        <td className="s5">Junwei Zhang and Thomas G. Robertazzi</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3">5934</td>
                                                        <td className="s4">Geofence-Based Service Discovery in the
                                                            Computing Continuum
                                                        </td>
                                                        <td className="s5">Kurt Horvath, Dragi Kimovski, Christoph Uran,
                                                            Radu Prodan and Helmut Wöllik
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

// inline style
const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
}

export default Program;
