import React, {Component} from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses: [],
        }

        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount() {
        this.getHouses();
    }

    getHouses(){
        axios.get('/api/houses').then(res => {
            this.setState({houses: res.data,})
        })
    }

    deleteHouse(id){
        axios.delete(`api/houses/${id}`).then(res => {
            this.getHouses();
        })
    }

    render(){
        let {houses} = this.state
        let display = houses.map(house => {
            return (
                <div className='house-parent' key={house.id} > 
                    <House id={house.id} 
                        name={house.name} 
                        address={house.address} 
                        city={house.city} 
                        stateAbv={house.stateAbv} 
                        zip={house.zip} 
                        img={house.img}
                        mortgage={house.mortgage}
                        rent={house.rent}
                        deleteFn={this.deleteHouse}/>
                </div>
            )
        })
        return (
            <div className='dash-parent'>
                <div className='dash-content'>
                    <Link to='/wizard/step1' >
                        <button className='addNew'>Add New Property</button>
                    </Link>
                    {display}
                </div> 
            </div> 
        )
    }
}