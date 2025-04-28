import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { Route, Routes, useRoutes } from 'react-router-dom'

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
  return (
    <div className='App'>
      <MainLayout>
        {element}
        {/* <Routes> */}
        {/* <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff/*' element={<Staff />} /> */}

        {/* <Route path='/staff' element={<Staff />} />
          <Route path='/staff/:id' element={<StaffItem />} />
          <Route path='/staff/add' element={<AddStaff />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
        {/* </Routes> */}
      </MainLayout>

      {/* <Dashboard />
      <About />
      <StaffList /> */}
    </div>
  )
}

export default App
