import React from "react";
import { Component } from "react";
import {
  addEvaluationsInCart,
  getEvaluations,
} from "../services/formLocalStorage";

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
    if (evaluations.length === 0) return <p>Sem avaliações sobre o produto</p>;
    return (
      <div>
        {evaluations.map((evaluation) => (
          <div key={evaluation.email}>
            <p>Avaliação</p>
            <p>Usuário:{evaluation.email}</p>
            <p>{evaluation.message}</p>
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
