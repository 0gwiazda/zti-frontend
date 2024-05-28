import axios from 'axios'

const URL = 'http://localhost:8080/item'

const token = (localStorage.hasOwnProperty("token")) ? localStorage.getItem("token") : ""

const jsonEncodingHeader = (token !== "") ? {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
    charset: "utf-8",
} : {
    "Content-Type": "application/json",
    charset: "utf-8",
}

const axiosHeader = axios.create({
    headers: {...jsonEncodingHeader}
})

export const useGetItem = async(id:number) => {
    const res = await axiosHeader.get(`${URL}/${id}`)

    if(res.status != 200)
    {
        throw new Error("Error: " + res.status)
    }

    return res.data;
}