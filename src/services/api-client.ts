import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e33873c832354d108f4710bf32e42903'
    }
})
