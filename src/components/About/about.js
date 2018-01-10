import React, {Component} from 'react';
class About extends Component {
	render () {
		const goals = this.props.route.data;
    	let goal = [];
    	goals.forEach(function(item, i) {    		
    			goal.push(<li key="i+1">{item}</li>);
    			
    	});
		return(
			<div id="about">
			     <p>
			      about works!
			    </p>
			    <p>
			      This is what I'm all about. 
			    </p>
			    <ul>
			      
			        {goal}
			      
			    </ul>
			  </div>
			);
	}
}

export default About