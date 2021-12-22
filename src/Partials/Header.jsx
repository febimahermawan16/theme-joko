import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Components/Navbar'
import { Menu } from 'react-feather'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollTop: 0,
            headerClass: '',
            sidebarToggle : false,
            sidebarClass : ''
        }
    }


    // Header Transition By Scroll Event
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = (e) => {
        let classString = ''
        if (window.scrollY > 70) {
            classString = 'scrolled'
        }

        this.setState({
            scrollTop : window.scrollY,
            headerClass : classString
        })
    }

    // Sidebar Toggle
    sidebarToggle = (status) => {
        if (status === true) {
            this.setState({ sidebarClass : 'show' })
        }
        else{
            this.setState({ sidebarClass : '' })
        }
        this.setState({ sidebarToggle : status })
    }

    render() {

        const headerClass = this.state.headerClass

        return (
            <React.Fragment>
                <Sidebar sidebarToggle={this.sidebarToggle} sidebarClass={this.state.sidebarClass} />
                <header className={headerClass}>
                    <div className="main-header">
                        <span className="toggle-sidebar" onClick={() => this.sidebarToggle(true)}> 
                            <Menu color="#2F363D" size={20} />
                        </span>
                        <Navbar />
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header
