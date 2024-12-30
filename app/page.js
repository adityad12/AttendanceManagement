'use client'

import Link from "next/link"
import SignUp from "../components/SignUp"
import Login from "../components/Login"

export default function Home(){
  return(
    <main>
      <nav>
        
        <h1>
          Attendance Management
        </h1>
        <SignUp></SignUp>
        <Login></Login>
      </nav>
    </main>
    
  )
}