import React from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h2>
        #{id} -{name}
      </h2>
      {/* Iamgenes */}
      <div>
        {sprites.map((sprite, index) => (
          <img
            key={ sprite }
            src={ sprite }
            alt={ name }
            style={{ width: 100, height: 100 }}
          />
        ))}
      </div>
    </section>
  );
};
