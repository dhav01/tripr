import React, { Component } from 'react'
import fire from './Firebase'
import '../Components/Style.css'

var dup = [{}]
var temp = []
export class GetDataFromForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flight: [],
      showMore: {},
    }
  }

  componentDidMount() {
    console.log('ComponentDidMount method called')
    var ref = fire.database().ref().child('FlightsData')
    ref.on('value', (snap) => {
      dup = snap.val()
      console.log(dup)
    })
  }

  handleSubmit = (e) => {
    if (fire.auth().currentUser != null) {
      console.log('user' + fire.auth().currentUser.uid)
    }
    e.preventDefault()

    for (var i = 0; i < dup.length; i++) {
      if (
        dup[i].deptDate === this.props.departureDate &&
        dup[i].destination === this.props.destination &&
        dup[i].source === this.props.source
      ) {
        temp[i] = dup[i]
        console.log('data found at: ' + i)
      } else {
        console.log('different data')
      }
    }
    console.log('size of temp: ' + temp.length)

    this.setState({
      flight: temp,
    })

    temp = []

    // refernce.push(data)
    // fire
    //   .database()
    //   .ref('search')
    //   .ref('destination')
    //   .push(this.props.destination)
    // fire.database().ref('search'). .push('hello dhaval')
  }

  handleInfo(key) {
    //alert('value:' + para.seats)
    this.setState((prevState) => ({
      showMore: {
        [key]: !(
          Object.keys(prevState.showMore).length > 0 && prevState.showMore[key]
        ),
      },
    }))

    // let ref = fire.database().ref('history')
    // ref.child(fire.auth().currentUser.uid).push(key)
  }

  // info = (value) => {
  //   return this.state.showMore ? <div>{value.seats}</div> : null
  // }

  renderMap = () => {
    console.log('length: ' + this.state.flight.length)
    return Object.entries(this.state.flight).map(([key, value]) => (
      <div key={key}>
        <div class='cardview'>
          <div class='source'>{value.airlines}</div>
          <div>
            {value.deptTime}-{value.arrivalTime}
          </div>
          <div>{value.duration}</div>
          <div>{value.source}</div>
          <div class='destination'>{value.destination}</div>
          <div class='departure'>{value.deptDate}</div>
          <div>{value.price}</div>
          <button
            class='info-btn'
            hidden={value.seats == null ? true : false}
            onClick={(e) => {
              e.preventDefault()
              this.handleInfo(key)
            }}
          >
            More info
          </button>
          {Object.keys(this.state.showMore).length > 0 &&
            this.state.showMore[key] && (
              <div class='more-info' id={`id-${key}`}>
                {' '}
                <p id='seats'>Seats Available: </p> {value.seats}
                <div>{value.dept}</div>
                <div>{value.arrival}</div>
              </div>
            )}
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div>
        <button class='sub-btn' onClick={this.handleSubmit}>
          Submit Data
        </button>
        {this.renderMap()}
      </div>
    )
  }
}

export default GetDataFromForm
