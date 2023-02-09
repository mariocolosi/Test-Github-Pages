import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import Image from "../elements/Image";

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

class DraftCommittee extends React.Component {
    render() {
        const { className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, invertMobile, invertDesktop, alignTop, imageFill, ...props } = this.props;

        const outerClasses = classNames("features-split section", topOuterDivider && "has-top-divider", bottomOuterDivider && "has-bottom-divider", hasBgColor && "has-bg-color", invertColor && "invert-color", className);

        const innerClasses = classNames("features-split-inner section-inner", topDivider && "has-top-divider", bottomDivider && "has-bottom-divider");

        const splitClasses = classNames("split-wrap", invertMobile && "invert-mobile", invertDesktop && "invert-desktop", alignTop && "align-top");

        return (
            <section {...props} className={outerClasses}>
                <div className="container">
                    <div className={innerClasses}>
                        <div className={splitClasses}>
                            <div className="split-item reveal-from-top">
                                <div className={"container-lg"}>
                                    <h3 className="mt-0 mb-16">Committee</h3>
                                    <h5>General Chair(s)</h5>
                                    <p>
                                        Massimo Villari, University of Messina, Italy
                                        <br />
                                        Omer Rana, Cardiff University, UK
                                    </p>
                                    <h5>Program Chair(s)</h5>
                                    <p>
                                        Lorenzo Carnevale, University of Messina, Italy
                                        <br />
                                        Song Fu, University of North Texas, US
                                    </p>
                                    <h5>Web Chair(s)</h5>
                                    <p>
                                        Mario Colosi, University of Messina, Italy
                                        <br />
                                    </p>
                                </div>
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

DraftCommittee.propTypes = propTypes;
DraftCommittee.defaultProps = defaultProps;

export default DraftCommittee;
