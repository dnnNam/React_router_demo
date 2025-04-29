import { log } from 'console'
import { Link, useLocation } from 'react-router-dom'

export default function Dashboard() {
  // sẽ lấy giá trị từ not Found của state khi giao tiếp giữa các page khác nhau
  const location = useLocation()
  // console.log(location)
  // khi vào notFound page sẽ back về dashboard và hiện nội dung trong state của trang notFound
  // đặc biệt f5 vẫn dữ nguyên thì chuyển trang nó mới mất , điểm đặc biệt
  // của cái state trên history
  return (
    <div>
      <h1 className='mb-6 text-lg'>Dashboard</h1>
      <p className='text-cyan-800'>{location.state}</p>
      <Link to='/?sort=name&order=ascending'>name</Link>
      <Link to='/?sort=age&order=ascending'>age</Link>
      <Link to='/?sort=height&order=ascending'>height</Link>
    </div>
  )
}
