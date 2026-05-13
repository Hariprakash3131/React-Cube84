import React from 'react'

const page = ({ params }) => {
  return (
    <div>{`Product id:  ${params.productid}`}</div>
  )
}

export default page