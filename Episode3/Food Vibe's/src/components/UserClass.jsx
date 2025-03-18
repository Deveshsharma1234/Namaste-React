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
            <div className="userCard bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6">
              {/* Counter Section */}
              <div className="counter-section mb-6">
                <h1 className="text-xl font-semibold text-gray-800">Count: {this.state.count}</h1>
                <input
                  type="button"
                  value="Increment"
                  onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                    this.setState({ count2: this.state.count2 + 1 });
                  }}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all"
                />
                <h1 className="text-xl font-semibold text-gray-800 mt-4">Count: {this.state.count}</h1>
                <h3 className="text-lg text-gray-700 mt-2">Count2: {this.state.count2}</h3>
              </div>
          
              {/* User Info Section */}
              <div className="user-info-section">
                <div className="img">
                  <img
                    src={avatar_url}
                    alt="User Avatar"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="info mt-4">
                  <h2 className="text-xl font-semibold text-gray-800 truncate">{name}</h2>
                  <h3 className="text-lg text-gray-700 mt-2">{id}</h3>
                  <h3 className="text-lg text-gray-700 mt-2">{type}</h3>
                </div>
              </div>
            </div>
          );
    }
}

export default UserClass;