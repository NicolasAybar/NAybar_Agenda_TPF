import React, { useEffect, useState } from 'react';
import './searchComponents.css';
import {Titulo} from '../Titulo/titulo.jsx';

const SearchComponent = () => {
    //Declaramos los estados  
    const [search, setSearch] = useState('');
    const [id, setId] = useState('');
    const [Nombre, setNombre] = useState('');
    const [Email, setEmail] = useState('');
    const [Cumple, setCumple] = useState('');
    const [Celular, setCelular] = useState();
    const [Direccion,setDireccion]=useState('');
    //Creo el array con almacenamiento en el localstorage para no perder los valores
    const listarDatos = () => {
        let items = localStorage.getItem("restrosLs");
        if (items) {
            return JSON.parse(items);
        } else {
            return [];
        }
    }
    //creo el estado de la grilla de los contactos
    const [registrosLs, setRegistrosLs] = useState(listarDatos());
    //funcion para limpiar los controles/input
    const limpiarCampos = () => {
        setNombre('');
        setEmail('');
        setCumple('');
        setCelular('');
        setDireccion('');
    }
    //funcion para capturar los caracteres del input con su estado
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    let resultado = []
    if (!search) {
        resultado = registrosLs
    } else {
        resultado = registrosLs.filter((vivi) =>
            vivi.Nombre.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }
    //agregamos filas a la tabla
    const Guardar = (e) => {
        if (Nombre.trim() !== '') {
            e.preventDefault();
            let datos = { Nombre, Email, Cumple, Celular,Direccion }
            setRegistrosLs([...registrosLs, datos]);
            limpiarCampos();
        }

    }
    //eliminamos filas de la tabla
    const Eliminar = (posicion) => {
        if (window.confirm("Esta seguro que desea eliminar el registro?")) {
            let registrosFiltrados = registrosLs.filter((e, index) => {
                return posicion !== index;
            });
            setRegistrosLs(registrosFiltrados);
        }
    }
    //eliminar toda la grilla/tabla
    const EliminarTodos = () => {
        if (window.confirm("Esta seguro de eliminar la grilla?")) {
            return setRegistrosLs([]);
        }
    }

    useEffect(() => {
        localStorage.setItem("registrosLs", JSON.stringify(registrosLs));
    }, [registrosLs]);

    return (
        <>
        <Titulo/>
        <div className='contenedor_padre'>
            <div className='Icono-input'>
                <i className="bi bi-person separar"></i>
                <div className="form-floating mb-3">
                    <input type="text" value={Nombre} className="form-control" placeholder=" Ingrese el nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        required />
                    <label htmlFor="txtnombre">Nombre</label>
                </div>
            </div>
            <div className='Icono-input'>
                <i className="bi bi-envelope separar"></i>
                <div className="form-floating mb-3">
                    <input type="email" name="txtemail" value={Email} className="form-control" placeholder=" Ingrese el email"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <label htmlFor="txtemail">Email</label>
                </div>
            </div>
            <div className='Icono-input'>
                <i className="bi bi-cake2 separar"></i>
                <div className="form-floating mb-3">
                    <input type="date" value={Cumple} className="form-control" placeholder=" Ingrese la fecha del cumpleaños"
                        onChange={(e) => setCumple(e.target.value)}
                        required />
                    <label htmlFor="txtcumple">Cumpleaños</label>
                </div>
            </div>

            <div className='Icono-input'>
                <i className="bi bi-telephone separar"></i>
                <div className="form-floating mb-3">
                    <input type="number" value={Celular} className="form-control" placeholder=" Ingrese el celular"
                        onChange={(e) => setCelular(e.target.value)}
                        required />
                    <label htmlFor="txtcelular">Celular</label>
                </div>
            </div>

            <div className='Icono-input'>
                <i className="bi bi-house-add separar"></i>
                <div className="form-floating mb-3">
                    <input type="text" value={Direccion} className="form-control" placeholder=" Ingrese el celular"
                        onChange={(e) => setDireccion(e.target.value)}
                        required />
                    <label htmlFor="txtdireccion">Dirección</label>
                </div>
            </div>

            <div className='botonera'>
                <input type="button" id="btnGuardar" value="Guardar" className="btn btn-primary" onClick={Guardar} />
                <input type="reset" id="btnCancelar" value="Cancelar" className="btn btn-primary" onClick={() => (limpiarCampos())} />
                <input type="button" id="btnBorrar" value="Borrar grilla" className="btn btn-danger" onClick={() => (EliminarTodos())} />
            </div>
            <div className="buscarCaracter">
                <input type="text" onChange={searcher} placeholder='Buscar' value={search} className='form-control buscarText' />
                <i class="bi bi-search mas"></i>
            </div>


            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-white'>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Cumpleaños</th>
                        <th>Celular</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resultado.map((miLista, index) => (
                            <tr key={index}>

                                <td>{index + Date.now()}</td>
                                <td>{miLista.Nombre}</td>
                                <td>{miLista.Email}</td>
                                <td>{miLista.Cumple}</td>
                                <td>{miLista.Celular}</td>
                                <td>{miLista.Direccion}</td>
                                <td className='acciones'>
                                    <button type='button' className='btn btn-outline-danger' onClick={() => Eliminar(index)}>
                                        <i className='bi bi-trash3-fill'></i>
                                    </button>
                                    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
        </>
    )
    
}

export { SearchComponent }