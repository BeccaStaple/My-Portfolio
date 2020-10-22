import React from "react"
import coverImg from "./bf-web.gif"
import { Modal } from "react-bootstrap"

export default class BestFlowers extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    
    render() {
        return (
            <div>
                <h3>best flowers.</h3>
                <img 
                onClick={() => this.setState({show : true})}
                className="cover-img" 
                src={coverImg} 
                alt="best flowers home page"/>
                <br />
                <a target="_blank" href="https://rebeccajstaple734118865.wordpress.com/">
                <button className="view-web-btn" type="button" >View Website</button>
                </a>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    

                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-styling">
                            Best Flowers
                  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-styling">
                        <h5>tech used</h5>
                        <ul>
                            <li>wordpress</li>
                        </ul>
                        <p>
                            
                            Plenty of picutes of flowers captures the customer's attention:
                            they need to quickly be able to imagine the plants in their own home 
                            so that they are more likely to buy the plants. Website is easy to 
                            navigate and customers can get straight to browsing plants, which 
                            is most likely the reason for their visit.
                      </p>
                    </Modal.Body>
                </Modal>


            </div>
        )
    }
}