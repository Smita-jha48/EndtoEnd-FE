import React from 'react';
import './CollectionType.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  makeRequestbackend  from '../../utils/makeRequestbackend';
import { GET_COLLECTION } from '../../constants/apiBackEndPoints';
import SearchIcon from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';

const CollectionType = () => {
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
    <>
      <div className="sidebar-header">
        <p>CMS+</p>
      </div>
      <div className='collection-header'>
        <div className='collection-types'>
          COLLECTION TYPES
        </div>
        <div className='search-icon'><img src={SearchIcon}></img></div>
      </div>
      <div className='collection-list'>
        { collectionList.length !== 0 ? 
          collectionList.map((collection, index) => {
            return (
              <ul className='collection-name' key={index}>
                <li>{collection.name}</li>
              </ul>
            );
          }) : <></>
        }
        <div className='logo-text'>
       CONTENT TYPE BUILDER
        </div>
      </div>
    </>
  );

};

export default CollectionType;