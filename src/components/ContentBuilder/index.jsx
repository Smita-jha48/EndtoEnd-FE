import React,{useState} from 'react';
import {ContentFields, PopUpCard} from '../../components';
import './ContentBuilder.css';

const ContentBuilder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [collectionName, setcollectionName] = useState('');
  const handleClick = () => {
    setIsOpen(true);
  };
    
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
              setIsOpen={setIsOpen} collectionName={collectionName} setcollectionName={setcollectionName}/>
          )}
        </div>
        <div className='fields'>
          {collectionName !== '' && (<div>{collectionName}</div>)}
        </div>
      </div>

    </div>
    
  );

};

export default ContentBuilder;