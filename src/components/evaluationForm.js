import React from "react";
import { Component } from "react";
import {
  addEvaluationsInCart,
  getEvaluations,
} from "../services/formLocalStorage";

class EvaluationForm extends Component {
  render() {
    return (
      <>
        <form>
          <p>Avaliações do Produto:</p>
          <label>
            <input type='radio'></input>
            <input type='radio'></input>
            <input type='radio'></input>
            <input type='radio'></input>
            <input type='radio'></input>
          </label>
          <input
            type='email'
            placeholder='Email'
            name='emailInput'
            onChange={this.handleChange}
          ></input>
          <textarea
            placeholder='Mensagem(opcional))'
            name='messageInput'
            onChange={this.handleChange}
          ></textarea>
          <button onClick={this.sendEvaluationLocalStorage}>Avaliar</button>
        </form>
        <div className='evaluations'>{this.exibitionEvaluations()}</div>
      </>
    );
  }
}

export default EvaluationForm;
