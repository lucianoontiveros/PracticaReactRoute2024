import { Carousel } from 'flowbite-react';

const Inicio = () => {
    return(
        <>
            <div className='mt-3 px-5'>
                <Carousel className="h-60 min-h-[600px] sm:h-74 xl:h-80 2xl:h-96 mb-10">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="image" />
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="image2" />
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="image3" />
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="image4" />
                </Carousel>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="imagen1"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="imagenimagen2"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="imagen3"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="imagen4"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="imagen5"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="imagen6"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="imagen7"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="imagen8"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="imagen9"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="imagen10"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="imagen11"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="imagen12"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio