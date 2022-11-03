import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
    return (
        // <div className="contactContainer">
        //   <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        //     <Button>Contact: mymailforabhi@gmail.com</Button>
        //   </a>
        // </div>

        <div className="cont">
            <div className="container1">

                <h1 className="brand"><span>Gym Equipments</span></h1>

                <div className="wrapper">


                    <div className="company-info">
                        <h3>Gym Equipments</h3>

                        <ul>
                            <li><i className="fa fa-road"></i> 44 Main Street</li>
                            <li><i className="fa fa-phone"></i> (555) 555-5555</li>
                            <li><i className="fa fa-envelope"></i> test@phoenix.com</li>
                        </ul>
                    </div>

                    <div className="contact">
                        <h3>E-mail Us</h3>

                        <form id="contact-form">

                            <p>
                                <label>First Name</label>
                                <input type="text" name="name" id="name" required />
                            </p>

                            <p>
                                <label>Last Name</label>
                                <input type="text" name="name" id="name" required />
                            </p>

                            <p>
                                <label>E-mail Address</label>
                                <input type="email" name="email" id="email" required />
                            </p>

                            <p>
                                <label>Phone Number</label>
                                <input type="text" name="phone" id="phone" />
                            </p>

                            <p className="full">
                                <label>Message</label>
                                <textarea name="message" rows="5" id="message"></textarea>
                            </p>

                            <p className="full">
                                <button type="submit">Submit</button>
                            </p>

                        </form>

                    </div>


                </div>

            </div>
        </div>

    );
};

export default Contact;