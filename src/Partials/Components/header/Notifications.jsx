import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../../Assets/Images/avatar.png'
import { AlertOctagon, Bell, DownloadCloud, GitPullRequest, Mail } from 'react-feather'

function Notifications() {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [dropdownClass, setDropdownClass] = useState('')

    const trigger = useRef(null)
    const dropdown = useRef(null)

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return
            setDropdownOpen(false)
        }
        initClass()
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    function initClass(){
        dropdownOpen ? setDropdownClass('show') : setDropdownClass('')
    }

    return (
        <React.Fragment>
            <div className="navs">
                <span className="navs-title" onClick={() => setDropdownOpen(!dropdownOpen)} ref={trigger} aria-expanded={dropdownOpen}>
                    <span className="relative" style={{ width: '100%', height:'auto'}}>
                        <Bell color="#5D5B66" size={21} />
                        <span className="notification-count danger">10</span>
                    </span>
                    {/* <span className="mgl-5">Notification</span> */}
                </span>
                <div className={"navs-dropdown xlg " + dropdownClass} ref={dropdown}>
                    <div className="dropdown-header">
                        {/* <Bell size={16} /> */}
                        {/* <span className="mgl-5">Notifications</span> */}
                        <span>Notifications</span>
                        <span className="badge outline-danger mgl-5">5 Last</span>
                    </div>
                    <div className="dropdown-content">
                        <ul className="list-component">
                            <li>
                                <Link to="/">
                                    <span className="notification-image text-background text-danger">
                                        <AlertOctagon size={20} />
                                    </span>
                                    <div className="notification-content">
                                        <span className="title">System Issues</span>
                                        <span className="description">We have some issues of our system, 5 high risk damaged found</span>
                                        <span className="date">17 November, 2021</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="notification-image text-background text-warning">
                                        <Mail size={20} />
                                    </span>
                                    <div className="notification-content">
                                        <span className="title">Message From Visitor</span>
                                        <span className="description">I glad to send you an email, i have some project for you</span>
                                        <span className="date">17 November, 2021</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="notification-image text-background text-success">
                                        <GitPullRequest size={20} />
                                    </span>
                                    <div className="notification-content">
                                        <span className="title">You Have New Friend Request</span>
                                        <span className="description">Somebody start to follow you, tap to see detail</span>
                                        <span className="date">17 November, 2021</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="notification-image text-background text-info">
                                        <DownloadCloud />
                                    </span>
                                    <div className="notification-content">
                                        <span className="title">Application Update</span>
                                        <span className="description">We have new update for current theme, tap to download</span>
                                        <span className="date">17 November, 2021</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span className="notification-image">
                                        <img src={Avatar} alt="notification" />
                                    </span>
                                    <div className="notification-content">
                                        <span className="title">Task List Information</span>
                                        <span className="description">You have a lot of task today, 7 list waited</span>
                                        <span className="date">17 November, 2021</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown-footer use-border">
                        <Link to="/" className="footer-link">Read All Notification</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Notifications
