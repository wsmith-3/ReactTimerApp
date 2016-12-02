import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe('Timer', ()=>{
  it('should exist', ()=>{
    expect(Timer).toExist();
  });
  describe('handleStatusChange', ()=>{
    it('should set state to started and start timer', (done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(()=>{
        expect(timer.state.count).toBe(1);
        done();
      }, 1000)
    });

    it('should set state to paused and pause timer', (done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(()=>{
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 3001)
    });

    it('should stop timer count should be 0', (done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(()=>{
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 3001)
    });
    //
    // it('should stop countdown on stopped status', (done)=>{
    //   var countdown = TestUtils.renderIntoDocument(<Countdown />);
    //   countdown.handleSetCountdown(3);
    //   countdown.handleStatusChange('stopped');
    //
    //   setTimeout(()=>{
    //     expect(countdown.state.count).toBe(0);
    //     expect(countdown.state.countdownStatus).toBe('stopped');
    //     done();
    //   }, 1000)
    // });
  });
});
