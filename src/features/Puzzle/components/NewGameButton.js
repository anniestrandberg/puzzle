import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';


const Button = glamorous.button({
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '3rem',
    display: 'block',
    margin: '0 auto',
    marginTop: '4rem',
    outline: 'none',
    cursor: 'pointer',
    ':hover' : {
        color: '#282828',
    }
})

class NewGameButton extends Component {
    render(){

        const {
            newGame
        } = this.props;

        return(
            <Button onClick={newGame}>Nytt spel</Button>
        )
    }
}

NewGameButton.propTypes = {
    newGame: PropTypes.func.isRequired,
}

export { NewGameButton };