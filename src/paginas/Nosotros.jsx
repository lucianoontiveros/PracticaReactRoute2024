
import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

import { Card } from 'flowbite-react'
function Nosotros() {
  return (
    <>
        
        <div className="flex justify-center flex-wrap my-2.5 mx-2.5">
            <Card href="#" className="max-w-sm my-2.5 mx-2.5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card href="#" className="max-w-sm my-2.5 mx-2.5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card href="#" className="max-w-sm my-2.5 mx-2.5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
        </div>
        <div className="flex justify-center mt-3 h-56 sm:h-64 xl:h-80 2xl:h-96 roll-pill">
            <img src="https://www.plaremesa.net/wp-content/uploads/2021/02/empresa-manufacturera.jpg.webp" alt="..." />
        </div>
        <div className="flex justify-center mt-10" >
            <Timeline className="mt-5 px-5">
                <Timeline.Item> 
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                    <Timeline.Time>February 2022</Timeline.Time>
                    <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                        E-commerce & Marketing pages.
                    </Timeline.Body>
                    <Button color="gray">
                        Learn More
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                    <Timeline.Time>March 2022</Timeline.Time>
                    <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                    <Timeline.Body>
                        All of the pages and components are first designed in Figma and we keep a parity between the two versions
                        even as we update the project.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                    <Timeline.Time>April 2022</Timeline.Time>
                    <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    </>
  );
}


export default Nosotros