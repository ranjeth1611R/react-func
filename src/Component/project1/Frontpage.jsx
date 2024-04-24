import React from 'react'
import { IoMdMenu } from "react-icons/io";
import "./Frontpage.css"
import { RiArrowRightUpLine } from "react-icons/ri"
import { HiHandRaised } from "react-icons/hi2";
import { FaExclamation } from "react-icons/fa";
import { FaRegHandPointer } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import Tform from './Tform';


export default function Frontpage() {
    return (
        <div>
            <div className="container">
                {/* Primary */}
                <div className="row">
                    <div className="col-6"><IoMdMenu className='menu text-primary' />
                        <button className='btn btn-primary topbtn'><h2>Primal <h6>care</h6></h2></button></div>
                    <div className='col-6 d-flex justify-content-end p-4'><h5>Sign in <RiArrowRightUpLine /></h5></div>
                </div>
                {/* Girlimage */}
                <div className="row">
                    <div className="col-5 transform">
                        <h1 className='text-primary'><Tform/></h1>
                        <h1>from inside-out</h1>
                        <button className='btn btn-outline-primary mt-3'>Get Started</button>
                    </div>
                    <div className="col-7"><img src="src/assets/front2.png" alt="" /></div>
                </div>

                {/* hello */}
                <div className="row pt-5 text-center">
                    <h4><HiHandRaised /> Hello<FaExclamation /></h4>
                    <h2 className='pt-3'>Lorem ipsum dolor sit amet</h2>
                    <h2>Consectetur</h2>
                </div>

                {/* firstslideimage */}
                <div className="row pt-5 slide">
                    <div className="col-9"><img src="src/assets/front1.png" alt="" /></div>
                    <div className="col-3 slidecontent">
                        <h1>01</h1>
                        <h1 className='text-primary'>Lorem ipsum</h1>
                        <h1>dolor sit amet</h1>
                        <h1>consectetur</h1>
                    </div>
                </div>
                <div className="row mt-5 mx-5"><h4>---- LOREM IPSUM DOLOR</h4></div>
                {/* icon with LOREM CONTENT */}
                {/* 1 */}
                <div className="row iconlorem">

                    <div className='d-flex justify-content-center' >
                        <div className='d-flex'>
                            <div className='iconbox'><FaRegHandPointer className="icon" />
                            </div>
                            <div className="mx-3">
                                <h4>Lorem ipsum dolor sit </h4>
                                <h4>amet consectetur. In</h4></div>
                        </div>

                    </div>
                </div>
                {/* 2 */}
                <div className="row iconlorem">

                    <div className='d-flex justify-content-center' >
                        <div className='d-flex'>
                            <div className='iconbox'><FaRegHandPointer className="icon" />
                            </div>
                            <div className="mx-3">
                                <h4>Lorem ipsum dolor sit </h4>
                                <h4>amet consectetur. In</h4></div>
                        </div>

                    </div>
                </div>
                {/* 3 */}
                <div className="row iconlorem">

                    <div className='d-flex justify-content-center' >
                        <div className='d-flex'>
                            <div className='iconbox'><FaRegHandPointer className="icon" />
                            </div>
                            <div className="mx-3">
                                <h4>Lorem ipsum dolor sit </h4>
                                <h4>amet consectetur. In</h4></div>
                        </div>

                    </div>
                </div>
                {/* 4 */}
                <div className="row iconlorem">

                    <div className='d-flex justify-content-center' >
                        <div className='d-flex'>
                            <div className='iconbox'><FaRegHandPointer className="icon" />
                            </div>
                            <div className="mx-3">
                                <h4>Lorem ipsum dolor sit </h4>
                                <h4>amet consectetur. In</h4></div>
                        </div>

                    </div>
                </div>

                {/* pineapple */}
                <div className='row'>
                    <div className="container d-flex justify-content-center">
                        <div className="row sizeimg"><div className='pineapple'></div>
                         </div>
                    </div>
                </div>
                {/* Bread image */}
                <div className="row mt-5"><img src="src/assets/breadimg.png" alt="" />

                <div className='text-center text-white breadcontent '><h2>This is a video section and text appears</h2>
                <h2>after the video ends</h2></div>
                </div>
                {/* inputbox */}
                <div className="row mt-5 text-center">
                    <h2>Subscribe to our newsletter</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Non various ac orci</p>

                <div className='d-flex justify-content-center'>
                    <input type="text" placeholder='Enter your email' className="inputbox" />
                    <div className='inputsize'><FaArrowRight className= 'inputicon text-white' /></div>
                    </div>
                
                </div>
                </div>
                {/* 8images */}
                <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-4 d-flex">
                        <img src="src/assets/frontimg1.png" alt=""  width={220} height={220}/>
                        <img src="src/assets/frontimg2.png" alt="" width={220} height={220}/>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4 d-flex">
                        <img src="src/assets/frontimg3.png" alt=""  width={220} height={220}/>
                        <img src="src/assets/frontimg4.png" alt="" width={220} height={220}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 d-flex">
                        <img src="src/assets/frontimg5.png" alt="" width={220} height={220}/>
                        <img src="src/assets/frontimg6.png" alt="" width={220} height={220}/>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4 d-flex">
                        <img src="src/assets/frontimg7.png" alt="" width={220} height={220}/>
                        <img src="src/assets/frontimg8.png" alt="" width={220} height={220}/>
                    </div>
                </div>
                {/* footer */}
                <div className="row bg-black text-white footer">
                    <div className="col-5 footerpri"><h3>Primal</h3><p>care</p></div>
                    <div className="col-3">
                         <div className='d-flex justify-content-between footericon'><FaLinkedinIn/><FaInstagram/><FaFacebookF/><FiTwitter/>
                         </div>
                    </div>
                    <div className="col-4 text-center">
                    <FaCopyright /> Primal Care| Privacy Policy
                    </div>
                    
                </div>
         

                {/* end */}
                </div>

        </div>
    )
}
