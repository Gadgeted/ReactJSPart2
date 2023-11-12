import { useState } from "react";
import styled from 'styled-components'
const Home = () => {
    //Hooks - used to a new state of a variable 
    //Hooks make a code reactive, it can update UI on runtime
    const[name, setName] = useState("Christian");
    const[age, setAge] = useState(56);
    const[Paid, setPaid] = useState(true);

    const update = () => {
        setName("Ken")
        setAge(45)
        setPaid(false)
    }

    let message = "This is a message to Demo Props"
    //Styles
    const Modcom = styled.h1`
            color: orange;
            background-color:black;
            padding: 20px;
    `;
    const Button = styled.button`
            color: orange;
            background-color:black;
            font-family:arial;
            padding: 5px;
    `;
    //Do Paragraph
    const Nairobi = styled.p`
            color: orange;
            background-color:black;
            padding: 20px;
    `;

           
    return ( 
        <div className="home">

            <Modcom>Medilab Admin</Modcom>
            <Nairobi>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas itaque facere corrupti provident ea cumque eaque veritatis accusamus totam qui, rem deserunt iusto laborum. Repellendus nihil mollitia quae accusamus!</Nairobi>
            <Button>Get Started</Button>
            <br /><br />

            {/* Pass some value to Labs */}
            <h1>Get New Experience</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro harum recusandae odit adipisci voluptatum id non, totam provident repellat? Temporibus aliquid delectus saepe commodi laboriosam ex error deserunt dolorum vitae.</p>
            <h2>His name is {name} and {age} Yrs</h2>
            <button onClick={update}>Update</button>

            <div className="more">
                <h3>Lets Start!!</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, commodi quasi minus distinctio dolor iste non voluptate beatae aliquid, impedit est voluptatibus velit consectetur. Facilis aspernatur tempora facere maiores sapiente?</p>
            </div>
        </div>
     );
}
 
export default Home;