import './contact.css'
import Phone from '../../img/Phone.png'
import Email from '../../img/Email.png'
import Address from '../../img/Address.png'
import { useContext, useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '../../context'

const Contact = () =>{
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault()
    
        emailjs.sendForm
        ('service_n75rcj3',
         'template_9k6ca6h',
         formRef.current, 
         'w61DOnUGSjS4IA5_T')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return(
      <div className='c'>
        <div className='c-bg'></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" />
                    +7987-605-79-46
                    </div>
                    <div className="c-info-item">
                    <img src={Email} alt="" className='c-icon' />
                    ildar_gali@mail.ru
                    </div>
                    <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon" />
                    Ufa city, Elevatornaya st 3Б, Apartment 42.
                    </div>
                </div>
            </div>
            <div className="c-right"> 
            <p className='c-desc'>
                <b>What's your story?</b> Get in touch. Always available
                freelancing if the right project comes along me.
            <form ref = {formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Subject' name='user_subject' />
                <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Email' name='user_email' />
                <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder='Name' name='user_name' />
                <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='Message' name='message'/>
                <button>Submit</button>
                {done && 'Thank you'}
            </form>
            </p>
            </div>
        </div>
      </div>
  )
}

export default Contact