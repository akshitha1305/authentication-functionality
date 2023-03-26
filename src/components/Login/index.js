// Write your JS code here
// Write your JS code here
import Cookies from 'js-cookie'
import './index.css'
import {Component} from 'react'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
  }

  onSuccessFetch = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onClickLogin = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessFetch(data.jwt_token)
    }
  }

  render() {
    return (
      <div className="login-container">
        <div>
          <h1>Please Login</h1>
          <button onClick={this.onClickLogin} type="button">
            Login with Sample Creds
          </button>
        </div>
      </div>
    )
  }
}

export default Login
