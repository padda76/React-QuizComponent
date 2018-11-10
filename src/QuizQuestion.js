import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{
    constructor(props){
        super(props);

        this.state = {
            incorrectAnswer: false
        };
    }

    handleClick(buttonText){
        let incorrectAnswer = false;
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler();
        } else {
            incorrectAnswer = true;
        }
        this.setState({ incorrectAnswer });
    }

    render(){
        return(
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section>
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) => 
                            <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={answer_option} />
                        )}
                    </ul>
                </section>
                {this.state.incorrectAnswer && <p className="error">Sorry, that's not right</p>}
            </main>
        );
    }
}

export default QuizQuestion;