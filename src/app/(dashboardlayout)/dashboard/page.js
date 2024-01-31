import ProfilePage from "@/Components/SharedComponents/dashboard/ProfilePage"
import EmployeeRoute from "@/privetRoute/EmployeeRoute"

const dashboardmain = () => {
  return (
    <EmployeeRoute>
      <ProfilePage />
    </EmployeeRoute>
  )
}

export default dashboardmain
