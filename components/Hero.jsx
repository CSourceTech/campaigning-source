import politics from '@/assets/politics.png'
import graph from "@/assets/graph.png"
import website from "@/assets/website.png"
import messaging from "@/assets/messaging.png"
import social from "@/assets/social.png"

import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weights: [400, 500, 600, 700],
})

const Hero = () => {
    return (
        <>
            <div className="grid grid-cols-5 grid-rows-3 gap-2 p-2">
                <div className="row-span-2 col-span-2 p-1 flex flex-wrap justify-around items-center bg-gradient-to-r from-fuchsia-600 to-purple-600 text-4xl font-bold rounded-lg">
                    <span className={montserrat.className}><h2 className="ml-3">Political Election Promotion</h2></span>
                    <Image src={politics} alt="politics" width={230} height={230} className='rounded-md' />
                    <Link href='/'>
                        <div className="bg-bg py-2 px-3 rounded-full text-base font-normal hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
                <div className="col-span-3 p-1 flex justify-around items-center bg-gradient-to-r from-indigo-500 to-blue-500 text-3xl font-bold rounded-lg">
                    <span className={montserrat.className}>Business Development</span>
                    <Image src={graph} alt="graph" width={190} height={190} />
                    <Link href="/">
                        <div className="bg-bg py-2 px-3 rounded-full font-normal text-base hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
                <div className="col-span-3 p-1 flex justify-around items-center bg-gradient-to-r from-emerald-500 to-emerald-900 text-4xl font-bold rounded-lg">
                    <span className={montserrat.className}>Website Development<br /> & Design</span>
                    <Image src={website} alt="website" width={190} height={190} />
                    <Link href="/">
                        <div className="bg-bg py-2 px-3 rounded-full font-normal text-base hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
                <div className="col-span-3 p-1 flex flex-wrap justify-around items-center bg-gradient-to-r from-red-500 to-orange-500 text-2xl font-bold rounded-lg">
                    <span className={montserrat.className}>
                        <ul className="ml-4">
                            <li className="list-disc">Graphic Designing</li>
                            <li className="list-disc">Advertisement</li>
                            <li className="list-disc">Social Media Management</li>
                            <li className="list-disc">Promotions</li>
                            <li className="list-disc">Video Editing</li>
                        </ul>
                    </span>
                    <Image src={social} alt="social" width={180} height={180} />
                    <Link href="/">
                        <div className="bg-bg py-2 px-3 rounded-full font-normal text-base hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
                <div className="col-span-2 p-1 flex flex-wrap justify-around items-center bg-gradient-to-r from-stone-500 to-stone-700 text-2xl font-bold rounded-lg">
                    <span className={montserrat.className}>
                        IVR, Bulk Voice Calls<br />
                        Broadcast SMS,<br />
                        Whatsapp Broadcast</span>
                    <Image src={messaging} alt="messaging" width={190} height={190} />
                    <Link href="/">
                        <div className="bg-bg py-2 px-3 rounded-full font-normal text-base hover:bg-gray-600">
                            Let's Start
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Hero