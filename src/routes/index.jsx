
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Dashboard } from '../pages/Dashboard'
import { Routes, Route, Navigate } from 'react-router-dom'



export const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Register' element={<Register />} />

            <Route path="/" element={<Navigate to='/login' />} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
    )

}