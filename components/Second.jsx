import React from 'react'
import '../tailwind.config.js'
import Image from 'next/image'
import { FaBuilding, FaGlobe, FaChartLine, FaBolt } from "react-icons/fa"


const Second = () => {
  return (
    <div className="min-h-screen bg-black m-auto">
      <div className="flex pt-36 items-center justify-center space-x-10">
        <div className="w-96">
          <h1 className="text-amber-500 font-bold text-2xl">
          CHANGING THE WAY THAT FACILITIES THINK ABOUT UPGRADES
          </h1>
          <p className="text-slate-300">
            Facilities don't have enough electrical capacity for modern energy
            needs like EV charging infrastructure and HVAC electrification, and
            these upgrades are capital and time-intensive. Zeus eases the
            transition.
          </p>
        </div>
        <div className="right w-96">
        <Image src="/../public/second.png" alt="/" width="380" height="230"/>
        </div>
      </div>
      <div className="pt-10 flex items-center justify-center">
        <h1 className="text-center text-amber-500 font-bold text-2xl">
          OUR SOLUTIONS FOR YOU
        </h1>
      </div>
      <div className="flex pt-10 justify-evenly">
        <div className="pb-24">
          <FaBuilding size={50} fill="white"/>
          <p className="border-b border-white text-amber-500 text-xl font-bold pt-3">VERSATILE</p>
          <p className="text-slate-300 w-40">Catered to small and medium sized facilities</p>
        </div>
        <div>
         <FaGlobe size={50} fill="white"/>
          <p className="border-b border-white text-amber-500 text-xl font-bold pt-3">SUSTAINABLE</p>
          <p className="text-slate-300 w-40">Ensure ESG Compliance</p>  
        </div>
        <div>
          <FaChartLine size={50} fill="white" />
          <p className="border-b border-white text-amber-500 text-xl font-bold pt-3">ACCURATE</p>
          <p className="text-slate-300 w-40">Provide revenue grade metering</p>
        </div>
        <div>
          <FaBolt size={50} fill="white" />
          <p className="border-b border-white text-amber-500 text-xl font-bold pt-3">COST EFFICIENT</p>
          <p className="text-slate-300 w-40">Increase energy efficiency to increase your bottom line</p>
        </div>

        
      
      
      
      </div>
      <div className="flex justify-evenly"></div>
    </div>
  )
}

export default Second