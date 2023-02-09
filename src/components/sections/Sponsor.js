import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Sponsor extends React.Component {

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
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div
            className={innerClasses}
          >
            <h2>Sponsors</h2>
            <ul className="list-reset">
              {/*<li className="reveal-scale-up" data-reveal-delay="400">*/}
              {/*  <Image*/}
              {/*    src={require('./../../assets/images/uol_logo.jpg')}*/}
              {/*    alt="Client 01"*/}
              {/*    width={124}*/}
              {/*    height={24} />*/}
              {/*</li>*/}
              <li className="reveal-scale-up" data-reveal-delay="200">
                <Image
                  src={require('./../../assets/images/ACM1.png')}
                  alt="Client 02"
                  width={83}
                  height={30} />
              </li>
              <li className="reveal-scale-up">
                <Image
                  src={require('./../../assets/images/ACM2.png')}
                  alt="Client 03"
                  width={150}
                  height={39} />
              </li>
              <li className="reveal-scale-up" data-reveal-delay="200">
                <Image
                  src={require('./../../assets/images/IEEE_logo.jpg')}
                  alt="Client 04"
                  width={150}
                  height={31} />
              </li>
              <li className="reveal-scale-up" data-reveal-delay="400">
                <Image
                  src={require('./../../assets/images/ICS_stacked-transparent.gif')}
                  alt="Client 05"
                  width={150}
                  height={30} />
              </li>
              <li className="reveal-scale-up" data-reveal-delay="400">
                <Image
                  src={require('./../../assets/images/tcsc-logo.gif')}
                  alt="Client 05"
                  width={113}
                  height={30} />
              </li>
              <li className="reveal-scale-up" data-reveal-delay="400">
                <Image
                  src={require('./../../assets/images/STC_CloudComputing.png')}
                  alt="Client 05"
                  width={150}
                  height={30} />
              </li>
              <li className="reveal-scale-up" data-reveal-delay="400">
                <Image
                  src={require('./../../assets/images/STCLogo1.png')}
                  alt="Client 05"
                  width={150}
                  height={30} />
              </li><li className="reveal-scale-up" data-reveal-delay="400">
                <Image
                  src={require('./../../assets/images/cloudbuslogo.png')}
                  alt="Client 05"
                  width={150}
                  height={30} />
              </li>
              <li className="reveal-scale-up" data-reveal-delay="400">
                <Image
                    src={require('./../../assets/images/NSF_4-Color_bitmap_Logo.png')}
                    alt="Client 05"
                    width={100}
                    height={30} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Sponsor.propTypes = propTypes;
Sponsor.defaultProps = defaultProps;

export default Sponsor;
