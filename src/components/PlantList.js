import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plants }) {
  const displayAllPlants = plants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        plants={plants}
      />
    )
  })

  return <ul className="cards">{displayAllPlants}</ul>
}

export default PlantList
