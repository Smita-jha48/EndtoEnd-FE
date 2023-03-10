import React,{useState} from 'react';
import './PopUpCard.css';

const PopUpCard = ({ setIsOpen, setcollectionName}) => {
  const [CollectionName, setCollectionName] = useState('');
  const handleCancel = () => {
    setcollectionName('');
    setIsOpen(false);
  };
  const handleSubmit = () => {
    setcollectionName(CollectionName);
    setIsOpen(false);
  };
  const handleChange = (event) => {
    setCollectionName( event.target.value );
  };

  return (
    <>
      <div className="dark-bg" onClick={handleCancel} />
      <div className="centered">
        <div
          className='modal'
        >
          <div className="modal-header">
            <h5 className="heading">Add New Content Type</h5>
          </div>
          <div className="modal-content">Name of the content type</div>
          <input type="text" className="modal-input" value={CollectionName} name='email' onChange={(e) => handleChange(e)}/>
          <div className="modal-actions">
            <div className="actions-container">
              <button
                className="cancel-btn"
                onClick={handleCancel}
              >
            Cancel
              </button>
              <button
                className="create-btn" onClick={handleSubmit}
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