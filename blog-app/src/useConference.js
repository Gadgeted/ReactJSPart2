//Create Custom Hook
import { useState, useEffect } from "react"
const useConference = (url) => {
    const[data, setData] = useState(null)//Empty
    const[loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                console.log("Data1"+ data)
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    },[url])//use effect end here
    return { data, loading, error };
}
export default useConference;