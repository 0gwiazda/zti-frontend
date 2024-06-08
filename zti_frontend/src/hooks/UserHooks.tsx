import { getTokenHeader } from './UtilityHooks'

const URL = 'http://localhost:8080'
const NON_AUTH_ENDPOINT = '/auth/user'



export const useGetUser = async(id:number) =>
{
    const axiosHeader = getTokenHeader()

    
    try{
        const res = await axiosHeader.get(`${URL}${NON_AUTH_ENDPOINT}/${id}`)
        return res.data
    }
    catch(error: any)
    {
        if(error.response)
        {
            throw new Error("ERROR Code: " + error.response.status + "\nError message: " + error.response.data)
        }
    }
}

export const useGetCurrentUser = async() =>
{
    const axiosHeader = getTokenHeader()

    try{
        const res = await axiosHeader.get(`${URL}/user/me`)
        return res.data
    }
    catch(error: any)
    {
        if(error.response)
        {
            throw new Error("ERROR Code: " + error.response.status + "\nError message: " + error.response.data)
        }
    }
}

export const useLogin = async(user:Object) => 
{
    const axiosHeader = getTokenHeader()

    try{
        const res = await axiosHeader.post(`${URL}/auth/authenticate`, user)
        return res.data
    }
    catch(error: any)
    {
        if(error.response)
        {
            throw new Error("ERROR Code: " + error.response.status + "\nError message: " + error.response.data)
        }
    }
}

export const useRegister = async(user: Object) =>
{
    const axiosHeader = getTokenHeader()

    try{
        const res = await axiosHeader.post(`${URL}/auth/register`, user)
        return res.data
    }
    catch(error: any)
    {
        if(error.response)
        {
            throw new Error("ERROR Code: " + error.response.status + "\nError message: " + error.response.data)
        }
    }    
}

export const usePutUser = async(user: Object) => 
{
    const axiosHeader = getTokenHeader()

    try{
        const res = await axiosHeader.put(`${URL}/user/me`, user)
        return res.data
    }
    catch(error: any)
    {
        if(error.response)
        {
            throw new Error("ERROR Code: " + error.response.status + "\nError message: " + error.response.data)
        }
    }  
}

export const useDeleteUser = async(email: String) =>
{
    const axiosHeader = getTokenHeader()

    try
    {
        const res = await axiosHeader.delete(`${URL}/user?email=${email}`)
        return res.data
    }
    catch(error: any)
    {
        if(error.response)
        {
            throw new Error("ERROR Code: " + error.response.status + "\nError message: " + error.response.data)
        }
    }  

}

export const useLogout = async() =>
{
    const axiosHeader = getTokenHeader()

    try{    
        const res = await axiosHeader.post(`${URL}/logout`)
        return res.data
    }
    catch(error: any)
    {
        if(error.response)
        {
            throw new Error("ERROR Code: " + error.response.status + "\nError message: " + error.response.data)
        }
    }  
}
