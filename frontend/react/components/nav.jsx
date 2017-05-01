import React from 'react';
import LinkTo from './../common/link-to';

export default (props) => {
  return (
    <nav className='navbar navbar-inverse navbar-fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <LinkTo
            className='navbar-brand'
            to='/'
            message='time table'
          />
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav navbar-right'>
            <li><a href='#' className='activated'>시간표짜기</a></li>
            <li><a href='#'>강의평가하기</a></li>
            <li><a href='#'>양한슬</a></li>
            <li><a href='#'>로그아웃</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
