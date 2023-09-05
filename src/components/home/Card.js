import React from 'react';

const Card = ({ image, title, description }) => (
  <article>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </article>
);

export default Card;
