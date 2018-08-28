import React, {Component} from 'react';
import { connect } from 'react-redux';

class HorsesList extends Component {

  render() {

    console.log(this.props);
    return (
      <ul className="col-md-4">
        {
          this.props.myhorses.map(horse => {
            return <li className="list-group-item" key={horse.id}>{horse.name}</li>
          })
        }
      </ul>)
  }
};
function mapStateToProps (state){
  return {
    myhorses: state.cavalerie
  }
}
export default connect(mapStateToProps)(HorsesList);