// import React from 'react'

// function Form() {
//   return (
    // <div className=' w-full h-full flex justify-center items-center p-4' >
//         <form action='' className='flex flex-col max-w-[600] w-full ' >
//             <div className='pb-8' >
//                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
//             </div>

//         </form>

//     </div>
//   )
// }

// export default Form;

import React, {useState } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMP_ID;
const publicKey = process.env.REACT_APP_API_KEY;


const Form = () => {
  // const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      user_name: name,
      user_email: email,
      message: message
    };
    emailjs.sendForm(serviceId, templateId, formData  , publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className=' w-full h-full flex justify-center items-center p-4'>
    <form  className='flex flex-col max-w-[600] w-full ' onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Message</label>
      <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <input type="submit" className='border-2 border-solid border-green-600' value="Send" />
    </form></div>
  );
};

export default Form;

// react controlled inputts
// map filter reduce 