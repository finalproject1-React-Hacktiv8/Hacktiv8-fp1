import { Button, Card, Col } from "react-bootstrap";

const NewsCard = ({ data }) => {
  return (
    <Col>
      <Card style={{ minHeight: "30rem" }} className="m-2 mt-4">
        <Card.Img
          variant="top"
          src={data.urlToImage}
          alt="thumbnail"
          style={{ height: "15rem" }}
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle className="my-3">{data.source.name}</Card.Subtitle>
          <Card.Text>{data.description}</Card.Text>
          <Button variant="info" href={data.url} target="_blank">
            News Page
          </Button>{" "}
          <Button variant="primary">Save</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;
