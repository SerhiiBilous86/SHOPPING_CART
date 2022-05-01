function Perfil(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt={'img' + props.name} style={{width: '128px'}}/>
            <p>{props.age}</p>
            <p>{props.mail}</p>
            <p>{props.pais}</p>
        </div>
    )
}

export default Perfil;
