import React from 'react'
import {Link} from 'gatsby'

function index() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
            <Link to="/dakshNotes">
            <h1 className="text-3xl font-bold mb-4">Daksh's Page</h1>
            </Link>
            <p className="text-gray-700">
            Welcome to Daksh's page. Explo
            </p>
        </div>
    </div>
  )
}

export default index