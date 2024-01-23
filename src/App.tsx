
import './App.css'
import Person from './components/Person'
import Status from './components/Status';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import { useState } from 'react';
import Input from './components/Input';
import Container from './components/Container';
import { Counter } from './components/state/Counter';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContent';
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Profile } from './components/auth/Profile';
import { Private } from './components/auth/Private';
import { List } from './components/generics/List';
import { RandomNNumber } from './components/restrictions/RandomNumber';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';

function App() {

  const [inputVal, setInputVal] = useState("");



  const familyList = [
    {
      first: "Chittala",
      last: "Satya Syamala"
    },
    {
      first: "Chittala",
      last: "Satya venkata dinesh"
    },
    {
      first: "Chittala",
      last: "Devi sree Alekya"
    }
  ];

  const handleClick = (id: number) => {
    console.log("Clicked", id)
  }

  const items = [
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 3,
      name: "C"
    }

  ];

  const myValue:number = 10;


  

  return (
    <>
      <h1>hello typescript</h1>
      <Status status="error" />
      <Greet name="dinesh" messageCount={10} isLoggedIn={true} />
      <Person familyList={familyList} />
      <Heading>
        Placeholder value
      </Heading>
      <Oscar>
        <Heading>
          Oscar goes to RRR Movie
        </Heading>
      </Oscar>
      <Greet name='Satya' isLoggedIn={true} />
      {/* <Button handleClick={(e)=>handleClick(e)}/> */}
      <Button handleClick={(e, id) => console.log(e, id)} />
      <Input handleChange={(e) => setInputVal(e.target.value)} value={inputVal} />
      <p>{inputVal}</p>
      <Container styles={{ border: "2px solid green", padding: "1rem" }} />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <div>
        <DomRef />
        <MutableRef />
      </div>
      <div>
        <Private isLoggedIn={true} component={Profile} />
      </div>
      <div>
        <List items={items} onClick={handleClick} />
      </div>
      <div>
        <RandomNNumber value={myValue} isPositive />
      </div>
      <div>
        <CustomButton variant='primary' onClick={()=>console.log("clicked")}>Primary</CustomButton>
        <CustomInput type='text' onChange={(e)=>console.log(e.target.value)} />
        <CustomInput type='password' onChange={(e)=>console.log(e.target.value)} />

      </div>
    </>
  )
}

export default App
