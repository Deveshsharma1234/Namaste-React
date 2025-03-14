import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
        this.state ={
            count : 0,
            count2: 1,
        }
    }
    
    render(){
        const{name,location,contactUs} = this.props;
        return(
            <div className="userCard">  
            <h1>Count : {this.state.count}</h1>
            <input type="button" value="increment" onClick={()=>{
                this.setState( {count :this.state.count + 1});
                this.setState({count2: this.state.count2 +1});
            }} />
                <h1>Count : {this.state.count}</h1>
                <h3>Count2 : {this.state.count2 }</h3>
                
                
            <div className="img">
                <img src="img" alt="" />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h3>{contactUs}</h3>
    
    
            </div>
           </div>
        )
    }

}
export default UserClass;