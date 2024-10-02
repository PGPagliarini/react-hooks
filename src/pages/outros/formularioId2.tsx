import InputComId from "@/components/formulario/InputComId";
import Pagina from "@/components/template/Pagina";

export default function () {
    return (
        <Pagina titulo="Usando o hook useId em um componente" subtitulo="Reusando um componente com id">
            <InputComId label="Nome" />
            <InputComId label="Sobrenome" />
        </Pagina>
    )
}