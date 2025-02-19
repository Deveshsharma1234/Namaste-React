const Check = ()=>{
    return<>
    <h id="check">
        Hy this is testing of component composition.
    </h>
    
    </>
}


const Test2 = ()=>{
    return <>

    <div id="container">
        <Check/>
        <h1 id="heading">
            This is a Test 2 Component Heading inside Contaiern.
        </h1>
    </div>
    
    </>
}
export default Test2;