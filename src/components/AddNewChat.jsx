import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

// This Modal help Add a new friend
export function AddNewChat( props ){
    const [show, setShow] = useState( false );
    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );
    return (
        <div className="AddNewChat" style={{position:"absolute", bottom:"0px", padding:"10px 45px 0 45px", margin:"0 95px 0 0", width:"96%", backgroundColor:"#DCDCDC",height:"55px"}}>
            <Button variant="success" className="mb-2" style={{borderRadius:"70px",fontWeight:"bold",color:"black",backgroundColor:"salmon",float: "right",marginTop:"-4px"}}onClick={ handleShow }>
            <img
        src="https://simpleicon.com/wp-content/uploads/pencil.svg" 
        
        style={{width: "30px",marginRight: "10px"}} />
            NewChat
            </Button>
            <Modal show={ show } onHide={ handleClose }>
                <div className="centre" style={{backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/75/67/55/360_F_275675512_KhYF4cP8BsXqfyimbAaRnl1nJyU6GMHQ.jpg")',backgroundRepeat:"no-repeat",backgroundSize:"550px"}}>
            <Modal.Header closeButton>
                 <Modal.Title style={{color:'white', fontSize: '25px'}}>Add New Friend</Modal.Title>
            </Modal.Header>
            <Modal.Body>
    <div>

        <Form.Group>
            <Form.Control required id="addPublicKey" size="text" type="text" placeholder="Enter Friends Public Key" />
            <br />
            <Form.Control required id="addName" size="text" type="text" placeholder="Name" />
            <br />
        </Form.Group>
    </div>
</Modal.Body>

                <Modal.Footer>
            <Button variant="danger" onClick={handleClose} style={{ borderRadius: '10px' }}>
                Close
            </Button>
            <Button variant="info" onClick={() => {props.addHandler(document.getElementById('addName').value, document.getElementById('addPublicKey').value);handleClose();
                }} style={{ borderRadius: '10px' }}>
                 Add Friend
            </Button>
                </Modal.Footer>
                </div>
            </Modal>
        </div>  
        
    );
}