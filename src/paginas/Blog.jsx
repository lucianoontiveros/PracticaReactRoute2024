import { useParams } from "react-router-dom"
import { Card } from 'flowbite-react';
import { useFetch } from "../Hooks/useFech";


const Blog = () => {
    const  params  = useParams()
    const { data, loading, error } = useFetch(`https://jsonplaceholder.org/posts/${params.id}`)
    // Si los datos aún se están cargando, mostramos un mensaje de carga
    if(loading) return <p> Estamos cargando... </p>;
    // Si hay un error, mostramos un mensaje de error
    if(error) return <p>Hay un error </p>;

    return (

        <div className="flex justify-center">
            <Card
                className="max-w-[1000px] min-h-[70vh] p-3 m-4"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={data.image}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {data.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {data.content}
                </p>
        </Card>
        </div>

    )
}

export default Blog