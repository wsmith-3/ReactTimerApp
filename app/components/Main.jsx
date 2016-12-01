import React from 'react';
import Nav from 'Nav';

var Main = React.createClass({
  render: function() {
    return(
      <div>
        <Nav />
        <div className='row'>
          <div className='columns medium-6 larger-4 small-centered'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports =  Main;
