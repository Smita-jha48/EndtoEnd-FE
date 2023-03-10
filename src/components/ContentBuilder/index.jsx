import React,{useState,useEffect} from 'react';
import {ContentFields, PopUpCard} from '../../components';
import { useNavigate } from 'react-router-dom';
import  makeRequestbackend  from '../../utils/makeRequestbackend';
import { GET_COLLECTION } from '../../constants/apiBackEndPoints';
import EditIcon from '../../assets/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education.png';
import './ContentBuilder.css';

const ContentBuilder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [fieldName, setFieldName] = useState('');
  const [fieldList, setFieldList] = useState([]);
  const [collectionName, setcollectionName] = useState('');
  console.log(fieldList);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [ ...fieldList, fieldName ];
    setFieldList(newList);
    setFieldName('');
    setToggle(!toggle);
  };
  const navigate = useNavigate();
  const [collectionList, setCollectionList] = useState([]);
  useEffect(() => {
    makeRequestbackend(GET_COLLECTION, {}, navigate)
      .then(async (response) => {
        setCollectionList(response.data);
      })
      .catch((e) => {
        if (navigate) {
          const errorStatus = e.response?.status;
          if (errorStatus) {
            navigate(`error/${errorStatus}`);
          } else {
            navigate('error');
          }
        }
      });
  }, []);
  
  return (
    <div className='content-builder'>
      <div  className="header">
        Content Types
      </div>
      <div className='collection-types-builder'>
        <div className='types'>
          <button className='new-type-button' onClick={handleClick}>+ New Type</button>
          {isOpen && (
            <PopUpCard
              setIsOpen={setIsOpen} setcollectionName={setcollectionName}/>
          )}
          <div className='button-collection'>
            { collectionList.length !== 0 ? 
              collectionList.map((collection, index) => {
                return (
                  <button className='new-type-button' key={index}>
                    {collection.name}
                  </button>
                );
              }) : <></>
            }
          </div>
        </div>
        <div className='fields'>
          {collectionName !== '' && (<>
            <div>{collectionName}
              <img src={EditIcon}></img>
            </div>
            <button className='new-field-button' onClick={handleSubmit}>Add another field</button> 
            {toggle ?<input placeholder='Field Name' value={fieldName} onChange={(e) => setFieldName(e.target.value)}></input>: (<></>)}
            {fieldList.length === 0 ? (
              <></>
            ) : (
              fieldList.map((field,index) => {
                return (
                  <ContentFields
                    key={index}
                    fieldName={field}
                  />
                );
              })
            )}
          </>
          )}

        </div>
      </div>

    </div>
    
  );

};

export default ContentBuilder;