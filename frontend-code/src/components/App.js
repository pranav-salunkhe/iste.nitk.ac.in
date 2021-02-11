import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import Header from "./RenderingComponents/Header";
import Footer from "./RenderingComponents/Footer";
import HomeComponent from "./PageComponents/HomeComponent";
import EventComponent from "./PageComponents/EventComponent";
import SigComponent from "./PageComponents/SigComponent";
import TeamComponent from "./PageComponents/TeamComponent";
import ProjectComponent from "./PageComponents/ProjectComponent";
import LoginComponent from "./PageComponents/LoginComponent";
import EventDetails from "./PageComponents/EventDetails";
import EventAdd from './PageComponents/EventAdd';

import "../css/constants.css";

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Header />
                <div className="app-main">
                    <Route path="/" exact component={HomeComponent} />
                    <Route path="/event" exact component={EventComponent} />
                    <Route path="/sig/:name" exact component={SigComponent} />
                    <Route path="/team" exact component={TeamComponent} />
                    <Route
                        path="/project/:id"
                        exact
                        component={ProjectComponent}
                    />
                    <Route path="/login" exact component={LoginComponent} />
                    <Route
                        path="/event/view/:name"
                        exact
                        component={EventDetails}
                    />
                    <Route path="/event/add" exact component={EventAdd} />
                </div>
                <Footer />
            </Router>
        );
    }
}
export default App;
