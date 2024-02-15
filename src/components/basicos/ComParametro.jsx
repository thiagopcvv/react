export default function Com(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.subtitulo}</h3>
            <strong> <p>Nota: {notaInt}</p></strong>
            <strong>{status}</strong>
        </div>
    )
}