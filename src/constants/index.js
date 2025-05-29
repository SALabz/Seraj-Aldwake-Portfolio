
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  python,
  cpp,
  tensorflow,
  pytorch,
  ros,
  gazebo,
  matlab,
  linux,
  opencv,
  numpy,
  sklearn,
  jupyter,
  arduino,
  raspberrypi,
  stm32,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },

   { id: "projects", title: "Projects" },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ADAS & Autonomous Systems",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Robotics & Perception Engineer",
    icon: backend,
  },
  {
    title: "Embedded Systems Engineer",
    icon: creator,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "C++", icon: cpp },
  { name: "TensorFlow", icon: tensorflow },
  { name: "PyTorch", icon: pytorch },
  { name: "ROS", icon: ros },
  { name: "Gazebo", icon: gazebo },
  { name: "MATLAB", icon: matlab },
  { name: "Linux", icon: linux },
  { name: "OpenCV", icon: opencv },
  { name: "NumPy", icon: numpy },
  { name: "scikit-learn", icon: sklearn },
  { name: "Jupyter", icon: jupyter },
  { name: "Arduino", icon: arduino },
  { name: "Raspberry Pi", icon: raspberrypi },
  { name: "STM32 (Microcontroller)", icon: stm32 },
];


 


<<<<<<< HEAD
import mahleLogo from "../assets/mahle.svg";     // add this logo manually
import avancezLogo from "../assets/avancezLogo.jpg"; // add this logo manually
=======
// import mahleLogo from "../assets/company/mahle.png";     // add this logo manually
// import avancezLogo from "../assets/company/avancez.png"; // add this logo manually
>>>>>>> 560e4277f672e6841307c2167676cf601d1c6f08

const experiences = [
  {
    title: "Embedded Controls Co-Op",
    company_name: "MAHLE Powertrain",
<<<<<<< HEAD
    icon: mahleLogo,
=======
    // icon: mahleLogo,
>>>>>>> 560e4277f672e6841307c2167676cf601d1c6f08
    iconBg: "#004080",
    date: "Jan 2025 – Present",
    points: [
      "Engineered and simulated control system models using MATLAB and Simulink, improving system accuracy by 15%.",
      "Collaborated with cross-functional teams to optimize dyno and vehicle-level testing workflows, reducing test cycle times by 20%.",
      "Led integration of Transmission, Engine, and Gear Shift Control Modules into prototype vehicles, calibrated via ATI Vision and CANalyzer.",
      "Interpreted DBC files to ensure accurate CAN communication, enhancing message reliability by 25%.",
    ],
  },
  {
    title: "Engineering Intern",
    company_name: "Avancez LLC",
<<<<<<< HEAD
    icon: avancezLogo,
=======
    // icon: avancezLogo,
>>>>>>> 560e4277f672e6841307c2167676cf601d1c6f08
    iconBg: "#2C3E50",
    date: "Apr 2024 – Dec 2024",
    points: [
      "Optimized anomaly detection models, reducing production downtime by 15% through improved ML accuracy.",
      "Deployed scalable integration frameworks that improved system reliability by 25%.",
      "Documented real-time monitoring procedures, enhancing fault response efficiency and reducing downtime.",
    ],
  },
];


// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
//     name: "MD Mustaqeem",
//     designation: "Ecommerce",
//     company: "QuickMart",
//     image: firstTestimonial,
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
//     name: "Abdul Raheman",
//     designation: "Ecommerce Business",
//     company: "justbuyz",
//     image: secondTestimonial,
//   },
//   {
//     testimonial:
//       "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "James Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: thirdTestimonial,
//   },
// ];

const projects = [
  {
    name: "Mimicking Robot Arm",
    description:
      "Gesture-controlled robotic arm using ROS2, Jetson Nano, and Leap Motion. Features real-time motion replication via kinematic modeling and a centralized control hub.",
    tags: [
      { name: "ROS2", color: "blue-text-gradient" },
      { name: "Jetson", color: "green-text-gradient" },
      { name: "MoveIt", color: "pink-text-gradient" },
    ],
    image: "", // leave this empty if you're not using images
<<<<<<< HEAD
    source_code_link: "https://github.com/SALabz/Robot-Arm/blob/main/README.md",
=======
    source_code_link: "",
>>>>>>> 560e4277f672e6841307c2167676cf601d1c6f08
  },
  {
    name: "Autonomous Driving Car",
    description:
      "Omnidirectional robot with STM32 + ROS2 for autonomous navigation. Combines PID control with YOLOv5 for lane detection and directional decision-making.",
    tags: [
      { name: "ROS2", color: "blue-text-gradient" },
      { name: "STM32", color: "green-text-gradient" },
      { name: "YOLOv5", color: "pink-text-gradient" },
    ],
    image: "",
<<<<<<< HEAD
    source_code_link: "https://github.com/SALabz/Lane-navigating-RoboCar/blob/main/README.md",
=======
    source_code_link: "",
>>>>>>> 560e4277f672e6841307c2167676cf601d1c6f08
  },
  {
    name: "AI-Driven OCR Pipeline",
    description:
      "Text recognition system with YOLOv5 and EasyOCR. Real-time pipeline includes preprocessing (denoising, contrast, thresholding) for embedded deployment.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "EasyOCR", color: "green-text-gradient" },
      { name: "YOLOv5", color: "pink-text-gradient" },
    ],
    image: "",
<<<<<<< HEAD
    source_code_link: "https://github.com/SALabz/ID-Detection-Extraction-via-OCR/blob/main/README.md",
=======
    source_code_link: "",
>>>>>>> 560e4277f672e6841307c2167676cf601d1c6f08
  },
  {
    name: "Emotion Recognition via CNN",
    description:
      "CNN trained on FER-2013 dataset to classify 6 emotional states in real time. Augmented and normalized data to boost generalization across diverse faces.",
    tags: [
      { name: "CNN", color: "blue-text-gradient" },
      { name: "FER-2013", color: "green-text-gradient" },
      { name: "Real-time", color: "pink-text-gradient" },
    ],
    image: "",
<<<<<<< HEAD
    source_code_link: "https://github.com/SALabz/Emotion-Recognition-via-CNN/blob/main/README.md",
=======
    source_code_link: "",
>>>>>>> 560e4277f672e6841307c2167676cf601d1c6f08
  },
];

// export { services, technologies, experiences, testimonials, projects };
export { services, technologies, experiences, projects };
