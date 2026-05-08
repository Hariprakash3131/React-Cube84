import React from 'react'

const page = async ({ params }) => {
  const { productid } = await params

  return (
    <div>{`Product id:  ${productid}`}</div>
  )
}

export default page
