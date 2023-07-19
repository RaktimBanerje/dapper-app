import React from 'react'
import BarbarDrawer from '../navigators/drawer/BarbarDrawer'
import CustomerDrawer from '../navigators/drawer/CustomerDrawer'
import { StoreContext } from '../App'
import CustomerTab from '../navigators/tab/CustomerTab'
import BarbarTab from '../navigators/tab/BarbarTab'

const MainScreen = () => {

  const {state, setState} = React.useContext(StoreContext)

  return (
    <>
      {state.user!=null && state.user.role == "BARBAR" && <BarbarTab />}
      {state.user!=null && state.user.role == "CUSTOMER" && <CustomerTab />}
    </>
  )
}

export default MainScreen