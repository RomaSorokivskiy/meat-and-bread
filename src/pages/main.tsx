import { PureComponent } from "react";

import ClubsItem from "../components/clubsItem"  

const img = require('../images/club_img1.png')

class Main extends PureComponent<any, any> {
  constructor(props:any) {
    super(props)
    this.state = {
      ClubsItems: [
        {
          img: `${img}`,
          name: 'Мясной Клуб',
          place: 'ул.Ворошилова 3'
        }
      ]
    }
  }
  render() {
    return(
      <div className="pl-20 pr-20 mt-[135px]">
        <h2>Мясные клубы</h2>
        <div>
          {this.state.ClubsItems.map((el: any) => <ClubsItem key={el.name} item={el}/>)}
        </div>
      </div>
    )
  }
}
export default Main;
