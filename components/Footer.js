import { Fragment } from "react";

export default function Footer() {
    return (
        <Fragment>
            <footer className="text-center">
                <div className="footer-above">
                    <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                        </div>
                        <div className="footer-col col-md-4">
                        <h3>Find me on the web</h3>
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
                            <a href="https://github.com/franclisjunior" className="btn-social btn-outline">
                                <span className="sr-only">Github</span><i className="fa fa-fw fa-github-square"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="footer-col col-md-4">
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-below">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        Copyright &copy; franclisgaldino.com 2021
                        </div>
                    </div>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}
            