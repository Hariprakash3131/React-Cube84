export default async function Blog({ params }) {
    const { slug } = await params

    return (
        <div>{`Product id:  ${slug}`}</div>
    )
}
