import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Switch from '../elements/Switch';
import Button from '../elements/Button';
import GenericSection from "./GenericSection";

const propTypes = {
    ...SectionTilesProps.types,
    pricingSwitcher: PropTypes.bool,
    pricingSlider: PropTypes.bool
}

const defaultProps = {
    ...SectionTilesProps.defaults,
    pricingSwitcher: false,
    pricingSlider: false
}

class Pricing extends React.Component {

    state = {
        priceChangerValue: "0",
        priceInput: {
            // 0: "1,000",
            // 1: "1,250"
        }
    }

    slider = React.createRef();
    sliderValue = React.createRef();

    componentDidMount() {
        if (this.props.pricingSlider) {
            this.slider.current.setAttribute('min', 0);
            this.slider.current.setAttribute('max', Object.keys(this.state.priceInput).length - 1);
            this.thumbSize = parseInt(window.getComputedStyle(this.sliderValue.current).getPropertyValue('--thumb-size'), 10);
            this.handleSliderValuePosition(this.slider.current);
        }
    }

    handlePricingSwitch = (e) => {
        this.setState({priceChangerValue: e.target.checked ? '1' : '0'});
    }

    handlePricingSlide = (e) => {
        this.setState({priceChangerValue: e.target.value});
        this.handleSliderValuePosition(e.target);
    }

    handleSliderValuePosition = (input) => {
        const multiplier = input.value / input.max;
        const thumbOffset = this.thumbSize * multiplier;
        const priceInputOffset = (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
        this.sliderValue.current.style.left = input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px';
    }

    getPricingData = (values, set) => {
        return set !== undefined ? values[this.state.priceChangerValue][set] : values[this.state.priceChangerValue];
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
            pushLeft,
            pricingSwitcher,
            pricingSlider,
            priceOutput,
            priceNote,
            sectionHeader,
            extraContent,
            ...props
        } = this.props;

        const outerClasses = classNames(
            'pricing section',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'pricing-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        const tilesClasses = classNames(
            'tiles-wrap illustration-section-02',
            pushLeft && 'push-left'
        );

        // const sectionHeader = {
        //     title: 'Registration fees',
        //     paragraph: <><p>Note: All deadlines are at 11:59 PM Dateline on the stated date.
        //         <br/>All rates listed are in USD.</p></>
        // };

        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content"/>
                        {pricingSwitcher &&
                            <div className="pricing-switcher center-content">
                                <Switch
                                    checked={this.state.priceChangerValue === '1' ? true : false}
                                    onChange={this.handlePricingSwitch}
                                    rightLabel="Normal Price">
                                    Early Bird
                                </Switch>
                            </div>
                        }
                        {pricingSlider &&
                            <div className="pricing-slider center-content">
                                <label className="form-slider">
                                    <span className="mb-16">How many users do you have?</span>
                                    <input
                                        type="range"
                                        ref={this.slider}
                                        defaultValue={this.state.priceChangerValue}
                                        onChange={this.handlePricingSlide}
                                    />
                                </label>
                                <div ref={this.sliderValue} className="pricing-slider-value">
                                    {this.getPricingData(this.state.priceInput)}
                                </div>
                            </div>
                        }

                        {priceOutput.map((sec,i) =>
                            <GenericSection topDivider key={i} className="center-content" style={i?undefined:{paddingTop:0}}>
                                <h3 className="mt-16 mb-16">{sec.title}</h3>
                                <div className={tilesClasses}>
                                {sec.list.map(({price,description},i)=>
                                    <div className="tiles-item reveal-from-top" data-reveal-delay="200"  key={i}>
                                        <div className="tiles-item-inner has-shadow">
                                            <div className="pricing-item-content">
                                                <div className="pricing-item-header pb-16 mb-24">
                                                    <div className="pricing-item-price">
                        <span className="pricing-item-price-currency h3 text-color-mid">
                          {this.getPricingData(price, 0)}
                        </span>
                                                        <span className="pricing-item-price-amount h1">
                          {this.getPricingData(price, 1)}
                        </span>
                                                        <span
                                                            className="text-sm">{this.getPricingData(price, 2)}</span>
                                                    </div>
                                                    <div className="text-color-low text-xs">{this.getPricingData(priceNote).replace('xxxxxx',`${price[1][0]}${price[1][1]}`)}
                                                    </div>
                                                </div>
                                                <div className="pricing-item-features mb-40">
                                                    {/*<div className="pricing-item-features-title text-xs text-color-high mb-24">*/}
                                                    {/*  What's included*/}
                                                    {/*</div>*/}
                                                    <ul className="pricing-item-features-list list-reset text-xs mb-32">
                                                        {description.map(d=><li className="is-checked" key={d}>{d}</li>)}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="pricing-item-cta mb-8">
                                                <Button tag="a" color="primary" wide href="https://cvent.me/q3vlYw">Registration</Button>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                                <br/>
                            </GenericSection>)}
                        {extraContent}
                    </div>
                </div>
            </section>
        );
    }
}

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;