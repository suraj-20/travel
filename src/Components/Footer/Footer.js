import React, { useEffect } from "react";
import "./Footer.css";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import video2 from "../../Assets/video2.mp4";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footerSection">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
      </div>

      <div className="footerSecContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <span className="smallText">KEEP IN TOUCH</span>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" className="footerInput" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipsicing elit. Illam
              inventore eos fuga hic cum volptatem minima, temore non odio
              provident nobis ipsam at, dolaremque sed cupiditate ipsum in,
              atque soluta?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUT AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNER</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HotelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tripadvisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Delhi
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Jaipur
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Badrinath
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Patna
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Luckhnow
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <span className="smallTxt">BEST TRABEL WEBSITE THEME</span>
            <span className="smallTxt">COPYRIGHTS RESERVED - ISRATECH 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
