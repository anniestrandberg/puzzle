import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const PuzzleWrapper = glamorous.div ({
    width: '10rem',
    height: '10rem',
    position: 'relative',
    border: '5px solid white',
    boxSizing: 'border-box',
    fontSize: '3rem',
    backgroundColor: 'black',
    transition: '0.2s',
    ':hover' : {
        opacity: '.8',
        cursor: 'pointer',
    }
})

const PuzzleNumber = glamorous.span ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '4rem',
    color: 'white',
    userSelect: 'none',
})

class PuzzleItem extends Component {
    render(){

        const {
            moveItem,
            number,
        } = this.props
        return (
        <PuzzleWrapper style={{backgroundColor: number === '' && 'white', cursor: number === '' && 'default'}} onClick={moveItem}>
            <PuzzleNumber>
                {number}
            </PuzzleNumber>
        </PuzzleWrapper> 

        )
    }

}

PuzzleItem.propTypes = {
    moveItem: PropTypes.func.isRequired,
    number: PropTypes.string.isRequired,
}

export { PuzzleItem };