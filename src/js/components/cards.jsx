import React from "react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      name: "Pikachu ⚡",
      typeColor: "#FFD93D",
      description: "An Electric-type Pokémon known for its lightning bolt tail and shocking personality!",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
      id: 2,
      name: "Charmander 🔥",
      typeColor: "#FF6B35",
      description: "A Fire-type Pokémon that loves warm places and occasionally sets its trainer’s backpack on fire.",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
      id: 3,
      name: "Squirtle 💧",
      typeColor: "#4FA3F7",
      description: "A Water-type Pokémon who shoots water from its mouth and has mastered the art of chill.",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
      id: 4,
      name: "Bulbasaur 🌿",
      typeColor: "#5CCF5C",
      description: "A Grass/Poison-type Pokémon that grows stronger as the bulb on its back blooms.",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Pokemon</h2>
      <div className="row text-center">
        {cards.map((card) => (
          <div className="col-md-3 mb-4" key={card.id}>
            <div
              className="card h-100 border-0 shadow"
              style={{
                backgroundColor: card.typeColor,
                color: "white",
                borderRadius: "12px",
              }}
            >
              <img
                src={card.img}
                className="card-img-top"
                alt={card.name}
                style={{
                  height: "325px",
                  objectFit: "contain",
                  backgroundColor: "white",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{card.name}</h5>
                <p className="card-text flex-grow-1">{card.description}</p>
                <a href="#" className="btn btn-light fw-bold mt-auto">
                  Choose {card.name.split(" ")[0]}!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
 