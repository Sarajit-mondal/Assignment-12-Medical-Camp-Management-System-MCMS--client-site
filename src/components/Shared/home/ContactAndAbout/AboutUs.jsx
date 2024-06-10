import React from 'react';
import { Helmet } from 'react-helmet-async'

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-2xl p-8">
       <Helmet>
         <title>About Us</title>
       </Helmet>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">Welcome to CareCamp Organizer! We're committed to enhancing community health through well-organized and accessible healthcare camps.</p>
      
      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p className="mb-4">Our mission is to provide essential healthcare services to underserved communities through our camps. We aim to make quality healthcare accessible, affordable, and convenient for everyone.</p>
      
      <h2 className="text-2xl font-bold mb-2">What Sets Us Apart</h2>
      <p className="mb-4">At CareCamp Organizer, we prioritize the health and well-being of our community. Our platform is designed to streamline the organization of healthcare camps, ensuring efficient service delivery and a positive experience for all participants.</p>
      
      <h2 className="text-2xl font-bold mb-2">Our Services</h2>
      <p className="mb-4">We offer a range of healthcare services at our camps, including:</p>
      
      <ul className="list-disc pl-6 mb-4">
        <li>General health check-ups</li>
        <li>Vaccination drives</li>
        <li>Health education and awareness programs</li>
        <li>Specialized medical consultations</li>
        <li>Emergency medical services</li>
      </ul>
      
      <h2 className="text-2xl font-bold mb-2">Our Team</h2>
      <p className="mb-4">Our team consists of dedicated healthcare professionals, volunteers, and support staff who are passionate about improving community health. Meet our team:</p>
      
      <ul className="list-disc pl-6 mb-4">
        <li>Dr. John Doe - Chief Medical Officer</li>
        <li>Jane Smith - Head of Volunteer Services</li>
        <li>Michael Johnson - Operations Manager</li>
        <li>Sarah Lee - Community Outreach Coordinator</li>
      </ul>
      
      <h2 className="text-2xl font-bold mb-2">Our Partners</h2>
      <p className="mb-4">We collaborate with a variety of healthcare providers, non-profit organizations, and local governments to bring comprehensive healthcare services to our camps. Our partners help us maximize our impact and reach more communities.</p>
      
      <h2 className="text-2xl font-bold mb-2">Customer Satisfaction</h2>
      <p className="mb-4">Your health and satisfaction are our top priorities. We're dedicated to providing excellent care and support throughout your experience with us. If you have any questions or need assistance, our team is here to help.</p>
      
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="mb-4">Have a question or need assistance? We're here to help! Feel free to reach out to our customer support team at [contact@carecamporganizer.com] or give us a call at [phone number]. We're available to ensure your experience with our healthcare camps is positive and beneficial.</p>
    </div>
  );
}

export default AboutUs;
