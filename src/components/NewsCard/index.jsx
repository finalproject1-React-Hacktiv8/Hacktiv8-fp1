import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addSaved } from "../../redux/NewsSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsCard = ({ data }) => {
  const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addSaved(data));
        toast("News Saved")
    };

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
          <Button variant="info" href={data.url} target="_blank">News Page</Button>{" "}
          <Button as={Link} variant="success" onClick={handleSave}>Save</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;
