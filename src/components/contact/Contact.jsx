// Importing required modules and assets
import React, { useState } from "react"; // Importing React and useState hook for state management
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa"; // Importing icons from react-icons

import Swal from 'sweetalert2'

// Importing CSS files for styling the Contact component and global styles
import './Contact.css';
import "../../App.css";


// Defining the Contact component
const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6e0c9299-f714-4e55-b6a9-a4b8bc6af589");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });

              setForm({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Returning the JSX for the Contact section
    return (
        <section className="contact" id="contact">
            {/* Wrapper for the contact section */}
            <div className='contact__wrapper'>
                {/* Contact section title and subtitle */}
                <h2 className="section__title text-cs">Contact Me</h2>
                <p className="section__subtitle">
                    Let's <span>Talk About Ideas</span>
                </p>

                {/* Contact container holding contact information and form */}
                <div className="contact__container container">
                    {/* Contact info cards */}
                    <div className="contact__content">
                        {/* Card for displaying address information */}
                        <div className="contact__card">
                            <span className="contact__card-icon">
                                <FaRegMap /> {/* Icon for address */}
                            </span>
                            <h3 className="contact__card-title">Address</h3>
                            <p className="contact__card-data">Limerick, Ireland</p>
                        </div>

                        {/* Card for displaying student information */}
                        <div className="contact__card">
                            <span className="contact__card-icon">
                                <FaRegUser /> {/* Icon for user */}
                            </span>
                            <h3 className="contact__card-title">Student</h3>
                            <p className="contact__card-data">University of Limerick</p>
                        </div>

                        {/* Card for displaying email information */}
                        <div className="contact__card">
                            <span className="contact__card-icon">
                                <FaRegEnvelope /> {/* Icon for envelope */}
                            </span>
                            <h3 className="contact__card-title">Email</h3>
                            <p className="contact__card-data">suchiraofficial@gmail.com</p>
                        </div>

                        {/* Card for displaying phone information */}
                        <div className="contact__card">
                            <span className="contact__card-icon">
                                <FaRegAddressBook /> {/* Icon for address book */}
                            </span>
                            <h3 className="contact__card-title">Phone</h3>
                            <p className="contact__card-data">0123456789</p>
                        </div>
                    </div>

                    {/* Contact form */}
                    <form className="contact__form" onSubmit={onSubmit}>
                        {/* Group for form input fields */}
                        <div className="contact__form-group grid">
                            {/* Input field for name */}
                            <div className="contact__form-div">
                                <label className="contact__form-tag text-cs">Your full Name <b>*</b></label>
                                <input 
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="contact__form-input" />
                            </div>

                            {/* Input field for email */}
                            <div className="contact__form-div">
                                <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                                <input 
                                    type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="contact__form-input" />
                            </div>

                            {/* Input field for subject */}
                            <div className="contact__form-div">
                                <label className="contact__form-tag text-cs">Your Subject <b>*</b></label>
                                <input 
                                    type="text"
                                    placeholder="Subject of your message"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                    className="contact__form-input" />
                            </div>

                            {/* Textarea field for message */}
                            <div className="contact__form-div contact__form-area">
                                <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
                                <textarea
                                    name="message"
                                    placeholder="Enter your message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="contact__form-input"
                                ></textarea>
                                <p>* Accept the terms and conditions.</p>
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="contact__submit">
                            <button type="submit" className="btn text-cs">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact
