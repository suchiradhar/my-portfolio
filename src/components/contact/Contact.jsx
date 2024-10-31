// Importing required modules and assets
import axios from "axios"; // Importing axios for making HTTP requests
import React, { useState } from "react"; // Importing React and useState hook for state management
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa"; // Importing icons from react-icons

// Importing CSS files for styling the Contact component and global styles
import './Contact.css';
import "../../App.css";

// Defining the Contact component
const Contact = () => {
    // Initializing state 'form' to manage the contact form data with default empty values
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // Event handler to update form state on input change
    const handleChange = (e) => {
        const name = e.target.name; // Getting the name of the input field
        const value = e.target.value; // Getting the value of the input field
        setForm({ ...form, [name]: value }); // Updating the specific field in the form state
    };

    // Event handler to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing the default form submission

        // Making a POST request to the specified URL with form data
        axios.post('https://api.sheetbest.com/sheets/4c8a17f4-b1c8-4d93-8c08-27a485c36ac3', form)
            .then((response) => {
                console.log('Success:', response); // Logging success response
                setForm({ name: "", email: "", subject: "", message: "" }); // Clearing form fields on success
            })
            .catch((error) => {
                console.error('Error:', error); // Logging error response
            });
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
                    <form className="contact__form" onSubmit={handleSubmit}>
                        {/* Group for form input fields */}
                        <div className="contact__form-group grid">
                            {/* Input field for name */}
                            <div className="contact__form-div">
                                <label className="contact__form-tag text-cs">Your full Name <b>*</b></label>
                                <input 
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={form.name}
                                    className="contact__form-input" />
                            </div>

                            {/* Input field for email */}
                            <div className="contact__form-div">
                                <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                                <input 
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                    value={form.email}
                                    className="contact__form-input" />
                            </div>

                            {/* Input field for subject */}
                            <div className="contact__form-div">
                                <label className="contact__form-tag text-cs">Your Subject <b>*</b></label>
                                <input 
                                    type="text"
                                    name="subject"
                                    onChange={handleChange}
                                    value={form.subject}
                                    className="contact__form-input" />
                            </div>

                            {/* Textarea field for message */}
                            <div className="contact__form-div contact__form-area">
                                <label className="contact__form-tag text-cs">Your Message <b>*</b></label>
                                <textarea
                                    name="message"
                                    onChange={handleChange}
                                    value={form.message}
                                    className="contact__form-input"
                                ></textarea>
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="contact__submit">
                            <p>* Accept the terms and conditions.</p>
                            <button type="submit" className="btn text-cs">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact
