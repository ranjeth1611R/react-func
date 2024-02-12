import { Card,CardBody, CardTitle,CardSubtitle, CardText, Button } from "reactstrap"

function CardComp(props){
    return(
<Card
  style={{
    width: '18rem'
  }}
>
  <img width="200px" height="200px" alt="Sample" src={props.comp1}/>
  <CardBody>
    <CardTitle tag="h5">

    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
    price:{props.comp2}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      BUY
    </Button>
  </CardBody>
</Card>
    )
}
export default CardComp