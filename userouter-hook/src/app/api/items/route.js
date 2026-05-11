// export async function GET() {
//     return new Response('Test')

// }   its a string a data

export async function GET() {
    return Response.json([{ 'Name': 'Saratha' }, { 'Name': 'Surya' }])

}   //This is  a Json data


export async function POST() {
    return Response.json({ Name: "Sarath Post Success" })

}   // This is a post method