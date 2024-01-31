
import Usersdata from '@/Components/ProtectedData/Usersdata';
import AdminRoute from '@/privetRoute/AdminRoute';
import React from 'react'
const usePage = async () => {
    return <AdminRoute>
        <Usersdata />
    </AdminRoute>

};

export default usePage
