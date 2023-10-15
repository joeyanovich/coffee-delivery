import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './DefaultLayout/index'

export function Router() {
  return ( 
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        {/* <Route path='/' element={Home} */}
      </Route>
    </Routes>
  )
}