import { Fragment } from "react";

export default function Header() {
    return (
        <Fragment>
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                <div className="container">
                
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <ul className="list-inline">
                            <li>
                                <a href="https://www.facebook.com/junior.galdino.74" target="_blank" className="btn-social btn-outline">
                                    <span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i>
                                </a>
                                </li>
                                <li>
                                <a href="https://www.linkedin.com/in/franclis" target="_blank" className="btn-social btn-outline">
                                    <span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i>
                                </a>
                                </li>
                                <li>
                                <a href="https://github.com/franclisjunior" target="_blank" className="btn-social btn-outline">
                                    <span className="sr-only">Github</span><i className="fa fa-fw fa-github-square"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="page-scroll">
                                <a href="/">HOME</a>
                            </li>
                            <li className="page-scroll">
                                <a href="/curriculum">CURRICULUM</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>

    )
}