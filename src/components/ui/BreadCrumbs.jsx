'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

export default function BreadCrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter((segment) => segment)
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const url = '/' + pathSegments.slice(0, index + 1).join('/')
    const label = segment.charAt(0).toUpperCase() + segment.slice(1)

    return {
      label,
      url,
    }
  })

  return (
    <div className='flex justify-center items-center text-sm text-gray group'>
      {breadcrumbItems.length > 0 && (
        <Link href='/'>
          <p className='uppercase hover:text-blue'>Home </p>
        </Link>
      )}

      {breadcrumbItems.map((item, index) => (
        <div className='flex justify-center items-center' key={index}>
          {/* &gt; */}
          <IoIosArrowForward className='text-lg' />
          <Link href={item.url}>
            <p className='uppercase hover:text-blue'> {item.label}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
