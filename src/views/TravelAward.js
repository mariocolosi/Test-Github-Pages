import React from 'react';
import GenericSection from "../components/sections/GenericSection";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";
import Button from "../components/elements/Button";
import ButtonGroup from "../components/elements/ButtonGroup";
import ImportantDate from "../components/sections/ImportantDate";


class Keynote extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GenericSection topDivider>
                    <div className="container">
                        <h2 className="mt-0">Student Travel Award</h2>
                        <p>UCC/BDCAT 2022 offers a limited number of travel awards to student participants. All interested students are encouraged to apply, but priority will be given to student (co)authors of an accepted work to the main conference, workshop, or symposium. </p>
                        <p>The student travel award will cover full conference registration (including publication fees) and five nights of stay at the conference hotel (shared room with another student).</p>
                        <div className="center-content">
                            <ButtonGroup>
                                <Button tag="a" wideMobile color="primary" target="_blank" href="https://forms.gle/GcZWeSzfKC64McTSA">Students click here to apply</Button>
                                <Button tag="a" wideMobile color="dark" target="_blank" href="https://forms.gle/VDYG6VKUZqmWbJJG9">Letter Writers click here to upload your letter of support</Button>
                            </ButtonGroup>
                        </div>
                        {/*<div>*/}
                        {/*    <Image src={require(`./../assets/images/NSF_4-Color_bitmap_Logo.png`)}*/}
                        {/*           width={100}*/}
                        {/*           height={100}/>*/}
                        {/*</div>*/}
                    </div>
                </GenericSection>
                <ImportantDate topDivider event={[
                    {key: 'Application due date', date: '28 October 2022'},
                    {key: 'Letter of support due', date: '4 November 2022'},
                    {key: 'Award notification', date: '10 November 2022'}
                ]}/>
                <GenericSection topDivider>
                    <div className="container">
                        <h3 className="mt-0">Eligibility</h3>
                        <ul>
                            <li>The applicant must be 18 years or older by December 5, 2022.</li>
                            <li>The applicant must be a full-time student or postdoc at the time of submission.</li>
                            <li>The application must be affiliated with a U.S. based institution to apply, regardless of nationality.</li>
                            <li>A letter of support is required to complete the application. The applicant must provide the name and email of a letter writer on the form.</li>
                        </ul>
                    </div>
                </GenericSection>
                <GenericSection topDivider innerClass={false}>
                    <div className="container">
                        <h3 className="mt-0">Information for Awardees</h3>
                        <h4>Note that if you are funded by this award, you ask that you:</h4>
                        <ul>
                            <li>Attend the conference in person. Awardees are encouraged to attend as many days as possible to engage with the community. </li>
                            <li>Serve as student volunteer while at the conference</li>
                            <li>Stay (with one other student *) at the conference hotel</li>
                            <li>Submit a report to the Student Travel Award Chair within 1 month after the conference</li>
                        </ul>
                        <p className="news-item-more text-xs mb-8">
                            * If the awardee would prefer to stay in a private hotel room, we can instead award a room credit of $100/night at the conference hotel. For reference, the room rate is usually $189/night + fees and taxes.
                        </p>
                    </div>
                </GenericSection>
                <GenericSection topDivider>
                    <div className="container">
                        <h3 className="mt-0">Selection Process</h3>
                        <p>
                            The Student Travel Award Committee will review completed applications and make recommendations. Please note that an application is not complete until we receive your letter of support. The applicant will be notified Nov 10, 2022.
                        </p>
                    </div>
                </GenericSection>
                <GenericSection topDivider innerClass={false}>
                    <div className="container">
                        <h3 className="mt-0">Student Travel Award Committee</h3>
                        <ul>
                            <li>David Chiu (University of Puget Sound), Chair</li>
                            <li>Song Fu (University of North Texas)</li>
                            <li>Ben McCamish (Washington State University)</li>
                            <li>Jianwu Wang (University of Maryland, Baltimore County)</li>
                            <li>Xinghui Zhao (Washington State University)</li>
                        </ul>
                    </div>
                </GenericSection>
                <GenericSection topDivider>
                    <div className="container">
                        <h3 className="mt-0">Additional Information</h3>
                        <p>
                            Please direct any questions to David Chiu <a href="mailto:dchiu@pugetsound.edu">(dchiu@pugetsound.edu)</a>.
                        </p>
                        <p>
                            UCC/BDCAT is committed to promoting diversity, equity, and inclusion. The student travel award is sponsored by the U.S. National Science Foundation.
                        </p>
                        <div  className="center-content">
                            <Image src={require(`./../assets/images/NSF_4-Color_bitmap_Logo.png`)}
                                   width={200}
                                   height={200}/>
                        </div>
                    </div>
                </GenericSection>
                {/*<HeroFull content={{title: 'Student Travel Award',*/}
                {/*  inside:<><p>UCC/BDCAT 2022 offers a limited number of travel awards to student participants. All interested students are encouraged to apply, but priority will be given to student (co)authors of an accepted work to the main conference, workshop, or symposium. </p>*/}
                {/*      <p>The student travel award will cover full conference registration (including publication fees) and five nights of stay at the conference hotel (shared room with another student).</p>*/}
                {/*    <div>*/}
                {/*        <Image src={require(`./../assets/images/NSF_4-Color_bitmap_Logo.png`)}*/}
                {/*               width={100}*/}
                {/*               height={100}/>*/}
                {/*    </div>*/}
                {/*  </>*/}
                {/*}}/>*/}
            </React.Fragment>
        );
    }
}

export default Keynote;
