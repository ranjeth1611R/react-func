import React from 'react';
import "./Basicpage.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import iphone from "./images/iphoneimg.png";
import joystick from "./images/joystick.png";
import keyboard from "./images/keyboard.png";
import computer from "./images/computer.png";
import chair from "./images/chair.png";
import { FaStar } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { LuGamepad2 } from "react-icons/lu";
import pinkcoat from "./images/pinkcoat.png";
import handbag from "./images/handbag.png";
import cpucooler from "./images/cpucooler.png";
import bookself from "./images/bookself.png";
import speaker from "./images/Speakerm.png";
import sp1 from "./images/SP1.png";
import sp2 from "./images/SP2.png";
import sp3 from "./images/SP3.png";
import sp5 from "./images/SP5.png";
import sp6 from "./images/SP6.png";
import sp7 from "./images/SP7.png";
import sp8 from "./images/SP8.png";
import mainl from "./images/mainL.png"
import mainrt from "./images/mainRT.png"
import mainrb from "./images/mainRB.png"
import mainrb1 from "./images/mainRB1.png"
import deliveryimg from "./images/Deliveryimg.png"
import headsetimg from "./images/Headsetimg.png"
import tickimg from "./images/tickimg.png"
import footerscan from "./images/footerscan.png"
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Basicpage() {
  return (
    <div>

      {/* top-black-page */}
      <div className="container-fluid top">
        <p>Summer Sale for All Swim Suits And Free Express Delivery-OFF 50% <a href="#" className='topin'>ShopNow</a></p>
      </div>

      <div className='container'>

        {/* header content */}
        <div className="row pt-4">
          <div className="col-3"><h4>Exclusive</h4></div>
          <div className="col-5">
            <a href="#" className='p-2 text-black'>Home</a>
            <a href="#" className='p-2 text-black'>Contact</a>
            <a href="#" className='p-2 text-black'>About</a>
            <a href="#" className='p-2 text-black'>Sign Up</a>
          </div>
          <div className="col-4 ">
            <input type='text' placeholder='enter are you looking for' className='headerinput' />
            <IoIosHeartEmpty className='loveicon' />
            <MdOutlineShoppingCart className='shopicon' />
          </div>
          <hr />
        </div>
        {/* Headercontent END */}

        <div className='row'>
          {/* Left Slidebar */}
          <div className="col-3 leftsli">
            <p>Women's Fastion</p>
            <p>Men's Fashion</p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby's & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div>

          {/* Iphoneimg */}
          <div className="col-9 text-white">
            <div className="container iphone">
              <div className="row">
                {/* iphone content */}
                <div className="col-5 iphone-content">
                  <p><IoLogoApple className='iphone-logo' />iphone 14 series</p>
                  <h1>Up to 10%</h1>
                  <h1>Off Voucher</h1>
                  <h5><a href="#">Shop now <FaArrowRight /> </a></h5>
                </div>
                {/* iphone image */}
                <div className="col-7">
                  <img src={iphone} alt="i-image" width={470} height={320} />
                </div>

              </div>
            </div>
          </div>
          {/* left &iphone content END */}
        </div>
        {/* First card */}
        <br /><br />
        <div className="row">
          <div className='d-flex align-items-center'>
            <div className='smallred bg-danger'></div>
            <h6 className='text-danger px-3'>Today's</h6>
          </div>
          <p className='timing'>Days Hours Minutes Seconds</p>
          <div className='d-flex '><h4>Flash Sales</h4><h4 className='px-5'>03: 23: 19: 56</h4></div>
        </div>

        {/* E-Commerce Card */}
        <div className="row p-3">
          {/* 1 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={joystick} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">HAVIT HV-G92 Gamepad</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-secondary' />
              </div>
            </div>

          </div>
          {/* 2 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={keyboard} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">AK-900 Wired Edition Keyboard</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-secondary' />
              </div>
            </div>

          </div>
          {/* 3 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={computer} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">IPS LCD Gaming Moniter</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' />
              </div>
            </div>

          </div>
          {/* 4 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={chair} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">S-Series Comfort Smoothy Chair</h5>
                <p className="card-text text-danger">$120  </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-secondary' /> <FaStar className='text-secondary' />
              </div>
            </div>

          </div>

        </div><br />
        {/* E-Commerce END */}
        <div className='d-flex justify-content-center'><a className="btn btn-danger firstbtn">View All Products</a></div><hr />

        {/* browse page icon*/}
        <br /><br />
        <div className="row">
          <div className='d-flex align-items-center'>
            <div className='smallred bg-danger'></div>
            <h6 className='text-danger px-3'>Categories</h6></div><br /><br />
          <h4>Browse By Category</h4>
        </div><br />

        {/* Icon card */}
        <div className='row'>
          {/* 1 */}
          <div className='col-2'>
            <div className="card">
              <div className="card-body text-center">
                <MdPhoneIphone className='phone' /><br /><br />
                <p>Phones</p>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div className='col-2'>
            <div className="card">
              <div className="card-body text-center">
                < HiOutlineComputerDesktop className='phone' /><br /><br />
                <p>Computers</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className='col-2'>
            <div className="card">
              <div className="card-body text-center">
                <BsSmartwatch className='phone' /><br /><br />
                <p>SmartWatch</p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className='col-2'>
            <div className="card">
              <div className="card-body text-center">
                <MdOutlineCameraAlt className='phone' /><br /><br />
                <p>Camera</p>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className='col-2'>
            <div className="card">
              <div className="card-body text-center">
                <FaHeadphones className='phone' /><br /><br />
                <p>HeadPhones</p>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className='col-2'>
            <div className="card">
              <div className="card-body text-center">
                <LuGamepad2 className='phone' /><br /><br />
                <p>Gaming</p>
              </div>
            </div>
          </div>

        </div>
        {/* icon-end */}

        {/* Second card */}
        <br /><br />
        <div className="row">
          <div className='d-flex align-items-center'><div className='smallred bg-danger'></div>
            <h6 className='text-danger px-3'>This Month</h6></div><br /><br /><br />
          <div className='d-flex justify-content-between'><h4>Best Selling Products</h4>
            <a className="btn btn-danger firstbtn">View All</a></div>


        </div><br />

        {/* Best Selling Card */}
        <div className="row p-3">
          {/* 1 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={pinkcoat} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">The north coat</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' />
              </div>
            </div>

          </div>
          {/* 2 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={handbag} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">Women Handbag</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-secondary' />
              </div>
            </div>

          </div>
          {/* 3 */}
          <div className='col-3'>
            <div className="card castyle">
              <img src={cpucooler} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">CPU Cooler</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' />
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={bookself} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">Small Bookself</h5>
                <p className="card-text text-danger">$120  </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-secondary' /> <FaStar className='text-secondary' />
              </div>
            </div>

          </div>

        </div><br /><br /><br />
        {/* Best Selling END */}

        {/* Music-title-page */}
        <div className="row bg-black text-white p-5">
          <div className="col-5">
            <h6 className='text-success'>Categories</h6>
            <h1>Enhance your</h1>
            <h1>Music Experience</h1>
            <div className="pt-3">
              <button className='bg-white btnround mx-2'>23<br />hours</button>
              <button className='bg-white btnround mx-3'>05<br />Days</button>
              <button className='bg-white btnround mx-3'>59<br />Minutes</button>
              <button className='bg-white btnround mx-3'>35<br />Seconds</button>
            </div>
            <button className='text-white mt-5 musicbtn'>Buy Now</button>
          </div>
          <div className="col-7"><img src={speaker} alt="" /></div>
        </div>
        {/* Music-title-page END */}

        {/* 8length Card */}
        <br /><br />
        <div className="row">
          <div className='d-flex align-items-center'><div className='smallred bg-danger'></div>
            <h6 className='text-danger px-3'>Our Products</h6></div><br /><br /><br />
          <div className='d-flex justify-content-between'><h4>Explore Our Products</h4>
            <a className="btn btn-danger firstbtn">View All</a></div>


        </div><br />
        {/* first 4length card */}
        <div className="row p-3">
          {/* 1 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={sp1} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">Breed Dry Dog Fresh Food</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' />
              </div>
            </div>

          </div>
          {/* 2 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={sp2} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">CANON EOS DSLR Camera</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-secondary' />
              </div>
            </div>

          </div>
          {/* 3 */}
          <div className='col-3'>
            <div className="card castyle">
              <img src={sp3} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">ASUS FHD Gaming Laptop</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' />
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={bookself} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">Curology Product NewSet</h5>
                <p className="card-text text-danger">$120  </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-secondary' /> <FaStar className='text-secondary' />
              </div>
            </div>

          </div>

        </div><br /><br /><br />
        {/* first 4length END */}

        {/* Second 4length card */}
        <div className="row p-3">
          {/* 1 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={sp5} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">HAVIT HV-G92 Gamepad</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' />
              </div>
            </div>

          </div>
          {/* 2 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={sp6} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">AK-900 Wired Edition Keyboard</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-secondary' />
              </div>
            </div>

          </div>
          {/* 3 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={sp7} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">IPS LCD Gaming Moniter</h5>
                <p className="card-text text-danger">$120 </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' />
              </div>
            </div>

          </div>
          {/* 4 */}
          <div className='col-3'>

            <div className="card castyle">
              <img src={sp8} className="card-img-top" alt="..." width={270} height={250} />
              <div className="card-body">
                <h5 className="card-title">S-Series Comfort Smoothy Chair</h5>
                <p className="card-text text-danger">$120  </p>
                <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-warning' /> <FaStar className='text-secondary' /> <FaStar className='text-secondary' />
              </div>
            </div>

          </div>

        </div><br />
        <div className='d-flex justify-content-center'><a className="btn btn-danger firstbtn">View All Products</a></div><hr />
        {/* Second 4length END*/}

        {/* New Arrival */}
        <br /><br />
        <div className="row">
          <div className='d-flex align-items-center'><div className='smallred bg-danger'></div>
            <h6 className='text-danger px-3'>Featured</h6></div><br /><br /><br />
          <h4>New Arrival</h4>
        </div><br />
        {/* New Arrival END */}

        {/* 5 black card */}
        <div className="row">
          <div className="col-6"><div className="card"><img src={mainl} className="card-img-top" alt="..." height={545} /></div></div>

          {/* black second card */}
          <div className="col-6">
            <div className="container">
              <div className="row"><div className="col"><div className="card"><img src={mainrt} className="card-img-top" alt="..." /></div></div></div>
            </div>
            <div className="container"><div className="row mt-4">
              <div className="col-6"><div className="card"><img src={mainrb} className="card-img-top" alt="..." /></div></div>
              <div className="col-6"><div className="card"><img src={mainrb1} className="card-img-top" alt="..." /></div></div>
            </div></div>

          </div>
        </div>
        {/* 3 img icon */}
        <div className="row text-center p-5">
          <div className="col-4">
            <img src={deliveryimg} alt="" /><h5>FREE AND FAST DELIVERY</h5><p>Free delivery for all orders over $140</p>
          </div>
          <div className="col-4">
            <img src={headsetimg} alt="" /><h5>FREE AND FAST DELIVERY</h5><p>Free delivery for all orders over $140</p>
          </div>
          <div className="col-4">
            <img src={tickimg} alt="" /><h5>FREE AND FAST DELIVERY</h5><p>Free delivery for all orders over $140</p>
          </div>
        </div>
        {/* footer page */}
        <div className="container-fluid bg-black text-white p-5">
          <div className="d-flex justify-content-between ">
            {/* 1 */}
            <div>
              <h5>Exclusive</h5><br />
              <h6>Subscribe</h6>
              <p>Get 10% off your first order</p>
              <input type='text' placeholder='Enter your email' />
            </div>
            {/* 2 */}
            <div>
              <h5>Support</h5><br />
              <p>111 Bijoy sarani Dhaka,<br />
                DH 1515, Bangladesh.</p><br />
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
            {/* 3 */}
            <div>
              <h5>Account</h5><br />
              <p>My Account</p>
              <p>Login/ Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </div>
            {/* 4 */}
            <div>
              <h5>Quick Link</h5><br />
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
            {/* 5 */}
            <div>
              <h5>Dowload App</h5><br />
              <h6 className='text-secondary'>Save $3 with App New<br /> User Only</h6>
              <img src={footerscan} alt="" /><br />
              <div className='d-flex justify-content-between pt-4 footericon'><FaFacebookF /><FiTwitter /><FaInstagram /><FaLinkedinIn /></div>
            </div>
          </div><hr className='text-secondary' />
          <p className="text-center text-secondary">@Copright Rimel 2022 All right reserved</p>
        </div>
        {/* container-END */}
      </div>
    </div>
  )
}

