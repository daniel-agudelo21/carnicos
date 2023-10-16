import style from './Barra.module.css'

const Barra = () => {
    return (
        <div className={style.barra}>
            <div className={style.texto}>
                <h3 className={style.h3}>Avance general</h3>
                <p>Terminado 80%</p>
            </div>
            <div className={style.progreso}>
                <progress className={style.progress} max="100" value="80"></progress>
            </div>
        </div>

    )
}
export default Barra