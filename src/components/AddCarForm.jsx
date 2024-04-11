
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { API_URL } from "../config";


const AddCarForm = ({ setShow, show, idIndex, fetchCarListings }) => {
	const [carData, setCarData] = useState({
		brand: "",
		model: "",
		year: "",
		price: "",
		description: "",
		image: "",
		id: idIndex + 1,
		class: "",
		cylinders: 0,
		drive: "fwd",
		fuel_type: "gas",
		transmission: "manual",
		color: "",
	});

	const [validated, setValidated] = useState(false);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCarData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}

		setValidated(true);

		console.log(carData);
		try {
			await axios.post(`${API_URL}/api/cars`, carData);
			navigate("/listings");
		} catch (error) {
			console.error("Error adding car:", error);
		}
		fetchCarListings();
		setShow(false);
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
								type="text"
								placeholder="Description"
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid Description.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom06">
							<Form.Label>Image URL</Form.Label>
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
						<Form.Group as={Col} md="auto" controlId="validationCustom07">
							<Form.Label>Class</Form.Label>
							<Form.Control
								name="class"
								type="text"
								placeholder="Class"
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid Class.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom08">
							<Form.Label>Cylinders</Form.Label>
							<Form.Control
								name="cylinders"
								type="number"
								placeholder="Cylinders"
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid cylinders.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom09">
							<Form.Label>Drive</Form.Label>
							<Form.Control
								as="select"
								name="drive"
								type="text"
								placeholder="Drive"
								onChange={handleChange}
								required
							>
								<option>fwd</option>
								<option>rwd</option>
								<option>awd</option>
								<option>4wd</option>
							</Form.Control>
							<Form.Control.Feedback type="invalid">
								Please provide a valid Drive.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom10">
							<Form.Label>Fuel Type</Form.Label>
							<Form.Control
								as="select"
								name="fuel_type"
								type="text"
								placeholder="Fuel Type"
								onChange={handleChange}
								required
							>
								<option>gas</option>
								<option>diesel</option>
								<option>electricity</option>
							</Form.Control>
							<Form.Control.Feedback type="invalid">
								Please provide a valid cylinders.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom11">
							<Form.Label>Transmission</Form.Label>
							<Form.Control
								as="select"
								name="transmission"
								type="text"
								placeholder="transmission"
								onChange={handleChange}
								required
							>
								<option>manual</option>
								<option>automatic</option>
							</Form.Control>
							<Form.Control.Feedback type="invalid">
								Please provide a valid cylinders.
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md="auto" controlId="validationCustom07">
							<Form.Label>Color</Form.Label>
							<Form.Control
								name="color"
								type="text"
								placeholder="Color"
								onChange={handleChange}
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid Class.
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
