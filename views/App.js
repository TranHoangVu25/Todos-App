import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponent.js';
import ListTodo from './Todos/ListTodo.js';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Nav from './Nav/Nav.js';
  import Home from './Example/Home.js';
  import ListUser from './Users/ListUser.js';
  import DetailUser from './Users/DetailUser.js';
  import {
    BrowserRouter ,
    Switch,
    Route,
    Link
  } from "react-router-dom";


/**
 * 2 components: class component / function component (function , arrow)
 *JSX
*/
function App() {
  //const App=()=>{

  //}

  //JSX 
  return (
    <BrowserRouter>
    <div className="App">

      <header className="App-header">
      <BrowserRouter><Nav/></BrowserRouter>
      

        <img src={logo} className="App-logo" alt="logo" />
         <Switch>
          <Route path="/" exact>
          <Home/>
          </Route>
          <Route path="/todo">
          <ListTodo/>
          </Route>
          <Route path="/about">
          <Mycomponent/> 
          </Route>
          <Route path='/user' exact>
<ListUser/>
          </Route>
          <Route path='/user/:id'>
<DetailUser/>
          </Route>
        </Switch>
      </header>

      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
