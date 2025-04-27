import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList/StaffList'
import { profile } from 'console'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff </h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff'
              end
              className={({ isActive }) => `active inline-block rounded-t-lg border-b-2 p-4
               ${
                 isActive
                   ? 'border-blue-600  text-blue-600'
                   : ' border-transparent  hover:border-gray-300 hover:text-gray-600 '
               }`}
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={({ isActive }) => `active inline-block rounded-t-lg border-b-2 p-4
               ${
                 isActive
                   ? 'border-blue-600  text-blue-600'
                   : ' border-transparent  hover:border-gray-300 hover:text-gray-600 '
               }`}
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      {/* có thể tách route trong  các component khác 
        khi click vào add ra not found thì phải chỉnh route cha thêm /* có nghĩa là nó phải match ngoài /staff/add
        khi tách component thì không cần thêm /staff nữa và không nhận được giá trị outlet nữa
      */}
      <Routes>
        <Route path=':id' element={<StaffItem />} />
        <Route path='add' element={<AddStaff />} />
        <Route index element={<StaffList />} />
      </Routes>

      {/* <Outlet context={{ profile: { name: 'Duoc' } }} /> */}

      {/* <StaffList /> */}

      {/* <AddStaff /> */}
    </div>
  )
}
