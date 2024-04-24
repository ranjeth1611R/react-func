import React from 'react'
import { PiSquareLogoFill } from "react-icons/pi";
import { BiRupee } from "react-icons/bi";
import "./Item.css"

export default function Itemli() {
  return (
    <div>
        <div className="container">
            <div className="row outbd">
                <div className="col-6">
                    <p className='bestsel'><PiSquareLogoFill className='text-success sqlogo'/> Bestseller</p>
                    <h3>Paratha Kuruma</h3>
                    <h6><BiRupee/>110</h6>
                </div>
                
                <div className="col-6">
                    <img src="src/assets/parotto.jpg" alt="" width={170} height={150} className='img d-flex justify-content-end"'/>
                    <button className='text-success buton'>ADD</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
