import React from "react";
import { useState, useEffect } from "react";

const NewProducts = (props) => {
  return (
    <div>
      <form onSubmit={props.submitForm}>
        <div>
          Name:{" "}
          <input
            className="form-control"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          />
        </div>
        <div>
          Price:{" "}
          <input
            className="form-control"
            value={props.price}
            onChange={(e) => props.setPrice(e.target.value)}
          />
        </div>
        <div>
          Category:{" "}
            <select value = {props.category} className = "form-control"  onChange={(e) => props.setCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Gadget">Gadget</option>
            </select>
          {/* <input
            className="form-control"
            value={props.category}
            onChange={(e) => props.setCategory(e.target.value)}
          /> */}
        </div>
        <button className="btn btn-light m-2">
          {props.updateMode ? "Update" : "Submit"}
        </button>

        {props.updateMode ? (
          <button className="btn btn-light m-2" onClick={props.cancelForm}>
            Cancel
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default NewProducts;
