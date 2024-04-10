import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const AddCarForm = ({ setShow, show }) => {
	const [carData, setCarData] = useState({
		brand: "",
		model: "",
		year: "",
		price: "",
		description: "",
		image: "",
	});

	console.log(carData);
	const [validated, setValidated] = useState(false);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(e);
		console.log(e.target);
		console.log("name", name);
		console.log("value", value);
		setCarData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		console.log("aca");
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}

		setValidated(true);
		try {
			await axios.post("https://projectfinalback.adaptable.app/api/cars", carData);
			navigate("/listings");
		} catch (error) {
			console.error("Error adding car:", error);
		}
	};

	return (
		<>
			<Modal show={show} onHide={() => setShow(false)}>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Modal.Header closeButton>
						<Modal.Title>Add Car</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{/* Form fields for car data */}
						<Form.Group as={Col} md="auto" controlId="validationCustom01">
							<Form.Label>Brand</Form.Label>
							<Form.Control
								name="brand"
								type="text"
								placeholder="Brand"
								defaultValue={carData.brand}
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a Brand
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom02">
							<Form.Label>Model</Form.Label>
							<Form.Control
								name="model"
								type="text"
								placeholder="Model"
								defaultValue={carData.model}
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a Model
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom03">
							<Form.Label>Year</Form.Label>
							<Form.Control
								name="year"
								type="number"
								placeholder="Year"
								defaultValue={carData.year}
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a Year
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom04">
							<Form.Label>Price</Form.Label>
							<Form.Control
								name="price"
								type="number"
								placeholder="Price"
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid Price.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom05">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={5}
								name="description"
								type="number"
								placeholder="Description"
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid Description.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom06">
							<Form.Label>Price</Form.Label>
							<Form.Control
								name="image"
								type="text"
								placeholder="Image URL"
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid Image URL.
							</Form.Control.Feedback>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit">Submit form</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

export default AddCarForm;
