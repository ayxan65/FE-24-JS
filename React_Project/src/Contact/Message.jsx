import React from "react";

const Message = () => {
  return (
    <div>
      <div className="input-message">
        <div className="message">Message</div>
        <textarea placeholder="Write message here" name="text" id="text"></textarea>
      </div>
      <div className="mes-button">
      <button onClick={()=>{
        alert('Müracietiniz qeyde alındı')
      }} id="mes-button">Send Message</button>
      </div>
    </div>
  );
};

export default Message;
