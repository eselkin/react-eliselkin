import engage from "../assets/engage.png"
import curbmap from "../assets/curbmap.png"
export const projects = [
    {
        "title": "Engage",
        "link": "https://github.com/hackla-engage",
        "subtitle": "Hack For LA, a brigade of Code for America",
        "from": new Date(2017, 11, 1),
        "to": null,
        "image": engage,
        "comments": [
            {
                type: "Mission",
                value: "The purpose of Engage is to provide a framework that makes local government more accessible for all constituents. It does this through a few open source components. Using the open source engage-scraper, we provide a framework for pulling in data from various municipal services. With the backend and client we provide a scaffolding for a system that use that data to create an interactive experience and one that gets the attention of city officials."
            },
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "nlp",
            "natural",
            "language",
            "processing",
            "django",
            "python",
            "neural",
            "network",
            "machine",
            "learning",
            "city",
            "government",
            "municipal",
            "engage",
            "voting",
            "vote"
        ]
    },
    {
        "title": "Curbmap",
        "link": "https://github.com/curbmap",
        "subtitle": "Hack For LA, a brigade of Code for America",
        "from": new Date(2015, 11, 1),
        "to": new Date(2018, 8, 1),
        "image": curbmap,
        "comments": [
            {
                type: "Mission",
                value: "The purpose of Curbmap is to map the city of Los Angeles' parking restrictions and make that data publicly available. At the time of the project there was no map of all the city's parking restrictions, even within the city government. The method chosen to map the restrictions was through crowd-sourcing."
            },
        ],
        "tags": [
            "computer",
            "science",
            "cs",
            "c.s.",
            "curb",
            "map",
            "geospatial",
            "spring",
            "java",
            "neural",
            "network",
            "machine",
            "learning",
            "city",
            "government",
            "municipal",
            "curbmap"
        ]
    }
]