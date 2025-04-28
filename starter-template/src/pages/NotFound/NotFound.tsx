import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

// dùng 1 cái component tên là navigate để sai url sẽ về trang home
// trường hợp cần thực hiện 1 hành động như click vào button mới navigate
// thì chúng ra dùng 1 cái hook useNavigate
export default function NotFound() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 2000)
  }, [navigate])
  return <div>Not Found</div>
}

// nếu navigate(-1) thì nó sẽ quay lại trang trước đó
// trong navigate có thể truyền thêm 1 object replace
// nếu replace là true , thay thế trang hiện tại bằng trang mới
// nếu replace là false , (mặc định ) thêm trang mới vào lịch sử (history)

//  hành động                               lịch sử (stack)
// không dùng replace                       trang A ---> trang B
// dùng replace true                        trang B (ghi đè A)
