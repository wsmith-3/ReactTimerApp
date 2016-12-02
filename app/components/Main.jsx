import React from 'react';
import Nav from 'Nav';

var Main = React.createClass({
  render: function() {
    return(
      <div>
        <Nav />
        <div className='row'>
          <div className='columns small-centered medium-6 larger-4 '>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports =  Main;
