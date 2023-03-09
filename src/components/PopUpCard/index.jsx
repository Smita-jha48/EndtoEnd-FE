import React,{useState} from 'react';
import './PopUpCard.css';

const PopUpCard = ({ setIsOpen, collectionName, setcollectionName}) => {
  const handleSubmit = () => {
    setcollectionName('');
    setIsOpen(false);
  };
  const handleChange = (event) => {
    setcollectionName( event.target.value );
  };

  return (
    <>
      <div className="dark-bg" onClick={handleSubmit} />
      <div className="centered">
        <div
          className='modal'
        >
          <div className="modal-header">
            <h5 className="heading">Add New Content Type</h5>
          </div>
          <div className="modal-content">Name of the content type</div>
          <input type="text" className="modal-input" value={collectionName} name='email' onChange={(e) => handleChange(e)}/>
          <div className="modal-actions">
            <div className="actions-container">
              <button
                className="cancel-btn"
                onClick={handleSubmit}
              >
            Cancel
              </button>
              <button
                className="create-btn"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
            Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpCard;