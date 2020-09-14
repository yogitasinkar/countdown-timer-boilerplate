import React  from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onSetCountdownTime = (time) => {
    this.setState({
        count: time
    });
  };
 
  

  componentDidUpdate() {
    if (this.state.count > 0) {
       const timer = setTimeout(() => {    
        this.setState((prevState) => ({
          count: prevState.count - 1,
        }));
      }, 1000);
      return () => clearTimeout(timer)
    }
  }


  render() {
    const { count } = this.state;
    return (
      <div>
        <Clock timeInSeconds={count} />
        <CountdownForm
          count={count}
          onSetCountdownTime={(time) => this.onSetCountdownTime(time)}
        />
      </div>
    );
  }
}

export default Countdown;