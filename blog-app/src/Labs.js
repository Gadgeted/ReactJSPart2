import { useState, useEffect } from "react";
//We recieved any value passed from home
const Labs = (props) => {
    let value = props.message
    console.log("String"+value)
    // Lets see how we can access data from online APIs
    // useEffect - It runs atleast once when a page render
    // useState - It is used to store values in the app.
    const[labs, setLabs] = useState(null)//Empty
    const[loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    let base_url = "https://modcom.pythonanywhere.com/api/laboratories"
    useEffect(() => {
        console.log("Runs at least once")
        //Get Labs from API
        fetch(base_url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log("Data"+ data)
            setLabs(data) // Updates Lab State
            setLoading(false)
            setError(null)
        })
        .catch((result) => {
            setError(result.message)
            setLoading(false)
        })
    }, [base_url]);

    return ( 
        <div className="labs">
            <h2>Registered Labs</h2>
            <div className="listing">
                {loading && <div>Loading ...</div>}
                {error && <div>Error occured. Try later</div>}
                {labs && labs.map((lab) => (
                    <div className="single" key={lab.lab_id}>
                        <h3>{ lab.lab_name }</h3>
                        <p>{ lab.email }</p>
                        <b>Permit ID: { lab.permit_id }</b>
                        <hr />
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Labs;
