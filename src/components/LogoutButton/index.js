// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const Logout = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button onClick={onClickLogout} type="button">
      Logout
    </button>
  )
}

export default withRouter(Logout)
