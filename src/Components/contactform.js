import React, { useState, useRef } from 'react';
import emailjs  from 'emailjs-com';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function ContactForm() {
 
  const [status, setStatus] = useState("Send Message");
  const [sentNotification, setSentNotification] = useState(" ");

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending Message...");
    emailjs.sendForm(
      'motoring_ng',
      'template_s06xy9o',
      form.current,
      '97Kt0dDtwkTRLs_Lc'
    ).then((response) => {
      console.log(response.status, response.text);
      setStatus(status);
      setSentNotification("Message Sent, we would get back to you");
      setTimeout(() => {
        setSentNotification(" ")
      }, 5000);
      
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    })
    .catch((err) => {
      console.log(err.text);
      setStatus(status);
      setSentNotification("Message failed to send!! Try again");
      setTimeout(() => {
        setSentNotification(" ")
      }, 5000);
    });

  }


  return (
    <form ref={form} onSubmit={onSubmit}>
      <label className='label'>
        Name:
        <br />
        <input className='input' name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} required placeholder='Enter your name' pattern="[^\s][A-zÁ-ž\s]{1,}" title='Name must be more than one alphabet'/> {/*can not start with space but can include space*/}
        <span className='validity'></span>
      </label>
       <br />
      <label className='label'>
        Email:
        <br />
        <input className='input' name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required pattern ='[a-z0-9._%+-]+@[a-z0-9.-+]+\.' placeholder='Enter your email address' />
        <span className='validity'></span> 
      </label>
      <br />
      <label className='label'>
        Phone no:
        <br />
        <PhoneInput className='input' name="phone" international="true" defaultCountry="NG" type="tel" value={phone} onChange={setPhone} placeholder='Enter Phone number'  pattern ="[0-9\s._%+-]{17,18}" autoComplete='off' title='must include country code and be complete' space='off' required/>
        <span className='validity'></span>
      </label>
     
      <br />
      <label className='label-text'>
        Message:
        <br />
        <textarea className='input-text' name="message" value={message} onChange={(event) => setMessage(event.target.value)} pattern="([A-z0-9]+[A-z0-9À-ž ]+){5,}" required placeholder='Type your message here...'/>
      </label>
      <br />
      <button className='button-submit' type="submit" style={{cursor: (sentNotification === 'Message Sent, we would get back to you')? 'not-allowed' : 'pointer', background: (sentNotification === 'Message Sent, we would get back to you')? '#e7e8f7' : '#262C71'}}>{status}</button>
      <br />
      <span className='sentNotification' style={{color: (sentNotification === 'Message Sent, we would get back to you')? '#037e03' : '#ff0000', padding: '5px'}}>{sentNotification}</span>
    </form>
  );
}

export default ContactForm;