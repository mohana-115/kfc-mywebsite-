import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to KFC</h1>
      <p>Savor the Finger-Lickin' Goodness</p>

      {/* Chicken Varieties */}
      <h2>Chicken Varieties</h2>
      <div className="carousel row">
        <div className="item">
          <img src="/assets/images/kfc-chicken.jpeg" alt="Crispy Chicken" />
          <p>Crispy Chicken</p>
        </div>
        <div className="item">
          <img src="/assets/images/kfc-strips.jpeg" alt="Chicken Strips" />
          <p>Chicken Strips</p>
        </div>
        <div className="item">
          <img src="/assets/images/kfc-wings.jpeg" alt="Spicy Chicken Wings" />
          <p>Spicy Chicken Wings</p>
        </div>
        <div className="item">
          <img src="/assets/images/kfc-popcorn.jpeg" alt="Chicken Popcorn" />
          <p>Chicken Popcorn</p>
        </div>
      </div>

      {/* Buckets */}
      <h2>Buckets</h2>
      <div className="carousel row">
        <div className="item">
          <img src="/assets/images/kfc-bucket.jpeg" alt="KFC Bucket" />
          <p>KFC Bucket</p>
        </div>
        <div className="item">
          <img src="/assets/images/kfc-family-bucket.jpeg" alt="Family Bucket" />
          <p>Family Bucket</p>
        </div>
        <div className="item">
          <img src="/assets/images/kfc-party-bucket.jpeg" alt="Party Bucket" />
          <p>Party Bucket</p>
        </div>
      </div>

      {/* Bowls */}
      <h2>Bowls</h2>
      <div className="carousel row">
        <div className="item">
          <img src="/assets/images/kfc-rice-bowl.jpeg" alt="Rice Bowl" />
          <p>Rice Bowl</p>
        </div>
        <div className="item">
          <img src="/assets/images/kfc-gravy-bowl.jpeg" alt="Gravy Bowl" />
          <p>Gravy Bowl</p>
        </div>
      </div>

      {/* Sides & Beverages */}
      <h2>Sides & Beverages</h2>
      <div className="carousel row">
        <div className="item">
          <img src="/assets/images/kfc-fries.jpeg" alt="French Fries" />
          <p>French Fries</p>
        </div>
        <div className="item">
          <img src="/assets/images/kfc-mojito.jpeg" alt="Mojito" />
          <p>Mojito</p>
        </div>
        <div className="item">
          <img src="/assets/images/kfc-brownie.jpeg" alt="Choco Brownie" />
          <p>Choco Brownie</p>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
