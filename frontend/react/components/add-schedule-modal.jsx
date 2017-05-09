import React from 'react';
import Modal from 'Common/modal';
import Btn from 'Common/btn';
import ScheduleAddForm from './../containers/schedule-container/schedule-name-form';

export default (props) => {
  return (
    <Modal
      toggleModal={props.toggleModal}
      showModal={props.showModal}
      headerComponent={
        <div>
          <Btn
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
            onClick={props.toggleModal}
            value={
              <span aria-hidden='true'>&times;</span>
            }
          />
          <h4 className='modal-title' id='myModalLabel'>새 시간표 만들기</h4>
        </div>
      }
      bodyComponent={
        <ScheduleAddForm />
      }
      footerComponent={
        <Btn
          className='inline-block btn btn-middle'
          data-dismiss='modal'
          value='만들기'
          onClick={props.onSubmit}
        />
      }
    />
  );
};
