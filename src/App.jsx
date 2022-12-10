import { useState } from 'react'
import './App.css'

import Notification from './components/Notification'
import NotificationList from './components/NotificationList'
import NotificationTracker from './components/NotificationTracker'
import DismissAll from './components/DismissAll'

import notifications from './notifications.js'

function App() {

  const [notificationsSet, setNotificationsSet] = useState(notifications)
  const [numberOfNotis, setNumberOfNotis] = useState(notifications.length)

  console.log(numberOfNotis)

  function onDismissHandler (id) {
    console.log("notification deleted " + (id))

     setNotificationsSet(notificationsSet.filter(notification => notification.id !== id))

    setNumberOfNotis(numberOfNotis - 1)
  }

  function dismissAllHandler () {
    setNotificationsSet([])
    setNumberOfNotis(0)
    console.log(notificationsSet)
  }

  return (

    <>
      <h1 className="display-1">Notifications</h1>
      
      <NotificationTracker numberOfNotis={numberOfNotis}>{numberOfNotis}</NotificationTracker>
      
      <NotificationList>
        {notificationsSet.map(notification => (
          <Notification id={notification.id} name={notification.name} message={notification.message} onClickHandler={onDismissHandler}>
            {notification.message}
          </Notification>
        ))}
        
      </NotificationList>
          <DismissAll onDismissAllHandler={dismissAllHandler}  numberOfNotis={numberOfNotis}></DismissAll>
    </>
  )
}

export default App
