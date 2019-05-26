import React, { Component } from "react";
import { HashRouter, Route } from 'react-router-dom'
import Home from "./home/Home.jsx"

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }

    render() {
        return (
            <HashRouter>
                <Home />
            </HashRouter>

        );
    }
}

export default App;
