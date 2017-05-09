import React from 'react';

export default (props) => {
  return (
    <div className='inline-block btn-small' onClick={props.onClick}>
      <span className='glyphicon glyphicon-plus' />
    </div>
  );
};
