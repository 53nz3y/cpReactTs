

export type Gender = {
    name : string;
}

const Greeting = ({name}: Gender) =>  { 
return <div>Bonjour, {name} !</div>;
 };

 export default Greeting;