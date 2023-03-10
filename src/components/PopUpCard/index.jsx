import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  makeRequestbackend  from '../../utils/makeRequestbackend';
import { CREATE_CONTENT} from '../../constants/apiBackEndPoints';
import './PopUpCard.css';

const PopUpCard = ({ setIsOpen, setContent, setcollectionName}) => {
  const navigate = useNavigate();
  const [CollectionName, setCollectionName] = useState('');
  const handleCancel = () => {
    setcollectionName('');
    setIsOpen(false);
  };
  const handleSubmit =  async() => {
    try {
      const response = await makeRequestbackend(
        CREATE_CONTENT,
        {
          data: {
            name: CollectionName,
          },
        },
        navigate
      );
      setContent(response.data);
      setcollectionName(CollectionName);
      setIsOpen(false);
      
    } catch (e) {
      const errorStatus = e.response?.status;
      if (errorStatus) {
        navigate(`error/${errorStatus}`);
      } else {
        navigate('error');
      }
    }
  };
  
  const handleChange = (event) => {
    setContent({});
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