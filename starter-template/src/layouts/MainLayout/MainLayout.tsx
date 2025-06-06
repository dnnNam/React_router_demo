import React from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

const ExtraContent = () => {
  // muốn lấy ra được cái location chúng ta dùng 1 cái hook có tên useLocation
  const location = useLocation()
  console.log(location)

  return <div className='text-red-800'>Url is /about</div>
}
export default function MainLayout({ children }: Props) {
  return (
    <div className='grid min-h-screen grid-cols-4'>
      <aside className='col-span-1' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg'>
          <ul className='space-y-2'>
            <li>
              <NavLink
                to='/'
                end
                // style={({ isActive }) => ({
                //   fontWeight: isActive ? 800 : undefined
                // })}
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg 
                   ${activeClass} p-2 text-base font-normal
                    text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Dashboard</span>}
                {/* render props */}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/staff'
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg 
                   ${activeClass} p-2 text-base font-normal
                    text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Staff</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg 
                   ${activeClass} p-2 text-base font-normal
                    text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>About</span>}
              </NavLink>
            </li>
          </ul>

          {/* cách routes có macth với location như thế nào  khi có  localhost3000/about thì thằng routes có giá trị là about
          nếu vào staff thì nó sẽ có giá trị là staff 
          chúng ta có thể fix cứng là location là about  thì lúc nào thằng route trong đều nhận giá trị là about  */}
          {/* <Routes location='/about'>
            <Route path='/about' element={<ExtraContent />}></Route>
          </Routes> */}
        </div>
      </aside>
      <main className='col-span-3 h-full py-4 px-3'>{children}</main>
    </div>
  )
}
