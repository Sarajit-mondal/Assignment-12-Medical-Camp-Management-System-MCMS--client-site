import React from 'react';
import { Helmet } from 'react-helmet-async'

const ContactUs = () => {
  const handleAbout = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container md:w-3/5 mx-auto py-8">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      
      {/* Contact Form */}
      <form className="mb-8" onSubmit={handleAbout}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 bg-transparent border-2 border-blue-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 bg-transparent border-2 border-blue-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">Phone Number</label>
          <input type="text" id="phone" name="phone" className="w-full p-2 bg-transparent border-2 border-blue-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-1">Subject</label>
          <input type="text" id="subject" name="subject" className="w-full p-2 bg-transparent border-2 border-blue-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" rows="5" className="w-full p-2 bg-transparent border-2 border-blue-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>

      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Contact Information</h2>
        <p>Email: <a href="mailto:info@carecamporganizer.com">info@carecamporganizer.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p>Address: 123 Main St, City, Country</p>
      </div>

      {/* Map */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Location</h2>
        <iframe
          title="Healthcare Camp Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.132643367239!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYOUR_LOCATION_NAME!2sYOUR_LOCATION_NAME!5e0!3m2!1sen!2sus!4v1620729892341!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Business Hours */}
      <div>
        <h2 className="text-xl font-bold mb-2">Business Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
      </div>
    </div>
  );
};

export default ContactUs;
