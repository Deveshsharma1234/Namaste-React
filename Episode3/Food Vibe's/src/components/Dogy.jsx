

import { useState , useEffect } from 'react';
const Dogy = ()=>{
    const [dog, setDog] = useState(null);
    useEffect(()=>{
        const fetchDog = async ()=>{
       const dogData = await fetch("https://dog.ceo/api/breeds/image/random");
         const dogJson = await dogData.json();;
            console.log(dogJson);
            setDog(dogJson.message);
        }
        fetchDog();
        console.log("Dog API called");

    },[])
    
    return (
        <div className="dog-img">
            <img src={dog} alt="dog" />
        </div>
    )
}

export default Dogy;
