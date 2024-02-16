import React, { useState } from 'react';
import { Card } from 'flowbite-react';
import { useFetch } from '../Hooks/useFech';
import { Button } from 'flowbite-react';
import { Link, useSearchParams } from 'react-router-dom';

const Blogs = () => {
    // Usamos el hook personalizado useFetch para obtener los datos
    const { data, loading, error } = useFetch('https://jsonplaceholder.org/posts')
    // Creamos un estado para la página actual, inicializado en 1
    const [currentPage, setCurrentPage] = useState(1);
    // Definimos cuántos artículos queremos mostrar por página
    const itemsPerPage = 10;
    // Usamos el hook useSearchParams para obtener los parámetros de búsqueda
    let [searchParams, setSearchParams] = useSearchParams();

    // Si los datos aún se están cargando, mostramos un mensaje de carga
    if(loading) return <p> Estamos cargando... </p>;
    // Si hay un error, mostramos un mensaje de error
    if(error) return <p>Hay un error </p>;

    // Calculamos los índices del primer y último artículo en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Obtenemos solo los artículos para la página actual
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Definimos una función para manejar el clic en los botones de paginación
    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
          setSearchParams({ filter });
        } else {
          setSearchParams({});
        }
    };

    return(
        <>
            {/* Grupo de botones para la paginación */}
            <Button.Group className="flex overflow-x-auto sm:justify-center m-3">
                {/* Creamos un botón para cada página */}
                {Array(Math.ceil(data.length / itemsPerPage)).fill().map((_, i) => (
                    <Button className="pagination" key={i} onClick={() => handleClick(i + 1)}>
                        {i + 1}
                    </Button>
                ))}
            </Button.Group>
            {/* Campo de búsqueda */}
            <div className='flex justify-center'>
                <input 
                    className='rounded-full w-[35%]'
                    type="text"
                    placeholder='Search'
                    value={searchParams.get("filter") || ""}
                    onChange={handleChange}
                />
            </div>
            {/* Contenedor para las tarjetas de los artículos */}
            <div className="flex flex-wrap justify-center items-center ">
                {/* Mapeamos los artículos actuales a componentes Card */}
                {currentItems
                    .filter((item) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = item.title.toLowerCase();
                        let content = item.content.toLowerCase();
                        return name.includes(filter.toLowerCase()) || content.includes(filter.toLowerCase());
                    })
                    .map((item) => (
                        <Card key={item.id} className="min-h-[700px] max-w-[800px] mx-1 my-2 p-2.5 overflow-auto sm:w-1/2" imgSrc={item.image} >
                            {/* Enlace al artículo */}
                            <Link to={`/blog/${item.id}`} >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.title}
                                </h5>
                            </Link >
                            {/* Extracto del contenido del artículo */}
                            <p >
                                {(item.content).split(" ").slice(0,30).join(" ")}...
                            </p>
                        </Card>
                ))}
            </div>
            {/* Grupo de botones para la paginación */}
            <Button.Group className="flex overflow-x-auto sm:justify-center m-3">
                {/* Creamos un botón para cada página */}
                {Array(Math.ceil(data.length / itemsPerPage)).fill().map((_, i) => (
                    <Button className="pagination" key={i} onClick={() => handleClick(i + 1)}>
                        {i + 1}
                    </Button>
                ))}
            </Button.Group>
        </>
    )
}

export default Blogs;
