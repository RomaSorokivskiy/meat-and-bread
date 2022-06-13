import { PureComponent } from "react";

const shortcastInsta = require('../images/header_insta.png')
const shortcastVk = require('../images/header_vk.png')
const shortcastEmail = require('../images/header_email.png')

const logo = require('../images/logo.png')

class Header extends PureComponent {
  render() {
    return (
      <div className="flex justify-between mt-10 h-[225px] border-b-2 border-black border-solid pl-20 pr-20">
          <div className="flex space-x-10 h-10">  
              <h3 className="text-xl text-white transition-all font-bold hover:text-red-100 hover:underline cursor-pointer">Главная</h3>
              <h3 className="text-xl text-white transition-all font-bold hover:text-red-100 hover:underline cursor-pointer">Доствка</h3>
              <h3 className="text-xl text-white transition-all font-bold hover:text-red-100 hover:underline cursor-pointer">Контакты</h3>
          </div>
          <img src= {logo} alt="logo" className='absolute left-[650px] -top-[0px]'/>
          <div>
              <div className="flex space-x-4">
                <h3 className="text-red-100 underline font-bold cursor-pointer">8 (812) 670-15-55</h3>
                <h1 className="text-white">Cart</h1>
              </div>

              <div className="flex justify-around mt-3">
                <img src={shortcastInsta} alt="insta" />
                <img src={shortcastVk} alt="vk" />
                <img src={shortcastEmail} alt="mail" />
              </div>
          </div>
      </div>
    )
  }    
}
export default Header; 
