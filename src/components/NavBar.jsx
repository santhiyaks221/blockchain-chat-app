import React from "react";
import { Button, Navbar } from "react-bootstrap";

// This component renders the Navbar of our application
export function NavBar( props ){
    return (
        <Navbar bg="dark" variant="dark" style={{backgroundImage: 'url("https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?cs=srgb&dl=pexels-francesco-ungaro-396547.jpg&fm=jpg")'}}>
            <Navbar.Brand href="#home" style={{fontFamily:"Times New Roman",fontWeight:"bolder",fontSize:"35px"}}> 
            <img style={{height:"50px",width:"50px"}}src="https://seeklogo.com/images/G/ganache-logo-1EB72084A8-seeklogo.com.png"></img>
                Ganache Discussion App 
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text> 
                    <Button style={{ display: props.showButton,borderRadius:"20px",height:"45px",fontFamily:"Arial",fontSize:"20px",fontWeight:"bold",backgroundColor:"white",color:"red", transition: "background-color 0.3s ease"}} variant="success" onClick={ async () => { props.login(); }}>
                    <img style={{height:"40px",width:"40px",paddingBottom:"2px"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png"></img>
                        Connect 
                    </Button>
                    <div style={{ display: props.showButton === "none" ? "block" : "none",color:"#CCFFFF"}}>
                        Signed in as : 
                        <a href="#"> 
                             { props.username }
                        </a>
                    </div>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}