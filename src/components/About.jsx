import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        KFC, founded by Colonel Sanders, is known for its crispy fried chicken
        and secret recipe of 11 herbs and spices. We have been serving delicious meals
        since 1930, winning hearts across the globe.
      </p>

      {/* Founder and History */}
      <div className="about-section">
        <h2>Our Legacy</h2>
        <p>
          Colonel Sanders' journey began with a humble roadside restaurant during the Great Depression.
          Today, KFC operates in more than 150 countries, delivering the Finger-Lickin' Good experience to millions.
        </p>
        <img src="/assets/images/colonel-sanders.jpg" alt="Colonel Sanders" className="about-img" />
      </div>

      {/* Mission and Quality */}
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          At KFC, we believe in the power of good food to bring people together and create lasting memories.
          Our commitment to using high-quality ingredients and delivering exceptional service sets us apart from other fast-food chains.
        </p>
        <img src="/assets/images/kfc-kitchen.jpg" alt="KFC Kitchen" className="about-img" />
      </div>

      {/* Social Initiatives */}
      <div className="about-section">
        <h2>Our Social Initiatives</h2>
        <p>
          KFC is committed to giving back to society. We actively participate in various social programs,
          ensuring that we make a difference in the communities we serve.
        </p>
        <div className="initiatives">
          <div className="initiative">
            <img src="/assets/images/kfc-add-hope.jpg" alt="Add Hope" />
            <h3>Add Hope Program</h3>
            <p>
              Through the <strong>Add Hope</strong> program, KFC provides nutritious meals to underprivileged children globally.
              Over 100 million meals have been served to date.
            </p>
          </div>
          <div className="initiative">
            <img src="/assets/images/kfc-eco.jpg" alt="Eco-Friendly Practices" />
            <h3>Eco-Friendly Packaging</h3>
            <p>
              KFC is committed to reducing its environmental footprint by using biodegradable packaging
              and cutting down plastic waste by 50%.
            </p>
          </div>
          <div className="initiative">
            <img src="/assets/images/kfc-scholarship.jpg" alt="Scholarship Program" />
            <h3>Scholarship Program</h3>
            <p>
              The KFC Foundation provides scholarships to employees and their families,
              ensuring access to quality education and brighter futures.
            </p>
          </div>
        </div>
      </div>

      {/* Join Our Journey */}
      <div className="about-section">
        <h2>Join Us on Our Journey</h2>
        <p>
          Our passion for serving the best fried chicken continues to grow.
          We invite you to be a part of our journey as we strive to provide the best fast-food experience in the world.
        </p>
        <img src="/assets/images/kfc-family.jpg" alt="KFC Family" className="about-img" />
      </div>
    </div>
  );
};

export default About;
