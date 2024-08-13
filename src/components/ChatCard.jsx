import React from "react";
import { Row, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a function which renders the friends in the friends list
export function ChatCard( props ){
    return (
        <Row style={{ marginRight:"0px" }}>
            <Card border="success" style={{ width:'100%', alignSelf:'center', marginLeft:"15px",height:"60px"}} onClick={ () => { props.getMessages( props.publicKey ); }}>
              <Card.Body style={{marginTop:"-15px"}}>
                  <Card.Title> { props.name } </Card.Title>
                  <Card.Subtitle style={{color:"grey"}}> { props.publicKey.length > 20 ? props.publicKey.substring(0, 20) + " ..." : props.publicKey } </Card.Subtitle>
              </Card.Body>
            </Card>
        </Row> 
    );
}