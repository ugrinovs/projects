import React from 'react'
import { hashHistory } from 'react-router';
import './Back.css';

const Back = (props) => {
  return (
    <button className="mui-btn go-back-btn" onClick={() => hashHistory.goBack()}><i className="fa fa-chevron-left"></i> Nazad</button>
  )
}

export default Back
