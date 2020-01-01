import React, { Component } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './admin.css';
export default class Admin extends Component{
    render() {
        console.log(useRouteMatch);
        return (
            <div className="admin-wrapper">
                <aside>
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeClassName="active-router" to="/admin/home">home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-router" to="/admin/context">Context</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-router" to="/admin/lazy">Lazy & Suspense</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-router" to="/admin/refs">Refs</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active-router" to="/admin/hoc">hoc</NavLink>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <article className="content-wrapper">
                    {this.props.children}
                </article>
            </div>
        );
    }
}