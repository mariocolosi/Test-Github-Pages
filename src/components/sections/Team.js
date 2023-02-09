import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import membersData from "../../assets/members.csv"
import universityData from "../../assets/universitys.csv"
import tpcData from "../../assets/UCC2022-TPC.csv"
import {csv,groups} from "d3"
import IconButton from "@mui/material/IconButton/IconButton";
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from "@mui/material/Tooltip/Tooltip";

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state ={members:[],tpc:[]}
    }

    componentDidMount() {
        csv(universityData).then(un=>{
            let dict = {};
            un.forEach(u=>{
                dict[u.Short] = u;
            });
            csv(membersData).then(mem=>{
                mem.forEach(d=>{
                    if (dict[d.Affiliation]){
                        d.Affiliation_logo = `./image/${dict[d.Affiliation].Short}.jpg`;
                        d.Affiliation = dict[d.Affiliation].Full;
                    }
                })
                this.setState({members:groups(mem,d=>d.Category)});
            })
        })
            .then(()=>csv(tpcData).then(data=>{
                this.setState(({tpc:data}))
        }))
    }

    render() {
        const {members} = this.state;
        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            pushLeft,
            ...props
        } = this.props;

        const outerClasses = classNames(
            'team section center-content',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'team-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        const tilesClasses = classNames(
            'tiles-wrap',
            pushLeft && 'push-left'
        );

        // const sectionHeader = {
        //   title: 'Meet the team - Lorem ipsum is placeholder text.',
        //   paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        // };

        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        {members.map(c=><div key={c[0]} className={"mb-32"}>
                            <SectionHeader data={{title:c[0]}} className="center-content" />
                            <div className={tilesClasses}>
                                {c[1].map((m,i)=><div className="tiles-item" key={i} style={{padding:0}}>
                                    <div className="tiles-item-inner">
                                        <div className="team-item-header tiles-item" style={{padding:0}}>
                                            <div className={`team-item-image mb-24 ${m.isSpecical?'illustration-element-06':''}`}>
                                                <Image
                                                    src={require(`./../../assets/images/member/${m.Avatar!==''?m.Avatar:`${(m.Name==='??')?'unknown':m.Name}.jpg`}`)}
                                                    alt={m.Name}
                                                    width={190}
                                                    height={190} />
                                            </div>
                                        </div>
                                        <div className="team-item-content tiles-item" >
                                            <h5 className="team-item-name mt-0 mb-4">
                                                {m.Name}
                                            </h5>
                                            {(c[0]==='Programme Committee Chairs')&&<div className="team-item-role text-xxs tt-u text-color-primary mb-8" >
                                                {m.Role}
                                            </div>}
                                            {/*{m.Email&&<a className="team-item-role text-xxs tt-u text-color-primary mb-8" href={`mailto:${m.Email}`}><IconButton aria-label="delete" size="small" color="primary" style={{width:30}}>*/}
                                            {/*<EmailIcon style={{width:30}}/>*/}
                                            {/*</IconButton> :{m.Email}</a>}*/}
                                            <p className="m-0 text-sm">
                                                {/*m.Affiliation_logo&&<Image
                              src={m.Affiliation_logo}
                              alt={m.Affiliation}
                              width={50}
                              height={50} />*/}{m.Affiliation}{m.Region?`, ${m.Region}`:''}
                                            </p>

                                        </div>
                                    </div>
                                </div>)}
                            </div></div>)}
                        <div className={"mb-32"}>
                            <SectionHeader data={{title:'UCC 2022 Programme Committee'}} className="center-content reveal-from-top" />
                            <div className={tilesClasses}>
                                <ul>
                                    {
                                        this.state.tpc.map(d=><li style={{textAlign:'left'}}>
                                            {d['First name']} {d['Last name']}, {d['Affliation']}
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
