import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../../../Assets/Images/avatar.png'
import { BookOpen, Edit3, LogOut, Mail, MessageSquare, User } from 'react-feather'

function UserProfile() {

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
                <span className="header-profile" onClick={() => setDropdownOpen(!dropdownOpen)} ref={trigger} aria-expanded={dropdownOpen}>
                    <span className="nickname">
                        <div className="name">FUBAR!!!</div>
                        <div className="status">Administrator</div>
                    </span>
                    <span className="avatar">
                        <img src={Avatar} alt="Avatar" />
                    </span>
                </span>
                <div className={"navs-dropdown xsm " + dropdownClass} ref={dropdown}>
                    <div className="dropdown-content">
                        <ul className="list-component">
                            <li>
                                <Link to="/">
                                    <User />&nbsp;Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <BookOpen />&nbsp;Potofolio
                                </Link>
                            </li>
                            <li className="navs-devider"></li>
                            <li>
                                <Link to="/">
                                    <Mail />&nbsp;Email
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <MessageSquare />&nbsp;Chat
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <Edit3 />&nbsp;Todo List
                                </Link>
                            </li>
                            <li className="navs-devider"></li>
                            <li>
                                <Link to="/">
                                    <LogOut />&nbsp;Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserProfile
