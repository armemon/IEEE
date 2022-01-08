
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Contact from "../Containers/Contact.jsx"

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/' component={Contact} />
                <Route exact path='/home' component={Contact} />
        </Router>
    )
}
}
export default AppRouter;