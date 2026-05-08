export default async function Shop({params}) {
       const { slug } = await params

    return(
          <div>{`Product id:  ${slug[2]}/${slug[0]}/${slug[1]}`}</div>
    )
} 
  
