import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <div>
        <ul>
            <Link href="/users/institute">Institute</Link>
            <li>Student</li>
            <li>Parent</li>
        </ul>
    </div>
  )
}

export default Users