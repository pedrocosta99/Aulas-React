import Message from "./components/Message";
import MessageHook from "./components/MessageHook";
import ControlledForm from "./components/ControlledForm"


function App() {

  return (
    <div className="App">
      <Message user="Pedro"/>
      <MessageHook user="Pessoa"/>

      <ControlledForm/>

    </div>
  )
}

export default App
