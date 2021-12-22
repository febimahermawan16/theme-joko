import React from 'react'
import Undraw1 from '../../../../Assets/Images/Undraw/1.svg'
import { Activity, Calendar, Mail, MapPin, PhoneCall } from 'react-feather'

function Greeting() {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <img src={Undraw1} className="img-fluid" style={{ marginTop: '25px', marginBottom: '10px', height:'170px' }} alt="Greeting" />
                    <div className="greeting-title">
                        <div className="greeting-date">
                            <span className="tm">09:15</span>
                            <span className="tmr">am</span>
                        </div>
                        <div className="greeting-content">
                            <h5><b>Welcome User</b></h5>
                            <p className="text-r-1 mgt-10 mgb-0">True friend stab you in the front.</p>
                        </div>
                    </div>
                    <div className="greeting-section">
                        <div className="list-section">
                            <span className="icon">
                                <Activity />
                            </span>
                            <span className="description">
                                <span className="title">32 Project waiting for you</span>
                            </span>
                        </div>
                        <div className="list-section">
                            <span className="icon">
                                <Calendar />
                            </span>
                            <span className="description">
                                <span className="title">Friday, 19 November 2021</span>
                            </span>
                        </div>
                        <div className="list-section">
                            <span className="icon">
                                <MapPin />
                            </span>
                            <span className="description">
                                <span className="title">Mangkujayan</span>
                                <span className="subtitle">Ponorogo, East Java, Indonesia, Asia, Earth, Bimasakti</span>
                            </span>
                        </div>
                        <div className="list-section">
                            <span className="icon">
                                <Mail />
                            </span>
                            <span className="description">
                                <span className="title">joko.gantengnya.emak@gmail.com</span>
                            </span>
                        </div>
                        <div className="list-section">
                            <span className="icon">
                                <PhoneCall />
                            </span>
                            <span className="description">
                                <span className="title">(+062) 123 456 789</span>
                                <span className="subtitle">Ext . (+062) 987 654 321</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Greeting
