import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Home extends React.Component {  //merge this class and React.Component

    render() {
        return (
            <div>
            <h1>Home </h1>
            </div>
        )
    }
}
class IT extends React.Component {  //merge this class and React.Component

    render() {
        return (
            <div>
            <h1>IT </h1>
            </div>
        )
    }
}
export {
    Home, IT
};