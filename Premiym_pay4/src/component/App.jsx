import React,{useState,useEffect} from 'react'
import "./style.css"
import Premium_pay_img from "./Img/Premium_pay.svg"
import Icon_Button from "./Img/Icon_Button.svg"
import PremiumPay123 from "./Img/PremiumPay123.svg"
import Media from "./Img/vector.svg"
import Star from "./Img/star.svg"
import Appp from "./Img/App.svg"
import Icons from "./Img/sss.svg"
import Ipone from "./Img/Ipone.svg"
import Email from "./Img/Email.svg"
import rasm1 from "./Img/rasm1.png"
import rasm2 from "./Img/rasm2.png"
import rasm3 from "./Img/rasm3.png"
import rasm4 from "./Img/rasm4.png"
import {CiCircleMinus} from "react-icons/ci"
import Img5 from "./Img/Featured Icons.svg"
import {IoIosAddCircleOutline} from "react-icons/io"
import {MdOutlineMail} from "react-icons/md"
import Group from "./Img/Group.png"
import Social from "./Img/Social icon.png"
import Alisher from "./Img/Alisher.svg"
import Muhammadumar from "./Img/Muhammadumar.svg"
import Xurshid from "./Img/Xurshid.svg"
import Muhammadjon from "./Img/Muhammadjon.svg"
import instagram from "./Img/instagram.svg"
import Facebook from "./Img/Facebook.svg"
import Email_icons_id from "./Img/Email_icons_id.svg"
import tel from "./Img/tel.svg"
import lokatsiya from "./Img/Lokacsiya.svg"
import Chiziq from "./Img/Chiziq.png"
const App=() => {
  const [screenWidth,setScreenWidth]=useState(window.innerWidth)
  const handleResize=() => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {

    window.addEventListener('resize',handleResize)

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[screenWidth])
  const [divHeight,setDivHeight]=useState(100)
  const [count,setCount]=useState(<IoIosAddCircleOutline />)

  const toggleHeight=() => {
    setDivHeight(divHeight===100? 50:100)
    setCount(count==<IoIosAddCircleOutline />?<CiCircleMinus />:<IoIosAddCircleOutline/>)
  }
  return (
    <>
      <div className='user5487'>
        <div className='parent'>
          <div className='premium_svg'>
            {screenWidth>=768? (
              <img className='Icon_Button' src={Premium_pay_img} alt="#" />
            ):(
              <>
                <img className='Icon_Button' src={PremiumPay123} alt="#" />

              </>
            )}
          </div>
          <div className='parent_chaild'>
            {screenWidth>=865? (
              <>
                <p className='premium_text'>Главная</p>
                <p className='premium_text'>Функции</p>
                <p className='premium_text'>Вопросы</p>
                <p className='premium_text'>Команда</p>
                <p className='premium_text'>Контакт</p>
                <button className='Скачать'>Скачать</button>

              </>
            ):(
              <>
                <button className='Скачать'>Скачать</button>
                <img className='Icon_Button' src={Icon_Button} alt="#" />
              </>

            )}
          </div>

        </div>
        <div className='qwerty'>
          <div className='parent2'>
            <div className="Parent_chaild_id">
              <div className="div1">
                <p className='parentchaild_img'>Купите любимый товар<><br /></> прямо сейчас</p>
                <p className='parentchaild_i'>Покупайте товары удобно и легко через нас</p>
              </div>
              <div className="div2">
                <button className='Скачать2'>Скачать</button>
                <div className='media'>
                  <img src={Media} alt="" className='media132' /> <span>Смотреть видео</span>
                </div>
              </div>
              <div className='div3'>
                <p>Нам доверяют более 1 миллиона клиентов</p><br />
                <img src={Star} className='Star' alt="#" />
                <img src={Star} alt="#" />
                <img src={Star} alt="#" />
                <img src={Star} alt="#" />
              </div>
            </div>
          </div>
          <div className='iphone'>
            <img className='Appp' src={Appp} alt="" />
          </div>
        </div>
      </div>
      <div className='user3256'>
        <div className='App_chaild_id'>
          <p className='App_text'>Наши возможности</p>
          <p className='App_text_id1'>Наши ключевые преимущества</p>
          <p className='App_text_id2'>Наши услуги разработаны с учетом ваших конкретных потребностей и целей.</p>
        </div>
      </div>
      <div className='user7896'>
        <div className='user_name'>
          <div className='ico_id'>
            <div className='icons_img'> <img src={Icons} alt="" /></div>
            <p id="icons_h1">Честный</p>
            <p>За просрочку платежа проценты не начисляются</p>
          </div>
          <div className='ico_id'>
            <div className='icons_img'> <img src={Ipone} alt="" /></div>
            <p id="icons_h1">Быстро и удобно</p>
            <p>Зарегистрируйтесь и совершайте покупки мгновенно через приложение</p>
          </div>
          <div className='ico_id'>
            <div className='icons_img1'> <img src={Email} alt="" /></div>
            <p id="icons_h1">Круглосуточная поддержка</p>
            <p>Получите немедленные ответы на любые вопросы или проблемы</p>
          </div>
        </div>
        <div className='user_name456'>
          <div className='rasm1'>
            <img className='rasmm1' src={rasm1} alt="" />
            <img className='rasmm2' src={rasm2} alt="" />
          </div>
          <div className='rasm2'>
            <img className='rasmm3' src={rasm3} alt="" />
            <img className='rasmm4' src={rasm4} alt="" />
          </div>
        </div>
      </div>
      <div className='User95184'>
        <div className='Name_id2'>
          <div className='Name_id3'>
            <p className='text_button'>Упростите свои покупки с помощью Premium Pay: Начните прямо сейчас</p>
            <p className='text_buttonn'>Мы всегда заботимся о вас</p>
            </div>
       
        </div>
        <div className='ido'>
          <div className='user_ds'> <img src={Img5} alt="" /><span>Верхний лимит</span></div>
          <div className='user_dss'>  <img src={Img5} alt="" /><span>Быстрое оформление</span></div>
          <div className='user_dsa'> <img src={Img5} alt="" /><span>Период 12 месяцев</span></div>
        </div>
        <div className='just'>
          <button className='ide'>Скачать</button>
        </div>
      </div>
     <div className='user_user'>
  <div className='ide1'>
        <div className='ide3'>
          <div className='id4'>
            <p className='vopros'>Вопросы</p>
          </div>
          <div className='id5'>
            <p className='pro'>Часто задаваемые вопросы</p>
            <p className='proo'>Мы постарались ответить насамые распространенные вопросы, если<br />  у вас есть дополнительные, свяжитесь с нашей дружной командой.</p>
          </div>

        </div>
        <div className='id6'>
            <div className='pro1' >
             <div className='p7894'>
                <p>1.На какой срок дается лимит?</p>
             </div>
            </div>
          <div className='pro1'>
            <p id='h12'>2.Что делает система Premium Pay?</p>
          </div>
          <div className='pro1'>
            <p id='h12'>3.Что будет, если деньги не выплатят вовремя?</p>
          </div>
          <div className='pro1'>
            <p id='h12'>4.Есть ли штрафы и проценты?</p>
          </div>
          <div className='pro1'>
            <p id='h12'>5.Почему существует возрастное ограничение для клиента?</p>
          </div>

        </div>
        
        <div className='email'>
          <p className='email_icons'>Остались вопросы?</p>
          <p className='email_icons_id'>Нам жаль, что мы не смогли предоставить вам ту информацию,<br /> которую вы искали. Пожалуйста, свяжитесь с нами, и<br /> мы будем рады помочь.</p>
          <div className='ema'>
            < MdOutlineMail style={{color:"white"}}/> <p style={{color:"white"}}>Связаться с нами</p>
          </div>
        </div>
      </div>
     </div>
<div className='user_name751246'>
        <div className='partnyor'>
          <div id="user_id">
            <p className='vopros'>Команда</p>
          </div>
          <div className='fyo'>
            <p className='fyo_text'>Знакомство c героями</p>
            <p className='fyo_text1'>Ответственная команда c большим потенциалом, глубокими знаниями и<br />острым умом.Мы предлагаем свои знания и умения.</p>
          </div>
          <div className='dd'>

         <div className='dd1'>
   
            <div className='partnor1'>
              <img src={Alisher} alt="" />
              <p className='p_text'>Алишер Баҳодиров</p>
              <p className='p_text1'>Разработчик Flutter</p>
              <p className='p_text2'>Обладатель высокого энтузиазма и острого ума</p>
              <div className='gt'>    <img src={Group} alt="#" />
                <img src={Social} alt="#" /></div>
            </div>


            <div className='partnor1'>
              <img src={Muhammadumar} alt="" />
              <p className='p_text'>Муҳаммадумар Давлатов</p>
              <p className='p_text1'>Разработчик Flutter</p>
              <p className='p_text2'>Обладатель высокого энтузиазма и острого ума</p>
              <div className='gt'>    <img src={Group} alt="#" />
                <img src={Social} alt="#" /></div>
            </div>

         </div>


           <div className='dd2'>
              <div className='partnor1'>
                <img src={Xurshid} alt="" />
                <p className='p_text'>Хуршид Исмоилов</p>
                <p className='p_text1'>Руководитель группы</p>
                <p className='p_text2'>Обладатель высокого энтузиазма и острого ума</p>
                <div className='gt'>    <img src={Group} alt="#" />
                  <img src={Social} alt="#" /></div>
              </div>



              <div className='partnor1'>
                <img src={Muhammadjon} alt="" />
                <p className='p_text'>Муҳаммаджон Муродуллаев</p>
                <p className='p_text1'>Фронтенд разработчик</p>
                <p className='p_text2'>Обладатель высокого энтузиазма и острого ума</p>
                <div className='gt'>    <img src={Group} alt="#" />
                  <img src={Social} alt="#" /></div>
              </div>

           </div>

          </div>
        </div>
</div>

      <div className='message'>
        <div className='message1'>
          <p className='message_id'>Поделитесь с нами своими вопросами<br /> и предложениями</p>
          <p className='message_name' >Наша ответственная и быстрая команда ответит вам как<br /> можно скорее</p>
          <div className='join'>
            <input type="text" className='poo' placeholder='Вопросы и предложения' /> <button className='putton_name'>Отправлять</button>
          </div>
        </div>
      </div>
        <div className='info'>
          <div className='info_chaild'>
          <div className='info1'>
            <img className='premium_ty1' src={Premium_pay_img} alt="" />
            <p style={{marginLeft: "2%"}}>Нам нравится работать с амбициозными людьми.<br /> Давайте теперь вместе построим что-то великое.</p>

            <div className='instagram'>
              <img src={instagram} alt="" />
              <img src={Facebook} alt="" />
              <img src={Group} alt="" />
              <img src={Social} alt="" />
            </div>
          </div>

          <div className='info2'>
            <p className='info_text' >Компания</p>
            <p className='info_text2'>Главная</p>
            <p className='info_text2'>Вопросы</p>
            <p className='info_text2'>Команда</p>
            <p className='info_text2'>Контакт</p>
          </div>

          </div>
        <div className='info_chaild2'>
          <div className='info3'>
            <p className='ws'>Поддерживать</p>
            <p className='info_text2'>Центр помощи</p>
          </div>

          <div className='info4'>
            <p className='info_text'>Связаться с нами</p>
            <div className='bb1' ><img src={Email_icons_id} alt="" /> <p>mail@premiumpay.uz</p></div>
            <div className='bb1' ><img src={tel} alt="" /><p>+99893 503 40 00</p></div>
            <div className='bb1' ><img src={lokatsiya} alt="" /> <p>mail@premiumpay.uz</p></div>
            <div>
            </div>
          </div>
        </div>
        </div>
      <img src={Chiziq} alt="" />
    </>
  )
}
export default App
