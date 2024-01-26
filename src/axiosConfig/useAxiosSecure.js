import axios from 'axios'
const axiosSecure=axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://hr-vertex-server.vercel.app',
    withCredentials:true
})
const useAxiosSecure = () => {
  return axiosSecure
}

export default useAxiosSecure
