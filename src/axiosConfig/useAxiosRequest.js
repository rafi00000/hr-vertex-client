import axios from 'axios'
const axiosRequest=axios.create({
    baseURL: 'http://localhost:5000',
    // baseURL: 'https://hr-vertex-server.vercel.app',
})
const useAxiosRequest = () => {
  return axiosRequest
}

export default useAxiosRequest
