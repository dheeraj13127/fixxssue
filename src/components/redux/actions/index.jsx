import axios from "axios"
import toast from "react-hot-toast"
import { FETCH_ISSUES } from "../constants/constants"



export const fetchIssues=(pageNum)=>async(dispatch,getState)=>{
    await axios.get("https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues",{
        params:{
            per_page:50,
            page:pageNum
        }
    })
    .then(res=>{
        dispatch({
            type:FETCH_ISSUES,
            payload:res.data
        })
    })
    .catch(err=>toast.error("Something went wrong !"))
}