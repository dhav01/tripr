import React, { Component } from 'react'
import fire from './Firebase'

//console.log(fire.auth().currentUser.displayName)
export class LogOut extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }
  }

  handleLogOut = () => {
    fire.auth().signOut()
    console.log('logged out successfully')
  }

  componentDidMount() {
    var ref = fire
      .database()
      .ref()
      .child('users')
      .child(fire.auth().currentUser.uid)
    ref.on('value', (snap) => {
      this.setState({
        name: snap.val().name,
      })
    })
    //console.log(user.name)
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name.toUpperCase()} </h1>
        <button onClick={this.handleLogOut}>LogOut</button>
      </div>
    )
  }
}

export default LogOut
