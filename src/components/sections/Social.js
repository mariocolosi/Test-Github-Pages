import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Switch from '../elements/Switch';
import Button from '../elements/Button';
import {TwitterTimelineEmbed} from "react-twitter-embed";

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

class Social extends React.Component {

  state = {
    priceChangerValue: "1",
    priceInput: {
      // 0: "1,000",
      // 1: "1,250"
    },
    priceOutput: {
      plan1: {
        0: ["$", "35", "/m"],
        1: ["$", "27", "/m"]
      },
      plan2: {
        0: ["$", "55", "/m"],
        1: ["$", "47", "/m"]
      },
      plan3: {
        0: ["$", "75", "/m"],
        1: ["$", "57", "/m"]
      }      
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
    this.setState({ priceChangerValue: e.target.checked ? '1' : '0' });
  }

  handlePricingSlide = (e) => {
    this.setState({ priceChangerValue: e.target.value });
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

    const sectionHeader = {
      title: 'Social media',
      paragraph: 'Get contact with us!'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-top" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-features mb-40">
                        <div className="fb-page" data-href="https://www.facebook.com/uccbdcat" data-tabs="timeline"
                             data-width="" data-height="600" data-small-header="false" data-adapt-container-width="true"
                             data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore"><a
                                href="https://www.facebook.com/facebook">Meta</a></blockquote>
                        </div>
                    </div>
                  </div>
                  {/*<div className="pricing-item-cta mb-8">*/}
                    {/*<Button tag="a" color="primary" wide href="http://cruip.com/">Start free trial</Button>*/}
                  {/*</div>*/}
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-features mb-40">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="ucc_bdcat"
                            options={{height: 600}}
                        />
                    </div>
                  </div>
                  {/*<div className="pricing-item-cta mb-8">*/}
                    {/*<Button tag="a" color="primary" wide href="http://cruip.com/">Start free trial</Button>*/}
                  {/*</div>*/}
                </div>
              </div>                            

            </div>
          </div>
        </div>
      </section>
    );
  }
}

Social.propTypes = propTypes;
Social.defaultProps = defaultProps;

export default Social;