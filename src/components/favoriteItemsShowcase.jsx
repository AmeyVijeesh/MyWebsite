import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './favoriteItemsShowcase.css';

const favoriteItems = [
  {
    label: 'Favorite Color',
    value: 'Black',
  },
  {
    label: 'Favorite Food',
    value: 'Cookies',
  },
  {
    label: 'Favorite Place',
    value: 'Norway',
  },
  {
    label: 'Favorite Car Brand',
    value: 'Porsche',
  },
  {
    label: 'Favorite Programming Language',
    value: 'Python',
  },
  {
    label: 'Favorite Book',
    value: 'The Harry Potter Series / The Hunger Games Triology',
  },
  {
    label: 'Favorite Day of the Week',
    value: "Friday after 4 o'clock and Saturday",
  },
  {
    label: 'Favorite Video Game',
    value: 'Asphalt 8: Airborne',
  },
  {
    label: 'Favorite Chocolate',
    value: 'Toblerone/Lindt White Chocolate',
  },

  {
    label: 'Favorite Football Player',
    value: 'Kevin De Bruyne',
  },
];

const FavoriteItemsShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="favorite-items-showcase">
      <h1>My Favorite Things</h1>
      <p>Listed below are some of my favorite stuff. Click on the circles.</p>
      <motion.div
        className="favorite-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {favoriteItems.map((item, index) => (
          <motion.div
            key={index}
            className={`favorite-card ${
              isOpen && selectedItem === item ? 'open' : ''
            }`}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            }}
            transition={{ duration: 0.3 }}
            onClick={() => handleCardClick(item)}
          >
            {item.label}
            <motion.div className="favorite-card-content" onClick={handleClose}>
              {item.value}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FavoriteItemsShowcase;
