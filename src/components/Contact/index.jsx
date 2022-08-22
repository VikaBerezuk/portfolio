import { useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import './index.scss';
import TagCloud from '../TagCloud';
import Title from '../Title';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mvma2id', 'template_88oj78i',
        e.target, 'f8EFctF7goz_9OvOJ')
        .then((result) => {
          console.log('email sent successfully', result);
          alert('email sent successfully');
        }, (error) => {
          console.log('error sending email', error);
          alert('error sending email');
        });            //clears the form after sending the email
    e.target.reset();
  };

  return (
    <>
      <Title  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}/>
      <div className='container contact-page'>
        <div className='text-zone'>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input placeholder='Name' type='text' name='name' required />
                </li>
                <li className='half'>
                  <input placeholder='Email' type='email' name='email' required/>
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required/>
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='map-wrap'>
          <TagCloud />
        </div>
      </div>
      <Loader type='pacman' active/>
    </>
  )
}

export default Contact;