<div className="car-listings" style={{ width: "18rem" }}>
  {filteredListings.length > 0 ? (
    filteredListings.map((car) => (
      <div key={car.id} className="card">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="card-img-top"
          style={{ maxWidth: "200px" }}
        />
        <h5>
          {car.make} {car.model}
        </h5>
        <p>Year: {car.year}</p>
        <p>Price: ${car.price}</p>
        <p>{car.description}</p>
        <div className="row">
          <button
            className="m-2 pr-4 pl-4 btn btn-secondary"
            onClick={() => handleEdit(car.id)}
          >
            Edit
          </button>
          <button
            className="m-2 btn btn-secondary"
            onClick={() => handleDelete(car.id)}
          >
            Delete
          </button>
          <button
            className="m-2 btn btn-primary"
            onClick={() => handleAddToCart(car.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))
  ) : (
    <p>No car listings available.</p>
  )}
</div>;
