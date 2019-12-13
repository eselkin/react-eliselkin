const TYPES = {
    PROGRAMMING_LANGUAGE: 0,
    PROGRAMMING_THEORY: 1,
    PROGRAMMING_FRAMEWORK: 2,
    LANGUAGE: 3,
    PSYCHOLOGY_TREATMENT: 4,
    GENERAL_SKILL: 5
}
export const skills = [
    {
        "title": "C++",
        "type": TYPES.PROGRAMMING_LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "Even though PERL was officially my first language (we officially learned C++03), C++ was the first language in which I felt comfortable programming. Though mainstream C++ has changed in the years I began learning it (with auto types and pointer changes etc.), it is still the most powerful language I know."
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "c++",
            "g++",
            "gnu",
            "programming",
            "language",
            "pointer"
        ]
    },
    {
        "title": "JavaScript",
        "begin": new Date(1996, 8, 1),
        "type": TYPES.PROGRAMMING_LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "While I started using JavaScript very early, I really never made significant use of it until I started using jQuery around 2006. However, at that time I didn't have any major projects to work on.  I had a brief stint using Angular2+ but felt frustrated by the constant version changes. I volunteered for a project in 2015, decided to use React Native for it, and dove into web-based React soon after that! I haven't turned back since. I love React's composability and reusability. This page is built using React and Material UI"
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "js",
            "javascript",
            "react",
            "jquery",
            "angular",
            "programming",
            "language"
        ]
    },
    {
        "title": "Python",
        "begin": new Date(2012, 8, 1),
        "type": TYPES.PROGRAMMING_LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "I started using python on a whim, but loved how useful it was. I took a course in it in 2013 and really saw its usefulness. I have since used it for a number of major projects, including my MS thesis in computer science. I love how people have been gravitating from R to Python to make some of the fantastic tooling around R available in Python!"
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "python",
            "machine",
            "learning",
            "data",
            "analysis",
            "statistics",
            "programming",
            "language"
        ]
    },
    {
        "title": "Swift",
        "begin": new Date(2015, 12, 1),
        "type": TYPES.PROGRAMMING_LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "I started using Swift when I wanted to port my DirectionField project from Android(Java) to iOS. At first I was confused by Swift which seemed like a mixture of JS, python, and C. I got frustrated by the dependence on a lot of Objective-C underpinnings really holding it back. However, I soon came to love Swift and found each iteration of the language to be well thought out and creative. I love the ability to use TensorFlow with Swift, though it has some limitations (number one being that it's TensorFlow). Though, Swift is way more efficient than Python, Python just tends to be easier to use for that area. I've sinced programmed another applicaiton using Swift that was released as a beta for testflight."
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "swift",
            "tensorflow",
            "ios",
            "mobile",
            "curbmap",
            "directionfield",
            "programming",
            "language"
        ]
    },
    {
        "title": "Java",
        "begin": new Date(2015, 8, 31),
        "type": TYPES.PROGRAMMING_LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "I took Java because I heard a number of masters programs in CS required it, but I didn't really have a preference about the language. I'm still not sure that I like Java, but I find it very effective for certain problems. I appreciated its safeness, but disliked its bulky objects and lack of pointers. I found that Java was not as slow as I feared. I tested my understanding of the language with the development of the DirectionField program for Android. The program functioned to draw solutions to the differential equation x' = Ax where A is real-valued. I no longer maintain the project, so I'm not sure if it works anymore."
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "java",
            "bytecode",
            "android",
            "mobile",
            "directionfield",
            "programming",
            "language"
        ]
    },
    {
        "title": "bash",
        "begin": new Date(1994, 1, 1),
        "type": TYPES.PROGRAMMING_LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "I started writing bash scripts when I started using Linux, back in 1995 (or earlier) when Slackware was the only distribution I could manage. No package managers. Things needed scripts to be tied together, and the X Window system had really terrible window managers (even before enlightenment, like Motif) so more had to be done in the terminal."
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "bash",
            "shell",
            "sh",
            "terminal",
            "programming",
            "language",
            "linux",
            "gnu"
        ]
    },
    {
        "title": "Matlab",
        "begin": new Date(2013, 1, 1),
        "type": TYPES.PROGRAMMING_LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "I started working in Matlab to do analyses for a bioinformatics class. I love the power, speed, and design of the language, but hate the size. It's enormous. I like the NN packages."
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "matlab",
            "neural",
            "network",
            "machine",
            "learning",
            "programming",
            "language"
        ]
    },
    {
        "title": "R",
        "begin": new Date(2014, 1, 1),
        "type": TYPES.PROGRAMMING_LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "About the same time I started using Matlab, I also started using R. I find the community support around packages to be amazing. I also love ggplot/2 and wish everything from R was supported in python. Statistics are so easy in R, and I used it heavily in the analysis of data in my MS thesis. Understanding data with R is amazingly easy and fast."
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "r",
            "statistics",
            "stat",
            "terminal",
            "programming",
            "language"
        ]
    },
    {
        "title": "Keras/TensorFlow",
        "begin": new Date(2016, 1, 1),
        "type": TYPES.PROGRAMMING_FRAMEWORK,
        "comments": [
            {
                type: "Info",
                value: "I started using tensorflow shortly after it was released, but mainly for math and not as much for CS related activities. However, I didn't have much success with the machine learning aspects of TF until I found Keras. I enjoy Keras, but have found that frameworks like PyTorch/Caffe2 to be much easier to understand, program, and debug."
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "machine",
            "learning",
            "neural",
            "network",
            "math",
            "tensor",
            "keras"
        ]
    },
    {
        "title": "PyTorch/Caffe2",
        "begin": new Date(2017, 1, 1),
        "type": TYPES.PROGRAMMING_FRAMEWORK,
        "comments": [
            {
                type: "Info",
                value: "I started using PyTorch for a project in a computer vision course. Subsequently, I found the interfaces in PyTorch to be much more understandable than Keras'. Also, it appears that a lot more research is being published from major institutions using Caffe and Caffe2+. Perhaps in production, TensorFlow is faster, but I definitely would rather have an understandable framework than a faster one, especially if the differences are not that significant."
            }
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "machine",
            "learning",
            "neural",
            "network",
            "math",
            "tensor",
            "pytorch",
            "caffe"
        ]
    },
    {
        "title": "French",
        "begin": new Date(1989, 1, 1),
        "type": TYPES.LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "I lived in France in 1989 (Chamalieres/Clermont-Ferrand) and again in 2000 (Strasbourg). When I was a child, I attended Ecole Jules Ferry in the class of Mme Pironon. I studied French from 6th-12th grade in the U.S. In college, when I returned to Strasbourg, I completed an internship at l'Aide Sociale à l'Enfance in Colmar."
            },
            {
                "type": "Proficiency",
                value: ["Fluent in spoken French", "Fluent in written French", "Fluent in reading"]
            }
        ],
        "tags": [
            "french",
            "language",
            "francais",
            "français",
            "spoken"
        ]
    },
    {
        "title": "German",
        "begin": new Date(1995, 8, 1),
        "type": TYPES.LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "I took 2 years of German in high school. When in France, in college, I often crossed the border into Germany and practiced my German."
            },
            {
                "type": "Proficiency",
                value: ["Basic spoken capacity", "Basic comprehension of spoken German", "Basic writing capacity", "Basic reading capacity"]
            }
        ],
        "tags": [
            "german",
            "language",
            "deutsch"
        ]
    },
    {
        "title": "Japanese",
        "begin": new Date(2012, 8, 1),
        "type": TYPES.LANGUAGE,
        "comments": [
            {
                type: "Info",
                value: "I have only taken Japanese for one year at Pasadena City College, but I hope to resume courses."
            },
            {
                "type": "Proficiency",
                value: ["Extremely basic comprehension of spoken Japanese", "Extremely basic writing capacity"]
            }
        ],
        "tags": [
            "japanese",
            "language",
            "nihon",
            "go"
        ]
    },
]