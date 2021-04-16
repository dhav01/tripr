import React, { Component } from 'react'
import GetDataFromForm from './GetDataFromForm'
import '../Components/Style.css'
import pic1 from '../Components/pic1.svg'

export class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      source: '',
      destination: '',
      departuredate: '',
      adults: 0,
      children: 0,
      infants: 0,
    }
  }

  tryDate() {
    if (this.state.journeyType == 'Round Trip') {
      return (
        <input
          type='date'
          name='returnDate'
          value={this.state.returnDate}
          onChange={this.handleInfo}
        />
      )
    }
  }

  foo() {
    console.log('baz')
    window.scrollTo(0, 730)
  }

  handleInfo = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { flights } = this.state
    return (
      <div>
        <div class='main'>
          <div class='main-container'>
            <div class='main-content'>
              <h1>Book your Tickets!</h1>
              <p>
                Tripr allows you to find the best way to reach your Destination
              </p>
              <button class='main-btn' onClick={() => this.foo()}>
                <a>Get Started</a>
              </button>
            </div>
            <div class='main-img-container'>
              <img src={pic1} alt='Error' id='main-img' />
            </div>
          </div>
        </div>

        <div class='search' id='search'>
          <div class='search__container'>
            <div class='search__content'>
              <h1>Search here</h1>
            </div>
            <div class='form'>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <input
                    type='text'
                    placeholder='Source'
                    name='source'
                    value={this.state.source}
                    onChange={this.handleInfo}
                  />
                </div>
                <div>
                  <input
                    type='text'
                    placeholder='Destination'
                    name='destination'
                    value={this.state.destination}
                    onChange={this.handleInfo}
                  />
                </div>
                <div>
                  <input
                    type='date'
                    placeholder='select Date'
                    name='departuredate'
                    value={this.state.departuredate}
                    onChange={this.handleInfo}
                  />
                </div>
                <div>{this.tryDate()}</div>
                <div>
                  <input
                    type='number'
                    placeholder='No. of Adults'
                    name='adults'
                    value={this.state.adults}
                    onChange={this.handleInfo}
                  />
                </div>
                <div>
                  <input
                    type='number'
                    placeholder='No. of Children'
                    name='children'
                    value={this.state.children}
                    onChange={this.handleInfo}
                  />
                </div>
                <div>
                  <input
                    type='number'
                    placeholder='No. of Infants'
                    name='infants'
                    value={this.state.infants}
                    onChange={this.handleInfo}
                  />
                </div>
                <div>
                  <GetDataFromForm
                    source={this.state.source}
                    destination={this.state.destination}
                    departureDate={this.state.departuredate.toString()}
                  ></GetDataFromForm>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class='footer__container'>
          <div class='footer__links'>
            <div class='footer__link--wrapper'>
              <div class='footer__link--items'>
                <h2>About Website</h2>
                <a href='/email'>Email Us!</a>
                <a href='/t&c'>Terms & Conditions</a>
              </div>
              <div class='footer__link--items'>
                <h2>About Developers</h2>
                <a href='/email'>Email</a>
                <a href='/instagram'>Instagram</a>
              </div>
            </div>
          </div>
          <div class='rights'>
            <p>Copyrights Tripr 2021. All rights reserved</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
