import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

export const useRestrauntMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
        console.log(resInfo)
        
    },[])

    const fetchMenu = async()=>{
        let menu = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        menu = await menu.json();
        console.log(menu);
        setResInfo(menu.data);
    }
    return resInfo;

}