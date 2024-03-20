
import { useState } from "react";

export const AddPeople = ({ setPeoples }) => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        direccion: ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isFormValid = Object.values(formData).every(value => value.trim().length > 0);
        const isFormEmpty = !Object.values(formData).some(value => value.trim().length > 0);

        isFormValid
            ? setPeoples(prevPeoples => [...prevPeoples, formData])
            && setFormData({ nombre: "", apellido: "", correo: "", direccion: "" })
            : isFormEmpty || <div class="alert alert-success" role="alert">
                A simple success alert—check it out!
            </div>;
    };

    const onReset =()=>{
        setFormData({ nombre: "", apellido: "", correo: "", direccion: "" });
    };

    return (
        <div>
            <h3>Agregar persona</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className="mt-2"
                    type='text'
                    name='nombre'
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                />
                <input
                    className="mt-2"
                    type='text'
                    name='apellido'
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                />
                <input
                    className="mt-2"
                    type='email'
                    name='correo'
                    placeholder="Correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                />
                <input
                    className="mt-2"
                    type='text'
                    name='direccion'
                    placeholder="Dirección"
                    value={formData.direccion}
                    onChange={handleInputChange}
                />
                <button
                    className='btn btn-primary mt-4'
                    type="submit">Agregar
                </button>
                <button
                    className='btn btn-primary mt-4 mx-3'
                    onClick={onReset}
                    type="button">Limpiar
                </button>
            </form>
        </div>
    )
}
