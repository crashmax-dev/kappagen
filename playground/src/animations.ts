import type { KappagenAnimations } from "@twirapp/kappagen";

export const kappagenAnimations: KappagenAnimations[] = [
  {
    style: "TheCube",
    prefs: {
      size: 0.1,
      center: false,
      speed: 6,
      faces: false,
    },
  },
  {
    style: "Text",
    prefs: {
      message: ["Twir"],
      time: 3,
    },
  },
  {
    style: "Confetti",
    count: 150,
  },
  {
    style: "Spiral",
    count: 150,
  },
  {
    style: "Stampede",
    count: 150,
  },
  {
    style: "Burst",
    count: 150,
  },
  {
    style: "Fountain",
    count: 150,
  },
  {
    style: "SmallPyramid",
  },
  {
    style: "Pyramid",
  },
  {
    style: "Fireworks",
    count: 150,
  },
  {
    style: "Conga",
    prefs: {
      avoidMiddle: false,
    },
  },
];
