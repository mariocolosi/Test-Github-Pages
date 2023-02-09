import React from 'react';
import { withRouter, HashRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';
import LayoutSignin from './layouts/LayoutSignin';

// Views 
import Home from './views/Home';
import ChairsCommittees from './views/ChairsCommittees';
import Callforpaper from './views/Callforpaper';
import Program from './views/Program';
import Login from './views/Login';
import Signup from './views/Signup';
import Workshop from "./views/Workshop";
import Poster from "./views/Poster";
import Keynote from "./views/Keynote";
import TravelAward from "./views/TravelAward";
import DoctorSymposium from "./views/DoctorSymposium";
import Registration from "./views/Registration";
import Venue from "./views/Venue";

import './App.css'

class App extends React.Component {

    componentDidMount() {
        document.body.classList.add('is-loaded')
        this.refs.scrollReveal.init();
    }

    // Route change
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            document.body.classList.add('is-loaded')
            this.refs.scrollReveal.init();
        }
    }

    render() {
        return (
            <ScrollReveal
                ref="scrollReveal"
                children={() => (
                    <Switch>
                        <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
                        {/* <AppRoute path="/home" component={Home} layout={LayoutDefault} />
                        <AppRoute path="/programme" component={Program} layout={LayoutAlternative} />
                        <AppRoute path="/call-for-paper" component={Callforpaper} layout={LayoutAlternative} />
                        <AppRoute path="/chairs-committees" component={ChairsCommittees} layout={LayoutAlternative} />
                        <AppRoute path="/workshops" component={Workshop} layout={LayoutAlternative} />
                        <AppRoute path="/poster" component={Poster} layout={LayoutAlternative} />
                        <AppRoute path="/keynotes" component={Keynote} layout={LayoutAlternative} />
                        <AppRoute path="/doctoral-symposium" component={DoctorSymposium} layout={LayoutAlternative} />
                        <AppRoute path="/travel-award" component={TravelAward} layout={LayoutAlternative} />
                        <AppRoute path="/registration" component={Registration} layout={LayoutAlternative} />
                        <AppRoute path="/venue" component={Venue} layout={LayoutAlternative} /> */}
                        {/*<AppRoute path="/" component={Login} layout={LayoutSignin} />*/}
                        {/*<AppRoute path="/signup" component={Signup} layout={LayoutSignin} />*/}
                    </Switch>
                )} />
        );
    }
}

export default withRouter(props => <App {...props} />);
