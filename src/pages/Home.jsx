import React from 'react'
import Navbar from '../components/common/Nav/Navbar'
import Banner from '../components/Home/Banner'
import Trustedby from '../components/Home/Trustedby'
import TradingViewWidget from '../components/Home/TradingViewWidget'
import Service from '../components/Home/Service'
import LiveMarket from '../components/Home/LiveMarket'
import Testimonial from '../components/common/Testimonial'
import Contact from '../components/Home/Contact'
import ActiveUsers from '../components/Home/ActiveUsers'
import Footer from '../components/common/Footer/Footer'
import Investment from '../components/Home/Investment'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Trustedby />
            <TradingViewWidget />
            <Service />
            <LiveMarket />
            <Investment />
            <Testimonial />
            <Contact />
            <ActiveUsers />
            <Footer />
        </>
    )
}

export default Home