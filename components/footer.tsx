import { AiFillHeart } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-32 bg-slate-50 flex justify-center items-center'>
      Made with <AiFillHeart fill='red' className='mx-2' /> by{' '}
      <Link href='https://github.com/Redskinsjo?tab=repositories' passHref>
        <span className='ml-2 hover:text-blue-500 cursor-pointer'>
          Jonathan Carnos
        </span>
      </Link>
    </div>
  )
}

export default Footer
