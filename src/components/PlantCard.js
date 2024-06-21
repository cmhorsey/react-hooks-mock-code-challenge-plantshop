import React, { useState } from "react"

function PlantCard({ name, image, price }) {
  const [soldOut, setSoldOut] = useState(true)

  function handleSoldOutClick() {
    if (!soldOut) {
      setSoldOut(true)
    } else setSoldOut(false)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick={handleSoldOutClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleSoldOutClick}>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard
