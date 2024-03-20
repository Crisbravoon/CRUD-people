import { useState } from "react"
import { AddPeople } from "./Components/AddPeople";

export const Crud = () => {

    const [peoples, setPeoples] = useState([])

    return (
        < div >
            <AddPeople setPeoples ={setPeoples}/>
    
            <table className="table mx-auto mt-5">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Dirección</th>

                    </tr>
                </thead>
                <tbody>
                    {peoples.map(person=> {
                        const key =`${person.nombre}-${person.apellido}`;
                        return <tr key={key}>
                            <td >{person.nombre}</td>
                            <td >{person.apellido}</td>
                            <td >{person.correo}</td>
                            <td >{person.direccion}</td>
                        </tr>

                    })
                    }

                </tbody>
            </table>

        </div >
    )
}