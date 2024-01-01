import { useEffect, useState } from 'react'
import './App.css'
import { Stack } from '@mui/material'
import Findworker from './components/Findworker/index.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="477819939517-c61n8hmgvd83n2la39a903fumin0advj.apps.googleusercontent.com">

      <Findworker />
      </GoogleOAuthProvider>  

    </>
  )
}
export default App
