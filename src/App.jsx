import Header from "./Header"
import Footer from "./Footer";
import Card from "./card";
import Button from "./Button";
import Students from "./Students";
import UserGreeting from "./UserGreeting";
import List from "./List ";
import Button2 from "./Button2";
import MyComponet from "./MyComponent";
import Counter from "./Counter";
import MyComponent2 from "./onChange-event-handler";
import ColorPicker from "./ColorPicker";
import ObjectsInState from "./objects-in-state";
import ArraysInState from "./arrays-in-state";
import ArrayOfObjects from "./array-of-objects-in-state";

function App() {

  return (
    <>
      <Header />
      <ArrayOfObjects/>
      <ArraysInState/>
      <ObjectsInState/>
      <ColorPicker />
      <MyComponent2 />
      <Counter />
      <MyComponet />
      <Button2 />
      <List />
      <UserGreeting isLoggedIn={true} username="Brocode" />
      <Card />
      <Button />
      <Students name="Sponjbob" age={30} isStudent={true} />
      <Students name="Patrick" age={42} isStudent={false} />
      <Footer />
    </>

  );

}

export default App
