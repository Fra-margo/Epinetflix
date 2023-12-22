import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faTh, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Form } from "react-bootstrap";
import MyFooter from "./MyFooter";
import FilmGallery from "./FilmGallery";

const MyHome = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <h2 className="mb-4 me-4 mt-1">TV Shows</h2>
                    <Dropdown className="ml-4 mt-2">
                        <Dropdown.Toggle
                            variant="secondary"
                            size="sm"
                            className="rounded-0"
                            style={{ backgroundColor: "#221f1f" }}
                        >
                            Genres &nbsp;
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="bg-dark">
                            <Dropdown.Item className="text-white bg-dark" href="#">Comedy</Dropdown.Item>
                            <Dropdown.Item className="text-white bg-dark" href="#">Drama</Dropdown.Item>
                            <Dropdown.Item className="text-white bg-dark" href="#">Thriller</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="mt-3">
                    <FontAwesomeIcon icon={faThLarge} className="icons" />{" "}
                    <FontAwesomeIcon icon={faTh} className="icons" />
                </div>
            </div>

            <Form className="mb-4">
                <Form.Group controlId="searchBar" className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </Form.Group>
            </Form>
            {searchTerm ? (
                <FilmGallery title="Search Results" searchTerm={searchTerm} />
            ) : (
                <>
                    <FilmGallery title="Harry Potter" />
                    <FilmGallery title="Star Wars" />
                    <FilmGallery title="Marvel" />
                </>
            )}
            <MyFooter />
        </div>
    );
};

export default MyHome;