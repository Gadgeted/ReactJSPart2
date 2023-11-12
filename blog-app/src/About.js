import styled from 'styled-components'
import Secondary from './styles/Secondary'
import ButtonPrimary from './styles/ButtonPrimary'
const XH1 = styled.h1`
    background-color: black;
    color: ${color};
    padding: 2px;
`

const PrimaryInfo = styled.button(XH1)`
    border-left: 1px solid orande;
`

const Section = styled.section`
    margin: 10px;
    background-color: grey;
    div{
        margin: 10px;
        color: pink;
        h1{
            color: orange;
            font-family: 'Courier New', Courier, monospace;
            padding: 2px;
        }
    }
`


const About = () => {
    return ( 
        <div className="about">
            <ButtonPrimary>Download Bronchure</ButtonPrimary>
            <ButtonPrimary>Chat With Us</ButtonPrimary>
            <XH1>About Us</XH1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi atque perferendis vitae alias veritatis nemo perspiciatis expedita iusto? Quaerat magni laboriosam animi tenetur sequi pariatur incidunt porro nostrum ab iure?</p>

            <PrimaryInfo>Checkout Our Labs</PrimaryInfo>
            <button>Back</button>

            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur, accusamus incidunt ipsum error quos sed, ullam deleniti amet soluta doloremque recusandae. Iure ducimus eos nobis placeat pariatur distinctio facilis.</p>
            <div className="about-us">
                <h3>Who We are</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae recusandae maxime a libero vel pariatur aperiam reprehenderit iste nisi. Ipsum ipsam quisquam iste quos deleniti quam, quaerat nostrum facere. Incidunt.</p>
            </div>
            <Section>
                <div className="form">
                    <h1>Talk to Us</h1>
                    <form action="">
                        <input type="text" placeholder='Email'/>
                        <br />
                        <button>Send Message</button>
                    </form>
                </div>
            </Section>
        </div>

     );
}
 
export default About;