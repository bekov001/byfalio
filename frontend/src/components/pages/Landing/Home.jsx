import React from 'react';
// import Link from ""
import { Link } from "react-router-dom";
function Home() {
  return (  
    <div className="landing_wrap">
      <div className="landing_header">
        <div className="df landing_container">
            <div className="landing_header_logo">
                <img src="/img/landing/logo.svg" alt="" />
            </div>
            <div className="landing_header_links">
                <div className="landing_header_link">
                  Фьючерсы
                </div>
                <div className="landing_header_link">
                VIP - программа
                </div>
                <div className="landing_header_link">
                Рынок
                </div>
            </div>
            <div className="landing_header_right">
                <Link to="/login"><div className="landing_header_sign border_gradient2">
                   Войти
                </div></Link>
                <Link to="/register"><div className="landing_header_register">
                  Регистрация
                </div></Link>
                <div className="landing_header_lang">
                  <div className="landing_header_lang_active">
                    <span>RU</span>
                    <img src="/img/landing/arrow_down.svg" alt="" />
                  </div>
                </div>
            </div>
        </div>
        </div>

      <div className="landing_main">
          <div className="landing_container">
              <div className="landing_main_text">
                  <h1>By futures and leverage</h1>
                  <h2>- go to the moon</h2>
                  <div className="landing_main_text_row">
                      <div className="landing_main_text_row_item">
                        <span>Торг. Объём, 24Ч (USD)</span>
                        <p>13,099,845,835</p>
                      </div>
                      <div className="landing_main_text_row_item">
                        <span>Сумма откр. позиций (USD)</span>
                        <p>4,812,277,552</p>
                      </div>
                      <div className="landing_main_text_row_item">
                        <span>Кол-во контрактов</span>
                        <p>180+</p>
                      </div>
                  </div>
                  <div className="landing_main_text_go">
                      <Link to='/register'>
                      <div className="landing_main_text_go_btn">
                        Присоединяйтесь к ByFalio
                      </div>
                      </Link>
                      <div className="landing_main_text_go_mob">
                        <img src="/img/landing/appstore.svg" alt="" />
                      </div>
                      <div className="landing_main_text_go_mob">
                        <img src="/img/landing/googleplay.svg" alt="" />
                      </div>
                  </div>
              </div>
              <div className="landing_main_img">
                  <img src="/img/landing/main.png" alt="" />
              </div>
              <div className="landing_main_slider">
                  <div className="landing_main_slider_arrow landing_main_slider_arrow_prev">
                      <img src="/img/landing/slider_prev.svg" alt="" />
                  </div>
                  <div className="landing_main_slider_wrap">
                      <div className="landing_main_slide">
                          <img src="/img/landing/slide1.png" alt="" />
                      </div>
                      <div className="landing_main_slide">
                          <img src="/img/landing/slide2.png" alt="" />
                      </div>
                      <div className="landing_main_slide">
                          <img src="/img/landing/slide3.png" alt="" />
                      </div>
                  </div>
                  <div className="landing_main_slider_arrow landing_main_slider_arrow_next">
                      <img src="/img/landing/slider_next.svg" alt="" />
                  </div>                 
              </div>
          </div>
      </div>

      <div className="landing_stats">
          <div className="landing_container df">
              <div className="landing_stats_left">
                  <div className="landing_stats_left_img">
                    <img src="/img/landing/stats.png" alt="" />
                  </div>
                  <div className="landing_stats_left_text">
                    <span>130+ стран</span>
                    <p>Платформа поддерживает 13 языков, чтобы трейдеры со всего мира могли торговать с комфортом и зарабатывать в любое время</p>
                  </div>
              </div>
              <div className="landing_stats_right">
                  <div className="landing_stats_right_item">
                      <p>88М +</p>
                      <span>Торговых счетов</span>
                  </div>
                  <div className="landing_stats_right_item">
                      <p>30М +</p>
                      <span>Операций в месяц</span>
                  </div>
                  <div className="landing_stats_right_item">
                      <p>$16М +</p>
                      <span>Средняя сумма ежемесячных выплат</span>
                  </div>
                  <div className="landing_stats_right_item">
                      <p>$211М +</p>
                      <span>Общий оборот средств в месяц</span>
                  </div>
              </div>
          </div>
      </div>

      <div className="landing_exp">
          <div className="landing_container">
              <div className="landing_exp_wrap">
                  <div className="landing_exp_title">
                      <span>Для опытных трейдеров</span>
                      <p>Путь к профессиональной торговле на ByFalio</p>
                  </div>
                  <div className="landing_exp_item">
                    <img src="/img/landing/exp_item1.svg" alt="" />
                    <span>Безопасность мирового уровня</span>
                    <p>Защитите себя от убытков с помощью механизма двойного ценообразования ByFalio, страхового фонда, холодного HD-кошелька и многого другого</p>
                  </div>
                  <div className="landing_exp_item">
                    <img src="/img/landing/exp_item2.svg" alt="" />
                    <span>Поддержка 24/7</span>
                    <p>Найдите индивидуальное решение своих торговых задач за одну минуту. Наши менеджеры всегда на связи и готовы в любое время помочь решить ваш вопрос</p>
                  </div>
                  <div className="landing_exp_item">
                    <img src="/img/landing/exp_item3.svg" alt="" />
                    <span>Надежность, проверенная временем</span>
                    <p>Оцените высокоточную торговлю на движке ByFalio, производящем до 100 тыс. транзакций в секунду</p>
                  </div>
                  <div className="landing_exp_item">
                    <img src="/img/landing/exp_item4.svg" alt="" />
                    <span>Лучшая ликвидность</span>
                    <p>Берите больше от сделок даже во время рыночных колебаний благодаря значительной глубине рынка ByFalio</p>
                  </div>
                  <div className="landing_exp_item">
                    <img src="/img/landing/exp_item5.svg" alt="" />
                    <span>Кредитное плечо 500х</span>
                    <p>Увеличьте свой личный доход в несколько раз быстрее</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="landing_market">
          <div className="landing_container">
              <div className="landing_market_wrap">
                  <div className="landing_market_main">
                  <div className="landing_market_main_row">
                      <div className="landing_market_main_header landing_market_main_item landing_market_main_name">
                       Название
                      </div>
                      <div className="landing_market_main_header landing_market_main_item landing_market_main_price">
                      Цены
                      </div>
                      <div className="landing_market_main_header landing_market_main_item landing_market_main_dynamic">
                      Динамика
                      </div>
                      <div className="landing_market_main_header landing_market_main_item landing_market_main_graph">
                      Рынок
                      </div>
                      <div className="landing_market_main_header landing_market_main_item landing_market_main_btns">
                      </div>
                  </div>
                    <div className="landing_market_main_row">
                      <div className="landing_market_main_item landing_market_main_name">
                          <img src="/img/landing/btc.svg" alt="" />
                          <span>Bitcoin</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_price">
                          <span>29,103.69 USDT</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_dynamic landing_market_main_dynamic_plus">
                          <span>+23.32%</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_graph">
                         <img src="/img/landing/graph_green.svg" alt="" />
                      </div>
                      <div className="landing_market_main_item landing_market_main_btns">
                          <div className="landing_market_main_btn landing_market_main_btn_long">
                            Long
                          </div>
                          <div className="landing_market_main_btn landing_market_main_btn_short">
                            Short
                          </div>
                      </div>
                    </div>
                    <div className="landing_market_main_row">
                      <div className="landing_market_main_item landing_market_main_name">
                          <img src="/img/landing/btc.svg" alt="" />
                          <span>Bitcoin</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_price">
                          <span>29,103.69 USDT</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_dynamic landing_market_main_dynamic_minus">
                          <span>-23.32%</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_graph">
                         <img src="/img/landing/graph_red.svg" alt="" />
                      </div>
                      <div className="landing_market_main_item landing_market_main_btns">
                          <div className="landing_market_main_btn landing_market_main_btn_long">
                            Long
                          </div>
                          <div className="landing_market_main_btn landing_market_main_btn_short">
                            Short
                          </div>
                      </div>
                    </div>
                    <div className="landing_market_main_row">
                      <div className="landing_market_main_item landing_market_main_name">
                          <img src="/img/landing/btc.svg" alt="" />
                          <span>Bitcoin</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_price">
                          <span>29,103.69 USDT</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_dynamic landing_market_main_dynamic_plus">
                          <span>+23.32%</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_graph">
                         <img src="/img/landing/graph_green.svg" alt="" />
                      </div>
                      <div className="landing_market_main_item landing_market_main_btns">
                          <div className="landing_market_main_btn landing_market_main_btn_long">
                            Long
                          </div>
                          <div className="landing_market_main_btn landing_market_main_btn_short">
                            Short
                          </div>
                      </div>
                    </div>
                    <div className="landing_market_main_row">
                      <div className="landing_market_main_item landing_market_main_name">
                          <img src="/img/landing/btc.svg" alt="" />
                          <span>Bitcoin</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_price">
                          <span>29,103.69 USDT</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_dynamic landing_market_main_dynamic_minus">
                          <span>-23.32%</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_graph">
                         <img src="/img/landing/graph_red.svg" alt="" />
                      </div>
                      <div className="landing_market_main_item landing_market_main_btns">
                          <div className="landing_market_main_btn landing_market_main_btn_long">
                            Long
                          </div>
                          <div className="landing_market_main_btn landing_market_main_btn_short">
                            Short
                          </div>
                      </div>
                    </div>
                    <div className="landing_market_main_row">
                      <div className="landing_market_main_item landing_market_main_name">
                          <img src="/img/landing/btc.svg" alt="" />
                          <span>Bitcoin</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_price">
                          <span>29,103.69 USDT</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_dynamic landing_market_main_dynamic_plus">
                          <span>+23.32%</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_graph">
                         <img src="/img/landing/graph_green.svg" alt="" />
                      </div>
                      <div className="landing_market_main_item landing_market_main_btns">
                          <div className="landing_market_main_btn landing_market_main_btn_long">
                            Long
                          </div>
                          <div className="landing_market_main_btn landing_market_main_btn_short">
                            Short
                          </div>
                      </div>
                    </div>
                    <div className="landing_market_main_row">
                      <div className="landing_market_main_item landing_market_main_name">
                          <img src="/img/landing/btc.svg" alt="" />
                          <span>Bitcoin</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_price">
                          <span>29,103.69 USDT</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_dynamic landing_market_main_dynamic_minus">
                          <span>-23.32%</span>
                      </div>
                      <div className="landing_market_main_item landing_market_main_graph">
                         <img src="/img/landing/graph_red.svg" alt="" />
                      </div>
                      <div className="landing_market_main_item landing_market_main_btns">
                          <div className="landing_market_main_btn landing_market_main_btn_long">
                            Long
                          </div>
                          <div className="landing_market_main_btn landing_market_main_btn_short">
                            Short
                          </div>
                      </div>
                    </div>
                  </div>

                  <div className="landing_market_more">
                    Смотреть весь рынок
                  </div>
              </div>
          </div>
      </div>

      <div className="landing_footer">
          <div className="landing_footer_links">
          <div className="landing_container df jcs">
               <div className="landing_footer_link">
                  <span>Торговля</span>
                  <p>Быстрый обмен</p>
                  <p>Рынок</p>
                </div>
                <div className="landing_footer_link">
                  <span>Продукты и сервисы</span>
                  <p>WhiteBIT Earn</p>
                  <p>WhiteBIT Token</p>
                </div>
                <div className="landing_footer_link">
                  <span>Информация</span>
                  <p>О компании</p>
                  <p>FAQ</p>
                </div>
                <div className="landing_footer_link">
                  <span>Документация</span>
                  <p>API</p>
                  <p>Пользовательское соглашение</p>
                </div>
                </div>
          </div>
          <div className="landing_footer_bottom">
          <div className="landing_container df">
              <div className="landing_footer_bottom_logo">
                <img src="/img/landing/logo.svg" alt="" />
              </div>
              <div className="landing_footer_bottom_cpy">
                  © 2023 ByFalio.com. Все права защищены
              </div>
              <div className="landing_footer_bottom_lang">
                  <div className="landing_footer_bottom_lang_active">
                    <span>RU</span>
                    <img src="/img/landing/arrow_down.svg" alt="" />
                  </div>
              </div>
          </div>
          </div>
        </div>

    </div>
  );

}
export default Home;
