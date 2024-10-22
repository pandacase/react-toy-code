import CntReducer from "./components/CntReducer";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 4, 7];
  return (
    <div className="App">
      {/* <Hello
        name="Rob"
        message="Hello"
        emoji="👋"
        seatNumbers={seatNumbers}
      /> */}

      {/* <Fruits /> */}

      
      <CntReducer />

      {/* <Form /> */}
    </div>
  );
}

export default App;
