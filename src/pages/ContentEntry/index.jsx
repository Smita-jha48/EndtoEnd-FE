import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {CollectionType, ContentEntries} from '../../components';
import  makeRequestbackend  from '../../utils/makeRequestbackend';
import { GET_ENTRY_DATA } from '../../constants/apiBackEndPoints';

const ContentEntry = () => {
  const [ entrylist, setEntryList] = useState([]);
  const [ fields, setFields] = useState([]);
  const navigate = useNavigate();
  const {id,name} = useParams();
  useEffect(() => {
    makeRequestbackend(
      GET_ENTRY_DATA,
      {
        data: {
          collection_id: id,
        },
      },
      navigate
    ).then((response) => {
      setEntryList(response.data);
      if(response.data.length !== 0)
        setFields(Object.keys(response.data[0].values));
      else
        setFields([]);
      
    }).catch ((e) =>{
      console.log(e);
      const errorStatus = e.response?.status;
      if (errorStatus) {
        navigate(`error/${errorStatus}`);
      } else {
        navigate('error');
      }
    });
  }, [id]);

  return (
    <div className='dashboard'>
      <div className='collection-container'><CollectionType /></div>
      <div className='contentbuilder-container' ><ContentEntries name={name} fields={fields} entrylist={entrylist} /></div>
    </div>
  );

};

export default ContentEntry;