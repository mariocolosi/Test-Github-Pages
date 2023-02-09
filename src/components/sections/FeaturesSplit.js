import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

class FeaturesSplit extends React.Component {
    render() {
        const { className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, invertMobile, invertDesktop, alignTop, imageFill, ...props } = this.props;

        const outerClasses = classNames("features-split section", topOuterDivider && "has-top-divider", bottomOuterDivider && "has-bottom-divider", hasBgColor && "has-bg-color", invertColor && "invert-color", className);

        const innerClasses = classNames("features-split-inner section-inner", topDivider && "has-top-divider", bottomDivider && "has-bottom-divider");

        const splitClasses = classNames("split-wrap", invertMobile && "invert-mobile", invertDesktop && "invert-desktop", alignTop && "align-top");

        const sectionHeader = {
            title: "Simplify your design process",
            paragraph: "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.",
        };

        return (
            <section {...props} className={outerClasses}>
                <div className="container">
                    <div className={innerClasses}>
                        {/*<SectionHeader data={sectionHeader} className="center-content reveal-from-top">*/}
                        {/*  <div className="features-split-icon mb-24">*/}
                        {/*    <Image*/}
                        {/*      src={require('./../../assets/images/features-split-icon.svg')}*/}
                        {/*      alt="Features split icon"*/}
                        {/*      width={80}*/}
                        {/*      height={80} />*/}
                        {/*  </div>*/}
                        {/*</SectionHeader>*/}
                        <div className={splitClasses}>
                            <div className="split-item reveal-from-top">
                                <div className={"container-lg"}>
                                    <h3 className="mt-0 mb-16">About UCC</h3>
                                    <p>
                                        Cloud computing has firmly established itself as an indispensable utility for the digital age. Cloud services consumers expect and rely on sufficient computing power, the availability of data and media, and
                                        that these will be accessible across a range of devices.{" "}
                                    </p>
                                    <p>
                                        The expectation now is that Cloud services providers are capable of maintaining streamed services that are always available. Also, social and technological challenges are met with the development and adoption
                                        of new technologies that provide a safer, more secure, and richer digital experience for users and customers. Therefore, it is essential that sound scientific principles underpinning cloud technology and its
                                        economic value to both service providers and consumers are expressed and understood.
                                    </p>
                                    <p>
                                        UCC 2023 is the premier IEEE/ACM conference for areas related to Cloud Computing as a Utility and provides an international forum for leading researchers and practitioners in this important and growing field.
                                    </p>
                                    <p>
                                        This will be the 16th UCC in a successful conference series of community-driven events. Previous events were held in Shanghai, China (Cloud 2009), Melbourne, Australia (Cloud 2010 & UCC 2011), Chennai, India
                                        (UCC 2010), Chicago, USA (UCC 2012), Dresden, Germany (UCC2013), London, UK (UCC 2014), Limassol, Cyprus (UCC 2015), Shanghai, China (UCC 2016), Austin, Texas, USA (UCC 2017), Technopark Zurich, Switzerland
                                        (UCC 2018), Aucland, New Zealand (UCC 2019), Leicester, UK (UCC 2020), Leicester, UK (UCC 2021), and Vancouver, USA (UCC 2022).
                                    </p>
                                    <p>UCC 2023 is co-located with BDCAT 2023 and offers a technical programme, workshops, tutorials, doctoral symposium, and cloud challenge.</p>
                                </div>
                            </div>

                            <div className="split-item reveal-from-top">
                                <div className={classNames("split-item-image center-content-mobile illustration-element-04", imageFill && "split-item-image-fill")}>
                                    <Image src={require("./../../assets/images/features-split-image.svg")} alt="Features split 02" width={528} height={396} />
                                    <div style={img02Style}>
                                        <Image src={require("./../../assets/images/venueHolder.png")} alt="Features split top 02" width={344} height={212} />
                                    </div>
                                </div>
                                <div className="split-item-content center-content-mobile">
                                    <h3 className="mt-0 mb-16">Call for Papers</h3>
                                    <p className="m-0">
                                        The digital transformation of all areas of life is accelerated in this decade by novel cloud services, e-infrastructures, data platforms and cyber-physical system integration. This broader scope of cloud
                                        computing calls for technically sound contributions that combine scale with convenience and reliability. Society and economy depend on cloud applications delivering compute power on demand in every location
                                        along data paths as a general service to the public, in analogy to conventional utilities. The engineering of such systems and applications calls for scientifically proven approaches, methods, tools and
                                        technologies.{" "}
                                    </p>
                                    <br/>
                                    <p className="m-0">
                                        Providing a forum to review and discuss possible solutions, UCC is the premier IEEE/ACM conference for areas related to Cloud Computing as a Utility where leading researchers and practitioners in this important
                                        and growing field gather on an annual basis.
                                    </p>
                                </div>
                            </div>

                            <div className="split-item reveal-from-top">
                                <div className={"container-lg reveal-from-top"}>
                                    <p>Authors are invited to submit original, unpublished research manuscripts in all areas of Cloud and Utility Computing and related computing paradigms such as Fog/Edge, Serverless and Distributed Computing. </p>
                                    <p>Topics of interest include (but not limited to): </p>
                                    <ul>
                                        <li> Formal and qualitative aspects of Cloud technology</li>
                                        <li> Security, trust, privacy and policies in Clouds, and Cloud-hosted Blockchains</li>
                                        <li> Artificial intelligence in Clouds, and Cloud applications</li>
                                        <li> Architectural models and patterns to achieve Utility in Clouds</li>
                                        <li> Cloud business and legal implications beyond technology</li>
                                        <li> Cloud Computing middleware, stacks, tools, delivery networks and services at all layers (XaaS)</li>
                                        <li> Cloud large-scale foundations for Big Data, IoT, and real-time analytics</li>
                                        <li> Cloud management: autonomic, adaptive, self-*, SLAs, and monitoring</li>
                                        <li> Cloud-native application design, programming models, engineering and serverless/microservice implementation</li>
                                        <li> Cloud, Micro data centers, Fog and edge/mobile devices management, hierarchy models, and business models</li>
                                        <li> Designs and deployment models for Clouds: private, public, hybrid, federated, aggregated, intercloud</li>
                                        <li> Economic and business models of Clouds and services</li>
                                        <li> High Performance Computing and the Cloud</li>
                                        <li> Innovative cloud applications and experiences, including quantum clouds and IoT-fog/edge cloud continuums</li>
                                        <li> Mobile and energy-efficient use of Clouds</li>
                                        <li> Networking for clouds and data centers</li>
                                        <li> Performance analysis and modelling of cloud systems and applications</li>
                                        <li> Principles and theoretical foundations of Utility Computing</li>
                                        <li> Resource management and scalability: brokering, scheduling, capacity planning, and elasticity</li>
                                        <li> Utility-driven platforms for Clouds</li>
                                        <li> Utility-driven models and mechanisms for cloud applications in all domains (smart cities, mobility, e-health, industry etc.)</li>
                                        <li> Virtualization, containerization, composition, orchestration and other enablers</li>
                                    </ul>
                                </div>
                                {/*<div className={*/}
                                {/*  classNames(*/}
                                {/*    'split-item-image center-content-mobile illustration-element-05',*/}
                                {/*    imageFill && 'split-item-image-fill'*/}
                                {/*  )}>*/}
                                {/*  <Image*/}
                                {/*    src={require('./../../assets/images/features-split-image.svg')}*/}
                                {/*    alt="Features split 03"*/}
                                {/*    width={528}*/}
                                {/*    height={396} />*/}
                                {/*  <div style={img03Style}>*/}
                                {/*    <Image*/}
                                {/*      src={require('./../../assets/images/features-split-top-03.png')}*/}
                                {/*      alt="Features split top 03"*/}
                                {/*      width={747}*/}
                                {/*      height={570} />*/}
                                {/*  </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const img01Style = {
    position: "absolute",
    width: "139.77%",
    maxWidth: "139.77%",
    top: "-13.89%",
    left: "-16.47%",
};

const img02Style = {
    position: "absolute",
    width: "140.91%",
    maxWidth: "140.91%",
    top: "-13.88%",
    left: "-24.43%",
};

const img03Style = {
    position: "absolute",
    width: "141.48%",
    maxWidth: "141.48%",
    top: "-13.88%",
    left: "-16.47%",
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
