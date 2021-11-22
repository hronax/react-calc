import React, {Component} from 'react';
import "../styles/Keyboard.css";

class Keyboard extends Component {
    render(){
        return(
            <div className="keyboard">
                {this.props.children}
            </div>
        );
    }
}

export default Keyboard;