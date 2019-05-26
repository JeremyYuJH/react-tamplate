import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import "./home.scss";

const aaa = () => {
    return (
        <div>aaa</div>
    )
}

class Home extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }

    render() {
        return (
            <div className="home">
                home
                <Route path="/aaa" component={aaa} />
            </div>
        );
    }
}

export default Home;
