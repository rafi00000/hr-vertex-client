import ReqruitmentForm from "@/Components/ProtectedData/ReqruitmentForm";
import AdminRoute from "@/privetRoute/AdminRoute";

const useReqruitment = () => {
    return <AdminRoute>
        <ReqruitmentForm />
    </AdminRoute>

}

export default useReqruitment
