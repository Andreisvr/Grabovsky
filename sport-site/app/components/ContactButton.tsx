"use client";
import { useState } from "react";
import { FaInstagram, FaTiktok, FaTelegramPlane, FaComments } from "react-icons/fa";
import "../styles/contactbutton.css";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact_fab_container">
      {/* Buton principal */}
      <button
        className={`contact_fab ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <FaComments />
      </button>

      {/* Meniul cu rețele */}
      <div className={`contact_menu ${open ? "show" : ""}`}>
        <a
          href="https://t.me/yourtelegram"
          target="_blank"
          rel="noopener noreferrer"
          className="contact_icon telegram"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://instagram.com/yourinstagram"
          target="_blank"
          rel="noopener noreferrer"
          className="contact_icon instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com/@yourtiktok"
          target="_blank"
          rel="noopener noreferrer"
          className="contact_icon tiktok"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}
