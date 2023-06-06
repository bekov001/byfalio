import {useState} from 'react';
function TokenSearch({tokenSearch,setTokenSearch}){
    const [linkActive, setLinkActive] = useState(2);
    return (
        <div className={tokenSearch ? "token_search_modal " : "token_search_modal hidden"}>
        <div className="token_search_modal_header">
            <div className="token_search_modal_links">
                <div onClick={()=>{setLinkActive(1)}} className={linkActive==1 ? "token_search_modal_link token_search_modal_link_active": "token_search_modal_link"}>
                    Все
                </div>
                <div onClick={()=>{setLinkActive(2)}} className={linkActive==2 ? "token_search_modal_link token_search_modal_link_active": "token_search_modal_link"}>
                    <span>Избранное</span>
                </div>
            </div>
            <div onClick={()=>{setTokenSearch(false)}} className="token_search_modal_close">
                <img src="img/close.svg" alt=""/>
            </div>
        </div>
        <div className="token_search_modal_main">
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite star_active">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite star_active">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
            <div className="token_search_modal_main_row">
                <div className="token_search_modal_main_row_add_favorite">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11052 0.731349C8.48249 0.00731087 9.51751 0.00731313 9.88948 0.731352L11.7785 4.40836C11.9237 4.69099 12.1946 4.8878 12.5083 4.93855L16.5891 5.5989C17.3926 5.72893 17.7125 6.71328 17.1388 7.29079L14.2255 10.2237C14.0016 10.4491 13.8981 10.7675 13.9468 11.0815L14.5798 15.1667C14.7044 15.9711 13.8671 16.5794 13.1406 16.2123L9.451 14.3479C9.16741 14.2046 8.83259 14.2046 8.549 14.3479L4.85942 16.2123C4.13291 16.5794 3.29556 15.9711 3.4202 15.1667L4.05321 11.0815C4.10187 10.7675 3.9984 10.4491 3.77448 10.2237L0.861185 7.2908C0.28753 6.71329 0.607365 5.72893 1.41091 5.5989L5.49171 4.93855C5.80538 4.8878 6.07625 4.69099 6.22145 4.40836L8.11052 0.731349Z" fill="#5E6367"/>
                    </svg>
                </div>
                <div className="token_search_modal_main_row_name">
                    <img src="img/btc.svg" alt=""/>
                    <span>BTSUSDT</span>
                </div>
                <div className="token_search_modal_main_row_price">
                    27,818.00
                </div>
                <div className="token_search_modal_main_row_price_change color_red">
                    -1.89%
                </div>
                <div className="token_search_modal_main_row_supply">
                    578.92M(USD)
                </div>
            </div>
        </div>
    </div>
    );
}
export default TokenSearch