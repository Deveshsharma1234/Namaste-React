import React from 'react';
import { USER_API } from '../utils/constants';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
            count: 0,
            count2: 1,
            dataRed: "",
        }
    }
    componentDidMount() {
        const fetchUser = async () => {
            const data = await fetch(USER_API + this.props.name);//data is not in json format , its an object
            const dataRed1 = await data.json();
            this.setState({ dataRed: dataRed1 });
          console.log("Inside dataRes component Did Mount"+dataRed1.name);
        };
        fetchUser();

    };



    render() {
        const { name, id, type,avatar_url } = this.state.dataRed || {};

        return (
            <div className="userCard">
                <h1>Count : {this.state.count}</h1>
                <input type="button" value="increment" onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                    this.setState({ count2: this.state.count2 + 1 });
                }} />
                <h1>Count : {this.state.count}</h1>
                <h3>Count2 : {this.state.count2}</h3>


                <div className="img">
                    <img src={avatar_url} alt="" />
                </div>
                <div className="info">
                    <h2>{name}</h2>
                    <h3>{id}</h3>
                    <h3>{type}</h3>


                </div>
            </div>
        )
    }
}

export default UserClass;