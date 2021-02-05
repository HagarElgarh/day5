import { BrowserRouter, Switch, Route , Link} from 'react-router-dom'
import Home from './components/home'
import StudentDetails from './containers/Student-details'
import NotFound from './components/not-found'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';
import {Nav,Navbar} from 'react-bootstrap';



const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {
    return (
        <Provider store={createStoreWithMW(reducers)}>
            <BrowserRouter>
            <Navbar bg="dark" expand="lg">
  <Navbar.Brand className="text-light">Student</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="text-light ml-4" to="/" >Home</Link>
      <Link className="text-light ml-4" to="/student/2">ADD</Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
                <div className="conatainer">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/student/:id" component={StudentDetails} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
     </Provider>
    )
}
export default App

// function x(){
//     return function y(){

//         return function z(){

//         }
//     }
// }

// let fn = x()()
// fn()
