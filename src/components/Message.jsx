import React from "react";
import { Row, Card } from "react-bootstrap";

// This is a functional component which renders the individual messages
export function Message( props ){
    return (
        <Row style={{marginRight:"0px"}}>
            <Card  border="none" style={{ width:'58%', margin:"0 0 5px " + props.marginLeft,marginTop:"10px",borderRadius:"30px",height:"auto"}}>
                <Card.Body style={{marginTop:"0px"}}>
                    <h6 style={{ float:"right",fontSize:"12px",marginTop:"-5px"  }}> 
                        { props.timeStamp } 
                    </h6>
                    <Card.Subtitle style={{fontFamily:"Georgia"}}>
                        <b>
                            { props.sender }
                        </b>
                    </Card.Subtitle>
                    <Card.Text style={{marginLeft:"10px",color:"black",fontFamily:"Lexend",marginBottom:"-10px"}}>
                        { props.data }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    );
}