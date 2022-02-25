import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Meal({ meal }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded"
      style={{ margin: "70px" }}
    >
      <div onClick={handleShow}>
        <h1>{meal.name}</h1>
        <img
          src={meal.image}
          className="img-fluid"
          alt="NOIMAGE"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {meal.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="m-1 w-100">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((obj, index) => {
              return <option value={index + 1}>{index + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-2">
            Price: ₹{meal.prices[0][varient] * quantity}{" "}
          </h1>
        </div>

        <div className="m-1 w-100">
          <button type="button" className="btn">
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{meal.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={meal.image}
            alt="NoImage"
            className="img-fluid"
            style={{ height: "450px" }}
          />
          <p>{meal.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
