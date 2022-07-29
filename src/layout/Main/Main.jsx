import React from "react";
import Button from "../../components/Button/Button";
import SliderComponent from "../../components/Slider/SliderComponent";

import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <section className="main-sections top-section">
        <div className="top-section-left">
          <div>
            <h1 className="main-heading">
              Bring everyone together to build better products.
            </h1>
            <p className="text-main">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger goals in view
            </p>
            <Button type="primary">Get Started</Button>
          </div>
        </div>
        <div className="top-section-right"></div>
      </section>
      <section className="main-sections middle-section">
        <div className="middle-section-left">
          <div>
            <h2>What's different about Manage?</h2>
            <p className="text-main">
              Manage provides all the functionality your team needs, without the
              complexity. Our Software is tailor-made for modern digital product
              teams.
            </p>
          </div>
        </div>
        <div className="middle-section-right">
          <div className="middle-section-right-contents">
            <div className="position-label">
              <span>01</span>
            </div>
            <div>
              <h3>Track company-wide progress</h3>
              <p className="text-main">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smalles of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          <div className="middle-section-right-contents">
            <div className="position-label">
              <span>02</span>
            </div>
            <div>
              <h3>Advanced built-in reports</h3>
              <p className="text-main">
                Set internal delivery estiamtes and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          <div className="middle-section-right-contents">
            <div className="position-label">
              <span>03</span>
            </div>
            <div>
              <h3>Everything you need in one place</h3>
              <p className="text-main">
                Stop jumping one service to another communicate, store files,
                track tasks and share documents. Manage offers an all-in-one
                team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="main-sections slider-section">
        <h2>What they've said</h2>
        <SliderComponent />

        <Button type="primary">Get Started</Button>
      </section>
      <section className="main-sections call-to-action-section">
        <div className="call-to-action">
          <p className="call-to-action-text">
            Simplify how your team works today.
          </p>
          <Button type="secondary">Get Started</Button>
        </div>
      </section>
    </main>
  );
};

export default Main;
