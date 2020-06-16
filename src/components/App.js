import React from 'react';
import Preloader from './preloader';
import Header from './header';
import Home from './pages/home';
import Footer from './footer';
import "../assets/style.css";

class App extends React.Component {
    componentDidMount() {
        let scripts = [
            { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js" },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" },
            { src: "/js/bootstrap/bootstrap.min.js" },
            { src: "/js/plugins/plugins.js" },
            { src: "/js/active.js" }
        ]
        //Append the script element on each iteration
        scripts.map(item => {
            const script = document.createElement("script")
            script.src = item.src
            script.async = false
            document.body.appendChild(script)
        })
    }
    render() {
        return (
            <React.Fragment>
                <Preloader />
                <Header />
                <Home />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;