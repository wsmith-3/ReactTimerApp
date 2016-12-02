import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Controls from 'Controls';

describe('Controls', ()=>{
  it('should exist', ()=>{
    expect(Controls).toExist();
  });
  describe('render', ()=>{
    it('should render pause button when started', ()=>{
      var func = ()=>{};
      var controls = TestUtils.renderIntoDocument(<Controls onStatusChange={func} countdownStatus='started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');
      expect($pauseButton.length).toBe(1);
    })

    it('should render start button when paused', ()=>{
      var func = ()=>{};
      var controls = TestUtils.renderIntoDocument(<Controls onStatusChange={func} countdownStatus='paused'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');
      expect($pauseButton.length).toBe(1);
    })
  })
});
