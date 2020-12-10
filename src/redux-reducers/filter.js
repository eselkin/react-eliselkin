import { FILTERED } from "../redux-actions/filter"
import { education } from "../ducks/education"
import { skills } from "../ducks/skills"
import { work } from "../ducks/work"
import { projects } from "../ducks/projects"
const defaultState = { filter_value: "", education, work, skills, projects }

export default function filtering(state = defaultState, action) {
    switch (action.type) {
        case FILTERED:
            const filter_value = action.filter_value.toLowerCase()
            if (filter_value.length < 2) {
                return { filter_value: action.filter_value, education, work, skills, projects }
            }
            const filtered_education = education.filter((v, i) => {
                for (let tag of v.tags) {
                    if (filter_value.includes(tag)) {
                        return true
                    }
                }
                return false
            })
            const filtered_work = work.filter((v, i) => {
                for (let tag of v.tags) {
                    if (filter_value.includes(tag)) {
                        return true
                    }
                }
                return false
            })
            const filtered_skills = skills.filter((v, i) => {
                for (let tag of v.tags) {
                    if (filter_value.includes(tag)) {
                        return true
                    }
                }
                return false
            })
            const filtered_projects = projects.filter((v, i) => {
                for (let tag of v.tags) {
                    if (filter_value.includes(tag)) {
                        return true
                    }
                }
                return false
            })
            return {
                education: filtered_education,
                skills: filtered_skills,
                work: filtered_work,
                projects: filtered_projects,
                filter_value: action.filter_value
            }
        default:
            return state;
    }
}