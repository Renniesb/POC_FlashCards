import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';




 class StudyDeck extends Component {

   state = {
     cardIndex: 0,
     isFlipped: false,
     cardNumber: 1
   }


    handleCardChange = e => {

      let name = e.target.name;

      e.preventDefault()

      if( name === "flip"){
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

      if(name === "forward"){

        this.setState(prevState => {


          return {cardIndex: prevState.cardIndex + 1, isFlipped: false, cardNumber: prevState.cardNumber + 1}

        })

      }

      if (name === "goBack"){
        this.setState(prevState => {

          return {cardIndex: prevState.cardIndex - 1, isFlipped: false, cardNumber: prevState.cardNumber - 1}

        })
      }

    }
    render(){

      return (
        <Container>
          <Row>
            <Col md={{span:6, offset: 3}}>
              <h3 style={{marginTop: 25, marginBottom: 20}}>Studying: {this.props.currentDeck.name}</h3>
              <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <Card key="front">
                  <Card.Header as="h4">Term:</Card.Header>
                  <Card.Body>
                    <Card.Title as="h4" style={{minHeight: 150}} className="h-100 align-items-center justify-content-center d-flex">
                    {this.props.currentDeck.cards[this.state.cardIndex]["front"]}
                    </Card.Title>
                    <div className="text-right">
                      <Button name="flip" onClick={(e)=>{this.handleCardChange(e)}}>Flip Card</Button>
                    </div>
                  </Card.Body>
                </Card>
                <Card key="back">
                  <Card.Header as="h4">Definition:</Card.Header>
                  <Card.Body>
                    <Card.Title as="h4" style={{minHeight: 150}} className="h-100 align-items-center justify-content-center d-flex">
                    {this.props.currentDeck.cards[this.state.cardIndex]["back"]}
                    </Card.Title>
                    <div className="text-right">
                      <Button name="flip" onClick={(e)=>{this.handleCardChange(e)}}>Flip Card</Button>
                    </div>
                  </Card.Body>
                </Card>
              </ReactCardFlip>
            </Col>
          </Row>
          <Row>
            <Col xs={{span:6, offset: 3}} >
            <div className="text-center">
              <Button style={{marginTop: 10, marginRight: 15}} variant="outline-dark" className="center-block" name="goBack" disabled={this.state.cardIndex === 0} onClick={(e)=>{this.handleCardChange(e)}}>{"<"}</Button>
              {this.state.cardNumber}/{this.props.currentDeck.cards.length}
              <Button style={{marginTop: 10, marginLeft: 15}} variant="outline-dark" disabled={this.state.cardIndex === this.props.currentDeck.cards.length - 1}
              name="forward"
              onClick={(e)=>{this.handleCardChange(e)}}>{">"}</Button>
            </div>
            </Col>
          </Row>
        </Container>
      )
    }
  }

export default StudyDeck;
