import React from 'react';
import ContactForm from '../components/Contact'
import Navbar from '../components/Navbar'

export default function Contact() {
  return(
    <div className="flex justify-center space-x-4 pt-32">
      <div className="h-96 w-96">
        <header className="text-4xl font-bold">Let's Chat</header>
        <div className="pt-6 w-80">
          Are you passionate about helping Commercial & Industrial facilities
          meet modern energy needs? If so, drop a line.
        </div>
      </div>
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </div>

  ) 
}

