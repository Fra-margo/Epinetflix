import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const API_KEY = "e7363bdb";

class SingleFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            showModal: false,
            newComment: {
                comment: "",
                rate: "1",
                elementId: this.props.elementId,
            },
        };
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false,
            newComment: {
                comment: "",
                rate: "1",
                elementId: this.props.elementId,
            },
        });
    };

    handleShowModal = async () => {
        await this.fetchComments();
        this.setState({ showModal: true });
    };

    fetchComments = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.elementId}`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDc1NWI1MjViYjAwMThlZDA4MTQiLCJpYXQiOjE3MDMxNjc4MjksImV4cCI6MTcwNDM3NzQyOX0.WoIELI94qbbsBNflw6IW3ANvpmEXbJ6j1ZgkIjI_f40",
                },
            });
            const data = await response.json();
            this.setState({ comments: data });
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    postComment = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDc1NWI1MjViYjAwMThlZDA4MTQiLCJpYXQiOjE3MDMxNjc4MjksImV4cCI6MTcwNDM3NzQyOX0.WoIELI94qbbsBNflw6IW3ANvpmEXbJ6j1ZgkIjI_f40",
                },
                body: JSON.stringify(this.state.newComment),
            });

            const newComment = await response.json();
            const updatedComments = [...this.state.comments, newComment];

            this.setState({ comments: updatedComments });
            this.handleCloseModal();
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    deleteComment = async (commentId) => {
        try {
            await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDc1NWI1MjViYjAwMThlZDA4MTQiLCJpYXQiOjE3MDMxNjc4MjksImV4cCI6MTcwNDM3NzQyOX0.WoIELI94qbbsBNflw6IW3ANvpmEXbJ6j1ZgkIjI_f40",
                },
            });

            await this.fetchComments();
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    render() {
        const { title } = this.props;
        const { newComment, comments, showModal } = this.state;

        return (
            <div className="col mb-3 px-1">
                <img
                    src={this.props.poster}
                    alt={title}
                    className="img-fluid"
                    onClick={this.handleShowModal}
                />

                <Modal show={showModal} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title} Comments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {comments.map((comment) => (
                            <div key={comment._id}>
                                <p>{comment.comment}</p>
                                <p>Rating: {comment.rate}</p>
                                <Button variant="danger" onClick={() => this.deleteComment(comment._id)}>
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
                                onChange={(e) => this.setState({ newComment: { ...newComment, comment: e.target.value } })}
                            />
                        </Form.Group>
                        <Form.Group controlId="rateForm">
                            <Form.Label>Rate (1-5):</Form.Label>
                            <Form.Control
                                as="select"
                                value={newComment.rate}
                                onChange={(e) => this.setState({ newComment: { ...newComment, rate: e.target.value } })}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" onClick={this.postComment}>
                            Commenta
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default SingleFilm;