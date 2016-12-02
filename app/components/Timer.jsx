import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

var Timer = React.createClass({
  getInitialState: function () {
    return{
      count:0,
      timerStatus: 'paused',
      buttonTitle: 'Pause'
    }
  },
  componentDidUpdate: function (prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function (){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function (){
    this.timer = setInterval(()=>{
      var newCount = this.state.count + 1;
      this.setState({
        count:newCount
      });
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      timerStatus: newStatus,
      buttonTitle:newStatus === 'started'? 'Stop':'Pause'
    });
  },
  render: function() {
    var {count, timerStatus, buttonTitle} = this.state;
    return(
      <div>
        <h1 className='page-title'>Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} buttonTitle={buttonTitle}/>;
      </div>
    );
  }
});

module.exports =  Timer;
