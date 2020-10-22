import React from "react"
import coverImg from "./ig-web.gif"
import { Modal } from "react-bootstrap"

export default class Ignite extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }



    render() {
        return (
            <div>
                <h3>ignite.</h3>
                <img
                    onClick={() => this.setState({ show: true })}
                    className="cover-img"
                    src={coverImg}
                    alt="ignite website home page" />
                <br />
                <a target="_blank" href="https://petitebeccas.wixsite.com/ignite">
                    <button className="view-web-btn" type="button" >view website</button>
                </a>

                

                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    

                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-styling">
                            iGnite Dance
                  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-styling">
                        <h5>tech used</h5>
                        <ul>
                            <li>wix.com</li>
                        </ul>
                        <p>It was important that I used tehcnology that the owner
                        could login to and change herself as info in her company
                        was changing regularly. Her company is very firely and punchy
                        so the design needed to reflect that.
                      </p>
                    </Modal.Body>
                </Modal>



            </div>
        )
    }
}