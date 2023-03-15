import React, { useEffect, useState } from "react";
import {Button, Table } from 'react-bootstrap';  

const Watchlist = () => {
    const [stocks, setStocks] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const fetchStocks = async () => {
            const response = await fetch(
                `https://dev.portal.tradebrains.in/api/search?keyword=${keyword}&length=5`
            );
            const data = await response.json();
            setStocks(data);
        };
        fetchStocks();
    }, [keyword]);

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleAddToWatchlist = (stock) => {
        setWatchlist([...watchlist, stock]);
    };

    const handleRemoveFromWatchlist = (stock) => {
        setWatchlist(watchlist.filter((item) => item.symbol !== stock.symbol));
    };
    const handleRemoveFromWatchlist1 = (stock) => {
        setWatchlist(watchlist.filter((item) => item.company !== stock.company));
    };
    return (

        <div className="container">
            <div className="justify-content-center">
                <h1 className="justify-content-center d-flex">Stock Watchlist</h1>
                <input
                    type="text"
                    value={keyword}
                    onChange={handleKeywordChange}
                    placeholder="Search by keyword"

                />
                <Table striped bordered hover variant='light' responsive="lg" >
                    <thead>
                        <tr>
                            <th>SYMBOL</th>
                            <th>NAME</th>

                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock) => (
                            <tr key={stock.symbol} >
                                <td>{stock.symbol}</td>
                                <td>{stock.company}</td>


                                <td>
                                    {watchlist.some((item) => item.symbol === stock.symbol) ? (
                                        <Button 
                                     variant="dark"
                                            onClick={() => handleRemoveFromWatchlist(stock)}
                                            disabled={watchlist.length === 1}
                                        >
                                            Remove
                                        </Button>
                                    ) : (
                                        <Button className="px-4" variant="primary" onClick={() => handleAddToWatchlist(stock)}>Add</Button>
                                    )}
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </Table>
                <h2>My Watchlist</h2>
                <   Table striped bordered hover variant='light' responsive="lg">
                    <thead>
                        <tr>
                            <th>SYMBOL</th>
                            <th>Name</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist.map((stock) => (
                            <tr key={stock.symbol}>
                                <td>{stock.symbol}</td>
                                <td>{stock.company}</td>
                                <td>
                                    <Button variant="dark"  onClick={() => handleRemoveFromWatchlist(stock)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Watchlist;
