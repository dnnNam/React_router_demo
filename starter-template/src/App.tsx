import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { Route, Routes, useLocation, useRoutes, useSearchParams } from 'react-router-dom'

function App() {
  // sử dụng useRoutes trong react
  const element = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/staff/*',
      element: <Staff />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  // khi sử dụng useLocation sẽ trả về 1 object
  // trong object có chứa thuộc tính là search có chứa string query
  // muốn lấy vùng này dùng 1 cái hook useSearchParams
  // ngoài ra chúng ta có thể sử dụng thư viện ngoài có tên là
  // query-string
  const location = useLocation()
  const [searchParams] = useSearchParams()
  console.log(location)
  console.log('searchParams', Object.fromEntries([...searchParams]))

  return (
    <div className='App'>
      <MainLayout>
        {/* cách 1  */}
        {element}
        {/* cách 2 */}
        {/* <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff/*' element={<Staff />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}
      </MainLayout>

      {/* <Dashboard />
      <About />
      <StaffList /> */}
    </div>
  )
}

export default App
