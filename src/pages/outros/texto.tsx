import Pagina from "@/components/template/Pagina";
import { useLayoutEffect, useState } from "react";

export default function () {
    const [texto, setTexto] = useState("Texto Secreto!!!!!!!!!!!!!!!!!");

    useLayoutEffect(() => {
        setTexto("Olá!");
    }, [])

    return (
        <Pagina titulo="Texto Secreto" subtitulo="Entendendo um problema no useEffect">
            <p className="text-5xl text-gray-300">{texto}</p>
        </Pagina>
    )
}