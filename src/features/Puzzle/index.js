import React, { Component } from 'react';
import glamorous from 'glamorous';

import { PuzzleItem } from './components/PuzzleItem';
import { NewGameButton } from './components/NewGameButton';

const Wrapper = glamorous.div();

const PuzzleBox = glamorous.div ({
    width: '50rem',
    height: '30rem',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
})

let winningNumbers =  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', ''];

class Puzzle extends Component {

    state = {
        numbers: [],
    }

    componentDidMount(){
       this.shufflePuzzleItems();
    }

    componentDidUpdate(){
        this.checkIfWon();
    }

    moveItem = (event) => {
        const { numbers } = this.state;
        let selectedItemNumber = event.target.textContent;

        let selectedIndex = numbers.indexOf(selectedItemNumber);
        let emptyIndex = numbers.indexOf('');

        if( emptyIndex + 1 === selectedIndex || emptyIndex - 1 === selectedIndex || emptyIndex + 5 === selectedIndex || emptyIndex - 5 === selectedIndex ){
            let newArr = numbers;

            newArr[selectedIndex] = '';
            newArr[emptyIndex] = selectedItemNumber;

            this.setState({
                numbers: newArr
            });
        }
    }
    

    shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    shufflePuzzleItems = () => {

        let shuffledArr = this.shuffle(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', ''])
    
        this.setState({
            numbers: shuffledArr
        });

    }

    newGame = () => {
        this.shufflePuzzleItems();
    }

    checkIfWon = () => {
        const { numbers } = this.state;

        let numberString = numbers.toString();
        let winningNumbersString = winningNumbers.toString();

        if(numberString === winningNumbersString){
            alert('Du vann!!!');
        }
    }

    // solve = () => {
    //     this.setState({
    //         numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '']
    //     });
    // }

    render(){
        return (
            <Wrapper>
                <NewGameButton newGame={this.newGame} />
            <PuzzleBox>
                {
                    this.state.numbers.map(Number => 
                        <PuzzleItem key={Number} moveItem={this.moveItem} number={Number} />
                    )
                }
            </PuzzleBox>
            </Wrapper>
        )
    }
}

export { Puzzle };