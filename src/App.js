import './App.css';
import AddTask from './Components/AddTask/AddTask';
import { TaskProvider } from './Components/TaskContext/TaskContext';
import TaskList from './Components/TaskList/TaskList';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import UpdateTask from './Components/UpdateTask/UpdateTask';
import Error404 from './Components/Error404/Error404'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <Link className="navbar-brand" to={{ pathname: `/` }}>Navbar</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link className="nav-link" to={{ pathname: `/` }}>Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to={{ pathname: `/addTask` }}>Add</Link>
                  </li>
                  <li class="nav-item">
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="app-body">
            <Switch>
              <Route exact path="/" component={TaskList} />
              <Route exact path="/updateTask/:id" component={UpdateTask} />
              <Route exact path="/addTask" component={AddTask} />
              <Route exact path="*" component={Error404} />
              {/* <Route path="*" component={}/> */}
            </Switch>
          </div>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
