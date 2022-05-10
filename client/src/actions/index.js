import axios from 'axios'

export const getUserSettings = async () => {
    try {
        const response = axios.get('https://barr-it.herokuapp.com/barrit/266f629d-b2fb-4ab3-9eca-7269ed0c3778')
        const data = (await response).data
        const settingsData = data[0].fields
        return settingsData
    } catch (error) {
        console.warn(error)
    }
}

export const updateUserSettings = async (userData) => {
    try {
        const options = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
                }
        }
        const response = await axios.post('https://barr-it.herokuapp.com/barrit/266f629d-b2fb-4ab3-9eca-7269ed0c3778', userData, options)
        const data = await response.data
        
        if (data.err)
        {throw Error(data.err)}
        return data
    } catch (error) {
        console.warn(error)
    }
}
