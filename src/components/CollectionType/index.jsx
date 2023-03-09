import React from 'react';
import './CollectionType.css';
import { SearchIcon } from '../../assets/icon-search-dark_2023-03-09/icon-search-dark.png';

const CollectionType = () => {

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
        <div className='logo-text'>
       CONTENT TYPE BUILDER
        </div>
      </div>
    </>
  );

};

export default CollectionType;