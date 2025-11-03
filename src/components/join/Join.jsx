import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../modal/Modal';
import './Join.css'

const Join = ({ isOpen, onClose }) => {
    const form = useRef()

    const sendEmail = (e) => {
        console.log("join now");
        if(window.posthog){
            window.posthog.capture("user_signed_up", {
            join_now:"join",
            join_click: true
          });}
        if(window.optimeleon){window.optimeleon("track", "user_signed_up_optimeleon")}
        e.preventDefault();
        
        emailjs.sendForm('service_h9g0btg', 'template_5urckpa', form.current, 'GJAtl73WZaFyf9KlA')
          .then((result) => {
              console.log(result.text);
              onClose();
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="Join">
                <div className="left-j">
                    <hr />
                    <div>
                        <span className="stroke-text">READY TO</span>
                        <span>LEVEL UP</span>
                    </div>
                    <div>
                        <span>YOUR BODY</span>
                        <span className="stroke-text">WITH US?</span>
                    </div>
                </div>
                <div className="right-j">
                    <form 
                        ref={form} 
                        className="email-container" 
                        onSubmit={sendEmail}
                    >
                        <input 
                            type="email" 
                            name="user_email" 
                            placeholder="Enter your email address"
                        />
                        <button className="btn btn-j">Join Now</button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default Join;