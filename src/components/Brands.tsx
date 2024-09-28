import mastercard from '@/../public/mastercard.png'
import paypal from '@/../public/paypal.png'
import skrill from '@/../public/skrill.png'
import visa from '@/../public/visa.png'
import Image from 'next/image'

export default function Brands() {

    const images = [skrill, mastercard, visa, paypal, mastercard, skrill, paypal, visa]

    return (
        <div className=' h-20 sm:h-28 py-[22px] px-10 sm:py-[30px] bg-white mt-10 mb-20 mask w-full'>
            <div className='flex items-center h-full  brands justify-between hideScrollbar mask overflow-x-scroll '>
                {images.map((i, index) => (
                    <div key={index} className=' relative min-w-[130px] sm:min-w-[200px] h-full'>
                        <Image alt='' src={i} fill className=' object-contain' sizes='300px' />
                    </div>
                ))}
            </div>

        </div>
    )
}
