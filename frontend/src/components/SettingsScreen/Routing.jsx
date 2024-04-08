import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SettingScreen from './components/SettingsScreen/SettingScreen'
import ChangeNameScreen from './components/SettingsScreen/ChangeNameScreen'
import Login from './components/Login/Login'


const Routing = () => (
  <main>
    <Routes>
      <Route path='/' element={<SettingScreen/>}/>  
      <Route path='/setting' element={<SettingScreen/>}/>
      <Route path='/changename' element={<ChangeNameScreen name={'Jeremiah'}/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </main>
)

export default Routing
