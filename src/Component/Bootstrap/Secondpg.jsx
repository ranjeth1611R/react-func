import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import shoppingimg from "./images/shoppingimg.png"
import footerscan from "./images/footerscan.png"
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Secondpg() {
  return (
    <div>
        {/* top-black-page */}
      <div className="container-fluid top">
        <p>Summer Sale for All Swim Suits And Free Express Delivery-OFF 50% <a href="#" className='topin'>ShopNow</a></p>
      </div>
    
    <div className='container-fluid'>

      {/* header content */}
      <div className="row pt-4">
        <div className="col-3"><h4>Exclusive</h4></div>
        <div className="col-5">
          <a href="#" className= 'p-2 text-black'>Home</a>
          <a href="#" className='p-2 text-black'>Contact</a>
          <a href="#" className='p-2 text-black'>About</a>
          <a href="#" className='p-2 text-black'>Sign Up</a>
          </div>
        <div className="col-4 ">
          <input type='text' placeholder='enter are you looking for' className='headerinput'/>
          <IoIosHeartEmpty className='loveicon' />
          <MdOutlineShoppingCart className='shopicon'/>
        </div>
        <hr/>
      </div>
      {/* Headercontent END */}
      {/* shopping page */}
      <div className="row">
        <div className="col-7"><img src={shoppingimg} alt="" width={700} height={570}/></div>
        <div className="col-5 d-flex justify-content-center align-items-center">
            <form action='' method='post'>
                <h1>Create an account</h1>
                <p>Enter your details below</p>
                <div className="form-group">
                <input type="text" placeholder='Name' className='form-control mt-3' />
                <input type="text" placeholder='Email or Phone Number' className='form-control mt-3'/>
                <input type="password" placeholder='Password' className='form-control mt-3'/></div>
                <button className='btn btn-danger text-white mt-4'>Create Account</button>
                <button className="btn btn-outline-secondary">Sign up with Google</button>
                <p className='d-flex justify-content-center'>Already have account? <a href="#" className='text-black'>Log in</a></p>
                            
            </form>
        </div>
      </div><br/><br/><br/>

      {/* footer page */}
      <div className="container-fluid bg-black text-white p-5">
      <div className="d-flex justify-content-between ">
        {/* 1 */}
        <div>
          <h5>Exclusive</h5><br/>
          <h6>Subscribe</h6>
          <p>Get 10% off your first order</p>
          <input type='text' placeholder='Enter your email'/>
          </div>
          {/* 2 */}
          <div>
            <h5>Support</h5><br/>
            <p>111 Bijoy sarani Dhaka,<br/>
            DH 1515, Bangladesh.</p><br/>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          {/* 3 */}
          <div>
            <h5>Account</h5><br/>
            <p>My Account</p>
            <p>Login/ Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          {/* 4 */}
          <div>
            <h5>Quick Link</h5><br/>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          {/* 5 */}
          <div>
            <h5>Dowload App</h5><br/>
            <h6 className='text-secondary'>Save $3 with App New<br/> User Only</h6>
            <img src={footerscan} alt="" /><br/>
            <div className='d-flex justify-content-between pt-4 footericon'><FaFacebookF/><FiTwitter/><FaInstagram/><FaLinkedinIn/></div>
            </div>
      </div><hr className='text-secondary'/>
      <p className="text-center text-secondary">@Copright Rimel 2022 All right reserved</p>
      </div>

       {/* container-END */}
      </div>
    </div>
  )
}
