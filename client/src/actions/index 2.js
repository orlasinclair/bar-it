import axios from 'axios'

export const getUserSettings = async () => {
    try {
        const response = axios.get('https://barr-it.herokuapp.com/barrit/266f629d-b2fb-4ab3-9eca-7269ed0c3778')
        const data = (await response).data
        console.log(data)
        
    } catch (error) {
        console.warn(error)
    }
}
