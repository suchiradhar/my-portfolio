import axios from "axios";
import React, { useState } from "react";
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap 
} from "react-icons/fa";

import './Contact.css';

const Contact = () => {
        const [form, setForm] = useState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setForm({...form, [name]: value })
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            axios.post('https://api.sheetbest.com/sheets/4c8a17f4-b1c8-4d93-8c08-27a485c36ac3', form
            ).
            then((response) => {
                console.log('Success:', response);
                // clearing form fields
                setForm({ name: "", email: "", subject: "", message: ""});
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        }

    return (
        <section className="contact" id="contact">

            <div className='contact__wrapper'>
                <h2 className="section__title text-cs">Contact Me</h2>
                <p className="section__subtitle">
                Let's <span>Talk About Ideas</span>
                </p>

            <div className="contact__container container">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>

                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">Limerick, Ireland</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>

                        <h3 className="contact__card-title">Student</h3>
                        <p className="contact__card-data">University of Limerick</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>

                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">suchiraofficial@gmail.com</p>
                    </div>


                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>

                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">0123456789</p>
                    </div>

                </div>
                
                <form className="contact__form" onSubmit={handleSubmit}>

                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Your full Name <b>*</b>
                            </label>
                            <input 
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={form.name}
                                className="contact__form-input" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Your Email Address <b>*</b>
                            </label>
                            <input 
                                type="text"
                                name="email"
                                onChange={handleChange}
                                value={form.email}
                                className="contact__form-input" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Your Subject <b>*</b>
                            </label>
                            <input 
                                type="text"
                                name="subject"
                                onChange={handleChange}
                                value={form.subject}
                                className="contact__form-input" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag text-cs">Your Message <b>*</b>
                            </label>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                value={form.message}
                                className="contact__form-input"
                                ></textarea>
                        </div>
                    </div>

                    <div className="contact__submit">
                        <p>* Accept the terms and conditions.</p>
                        <button type="submit" className="btn text-cs">Send Message</button>
                    </div>

                </form>   
            </div>

            </div>

        </section>
    )
}

export default Contact