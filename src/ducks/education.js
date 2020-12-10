import syracuse from "../assets/syracuse.svg";
import cpp from "../assets/cpp.svg";
import pcc from "../assets/pcc.svg";
import csula from "../assets/csula.svg";

export const education = [
  {
    title: "M.S. Computer Science",
    subtitle: "California State Polytechnic University, Pomona",
    link: "https://www.cpp.edu",
    from: new Date(2016, 12, 1),
    to: new Date(2019, 8, 1),
    image: cpp,
    comments: [
      {
        type: "Foci",
        value: ["Algorithms", "Machine learning"],
      },
      {
        type: "Relevant courses",
        value: [
          "Advanced machine learning",
          "Large scale graph processing",
          "Parallel processing",
          "Advanced analysis of algorithms",
        ],
      },
      {
        type: "Thesis topic",
        value:
          "Tracking and Classification of Mouse Behaviors using Convolutional Neural Networks and Recurrent Neural Networks",
      },
    ],
    tags: [
      "computer",
      "science",
      "cs",
      "c.s.",
      "higher",
      "education",
      "machine",
      "learning",
      "graph",
      "vision",
      "neural",
      "networks",
      "convolutional",
      "recurrent",
      "GRU",
      "LSTM",
      "YOLO-tiny",
    ],
  },
  {
    title: "Math and CS Courses",
    subtitle: "Pasadena City College",
    link: "https://pasadena.edu/",
    from: new Date(2012, 8, 1),
    to: new Date(2016, 6, 1),
    image: pcc,
    comments: [
      {
        type: "Foci",
        value: ["Computer Science", "Mathematics", "Bioinformatics"],
      },
      {
        type: "Relevant courses",
        value: [
          "C++",
          "Java",
          "Python",
          "x86 Assembly",
          "Linear algebra",
          "Multivariable Calculus",
          "Differential Equations",
          "Bioinformatics",
        ],
      },
      {
        type: "Achievement",
        value:
          "Programmed DirectionField app for iOS and Android that solves x'=Ax where A is a matrix of real numbers.",
      },
    ],
    tags: [
      "cs",
      "c.s.",
      "computer",
      "science",
      "direction",
      "field",
      "android",
      "math",
      "differential",
      "equations",
      "calculus",
      "linear",
      "algebra",
      "bioinformatics",
      "ios",
      "app",
      "software",
    ],
  },
  {
    title: "M.S.W. Social Work",
    subtitle: "California State University, Los Angeles",
    link: "http://www.calstatela.edu/",
    from: new Date(2001, 8, 1),
    to: new Date(2003, 6, 14),
    image: csula,
    comments: [
      {
        type: "Focus",
        value: "Grief and loss, aging & families",
      },
      {
        type: "Activities",
        value: "Treasurer, MSW student organization",
      },
      {
        type: "Thesis topic",
        value: "Caregiver burden, Caregiving for older adults",
      },
    ],
    tags: [
      "social",
      "work",
      "M.S.W.",
      "welfare",
      "higher",
      "education",
      "grief",
      "loss",
      "aging",
      "families",
      "caregiving",
      "caregiver",
      "depression",
      "disorder",
      "anxiety",
      "psychology",
    ],
  },
  {
    title: "B.A. Psychology",
    subtitle: "Syracuse University",
    link: "https://www.syracuse.edu/",
    from: new Date(1997, 6, 1),
    to: new Date(2001, 5, 13),
    image: syracuse,
    comments: [
      {
        type: "Focus",
        value: "Neuroscience",
      },
      {
        type: "Lab experience",
        value: "Neuroscience lab of Dr. Catherine Cornwell",
      },
      {
        type: "Extracurricular",
        value: "Founding brother, Phi Kappa Theta, New York Tau",
      },
    ],
    tags: [
      "psychology",
      "b.a.",
      "undergraduate",
      "higher",
      "education",
      "neuroscience",
      "science",
    ],
  },
];
