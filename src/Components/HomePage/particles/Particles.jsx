import React, { useRef, useLayoutEffect } from "react";
import "./particles.css";

function Particles() {
  const particlesContainer = useRef(null);

  useLayoutEffect(() => {
    // Ensure particlesJS is defined and then initialize it
    if (window.particlesJS && particlesContainer.current) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 90, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 4, color: "#000000" },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 120, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: false,
      });
    }
  }, []);

  return (
    <div className="w-100">
      <div className="w-100" ref={particlesContainer} id="particles-js"></div>
      <div className="count-particles text-center">
        <h1 className="text-center">Build a new kind of Decentralized</h1>
        <span className="text-center fs-6">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          <br />
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia
          <br />
          deserunt mollitia animi, id est laborum et dolorum fuga.
        </span>
        <div className="mt-5 mb-3 gap-3 d-flex flex-wrap justify-content-center align-items-center">
          <button
            type="button"
            className="w-auto btn btn-secondary py-2 px-5"
          >
            JOIN US
          </button>
          <button
            type="button"
            className="btn btn-warning w-auto py-2 px-5 fs-6"
          >
            VIEW WHITE PAPER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Particles;
