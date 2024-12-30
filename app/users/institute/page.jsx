import React from 'react'
import Link from 'next/link'

const InstituteLogin = () => {
  return (
    <div>
        <ul>
            <Link href="/users/institute/principal">Principal</Link>
            <li>HOD</li>
            <li>Teacher</li>
            <li>Management</li>
        </ul>
    </div>
  )
}

export default InstituteLogin