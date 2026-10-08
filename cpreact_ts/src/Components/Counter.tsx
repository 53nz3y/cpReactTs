
import { Component } from "react";

class Counter extends Component { 
state:{count : number} = {
 count : 0
 } ; 
 increment: () => void = () =>  {
 this.setState({ count : this.state.count + 1 })
} ;
decrement : () => void = () => {
 this.setState({count : this.state.count - 1})
};
render() { 
return (
   <div> 
     <p>Count : {this.state.count}</p> 
     <button onClick={this.increment}>Increment</button> 
     <button onClick={this.decrement}>Decrement</button> 
   </div> 
 );
 }
 };
 export default Counter; 
