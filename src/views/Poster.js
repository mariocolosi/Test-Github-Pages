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
                        <h2 className="mt-0">UCC/BDCAT 2022 Call for Posters</h2>
                        <h4>Submissions</h4>
                        <ul>
                            <li>UCC Conference <a target="_blank" href={'https://easychair.org/conferences/?conf=ucc2022'}>https://easychair.org/conferences/?conf=ucc2022</a></li>
                            <li>BDCAT Conference <a target="_blank" href={'https://easychair.org/conferences/?conf=bdcat2022'}>https://easychair.org/conferences/?conf=bdcat2022</a></li>
                        </ul>
                    </div>
                </GenericSection>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Call for Posters</h2>
                        <p>
                            This call for papers applies to posters with accompanying two-page short papers for the main UCC or BDCAT conferences.
                            Authors are invited to submit a short two-page writeup covering original work-in-progress (WIP) and ongoing research suitable for presentation at the conference venue in poster form.
                        </p>

                    </div>
                </GenericSection>
                <ImportantDate topDivider event={[
                    {key: 'Poster submissions due', date: '9/15/2022'},
                    {key: 'Notification of Acceptance', date: '10/15/2022'},
                    {key: 'Camera-ready papers due', date: '10/31/2022'},
                    {key: 'Early + author registration deadline', date: '11/15/2022'},
                    {key: 'Poster session at the conference', date: 'TBD'},
                ]}/>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Topics of interest</h2>
                        <p>
                            Topics of interest include but are not limited to those covered in the UCC or BDCAT conferences, such as
                        </p>
                        <ul>
                            <li>Cloud computing and application architectures</li>
                            <li>Cloud technologies including virtual machines, containers and functions</li>
                            <li>Programmable infrastructure and deployment models in cloud environments</li>
                            <li>Cloud performance, security and energy efficiency aspects</li>
                            <li>Operations and management of clouds</li>
                            <li>Big Data science</li>
                            <li>Big Data infrastructures and platforms</li>
                            <li>Big Data applications</li>
                            <li>Big Data trends and challenges</li>
                            <li>Visualization of Big Data</li>
                        </ul>
                    </div>
                </GenericSection>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Manuscript Guidelines and Submission</h2>
                        <p>
                            Authors are requested to submit papers electronically. Submitted poster writeups should be structured as technical papers and need to conform to the IEEE conference format guidelines. The manuscripts may not exceed two (2) single-spaced double-column letter size (8.5 x 11) pages using 10-point size font including figures, tables and references. Please refer to <a target={"_blank"} href={"https://www.ieee.org/conferences/publishing/templates.html"}>https://www.ieee.org/conferences/publishing/templates.html</a> for templates and complete formatting instructions.
                        </p>
                        <p>
                            Manuscript submissions must be received by the announced submission deadline. All manuscripts will be reviewed by the Program Committee and evaluated based on originality, relevance of the problem to the conference theme, technical strength, rigour in analysis, quality of results, organization and clarity of presentation of the paper.
                        </p>
                        <p>
                            Submitted papers must represent original unpublished research that is not currently under review for any other conference or journal. Further details on the publication instructions and registration information will be published on the UCC/BDCAT websites.
                        </p>
                        <p>
                            The poster review and selection process will be coordinated by the posters co-chairs.
                            <ul>
                                <li>David Chiu, University of Puget Sound, USA</li>
                                <li>Brian Larkins, Rhodes College, USA</li>
                            </ul>
                        </p>
                    </div>
                </GenericSection>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Poster Presentation</h2>
                        <p>
                            The authors of accepted posters will be given a 3-minutes time slot to present their work, following the three-minute thesis (3MT) style, at the UCC/BDCAT Poster Session. The authors will also present their posters and discuss their research with the conference attendees and visitors in the poster exhibition session. The recommended poster size is A0 (33.1 x 46.8 in, portrait).
                        </p>

                    </div>
                </GenericSection>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Awards</h2>
                        <p>
                            One or more best poster awards will be given for outstanding poster presentations. Posters will be selected based on their reviewers' scores, contributions and appropriateness to the conference theme. Further details will be made available at the conference webpage.
                        </p>

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