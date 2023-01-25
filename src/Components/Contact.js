import React from "react";

function Contact() {
  function showDiv() {
    var div = document.getElementById("contact-popup");
    div.style.visibility = "visible";
  }
  function hideDiv() {
    var div = document.getElementById("contact-popup");
    div.style.visibility = "hidden";
  }

  return (
    <>
      <div className="contact-btn-container">
        <button onClick={showDiv}>Contact Us</button>
      </div>

      <div id="contact-popup">
        <button onClick={hideDiv}>X</button>
        <h2>This is my contact form</h2>
      </div>
    </>
  );
}

export default Contact;
