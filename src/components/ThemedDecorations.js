import React from 'react';

 class ThemedParty extends React.Component {

   render() {
    const withExtraProp = React.Children.map(this.props.children, child => {
    return React.cloneElement(child, {className: this.props.theme})
    })
    return <div>{withExtraProp}</div>
  }
}

export default ThemedParty;
