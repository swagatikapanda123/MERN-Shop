import React from 'react'
import { Container } from 'react-bootstrap'
// import { messaging } from './init-fcm'
// import { compose, lifecycle, withHandlers, withState } from 'recompose'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

const renderNotification = (notification, i) => <li key={i}>{notification}</li>

const registerPushListener = (pushNotification) =>
  navigator.serviceWorker.addEventListener('message', ({ data }) =>
    pushNotification(
      data.data
        ? data.data.message
        : data['firebase-messaging-msg-data'].data.message
    )
  )

function App({ token, notifications }) {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          {/* <h1>React + Firebase Cloud Messaging (Push Notifications)</h1>
          <div>
            Current token is: <p>{token}</p>
          </div>
          <ul>
            Notifications List:
            {notifications.map(renderNotification)}
          </ul> */}
          <Route path='/' component={HomeScreen} exact />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

// export default compose(
//   withState('token', 'setToken', ''),
//   withState('notifications', 'setNotifications', []),
//   withHandlers({
//     pushNotification:
//       ({ setNotifications, notifications }) =>
//       (newNotification) =>
//         setNotifications(notifications.concat(newNotification)),
//   }),
//   lifecycle({
//     async componentDidMount() {
//       const { pushNotification, setToken } = this.props

//       messaging
//         .requestPermission()
//         .then(async function () {
//           const token = await messaging.getToken()
//           setToken(token)
//         })
//         .catch(function (err) {
//           console.log('Unable to get permission to notify.', err)
//         })

//       registerPushListener(pushNotification)
//     },
//   })
// )(App)

export default App
