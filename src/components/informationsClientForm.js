import React from "react";
import { Component } from "react";

class InformationClientForm extends Component {
  state = {
    name: "",
    cpf: "",
    email: "",
    phone: "",
    cep: "",
    adress: "",
    complement: "",
    number: "",
    city: "",
    cityState: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <form>
          Informações:
          <label>
            Dados do Comprador:
            <input
              type='text'
              value={this.handleChange}
              name='name'
              placeholder='Nome'
            ></input>
            <input
              type='text'
              value={this.handleChange}
              name='cpf'
              placeholder='CPF'
            ></input>
            <input
              type='email'
              value={this.handleChange}
              name='email'
              placeholder='Email'
            ></input>
            <input
              type='number'
              value={this.handleChange}
              name='phone'
              placeholder='Telefone'
            ></input>
          </label>
          <label>
            Endereço:
            <input
              type='text'
              value={this.handleChange}
              name='cep'
              placeholder='CEP'
            ></input>
            <input
              type='text'
              value={this.handleChange}
              name='adress'
              placeholder='Endereço'
            ></input>
            <input
              type='text'
              value={this.handleChange}
              name='complement'
              placeholder='Complemento'
            ></input>
            <input
              type='number'
              value={this.handleChange}
              name='number'
              placeholder='Número'
            ></input>
            <input
              type='text'
              value={this.handleChange}
              name='city'
              placeholder='Cidade'
            ></input>
            <input
              type='text'
              value={this.handleChange}
              name='cityState'
              placeholder='Estado'
            ></input>
          </label>
        </form>
        <form>
          Método de Pagamento:
          <label>
            Boleto
            <input type='radio'></input>
          </label>
          <div>
            Cartão de Crédito:
            <label>
              MasterCard:
              <input type='radio'></input>
            </label>
            <label>
              Visa:
              <input type='radio'></input>
            </label>
            <label>
              Elo:
              <input type='radio'></input>
            </label>
          </div>
        </form>
      </>
    );
  }
}

export default InformationClientForm;
