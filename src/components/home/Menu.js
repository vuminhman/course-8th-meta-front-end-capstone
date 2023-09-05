import React from 'react';
import Card from './Card';

const menuItems = [
  {
    image: 'https://imgur.com/47Dztm1.jpg',
    title: 'Pho',
    description: 'Indulge in our comforting Pho, a fragrant broth steeped in a blend of aromatic spices, rich with tender cuts of meat and silky rice noodles. A heart-warming dish perfect for any time of day.',
  },
  {
    image: 'https://imgur.com/cOjEspY.jpg',
    title: 'Spring Rolls',
    description: 'Savor the crispiness of our Spring Rolls, a golden-wrapped delight filled with fresh vegetables and succulent shrimp or chicken. Served with a tangy dipping sauce, it\'s an explosion of flavors in every bite.',
  },
  {
    image: 'https://imgur.com/G7N3GbW.jpg',
    title: 'Banh Mi',
    description: 'Enjoy the crunch of our Banh Mi, a harmonious fusion of French and Vietnamese cuisine. This sandwich is a gastronomic wonder, packed with succulent meats, zesty pickled vegetables, and aromatic herbs, all enveloped in a crusty baguette.',
  }
];

const Menu = () => (
  <main>
    <section id="three-columns">
      {menuItems.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  </main>
);

export default Menu;
