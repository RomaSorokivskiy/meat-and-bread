import { PureComponent } from "react";

class ClubsItem extends PureComponent <any, any>{
  render() {

    const name = this.props.item.name
    const place = this.props.item.place
    const img = this.props.item.img

    return(
      <div className="w-[400px] h-[400px] rounded-lg bg-transparent">
        <img src={img} alt={'img:' + name } className="border-t-5 border-l-5 border-r-5 border-red-100 rounded-tr-lg rounded-tl-lg"/>
        <div className="bg-black h-[157px] rounded-bl-lg rounded-br-lg flex flex-col justify-center items-center">
          <h4 className="text-white">{name}</h4>
          <p className="text-white">{place}</p>
        </div>
      </div>  
    ) 
  }
}
export default ClubsItem
