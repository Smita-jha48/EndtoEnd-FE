import React, { useState}from 'react';
import PropTypes from 'prop-types';
import  {SideModal} from '../../components';
import './ContentEntries.css';

const ContentEntries = ({name,fields,entrylist}) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="collection-type-container">
        <div className="collection-type-header">
          <div className="entries-number">{entrylist.length} Entries</div>
          <button className="add-entry" onClick={() => setIsOpen(true)}>
          Add a new entry
          </button>
        </div>
        <div className="table-heading">
          <div className="entry-container">
            {fields.map((field,index) => {
              return (<div key={index} className="entry">{field}</div>);
            })}
          </div>
        </div>
        <div className="entry-heading">
          {
            entrylist.map((entry,index) => {
              return <div className= 'entry-value' key={index} >
                {
                  fields.map((field,index) => {
                    return <div className= 'entry-value-child' key={index}>{entry.values[field]}</div>;
                  })
                }
              </div>;
            })
          }
        </div>
      </div>
      {isOpen && <SideModal name={name} fields={fields} setIsOpen={setIsOpen} />}
    </>
  );
};

export default ContentEntries;

ContentEntries.propTypes = {
  name: PropTypes.string,
  fields: PropTypes.array,
  entrylist: PropTypes.array
};