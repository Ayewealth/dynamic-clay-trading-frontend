import React, { useEffect, useState } from 'react'

import "./LiveMarket.css"

const LiveMarket = () => {
    const [coins, setCoins] = useState([])

    const getCryptocurrency = async () => {
        try {
            let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=7", {
                method: "GET",
                headers: {
                    accept: 'application/json',
                    'x-cg-demo-api-key': 'CG-mqgYR6eBEgbi5s68ALvgYDHK'
                }
            })

            const data = await response.json()

            if (response.ok) {
                setCoins(data)
            } else {
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCryptocurrency()
    }, [coins])

    return (
        <div className='small__section' id='live_market'>
            <div className="container">
                <div className="livemarket__container">
                    <div className="livemarket__head">
                        <h3>Live Market</h3>
                        <h2>Crypto Live Exchange Rates <span>Todays</span></h2>
                    </div>
                    <div className="livemarket__table">
                        <table>
                            <tr>
                                <th>Coin Assests</th>
                                <th>Last Price</th>
                                <th>Market Cap</th>
                                <th>Price Change in %</th>
                                <th>Price Change in 24h</th>
                            </tr>
                            {coins.map((coin) => (
                                <tr key={coin.id}>
                                    <td>
                                        <div className='livemarket__table-coin'>
                                            <img src={coin.image} alt={coin.name} width={40} />
                                            <div>
                                                <p>{coin.name}</p>
                                                <span>{coin.symbol}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='c_price'>
                                            {coin.current_price}
                                        </p>
                                    </td>
                                    <td>
                                        <p className='c_price'>{coin.market_cap}</p>
                                    </td>
                                    <td>
                                        <p className='p_chang'>{coin.price_change_percentage_24h}%</p>
                                    </td>
                                    <td>
                                        <p className='c_price'>
                                            {coin.price_change_24h}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveMarket