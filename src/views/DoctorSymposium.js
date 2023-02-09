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

class Secondary extends React.Component {

    state = {
        demoModalActive: false
    }

    openModal = (e) => {
        e.preventDefault();
        this.setState({demoModalActive: true});
    }

    closeModal = (e) => {
        e.preventDefault();
        this.setState({demoModalActive: false});
    }

    render() {


        return (
            <React.Fragment>

                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Doctor Symposium</h2>
                        <p>
                            Welcome to the Doctoral Symposium of the 15th IEEE/ACM International Conference on Utility and Cloud Computing (UCC). The Doctoral Symposium is a forum for PhD students to present their work and receive feedback and guidance. The aim is to provide a space for PhD students to meet and interact with peers, and to receive constructive feedback about their work from experts in the field of cloud computing.
                        </p>
                        <p>
                            UCC 2022 will be hosted at Washington State University. Portland, Oregon’s largest city, sits on the Columbia and Willamette rivers, in the shadow of snow-capped Mount Hood.
                        </p>
                        <p>
                            The program will feature technical presentations by PhD students, general research advice, and discussions in panel and open formats.
                        </p>
                        <p>
                            We invite submissions from PhD students at any stage of their doctoral studies. Submission is open to all areas of Cloud and Utility Computing as per the <a
                            href={"https://ucc-conference.org/call-for-paper"} target={"_blank"}>UCC main track</a> call for papers. Submissions should follow the following structure:
                        </p>
                        <ul>
                            <li>Abstract</li>
                            <li>Background</li>
                            <li>Problem Statement</li>
                            <li>Related Work</li>
                            <li>Overview of Proposed Work</li>
                            <li>Preliminary Results (if any)</li>
                            <li>Planned Work</li>
                        </ul>
                        <p>
                            Submissions should be no longer than two (2) single-spaced double-column pages using 10-point size font on 8.5x11 inch pages (<a
                            href={"https://www.ieee.org/conferences/publishing/templates.html"} target={"_blank"}>IEEE conference style</a>), including figures, tables and references.
                        </p>
                        <p>
                            Manuscripts are submitted via the Easychair Conference Management System: <a
                            href={"https://easychair.org/conferences/?conf=uccbdcat2022doctoral "} target={"_blank"}>https://easychair.org/conferences/?conf=uccbdcat2022doctoral </a>
                        </p>
                        <p>
                            All manuscripts will be reviewed and judged on correctness, originality, technical strength, rigor in analysis, quality of results, quality of presentation, and interest and relevance to the  conference attendees.
                        </p>
                    </div>
                </GenericSection>
                <ImportantDate topDivider event={[
                    {key: 'Submissions Due Date', date: '15 October 2022'},
                    {key: 'Notification of Acceptance', date: '25 October 2022'},
                    {key: 'Camera Ready Due Date', date: '31 October 2022'}
                ]}/>
                <GenericSection topDivider>
                    <div className="container">
                        <h3 className="mt-0">Student Program Chair</h3>
                        <p><a href="mailto:amahmed@pvamu.edu">Ahmed Abdelmoamen Ahmed</a>, Prairie View A&M University, USA</p>
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