import ApplicationData from "@/Components/ProtectedData/ApplicationData"
import AdminRoute from "@/privetRoute/AdminRoute"

const usePage = async () => {
    return <AdminRoute>
        <ApplicationData />
    </AdminRoute>
}

export default usePage
