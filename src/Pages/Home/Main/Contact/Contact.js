import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div class="holder mb-0" id="contact">
            <form id="contact-form" action="https://formsubmit.co/taufikul67@gmail.com" method="POST">

                {/* Off captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Stop Redirecting to another route */}
                <input type="hidden" name="_next" value="https://taufik-portfolio.netlify.app/" />
                {/* AutoResponse */}
                <input type="hidden" name="_autoresponse" value="Thank You for messaging me.I will reply you soon" />


                <h1 className="mb-3"> <span class="glyphicon glyphicon-comment" aria-hidden="true"></span> Get in touch!</h1>

                <div class="input-group">
                    <div class="input-group-addon"> <span class="glyphicon glyphicon-user" aria-hidden="true"></span> </div>
                    <input type="text" name="name" class="form-control input-lg" placeholder="Your name" required />
                </div>

                <div class="input-group">
                    <div class="input-group-addon"> <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> </div>
                    <input type="text" name="email" class="form-control input-lg" placeholder="Your email" required />
                </div>

                <div class="input-group">
                    <div class="input-group-addon"> <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span> </div>
                    <input type="text" name="address" class="form-control input-lg" placeholder="Address" />
                </div>

                <div class="input-group">
                    <div class="input-group-addon"> <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> </div>
                    <textarea class="form-control input-lg" name="message" placeholder="Your Message" rows="6" required></textarea>
                </div>
                <button type="submit"><i class="far fa-paper-plane"></i> Send</button>
            </form>

        </div>



    );
};

export default Contact;