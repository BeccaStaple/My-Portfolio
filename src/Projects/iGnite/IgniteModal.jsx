import React from "react"
import { Button, Modal } from "react-bootstrap"
import Gif from "./ig-web.gif"


export default class IgniteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.show}
                    onHide={() => this.setState({show : false})}

                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-styling">
                            iGnite Dance
                  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-styling">
                        <h5>Tech Stack</h5>
                        <ul>
                            <li>Wix.com</li>
                        </ul>
                        <p>It was important that I used tehcnology that the owner
                        could login to and change herself as info in her company
                        was changing regularly. Her company is very firely and punchy
                        so the design needed to reflect that.
                      </p>
                    </Modal.Body>
                </Modal>
            </>
        );
    }


}


