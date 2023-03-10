import React, { useState } from 'react';
import './SideModal.css';
import PropTypes from 'prop-types';

export default function SideModal({ name, fields, setIsOpen }) {
  const [newEntry, setNewEntry] = useState({});
  return (
    <>
      <div className="dark-bg" onClick={() => setIsOpen(false)} />
      <div className="right">
        <div className="side-modal">
          <div className="modal-header">
            <h5 className='heading'>{name}</h5>
          </div>
          {fields.map((field) => {
            return (
              <>
                <div className="modal-content">{field}</div>
                <input type="text" className="modal-input" value={field}  />
              </>
            );
          })
          }

          <div className="modal-actions">
            <div className="actions-container">
              <button className="cancel-btn" onClick={()=>setIsOpen(false)}>Cancel</button>
              <button className="create-btn" onClick={()=>setIsOpen(false)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SideModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};