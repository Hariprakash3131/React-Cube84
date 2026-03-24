function HomePage(){
    const name='Subu'
    const skills=['html','css','seo']
    return(
        <div>
            <h1>Name:{name}</h1>
            <p>Skills:</p>
            <ul>
                {skills.map((s)=>(
                    <li key={s}>{s}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage