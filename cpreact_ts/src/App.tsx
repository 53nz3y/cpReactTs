
import './App.css';
import Counter from './Components/Counter';
import Greeting from './Components/Greetings';


function App() {
const name = "Richard";

  return (
    <>
      <section id="center">
        <div className="hero">
         <Greeting 
         name = {name}
         />
         <Counter />
        </div>
       
      </section>
    </>
  )
}

export default App
