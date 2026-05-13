import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      {/* <Header /> */}
        <Header name="John Doe 1" age={30} gender="Male" />
      <div>Sample Page</div>
      {/* <Footer /> */}
    </div>
  )
}

export default page