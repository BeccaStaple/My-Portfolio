import React from "react"


export default class ContactPage extends React.Component {
    
    componentDidMount() {
        document.title = "rebecca staple | contact";
    }
    
    render() {
        return (

            <div className="contact-div">
                <p>So what can a software nerd and Beatles super fan do for you?</p>

                <p>Get in touch and let me know:</p>

                <p className="email">Email: rebecca.j.staple@gmail.com</p>

                <p>You can also reach me on social media and check out my GitHub</p>

                <div className="social-sec">
                <a className="soc" href="https://www.linkedin.com/in/rebecca-staple-476905127/">linkedin.</a> 
                <br />
                <a className="soc" href="https://github.com/BeccaStaple">github.</a>
                <br />
                <a className="soc" href="https://twitter.com/BeccaStaple">twitter.</a>

                </div>
                
                
                
                
                <p>I'll get back to you as soon as I can - I'm always super speedy!</p>




            </div>









        )
    }
}