import React from 'react';

class NappyKit extends React.Component {
    render() {
        return <div id={this.props.id} style={{
            padding: 10
        }}>

        <h2> {this.props.title} </h2>
        <div style={{
            flexDirection: 'row'
        }}>
            {this.props.children}
            <img src={require(`../../static/${this.props.image}.jpg`)} alt={this.props.alt}/>
        </div>
        </div> 
    }
};

export default NappyKit;