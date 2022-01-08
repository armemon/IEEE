
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from '../Containers/Header'
import Contact from "../Containers/Contact.jsx"
import { Home, IT } from "../Containers/Extra.jsx"
class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/IEEE' element={<Contact />} />
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/IT' element={<IT />} />
                </Routes>
                <Footer />
            </Router>
        )
    }
}
export default AppRouter;