import React from "react"
import Footer from "../components/Layout/Footer/Footer"
import Header from "../components/Layout/Header/Header"
import PropTypes from "prop-types"

const MainLayout = ({children}) => {
  return (
    <React.Fragment>
        <Header/>
        {children}
        <Footer/>
    </React.Fragment>
  )
}

export default MainLayout

MainLayout.propTypes = {
    children : PropTypes.node
}