import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const API_KEY = "e7363bdb";

const SingleFilm = (props) => {
    const [comments, setComments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newComment, setNewComment] = useState({
        comment: "",
        rate: "1",
        elementId: props.elementId,
    });

    const handleCloseModal = () => {
        setShowModal(false);
        setNewComment({
            comment: "",
            rate: "1",
            elementId: props.elementId,
        });
    };

    const handleShowModal = async () => {
        await fetchComments();
        setShowModal(true);
    };

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.elementId}`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDc1NWI1MjViYjAwMThlZDA4MTQiLCJpYXQiOjE3MDQ4OTc5NTUsImV4cCI6MTcwNjEwNzU1NX0.yGaWxKR7RcnZx54-v0c5h6KU7vOgu7MAn9mX1Z3I3fU",
                },
            });
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    const postComment = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDc1NWI1MjViYjAwMThlZDA4MTQiLCJpYXQiOjE3MDQ4OTc5NTUsImV4cCI6MTcwNjEwNzU1NX0.yGaWxKR7RcnZx54-v0c5h6KU7vOgu7MAn9mX1Z3I3fU",
                },
                body: JSON.stringify(newComment),
            });

            const comment = await response.json();
            setComments([...comments, comment]);
            handleCloseModal();
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    const deleteComment = async (commentId) => {
        try {
            await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDc1NWI1MjViYjAwMThlZDA4MTQiLCJpYXQiOjE3MDQ4OTc5NTUsImV4cCI6MTcwNjEwNzU1NX0.yGaWxKR7RcnZx54-v0c5h6KU7vOgu7MAn9mX1Z3I3fU",
                },
            });

            await fetchComments();
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    return (
        <div className="col mb-3 px-1">
            <img
                src={props.poster}
                alt={props.title}
                className="img-fluid"
                onClick={handleShowModal}
            />
            <Link to={`/movie-details/${props.elementId}`}>
                <Button variant="secondary">Dettagli</Button>
            </Link>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title} Comments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {comments.map((comment) => (
                        <div key={comment._id}>
                            <p>{comment.comment}</p>
                            <p>Rating: {comment.rate}</p>
                            <Button variant="danger" onClick={() => deleteComment(comment._id)}>
                                Cancella
                            </Button>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Form.Group controlId="commentForm" className="d-flex flex-column">
                        <Form.Label>Aggiungi commento:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Scrivi qui il tuo commento..."
                            value={newComment.comment}
                            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group controlId="rateForm">
                        <Form.Label>Rate (1-5):</Form.Label>
                        <Form.Control
                            as="select"
                            value={newComment.rate}
                            onChange={(e) => setNewComment({ ...newComment, rate: e.target.value })}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={postComment}>
                        Commenta
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SingleFilm;