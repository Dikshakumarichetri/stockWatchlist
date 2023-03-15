import React, { useEffect, useState } from "react";

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
                <table>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Name</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock) => (
                            <tr key={stock.symbol} >
                                <td>{stock.symbol}</td>
                                <td>{stock.company}</td>


                                <td>
                                    {watchlist.some((item) => item.symbol === stock.symbol) ? (
                                        <button
                                            onClick={() => handleRemoveFromWatchlist(stock)}
                                            disabled={watchlist.length === 1}
                                        >
                                            Remove
                                        </button>
                                    ) : (
                                        <button onClick={() => handleAddToWatchlist(stock)}>Add</button>
                                    )}
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <h2>My Watchlist</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist.map((stock) => (
                            <tr key={stock.symbol}>
                                <td>{stock.symbol}</td>
                                <td>{stock.company}</td>
                                <td>{stock.priceInfo}</td>
                                <td>
                                    <button onClick={() => handleRemoveFromWatchlist(stock)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Watchlist;
