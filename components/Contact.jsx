import React from 'react'
import '../tailwind.config.js'

const ContactPage = () => {
  return (
    <div className="bg-white border border-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form
        name="contact-form"
        method="POST"
        action="contact/?success=true"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact"/>
        {/* <div className="mb-4 mt-6 flex flex-row"> */}
          <div className="ml-6 mb-3 mr-8 mt-6">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="name">Full Name *</label>
            <input
            className="shadow appearance-none border border-gray-300 shadow-md rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              required
              type="text"
            />
          </div>
        {/* </div> */}
        <div className="mb-5 ml-6 mr-8">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email *</label>
            <input
            className="shadow appearance-none border border-gray-300 shadow-md rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              required
              type="text"
            />
        </div>
        <div className="mb-6 ml-6 mr-8">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="message">Message *</label>
            <input
            className="shadow border border-gray-300 shadow-md rounded w-full py-8 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              required
              type="text"
            />
        </div>
        <div className="flex items-center justify-end mr-8 mt-4 mb-4">
          <button className="bg-amber-500 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        </div>
        
        
       
      </form>
    </div>
      
  )
}

export default ContactPage