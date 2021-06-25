import Login from './Login'
import Register from './Register'
import Navbar from './Navbar'
import Feed from './Feed'
import Post from './Post'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  //const title = 'Welcome to the new blog';
  //const likes = 50;

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/feed">
              <Navbar />
              <Feed />
            </Route>
            <Route exact path="/post">
              <Navbar />
              <Post />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;