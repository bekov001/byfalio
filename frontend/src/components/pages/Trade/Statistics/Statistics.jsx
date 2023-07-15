import React from 'react'

export default function Statistics({historyPnl, statiscticsShow, handleStatisticsClose}) {
  return (
    <div className={statiscticsShow ? "sidebar_menu_main" : "sidebar_menu_main hidden"} >

    <div className="sidebar_menu_main_news">
         <div className="sidebar_menu_main_news_head">
            <span>Статистика</span>
            
            <img className='sidebar_menu_main_news_head_btn_close' onClick={handleStatisticsClose} src="img/close.svg" alt=""/>
        </div>
        <div className="sidebar_menu_main_news_items">
        {historyPnl ?
            historyPnl.reverse().map((pos) => 
            <div className="sidebar_menu_main_news_item">
                <span style={{color:'white'}}>Perpetual {pos.position.leverage}x</span>
                <h5>{pos.position.ticker}</h5>
                <p style={{
                    color: (pos.position.type_of_pos === "LONG"? "green" : 'red'), fontWeight: 'heavy', fontSize: 15
                    }}>
                                {pos.position.type_of_pos}
                    </p>

                <p style={{color:'white', fontSize: 15, marginTop: '20px'}}>{new Date(pos.time).toISOString().substring(0, 10) + " " + new Date(pos.time).toISOString().substring(11, 16)}</p>
                <p style={{color:'white', fontSize: 15, marginTop: '20px', fontWeight: 'bold'}}>Pnl:   {pos.pnl.toFixed(2)}</p>
                
                <p style={{color:'white', fontSize: 15, marginTop: '20px', fontWeight: 'bold'}}>Size:   {(pos.position_size.toFixed(2))}</p>
            </div>)
        : "Nothing"}</div>
    </div>
</div>
  )
}
