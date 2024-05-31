import { Button, Container, TextField, Typography } from "@mui/material"
import Navbar from "../../components/Navbar"
import { useState } from "react"
import { Checkbox } from "@mui/material"
import { useGetCurrentUser } from "../../hooks/UserHooks"
import { usePostItem } from "../../hooks/ItemHooks"
import { usePostOffer } from "../../hooks/OfferHooks"
import { useNavigate } from "react-router-dom"




const OfferForm = () => {
    //Item
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)

    //Offer
    const [count, setCount] = useState(0)
    const [auction, setAuction] = useState(false)
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    const nav = useNavigate()
  
    const onSubmit = async(e:any) => { 
        e.preventDefault()

        const user = await useGetCurrentUser()

        const itemData = {
            name: name,
            description: desc,
            price: price,
        }

        const item = await usePostItem(itemData);

        if(item)
        {
            const offerData = {
                itemid: item.id,
                itemcount: count,
                auction: auction,
                startdate: start,
                enddate: end,
                sellerid: user.id
            }

            const offer = await usePostOffer(offerData)

            if(!offer)
            {
               alert("oh no")
            }

            nav("/profile")
        }
    }

    return (
    <>
        <Navbar/>
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <form onSubmit={onSubmit}>
                <Typography>
                    Item name:
                </Typography>
                <TextField 
                    value={name}
                    onChange={(e:any) => {setName(e.target.value)}}
                    required={true}
                />
                <Typography>
                    Item description:
                </Typography>
                <TextField 
                    value={desc}
                    onChange={(e:any) => {setDesc(e.target.value)}}
                    required={true}
                />
                <Typography>
                    Item price:
                </Typography>
                <TextField 
                    type="number"
                    value={price}
                    onChange={(e:any) => {setPrice(parseInt(e.target.value))}}
                    required={true}
                />
                <Typography>
                    Item count:
                </Typography>
                <TextField 
                    value={count}
                    onChange={(e:any) => {setCount(e.target.value)}}
                    required={true}
                />
                <Typography>
                    Is Auction?
                </Typography>
                <Checkbox
                    checked={auction}
                    onChange={() => {setAuction(!auction)}}
                />
                {auction && <>
                        <Typography>
                            Start Date:
                        </Typography>
                        <TextField 
                            type="date"
                            value={start}
                            onChange={(e:any) => {setStart(e.target.value)}}
                            required={true}
                        />
                        <Typography>
                            End Date:
                        </Typography>
                        <TextField 
                            type="date"
                            value={end}
                            onChange={(e:any) => {setEnd(e.target.value)}}
                            required={true}
                        />
                    </>
                }<br/>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    </>
  )
}

export default OfferForm