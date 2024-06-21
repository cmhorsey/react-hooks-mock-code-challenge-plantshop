import React, { useState } from "react"

function PlantCard({ name, image, price, id, onUpdatePlant }) {
  const [soldOut, setSoldOut] = useState(true)
  const [newPrice, setNewPrice] = useState(price)

  function handleSoldOutClick() {
    setSoldOut((prevSoldOut) => !prevSoldOut)
  }

  function handlePriceOnChange(event) {
    setNewPrice(event.target.value)
  }

  function handlePriceChangeClick(event) {
    event.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: newPrice,
      }),
    })
      .then((r) => r.json())
      .then((updatedPlants) => {
        onUpdatePlant(updatedPlants)
        setNewPrice("")
      })
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
      <form onSubmit={handlePriceChangeClick}>
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPrice}
          onChange={handlePriceOnChange}
        />
        <button type="submit" className="primary">
          Submit Price Change
        </button>
      </form>
    </li>
  )
}

export default PlantCard
