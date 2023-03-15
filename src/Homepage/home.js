import{ React, useState, useEffect} from 'react';
//import StockGraph from '../stockChart';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Table } from 'react-bootstrap';  

import './home.css';
const Home = () => {
    const [data, setData] = useState([]);
   // const [keyword, setKeyword] = useState("");

    
  
    useEffect(() => {
        const fetchSuperstar = async () => {
            const response = await fetch(
                `https://dev.portal.tradebrains.in/api/superstar-list/`
            );
            const data = await response.json();
            console.log(data)
            setData(data);
        };
        fetchSuperstar();
    }, []);
    
  
    return (
      <div className='container'>
        <div className='justify-content-center'>
        <h1>SUPER STAR OF STOCK MARKET</h1>

        <Table striped bordered hover variant='light' responsive="lg">
          <thead>
            <tr>
              <th>NAME</th>
              <th>IMAGE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.name}>                
              <td>{item.name}</td>

                <td><img src={item.image}/></td>
                <td>{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        
        </div>

      </div>
    );
};

export default Home;
