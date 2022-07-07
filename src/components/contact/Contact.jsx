import "./contact.css"
import phoneIcon from "../../img/Phone_icon.png"
import emailIcon from "../../img/emailIcon.png"
import mapIcon from "../../img/mapIcon.png"
import { useContext, useRef, useState } from "react"
import emailjs from '@emailjs/browser';



const Contact = () => {
  const formRef=useRef();
  const [done,setDone]=useState(false)
  //const darkMode=theme.state.darkMode;
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_lukz3hu', 'template_0n9w5h8', formRef.current, 'l7MNbccg7nHAMkyJ7')      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phoneIcon} alt="" className="c-icon" />
              +52 246 311 3470
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={emailIcon} alt="" />
              vicmictm@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={mapIcon} alt="" />
              Huamantla, Tlaxcala, Postal Code: 90500
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Contact Me</b> <br/><br/>If you have a concern about my work or if you want to get in touch with me don't hesitate to reach me. It's a pleasure to receive your message, I will give you a response as soon as possible.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you, I will contact you as soon as possible"}

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact