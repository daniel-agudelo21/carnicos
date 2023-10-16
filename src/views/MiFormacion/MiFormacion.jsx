import Barra from "../../components/Barra/Barra"
import Cards from "../../components/Cards/Cards"
import Navbar from "../../components/Navbar/Navbar"

const MiFormacion = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Barra/>
            </div>
            <h2>Temas asignados</h2>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <h2>Temas de tutorias</h2>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </>
    )
}

export default MiFormacion