import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const MyFooter = () => {
    return (
        <footer>
            <div className="row text-center mt-5">
                <div className="col-6 offset-3">
                    <div className="row">
                        <div className="col col-12 text-left mb-2">
                            <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
                            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                            <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                            <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
                        <div class="col">
                            <div class="row">
                                <div class="col col-12 footer-links">
                                    <p>
                                        <a href="#" alt="footer link">Audio and Subtitles</a>
                                    </p>
                                    <p>
                                        <a href="#" alt="footer link">Media Center</a>
                                    </p>
                                    <p>
                                        <a href="#" alt="footer link">Privacy</a>
                                    </p>
                                    <p>
                                        <a href="#" alt="footer link">Contact us</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col col-12 footer-links">
                                    <p>
                                        <a href="#" alt="footer link">Audio Description</a>
                                    </p>
                                    <p>
                                        <a href="#" alt="footer link">Investor Relations</a>
                                    </p>
                                    <p>
                                        <a href="#" alt="footer link">Legal Notices</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col col-12 footer-links">
                                    <p>
                                        <a href="#" alt="footer link">Help Center</a>
                                    </p>
                                    <p>
                                        <a href="#" alt="footer link">Jobs</a>
                                    </p>
                                    <p>
                                        <a href="#" alt="footer link">Cookie Preferences</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col col-12 footer-links">
                                    <p>
                                        <a href="#" alt="footer link">Gift Cards</a>
                                    </p>
                                    <p>
                                        <a href="#" alt="footer link">Terms of Use</a>
                                    </p>
                                    <p>
                                        <a href="#" alt="footer link">Corporate Information</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 text-left mb-2">
                            <button
                                type="button"
                                className="btn btn-sm footer-button rounded-0 mt-3"
                            >
                                Service Code
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12 text-left mb-2 mt-2 copyright">
                            © 1997-2022 Netflix, Inc.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default MyFooter;