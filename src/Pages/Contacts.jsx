import { useState } from "react"
import emailjs from '@emailjs/browser'

const Contacts = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const CVDownload = () => {

  }

  const sendingEmail = () => {
     name == null || email == null || message == null ? 
     alert('Please enter your valid informations') :
      emailjs.send(
        'service_oynbrru',
        'template_qi1g6up',
        {
          from_name: name,
          to_name: 'Abdurehman',
          from_email: email,
          to_email: 'abdurehmanali611@gmail.com',
          message: message
        },
        'cD4suSdgcydTFKbkH'
      )
      .then((res) => alert('You have sent the Email successfully', res.status))
      .catch(err => alert(err.message))
  }
  
  return (
    <div>
      <div className="py-40 px-16 sm:py-20">
          <p className="text-[75px] -rotate-12 sm:text-[53px] md:text-[60px]">&quot;There is A Gold Here: But Most people are not trained to see it&quot;</p>
        </div>
        <div className="mx-20 my-10">
          <div className="flex justify-between md:flex-col md:gap-16 sm:flex-col sm:gap-16">
            <div className="w-[40%] pt-8 md:w-full sm:w-full">
              <header className="text-center text-[30px] my-10 italic">Send Me a Message</header>
              <p className="text-[20px] font-serif">
               whether you wish to discuss new ideas or have a project for me, 
               simply fill the form and i will get back to you soon
              </p>
              <button
              className="bg-red-300 w-32 h-12 rounded-[20px] my-5"
              onClick={CVDownload}
              >
                Download CV
              </button>
            </div>
            <div className="w-[40%]">
              <div
              className="flex flex-col gap-10">
                <label className="flex flex-col gap-4">
                  <p>Full Name</p>
                  <input 
                  type="text"
                  placeholder="Your Full name"
                  required
                  className="bg-purple-200 h-12 px-5 rounded-[20px] md:w-[500px] sm:w-[380px]"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-4">
                  <p>Email</p>
                  <input 
                  type="text"
                  placeholder="Your Email Address"
                  required
                  className="bg-orange-100 h-12 px-5 rounded-[20px] md:w-[500px] sm:w-[380px]"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-4">
                  <p>Message</p>
                  <input 
                  type="text"
                  placeholder="Your Message"
                  required
                  multiple
                  className="bg-yellow-100 h-28 px-5 rounded-[20px] md:w-[500px] sm:w-[380px]"
                  autoFocus
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <input 
                onClick={sendingEmail}
                type="submit" 
                className="bg-gray-300 h-10 w-28 text-center rounded-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contacts