import React from "react";
import { Component } from "react";
import {
  addEvaluationsInCart,
  getEvaluations,
} from "../services/formLocalStorage";
import "../style/evaluationForm.css";

class EvaluationForm extends Component {
  state = {
    evaluations: [],
    emailInput: "",
    messageInput: "",
  };

  componentDidMount = () => {
    const evaluationsLocalStorage = getEvaluations();
    this.setState({ evaluations: evaluationsLocalStorage });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  exibitionEvaluations = () => {
    const { evaluations } = this.state;
    if (evaluations.length === 0)
      return (
        <p className='noProductInCartText'>Sem avaliações sobre o produto!</p>
      );
    return (
      <div className='evaluations'>
        {evaluations.map((evaluation) => (
          <div key={evaluation.email}>
            <div className='evaluationCardUser'>
              <p>Usuário: {evaluation.email}</p>
              <p className='about'>Sobre: {evaluation.message}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  sendEvaluationLocalStorage = () => {
    const { emailInput, messageInput } = this.state;
    const evaluation = {
      email: emailInput,
      message: messageInput,
    };
    if (emailInput === "" && messageInput === "")
      return alert("Preencha todos os campos para enviar sua avaliação!");
    return addEvaluationsInCart(evaluation);
  };

  render() {
    return (
      <>
        <form className='containerForm'>
          <p className='title'>Avaliações do Produto:</p>
          <div className='containerInputs'>
            <label className='inputsRadio'>
              Nota:
              <input type='radio' className='form-check-input mt-0'></input>
              <input type='radio' className='form-check-input mt-0'></input>
              <input type='radio' className='form-check-input mt-0'></input>
              <input type='radio' className='form-check-input mt-0'></input>
              <input type='radio' className='form-check-input mt-0'></input>
            </label>
            <input
              type='email'
              placeholder='Email'
              name='emailInput'
              onChange={this.handleChange}
              className='form-control'
            ></input>
            <textarea
              placeholder='Mensagem(opcional)'
              name='messageInput'
              onChange={this.handleChange}
              className='form-control'
            ></textarea>
            <button
              onClick={this.sendEvaluationLocalStorage}
              className='btn btn-primary'
            >
              Avaliar
            </button>
          </div>
        </form>
        <div className='evaluations'>{this.exibitionEvaluations()}</div>
      </>
    );
  }
}

export default EvaluationForm;
