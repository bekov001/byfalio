import React from 'react'

export default function Positions({pos, tokenPrice}) {
  return (
    <div>
            {pos.map(position=> 
                    <div>
                    <div className='key'>
        <div className='card'>
            <p>BTCUSDT {position.type_of_pos} {position.leverage}x</p>
            <p>Количесство: {position.quantity_usdt}$</p>
            {position.type_of_pos == 'LONG' && 
            <p>Нереализованный pnl { (((tokenPrice - position.open_price) / position.open_price) * 10 * position.quantity_usdt).toFixed(2)}$</p>
            }
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <p style={{marginRight: '15px'}}>Цена входа: { position.open_price }</p>
                
                <p style={{marginRight: '15px'}}>Маржа: { position.quantity_usdt }$</p>
                <p style={{marginRight: '15px'}}>Рыночная цена: { tokenPrice }</p>
            </div>
                 {/* <p>BTCUSDT {position.type} </p>
                 <p>Кросс 10x</p> 
                 <p>Количесство: {position.quantity}$</p> */}
            </div> 
    </div>
                </div>
            )}
    </div>
  )
}