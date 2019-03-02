import React from 'react';

const Contact = (contact, showContact, id, name, photo) => {
  return (
    <div className="row"
         style={{margin: '5px', padding: '10px', border: '1px solid #dddddd'}}>
      <div className="media" style={{padding: '15px'}}>
        <div className="media-left">
          <img className="media-object"
               src={photo}
               alt="..." />
        </div>
        <div className="media-body" style={{margin: '20px', fontSize: '16px'}}>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
