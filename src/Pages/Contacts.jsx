import { useState } from "react"
import emailjs from '@emailjs/browser'

const Contacts = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [title, setTitle] = useState()

  const sendingEmail = () => {
     name == null || email == null || message == null ? 
     alert('Please enter your valid informations') :
      emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: name,
          to_name: 'Abdurehman',
          from_email: email,
          to_email: 'abdurehmanali611@gmail.com',
          title: title,
          message: message
        },
        import.meta.env.VITE_PUBLIC_KEY
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
          <div className="flex justify-between items-center gap-10">
            <div className="flex items-center gap-3 w-1/2">
              <h4 className="font-serif text-2xl font-semibold">Get In Touch with Me</h4>
              <img src="/arrow.png" alt="arrow" className="w-12 h-12"/>
            </div>
            <div className="flex flex-col items-center">
              <div
              className="flex flex-col gap-10 items-center">
                <label className="flex flex-col gap-4 font-serif text-xl">
                  <p>Full Name:</p>
                  <input 
                  type="text"
                  placeholder="Your Full name"
                  required
                  className="bg-purple-200 h-10 px-5 rounded-[20px] md:w-[500px] w-[350px] mx-5 font-mono"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-4 font-serif text-xl">
                  <p>Email:</p>
                  <input 
                  type="text"
                  placeholder="Your Email Address"
                  required
                  className="bg-purple-200 h-10 px-5 rounded-[20px] md:w-[500px] w-[350px] mx-5 font-mono"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-4 font-serif text-xl">
                  <p>Title:</p>
                  <input 
                  type="text"
                  placeholder="Title of your Message"
                  required
                  className="bg-purple-200 h-10 px-5 rounded-[20px] md:w-[500px] w-[350px] mx-5 font-mono"
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label className="flex flex-col gap-4 font-serif text-xl">
                  <p>Message:</p>
                  <input 
                  type="text"
                  placeholder="Your Message"
                  required
                  multiple
                  className="bg-purple-200 h-24 px-5 rounded-[20px] md:w-[500px] w-[350px] mx-5 font-mono"
                  autoFocus
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <input 
                onClick={sendingEmail}
                type="submit" 
                className="bg-gray-300 h-10 w-28 text-center rounded-[30px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contacts