import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<Staff />}>
            <Route path='/staff/:id' element={<StaffItem />} />
            <Route path='/staff/add' element={<AddStaff />} />
            <Route path='list' element={<StaffList />} />
          </Route>

          {/* <Route path='/staff' element={<Staff />} />
          <Route path='/staff/:id' element={<StaffItem />} />
          <Route path='/staff/add' element={<AddStaff />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>

      {/* <Dashboard />
      <About />
      <StaffList /> */}
    </div>
  )
}

export default App
