import React from 'react';
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";
import Pricing from "../components/sections/Pricingv2";
import GenericSection from "../components/sections/GenericSection";
import ImportantDate from "../components/sections/ImportantDate";
import Button from "../components/elements/Button";
import ButtonGroup from "../components/elements/ButtonGroup";


const fees = [
    {
        'title': 'Conference Registration - Author',
        'list': [
            {
                price: [["$", "775.00", ""],["$", "900.00", ""]],
                description: ['IEEE/ACM Member', 'IEEE/ACM Student Member', 'IEEE/ACM Life Member']
            },
            {
                price: [["$", "930.00", ""],["$", "1,080.00", ""]],
                description: ['Non-Member', 'Student Non-Member']
            }
        ]
    },
    {
        'title': 'Conference Registration',
        'list': [
            {
                price: [["$", "775.00", ""],["$", "900.00", ""]],
                description: ['IEEE/ACM Member']
            },
            {
                price: [["$", "930.00", ""],["$", "1,080.00", ""]],
                description: ['Non-Member']
            },
            {
                price: [["$", "545.00", ""],["$", "630.00", ""]],
                description: ['IEEE/ACM Student Member']
            },
            {
                price: [["$", "655.00", ""],["$", "760.00", ""]],
                description: ['Student Non-Member']
            },
            {
                price: [["$", "430.00", ""],["$", "495.00", ""]],
                description: ['IEEE/ACM Life Member']
            }
        ]
    },
    {
        'title': 'One-Day Registration',
        'list': [
            {
                price: [["$", "325.00", ""],["$", "400.00", ""]],
                description: ['IEEE/ACM Member']
            },
            {
                price: [["$", "390.00", ""],["$", "480.00", ""]],
                description: ['Non-Member']
            },
            {
                price: [["$", "230.00", ""],["$", "280.00", ""]],
                description: ['IEEE/ACM Student Member']
            },
            {
                price: [["$", "280.00", ""],["$", "335.00", ""]],
                description: ['Student Non-Member']
            },
            {
                price: [["$", "180.00", ""],["$", "220.00", ""]],
                description: ['IEEE/ACM Life Member']
            }
        ]
    }
]

const deadline = [
    {key: 'Author registration date', date: '15 November 2022'},
    {key: 'Early registration', date: '15 November 2022'},
    {key: 'Conference Registration (non-author) deadline', date: '6 December 2022'}
]
class Keynote extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Pricing pricingSwitcher={true}
                         priceOutput={fees}
                         priceNote={[`Changes to xxxxxx after Early Registration ${deadline[1].date}`,'']}
                         sectionHeader ={{
                             title: 'Registration fees',
                             paragraph: <>
                                 <h5>Early Registration rates end {deadline[1].date}.</h5>
                                 <p>Note: All deadlines are at 11:59 PM on the stated date.
                                 <br/>All rates listed are in USD.</p></>
                         }}
                         extraContent={<div className={'center-content'}>
                             <Button tag={'a'}
                                     color={'primary'}
                                     wide
                                     target={"_blank"}
                                     href={"https://web.cvent.com/event/0f9fb382-31de-4881-ac2f-d3a09f159ca7/websitePage:f5f1940b-980e-4398-96f6-3b681ef5e4a3"}>
                             More information</Button></div>}
                />
                <ImportantDate topDivider event={deadline}/>
                <GenericSection topOuterDivider>
                    <h2 className={'mt-0'} className={"center-content"}>Important Author Information</h2>
                    <p>At least one author per paper must be registered as an AUTHOR at the full Member / Non-Member registration rate, regardless of whether or not they are students.</p>
                    <p>
                        The author registration deadline is {deadline[0].data}.
                    </p>
                    <ul>
                        <li>Each Author Registration is valid for ONE paper.</li>
                        <li>If necessary, up to 4 additional papers can be purchased per author registration for an additional fee.</li>
                        <li>Each paper may contain up to 2 additional pages for a fee of $100/page.</li>
                    </ul>
                    <p>
                        For questions regarding paper submissions, please contact Zichuan Xu at <a href={"mailto:z.xu@dlut.edu.cn"}>z.xu@dlut.edu.cn</a>.
                    </p>
                    <p>
                        Visa letters can be generated by the IEEE registration system after the payment is made. If you need help, contact the Local Arrangement Chair, Dr. Ben McCamish (<a href={"mailto:b.mccamish@wsu.edu"}>b.mccamish@wsu.edu</a>).
                    </p>
                </GenericSection>
                <GenericSection topOuterDivider>
                    <h2 className={'mt-0'} className={"center-content"}>Cancellation Policy</h2>
                    <p>
                        All refund/cancellation requests must be received in writing to registration+UCCBDCAT@computer.org by <span style={{color: 'red'}}>{deadline[1].date}</span>,
                        11:59 PM. There will be an administrative fee of <span style={{color: 'red'}}>US$150</span> for cancelled registrations and <span style={{color: 'red'}}>US$100</span> deducted for One-Day registrations from each cancellation.
                    </p>
                    <p>
                        You may only cancel your registration before the cancellation deadline. Author registration is not refundable.
                    </p>
                </GenericSection>
                <HeroFull content={{title: "REGISTER NOW!",
                    inside:<>
                        <div>
                            <ButtonGroup>
                                <Button color="primary" tag={"a"} target="_blank" href="https://cvent.me/l5B041?RefId=Member">Member Registration</Button>
                                <Button color="primary" tag={"a"} target="_blank" href="https://cvent.me/Q8q2Z1?RefId=Non-Member">ACM Member Registration</Button>
                                <Button color="primary" tag={"a"} target="_blank" href="https://cvent.me/Q8q2Z1?RefId=Non-Member">Non-Member Registration</Button>
                                <br/>
                                <Button  style={{marginTop:32}} color="primary" tag={"a"} target="_blank" href="https://www.eventbrite.com/e/daac-2022-reducing-hpcs-carbon-footprint-tickets-477704636427">Registration link for DAAC 2022 workshop available for remote online participation</Button>
                            </ButtonGroup>
                        </div>

                        <div className={"center-content"}>
                            <Image src={require(`./../assets/images/NSF_4-Color_bitmap_Logo.png`)}
                                   width={100}
                                   height={100}/>
                        </div>
                    </>}}/>
            </React.Fragment>
        );
    }
}

export default Keynote;
