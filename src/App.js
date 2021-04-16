import React, { Component } from 'react'
import fire from './Components/Firebase'
import Form from './Components/Form'
import SignUp from './Components/SignUp'
import Login from './Components/Login'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Navlink,
  Switch,
} from 'react-router-dom'
import LogOut from './Components/LogOut'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }

  foo() {
    console.log('baz')
    window.scrollTo(0, 730)
  }

  render() {
    return (
      <Router>
        <div className='App'>
          {/*
          <Link exact to="/Components/Login">Login</Link>
          <Link exact to="/Components/Form">Form</Link>
          <hr />

          <Switch>
          <Route path="/Components/Login" component={Login}/>
          <Route path="/Components/Form" component={Form}/>
      </Switch> */}

          <nav class='navbar'>
            <div class='navbar__container'>
              <Link id='navbar__logo' exact to='/'>
                TRIPR
              </Link>
            </div>
            <ul class='navbar__menu'>
              <li class='navbar__item'>
                <Link class='navbar__links' id='home-page' exact to='/'>
                  Home
                </Link>
              </li>
              <li class='navbar__item'>
                <a
                  onClick={() => this.foo()}
                  class='navbar__links'
                  id='search-page'
                >
                  Search Flight
                </a>
              </li>
              <li class='navbar__item'>
                {this.state.user == null ? (
                  <Link class='navbar__links' id='user-page' to='/user'>
                    User
                  </Link>
                ) : (
                  <Link
                    class='navbar__links'
                    id='user-logout-page'
                    exact
                    to='/user'
                  >
                    User
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <Switch>
            {/* <Route path='/user' component={Login} /> */}
            {this.state.user == null ? (
              <Route path='/user' component={Login} />
            ) : (
              <Route path='/user' component={LogOut} />
            )}
            <Route exact path='/' component={Form} />
          </Switch>
          {/* <FunComp></FunComp> */}

          {/* {this.state.user ? <Form></Form> : <Login></Login>} */}
          {/* <Form></Form> */}
          {/* {/<Login></Login>/} */}
          {/* <SignUp></SignUp> */}

          {/* {this.state.user ? <Form></Form> : <Login></Login>} */}

          {/* <button onClick={this.handleLogOut}>Log Out</button> */}

          {/* <Product></Product> */}
          {/* <LifeCycle></LifeCycle> */}
        </div>
      </Router>
    )
  }
}

export default App
