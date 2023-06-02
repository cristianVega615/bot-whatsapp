import Image from 'next/image'
import Link from 'next/link'
import Img from '../components/Img'

export default function Home(): any {
  return (
    <main> 
      <Link href="/bot" className='text-white'> Aqui es para irse hacia el bot</Link>
      <p>aca esta </p>
    </main>
  )
}
