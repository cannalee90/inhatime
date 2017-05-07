import React, { Component } from 'react';
import CustomSelector from 'Common/custom-selector';

class TimetableHeader extends Component {
  constructor(props) {
    super(props);
  }

  termOptions(terms) {
    return terms.map((term) => {
      return {
        label: `${term.year}/${term.semester}`,
        value: term.id,
      };
    });
  }

  render() {
    const { terms } = this.props;
    const termOptions = this.termOptions(terms);
    return (
      <div className='row box timetable-header'>
        <CustomSelector
          options={termOptions}
          selected={_.last(termOptions)}
          wrapperClassName='inline-block btn-large margin-right-5'
          wrapperIdName='choice-semester'
          onChange={(e) => { }}
        />
        <CustomSelector
          options={[
            { label: '시간표 1', value: '1' },
            { label: '시간표 2', value: '2' },
            { label: '시간표 3', value: '3' },
          ]}
          wrapperClassName='inline-block btn-large margin-right-5'
          wrapperIdName='choice-timetable'
          onChange={(e) => { }}
        />
        <div className='inline-block btn-small' data-toggle='modal' data-target='#modal_newtable'>
          <span className='glyphicon glyphicon-plus' />
        </div>
        <div className='inline-block btn-middle btn-yellow' style={{ float: 'right' }} data-toggle='modal' data-target='#modal_delete'>
          시간표 삭제
        </div>
      </div>
    );
  }
}

export default TimetableHeader;
