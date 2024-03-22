import Formulario from "../Formulario/formulario"
import Habilidades from "../Habilidades/habilidades"
import Info from "../Info/info"

function Conteudo(){
    return(
        <>
        <div class="mainInfo">
            <section id="info">
            <Info/>
            <Habilidades/>
            </section>
        </div>
        <Formulario/>
        </>
    )
}
export default Conteudo