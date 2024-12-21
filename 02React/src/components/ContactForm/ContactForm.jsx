import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useState } from "react";

// Functional component for the Contact Form
const ContactForm = () => {
  // State variables for form inputs
  const [name, setName] = useState("Amir"); // Default value for the name , email , and text
  const [email, setEmail] = useState("amiralam8109@gmail.com");
  const [text, setText] = useState("Hello how are you");
   // Function to handle form submission
  const onSubmit = (event)=>{
    event.preventDefault();     // Prevent default form submission behavior (page reload)
    // Update name state with form input
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    // Clear the form inputs after submission
    event.target.reset();
  };
  return (
    <section className= {styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
        <Button isOutline = {true}
        text="VIA EMAIL FORM" 
        icon={<MdMail fontSize="24px"/>}/>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text"name="name"/>
          </div>
          <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email"name="email"/>
          </div>
          <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows="12"/>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"end",
           }}>
          <Button text="SUBMIT BUTTON"/>
          </div>
          <div>{name + " " + email + " " + text}</div>
          </form>
          
        
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image"/>
      </div>
    </section>
  );
};

export default ContactForm;