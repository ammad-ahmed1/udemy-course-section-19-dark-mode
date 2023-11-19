import React from "react";
import "./Grid.css";
const Grid = ({ myTheme }) => {
  return (
    <section className="grid-section" data-theme={myTheme}>
      <div className="grid-container">
        <div className="grid-item">
          <h2>Product 1</h2>
          <p>Description of Product 1 goes here.</p>
        </div>
        <div className="grid-item">
          <h2>Product 2</h2>
          <p>Description of Product 2 goes here.</p>
        </div>
        <div className="grid-item">
          <h2>Product 3</h2>
          <p>Description of Product 3 goes here.</p>
        </div>
        <div className="grid-item">
          <h2>Product 4</h2>
          <p>Description of Product 4 goes here.</p>
        </div>
        <div className="grid-item">
          <h2>Product 4</h2>
          <p>Description of Product 5 goes here.</p>
        </div>
        <div className="grid-item">
          <h2>Product 4</h2>
          <p>Description of Product 6 goes here.</p>
        </div>
        <div className="grid-item">
          <h2>Product 4</h2>
          <p>Description of Product 7 goes here.</p>
        </div>
        <div className="grid-item">
          <h2>Product 4</h2>
          <p>Description of Product 8 goes here.</p>
        </div>
      </div>
    </section>
  );
};

export default Grid;
