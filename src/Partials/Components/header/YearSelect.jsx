import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Calendar, ChevronDown, ChevronUp } from 'react-feather'

function YearSelect() {

    const [yearOption, setYearOption] = useState('2021')
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

    function changeYear(event, val){
        event.preventDefault()

        setYearOption(val)
        setDropdownOpen(false)
        setDropdownClass('')
    }

    return (
        <React.Fragment>
            <div className="navs">
                <span className="navs-title" onClick={() => setDropdownOpen(!dropdownOpen)} ref={trigger} aria-expanded={dropdownOpen}>
                    <span className="df-fdr df-algn-ct">
                        <Calendar size={20} color="#5D5B66" />
                        <span className="mgl-5 mgr-5" style={{ fontSize: '1rem', fontWeight: 'normal'}}>{yearOption}</span>
                        {
                            dropdownOpen === true ?
                            (<ChevronUp color="#5D5B66" size={14} />)
                            :
                            (<ChevronDown color="#5D5B66" size={14} />)
                        }
                    </span>
                </span>
                <div className={"navs-dropdown xxsm " + dropdownClass} ref={dropdown}>
                    <div className="dropdown-content">
                        <ul className="list-component">
                            <li>
                                <Link to="#" onClick={(e) => changeYear(e, '2022')}>
                                    <Calendar size={18} /><span className="mgl-15">2022</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={(e) => changeYear(e, '2021')}>
                                    <Calendar size={18} /><span className="mgl-15">2021</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={(e) => changeYear(e, '2020')}>
                                    <Calendar size={18} /><span className="mgl-15">2020</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={(e) => changeYear(e, '2019')}>
                                    <Calendar size={18} /><span className="mgl-15">2019</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" onClick={(e) => changeYear(e, '2018')}>
                                    <Calendar size={18} /><span className="mgl-15">2018</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default YearSelect
