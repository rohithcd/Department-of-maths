import "./Contact.css";
// import "./style.css";

// import Button from "../Reusable/Button/Button";
// import {slide2, email, phone} from "../../Exports";

const Contact = () => {


    return(
        <>
        <div class="section_contacts ">
    <div class="breadcrumbs-area position-relative mb-text-p">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="breadcrumb-content position-relative section-content">
                        <h3 class="title">Contact Us</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb Area End Here -->
    <!-- Contact Information And Title Area Start --> */}
    <div class="contact-info mt-5 pt-90 pb-90">
        <div class="container">
            <div class="row mb-n10">
                <ContactCard title="Our Location" text={<>Department of Mathematics <br/> CUSAT, PIN - 682022 <br/> Ernakulam, Kerala</>}/>
                <ContactCard title="Give us a call" text={<>0484-2577518 <br/> 0484-2862461 <br/> &nbsp;</>}/>
                <ContactCard title="Mail us" text={<>✉ mathscusat@gmail.com <br/> &nbsp; <br/> &nbsp;</>}/>
            
            </div>
        </div>
    </div>
    {/* <!-- Contact Information End -->
    <!-- Contact Map Start --> */}
    <div class="pb-90">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    {/* <!--Google Map Area Start--> */}
                    <div>
                        <iframe 
                            class="contact-map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15714.706766738225!2d76.3272186!3d10.0435153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc2b9dc0d4e8e411!2sDepartment%20Of%20Mathematics!5e0!3m2!1sen!2sin!4v1659555209914!5m2!1sen!2sin"  
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    {/* <!--Google Map Area Start--> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact Map End -->
    <!-- Contact Form Start --> */}
    <div class="contact-form-area bg-light pt-90 pb-90" data-aos="fade-up" data-aos-delay="100">
        <div class="container">
            <div class="row">
                <div class="offset-lg-2 col-lg-8">
                    <div class="contact-form">
                        <form action="" id="contact-form" method="post">
                            <div class="row">
                                <div class="col-md-6 col-12 mb-6">
                                    <input class="input-item" type="text" placeholder="Your Name *" name="name"/>
                                </div>
                                <div class="col-md-6 col-12 mb-6">
                                    <input class="input-item" type="email" placeholder="Email *" name="email"/>
                                </div>
                                <div class="col-12 mb-6">
                                    <input class="input-item" type="text" placeholder="Subject *" name="subject"/>
                                </div>
                                <div class="col-12 mb-6">
                                    <textarea class="textarea-item" name="message" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary btn-hover-dark">Submit</button>
                                </div>
                            </div>
                        </form>
                        <p class="form-messege"></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact Form End --> */}
    </div>
        </>
    );
}

const ContactCard = ({title, text}) => {
    return(
        <>
        <div class="col-md-4 mb-10" data-aos="fade-up" data-aos-delay="100">
            <div class="info">
                <div class="info-icon">
                    <i class="fa fa-map-marker"></i>
                </div>
                <div class="info-content">
                    <h4 class="title">{title}</h4>
                    <span class="info-text">{text}</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;
