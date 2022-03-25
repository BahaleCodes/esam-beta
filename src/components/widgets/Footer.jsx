import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import '../styles/Footer.css'
import { BsInstagram, BsFacebook, BsYoutube, BsTwitter, BsWhatsapp } from "react-icons/bs";

function Footer() {
    function getCurrentYear() {
        const d = new Date();
        return d.getFullYear();
    }
    return (
        <div className="footer-bs mt-4 mb-0">
            <div className="row">
                <div className="col-md-3 footer-brand animated fadeInLeft">
                    <img alt='Everything South African Music' height="40px" width={"40px"} src={"/assets/img/logo.png"} />
                    <p className="mt-4">The leading news source for South African music fans.</p>
                    <p>© {getCurrentYear()} Everything SA Music, All rights reserved</p>
                </div>
                <div className="col-md-5 footer-nav animated fadeInUp">
                    <h4>Menu —</h4>
                    <div className="col-md-6">
                        <ul className="list row">
                            <div className="col-md-4">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/home/news">News</a></li>
                               
                            </div>
                            <div className="col-md-4">
                            
                                <li><a href="/home/about-us">About Us</a></li>
                                <li><a href="/home/contact-us">Contact us</a></li>
                                
                            </div>
                            <div className="col-md-4">
                            <li><a href="/home/terms-and-conditions">Terms & Condition</a></li>
                                <li><a href="/home/privacy-policy">Privacy Policy</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 footer-ns animated fadeInRight">
                    {/* <h4>Newsletter</h4>
                    <p>Get it while it's hot by subscribing to our newslatter and get latest updates and top stories.</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button className="btn btn-submit-footer btn-outline-secondary tag" type="button">Submit</button>
                    </div> */}
                    <h4>Follow Us —</h4>
                    <div className="d-flex justify-content-between">
                        <BsTwitter className="footerIcon" />
                        <BsYoutube className="footerIcon" />
                        <BsInstagram className="footerIcon" />
                        <BsFacebook className="footerIcon" />
                        {/* <BsWhatsapp className='footerIcon'> </BsWhatsapp> */}
                        {/* <ReactWhatsapp
                            number="+27-62-440-6016"
                            message={"Hello"}
                            type="submit"
                            style={{
                                border: "none",
                                backgroundColor: "black"
                            }}>
                            <i> what
                                <BsWhatsapp className='footerIcon'> </BsWhatsapp>
                            </i>
                        </ReactWhatsapp> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
