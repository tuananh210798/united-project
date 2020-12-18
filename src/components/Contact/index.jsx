import React from 'react';
import PropTypes from 'prop-types';

Contact.propTypes = {

};

function Contact(props) {
    return (
        <div>

            {/* <!-- Signup--> */}
            <section className="signup-section" id="signup">
                <div className="container">

                    <div className="row">
                        <div className="col-md-10 col-lg-8 mx-auto text-center">
                            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                            <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
                            <form className="form-inline d-flex">
                                <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                                <button className="btn btn-primary mx-auto" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact--> */}
            <section className="contact-section bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Address</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">Ham nghi, My dinh, Ha Noi</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50"><a href="#!">anh217nd@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Phone</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">0911527745</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social d-flex justify-content-center">
                        <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            {/* <!-- Footer--> */}
            <footer className="footer bg-black small text-center text-white-50"><div className="container">Nguyen Tuan Anh - anh217nd@gmail.com</div></footer>
        </div>
    );
}

export default Contact;