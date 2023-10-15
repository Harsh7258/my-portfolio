'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import FramerMagnetic from "../components/FramerMotion";


export default function ContactMe(){

    const form = useRef();

    const sendEmail = (e) => {
     e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICEID, process.env.NEXT_PUBLIC_TEMPLATEID, form.current, process.env.NEXT_PUBLIC_APIKEY)
        .then((result) => {
            console.log(result.text);
            alert("Email send successfully! Thank you")
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
  };

    return(
        <>
        <div className="home">
          <div className="space-y-2 pt-5 pb-8 md:space-x-5">
            <h1 className="home-heading md:leading-13">
              Contact
            </h1>
          </div>

          <div className="project-container">
             <div className="flex flex-col items-center pt-8 pb-3">
                <div className="py-2 px-4 mx-auto "> 
                        <p className="mb-4 font-light text-left  
                                        text-gray-600 sm:text-xl"> 
                                       <span> Get in Touch! </span> <br/>
                               Do you have a question, an idea, or a project you need help with?
                        </p> 

                     <form  ref={form} onSubmit={sendEmail}> 
                            <div className="flex flex-row"> 
                                <div className="w-1/2 pr-2 "> 
                                    <label htmlFor="firstName" 
                                        className="label "> 
                                        First Name 
                                    </label> 
                                    <input type="text" 
                                        className="input" 
                                        placeholder="Enter First Name"
                                        name='from_name'
                                        required/> 
                                </div> 
                                <div className="w-1/2 pl-2"> 
                                    <label htmlFor="firstName" 
                                        className="label"> 
                                        Last Name 
                                    </label> 
                                    <input type="text" 
                                        className="input"
                                        name='to_name'
                                        placeholder="Enter Last Name"/> 
                                </div> 
                            </div> 
                            <div> 
                                <label htmlFor="email" 
                                    className="label"> 
                                    Your email 
                                </label> 
                                <input type="email" 
                                    className="input" 
                                    name='from_email'
                                    placeholder="Your Email" 
                                    required /> 
                            </div> 
                            <div> 
                                <label htmlFor="subject" 
                                    className="label"> 
                                    Subject 
                                </label> 
                                <input type="text" 
                                    className="input"
                                    name='subject'
                                    placeholder="What project/suggestion do you have?" 
                                    required /> 
                            </div> 
                            <div > 
                                <label htmlFor="message" 
                                    className="label"> 
                                    Your message 
                                </label> 
                                <textarea rows={4}
                                        className="input" 
                                        name='message'
                                        placeholder="About Porject/Suggestion..."/> 
                            </div> 
                            <div className="flex justify-end">
                            <FramerMagnetic>
                                <button type="submit" 
                                        className=" email-btn mt-2 p-2 float-right"> 
                                        <span className="pr-2">  
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                                            </svg>
                                        </span>
                                    Send email
                                </button> 
                            </FramerMagnetic>
                            </div>
                    </form> 
                </div> 
            </div>
          </div>
        </div>
        </>
    )
}