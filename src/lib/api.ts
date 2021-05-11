import axios from 'axios'

export const QOD =  axios.create({
    baseURL: 'https://www.affirmations.dev'
})

