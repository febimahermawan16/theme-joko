import React, { Component } from 'react'
import { APP_NAME, APP_VERSION } from '../Lib/Constant'
import { Link } from 'react-router-dom'
import { BookOpen, Chrome, Columns, Command, Copy, EyeOff, Feather, Home, Layers, Layout, MapPin, Package, PieChart, Slack, Sliders, Type, User } from 'react-feather'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


export class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <aside className={"sidebar " + this.props.sidebarClass}>
                    <span className="line-aside"></span>
                    <div className="sidebar-top">
                        <div className="logo">
                            <Link to='/' className="pdl-5">
                                {APP_NAME}&nbsp;<span className="badge lg outline-light">v{APP_VERSION}</span>
                            </Link>
                        </div>
                        <span className="sidebar-close" onClick={() => {this.props.sidebarToggle(false)}}>
                            <i className="bx bx-x"></i>
                        </span>
                    </div>
                    <div className="sidebar-container scroll-dark for-y scroll-thin">
                        <ProSidebar>
                            <Menu>
                                <MenuItem icon={<Home size={18} />}>Dashboard <Link to="/" /></MenuItem>
                                
                                <li className="sidebar-title">User Interfaces</li>
                                <MenuItem icon={<Type size={18} />}>Typography <Link to="/typography" /></MenuItem>
                                <MenuItem icon={<Copy size={18} />}>Cards <Link to="/cards" /></MenuItem>
                                <SubMenu title="Icons" icon={<Feather size={18} />}>
                                    <MenuItem>Feather <Link to="/icons" /></MenuItem>
                                    <MenuItem>Font Awesome <Link to="/icons-font-awesome" /></MenuItem>
                                    <MenuItem>Boxicons <Link to="/icons-boxincons" /></MenuItem>
                                    <MenuItem>Bootstrap Icons <Link to="/icons-bootstrap-icons" /></MenuItem>
                                </SubMenu>
                                <SubMenu title="Components" icon={<Layers size={18} />}>
                                    <MenuItem>Accordion <Link to="/components" /></MenuItem>
                                    <MenuItem>Alerts <Link to="/components-alerts" /></MenuItem>
                                    <MenuItem>Avatar <Link to="/components-avatar" /></MenuItem>
                                    <MenuItem>Badges <Link to="/components-badges" /></MenuItem>
                                    <MenuItem>Breadcrumb <Link to="/components-breadcrumb" /></MenuItem>
                                    <MenuItem>Buttons <Link to="/components-buttons" /></MenuItem>
                                    <MenuItem>Carousel <Link to="/components-carousel" /></MenuItem>
                                    <MenuItem>Collapse <Link to="/components-collapse" /></MenuItem>
                                    <MenuItem>Dropdowns <Link to="/components-dropdowns" /></MenuItem>
                                    <MenuItem>List Group <Link to="/components-listgroup" /></MenuItem>
                                    <MenuItem>Modals <Link to="/components-modals" /></MenuItem>
                                    <MenuItem>Navs &amp; Tabs <Link to="/components-navs-tabs" /></MenuItem>
                                </SubMenu>
                                <SubMenu title="Extensions" icon={<Command size={18} />}>
                                    <MenuItem>Toastr <Link to="/extensions" /></MenuItem>
                                    <MenuItem>Sliders <Link to="/extensions-sliders" /></MenuItem>
                                    <MenuItem>Drag &amp; Drop <Link to="/extensions-drag-drop" /></MenuItem>
                                </SubMenu>
                                <SubMenu title="Charts" icon={<PieChart size={18} />}>
                                    <MenuItem>ApexChart <Link to="/charts" /></MenuItem>
                                    <MenuItem>ChartJS <Link to="/charts-chartjs" /></MenuItem>
                                </SubMenu>
                                <MenuItem icon={<MapPin size={18} />}>Leaflet Map <Link to="/maps-leaflet" /></MenuItem>

                                <li className="sidebar-title">Forms &amp; Tables</li>
                                <SubMenu title="Form Elements" icon={<Chrome size={18} />}>
                                    <MenuItem>Input <Link to="/form-elements" /></MenuItem>
                                    <MenuItem>Input Group <Link to="/form-elements-input-group" /></MenuItem>
                                    <MenuItem>Input Mask <Link to="/form-elements-input-mask" /></MenuItem>
                                </SubMenu>
                                <MenuItem icon={<Layout size={18} />}>Form Layout <Link to="/form-layout" /></MenuItem>
                                <MenuItem icon={<Columns size={18} />}>Table <Link to="/table" /></MenuItem>
                                <MenuItem icon={<Package size={18} />}>Datatable <Link to="/datatable" /></MenuItem>

                                <li className="sidebar-title">Pages</li>
                                <SubMenu title="Authentication" icon={<Layers size={18} />}>
                                    <MenuItem>Login <Link to="/auth-login" /></MenuItem>
                                    <MenuItem>Register <Link to="/auth-register" /></MenuItem>
                                    <MenuItem>Forgot Password <Link to="/auth-forgot-password" /></MenuItem>
                                    <MenuItem>404 <Link to="/auth-404" /></MenuItem>
                                    <MenuItem>503 <Link to="/auth-503" /></MenuItem>
                                    <MenuItem>505 <Link to="/auth-505" /></MenuItem>
                                </SubMenu>
                                <SubMenu title="Profile" icon={<User size={18} />}>
                                    <MenuItem>Account <Link to="/profile-account" /></MenuItem>
                                    <MenuItem>Email <Link to="/profile-email" /></MenuItem>
                                    <MenuItem>Chat <Link to="/profile-chat" /></MenuItem>
                                    <MenuItem>Calendar <Link to="/profile-calendar" /></MenuItem>
                                    <MenuItem>Todo List <Link to="/profile-todo-list" /></MenuItem>
                                </SubMenu>
                                <MenuItem icon={<BookOpen size={18} />}>Portofolio <Link to="/portofolio" /></MenuItem>
                                
                                <li className="sidebar-title">Author</li>
                                <SubMenu title="Menu Level" icon={<Sliders size={18} />}>
                                    <MenuItem>Level 2.1</MenuItem>
                                    <SubMenu title="Level 2.2">
                                        <MenuItem>Level 3.1</MenuItem>
                                        <MenuItem>Level 3.2</MenuItem>
                                    </SubMenu>
                                </SubMenu>
                                <MenuItem icon={<EyeOff size={18} />}>Menu Disabled</MenuItem>
                                <MenuItem icon={<Slack size={18} />}>Development Changelog <Link to="/changelog" /></MenuItem>
                            </Menu>
                        </ProSidebar>
                    </div>
                </aside>
            </React.Fragment>
        )
    }
}

export default Sidebar
