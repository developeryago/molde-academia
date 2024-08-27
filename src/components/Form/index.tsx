import emailjs from '@emailjs/browser';

import { FormEvent, useRef, useState } from "react";
import { Container } from "./styles";

import { toast } from 'react-toastify';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [dataForm, setDataForm] = useState({
    from_name: '',
    message: '',
    email: '',
    phone: '',
  });

  const handleChangeValue = ({currentTarget}: {currentTarget: HTMLInputElement}) => {
    setDataForm((dataForm) => ({...dataForm, [currentTarget.name]: currentTarget.value}));
  };

  async function sendEmail(event: FormEvent){
    event.preventDefault();
    setLoading(true)
    toast.success('Message sent successfully', {
      icon: false,
    })

    await emailjs.send('service_u70hdr3', 'template_e764svr', dataForm, 'eT23yOHtoJJV5rCyH')
    .then(() => {
  
      setLoading(false)
    })
    
    if(formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <Container>
      <h3>Fill in your details</h3>

      <form action="post" autoComplete="off" onSubmit={sendEmail} ref={formRef}>
        <label htmlFor="name">Name</label>
        <input type="name" name="name" id="name" required onChange={handleChangeValue} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required onChange={handleChangeValue} />
        <label htmlFor="telefone">Phone</label>
        <input type="telefone" name="phone" id="phone" required onChange={handleChangeValue} />
        <label htmlFor="text">Message</label>
        <input type="message" name="message" id="message" required onChange={handleChangeValue} />
        {loading ? 
          <button type="submit" disabled={true} className='submitBtn'>Sending...</button> : 
          <button type="submit" className='submitBtn'>Submit</button>
        }
      </form>
    </Container>
  )
}
