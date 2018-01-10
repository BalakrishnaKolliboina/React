import React, {Component} from 'react';
import './home.css';

class Home extends Component {	
    render(){
    	const goals = this.props.route.data;
    	const itemCount = goals.length;
    	const btnText = 'Add an Item';
    	let goal = [];
    	goals.forEach(function(item, i) {
    		
    			goal.push(<p className="life-container" key="i"> {item}</p>)
    		
    	});
    	return (
    		<div>
	    		<div className="container color-dark">
			      <div className="col">
			        <p>Add a bucket list item</p>
			      </div>
			      <div className="col">
			        <p>Your bucket list ({itemCount})</p>
			      </div>
			    </div>
	    		<div className="container color-light">
			      <div className="col">
			        <p className="sm">Use this form below to add a new bucket list goal. What do you want to accomplish in your life?</p>

			        <form>
			          <input type="text" className="txt" name="item" placeholder="Life goal.."/>

			          <input type="button" className="btn" value="Add an Item"/>
			        </form>
			      </div>
			      <div className="col">
			        {goal}
			      </div>
			    </div>
    		</div>
    		);
    }
}

export default Home