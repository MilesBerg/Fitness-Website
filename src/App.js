import React from 'react';
import './styles.css';

function App() {
    <div>
      <header>
        <h1>
          <span className="highlight-header-color">MILES BERG</span> <br />
          <span className="highlight-fitness-color">FITNESS</span>
        </h1>
        <img src="img/gym.png" alt="" />
      </header>
      <div className="nav-bar">
        <nav>
          <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href=".fitness-tab">EXERCISE</a></li>
            <li><a href="#diet-tracker">DIET</a></li>
            <li><a href="#weight-tracker">WEIGHT TRACKER</a></li>
            <li><a href="">PROFILE</a></li>
          </ul>
        </nav>
      </div>
      <div id="intro">
        <div className="hero-img">
          <img src="img/break-workout_602724.jpg" alt="" />
          <div className="gradient-hero"></div>
        </div>
        <div className="hero-text">
          <h1>
            Track Your <span className="highlight-word-color">FITNESS</span> <br /> and{' '}
            <span className="highlight-word-color">DIETING</span> with us
          </h1>
          <h3>TAKE THE NEXT STEPS OF LIVING A HEALTHIER LIFESTYLE</h3>
        </div>
        <div className="hero-btn">
          <h1><a href="">SIGN UP NOW</a></h1>
        </div>
      </div>
      <div className="fitness-tab">
        <h1><a href="#fitness-tracker">Fitness Tracking</a></h1>
      </div>
      <div className="diet-tab">
        <h1><a href="#diet-tracker">Diet Tracking</a></h1>
      </div>
      <div className="weight-tab">
        <h1><a href="#weight-tracker">Weight Tracking</a></h1>
      </div>
      <div className="gym-tab">
        <h1><a href="#weight-tracker">Gyms Nearby</a></h1>
      </div>
      <div className="container">
        <div className="fitness-background">
          <img src="img/ropes.jpg" alt="" />
          <div className="fitness-gradient"></div>
        </div>
        <section id="fitness-tracker">
          <h2>Fitness Tracking</h2>
          <form id="fitness-form">
            <label htmlFor="activity">Activity:</label>
            <input type="text" id="activity" placeholder="e.g., Running" required />

            <label htmlFor="duration">Duration (minutes):</label>
            <input type="number" id="duration" required />

            <button id="add-fitness-entry">Add Entry</button>
          </form>

          <div id="fitness-entries">
            {/* Fitness entries will be displayed here */}
          </div>
        </section>
        <div className="diet-background">
          <img src="img/Calories_1200x628.jpg" alt="" />
          <div className="diet-gradient"></div>
        </div>
        <section id="diet-tracker">
          <h2>Diet Tracking</h2>
          <form id="diet-form">
            <label htmlFor="food">Food:</label>
            <input type="text" id="food" placeholder="e.g., Chicken Salad" required />

            <label htmlFor="calories">Calories:</label>
            <input type="number" id="calories" required />

            <button id="add-diet-entry">Add Entry</button>
          </form>

          <div id="diet-entries">
            {/* Diet entries will be displayed here */}
          </div>
        </section>
        <div className="weight-background">
          <img src="img/weighing.jpg" alt="" />
          <div className="weight-gradient"></div>
        </div>
        <section id="weight-tracker">
          <h2>Weight Tracking</h2>
          <form id="weight-form">
            <label htmlFor="activity">Date:</label>
            <input type="text" id="activity" placeholder="e.g., October 22nd, 2023" required />

            <label htmlFor="duration">Weight (Lbs):</label>
            <input type="number" id="duration" required />

            <button id="add-weight-entry">Add Entry</button>
          </form>

          <div id="fitness-entries">
            {/* Fitness entries will be displayed here */}
          </div>
        </section>
        <section id="find-gym">
          <div className="gym-text">
            <h1>
              Find a <span className="highlight-word-color">GYM</span> <br /> near{' '}
              <span className="highlight-word-color">YOU</span>
            </h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15914.201383847596!2d-96.57962200093942!3d33.01567116791379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgym!5e0!3m2!1sen!2sus!4v1700523437069!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
}

export default App;
