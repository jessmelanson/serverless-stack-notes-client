import React from 'react';
import ReactSpinner from 'react-bootstrap-spinner';

import './Loading.css';

const Loading = () => (
  <div className="spinner-container">
    <ReactSpinner color="primary" type="border" size="5">
      <span className="sr-only">Loading...</span>
    </ReactSpinner>
  </div>
);

export default Loading;
