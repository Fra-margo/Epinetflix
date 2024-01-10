import { Container, Row, Col } from "react-bootstrap"

const NotFound = () => {
    return (
        <Container>
            <Row className="mt-4 flex-column align-items-center">
                <Col xs={12} md={6}>
                    <h2 className="mt-2 text-center">Sezione non disponibile</h2>
                </Col>
            </Row>
        </Container>
    )

}

export default NotFound