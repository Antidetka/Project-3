import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

class Captcha extends Component {
  constructor(props) {
    super(props)

    this.handleSubscribe = this.handleSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
    }
  }

  recaptchaLoaded() {
    console.log('Captcha is running!');
    this.populateLocalStorage()
  }

  handleSubmit() {
    if (this.state.isVerified) {
      window.location.href='/MainPage'
    } else {
      alert('Be gone bot!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  // helper function to create value in local storage
  populateLocalStorage(){
    localStorage.setItem("verified","true");
  }

  render() {
    return (
        <div className="recaptcha">
          <Recaptcha
            sitekey="6LdbQaUZAAAAAI9_76pHoxqJ-QSmx9ahpIWHbkQq"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
            theme="dark"
          />
          <div className='d-flex justify-content-center'>
            <button className="Route btn btn-secondary" onClick={this.handleSubscribe}>Verify</button>
          </div>
        </div>
    );
  }
}

export default Captcha;