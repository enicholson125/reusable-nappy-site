import React from 'react';

class NappyKitTitle extends React.Component {
    render() {
        return <div id={this.props.id} style={{
            padding: 10
        }}>

        <h2> {this.props.children} </h2>
        </div> 
    }
};

export default NappyKitTitle;