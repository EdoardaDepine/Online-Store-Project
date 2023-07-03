import React from "react";
import { Component } from "react";
import "../style/informationClientForm.css";

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
      <form className='containerForm'>
        <label className='containerUserInformations'>
          Dados do Comprador:
          <input
            type='text'
            value={this.handleChange}
            name='name'
            placeholder='Nome'
            className='form-control'
          ></input>
          <input
            type='text'
            value={this.handleChange}
            name='cpf'
            placeholder='CPF'
            className='form-control'
          ></input>
          <input
            type='email'
            value={this.handleChange}
            name='email'
            placeholder='Email'
            className='form-control'
          ></input>
          <input
            type='number'
            value={this.handleChange}
            name='phone'
            placeholder='Telefone'
            className='form-control'
          ></input>
        </label>
        <label className='containerAdressInformations'>
          Endereço:
          <input
            type='text'
            value={this.handleChange}
            name='cep'
            placeholder='CEP'
            className='form-control'
          ></input>
          <input
            type='text'
            value={this.handleChange}
            name='adress'
            placeholder='Endereço'
            className='form-control'
          ></input>
          <input
            type='text'
            value={this.handleChange}
            name='complement'
            placeholder='Complemento'
            className='form-control'
          ></input>
          <input
            type='number'
            value={this.handleChange}
            name='number'
            placeholder='Número'
            className='form-control'
          ></input>
          <input
            type='text'
            value={this.handleChange}
            name='city'
            placeholder='Cidade'
            className='form-control'
          ></input>
          <input
            type='text'
            value={this.handleChange}
            name='cityState'
            placeholder='Estado'
            className='form-control'
          ></input>
        </label>
        <div className='containerPaymentInformations'>
          Método de Pagamento:
          <label>
            Boleto
            <input type='radio' className='form-check-input mt-0'></input>
          </label>
          <div className='containerTypeCard'>
            Cartão de Crédito:
            <label>
              MasterCard:
              <input type='radio' className='form-check-input mt-0'></input>
            </label>
            <label>
              Visa:
              <input type='radio' className='form-check-input mt-0'></input>
            </label>
            <label>
              Elo:
              <input type='radio' className='form-check-input mt-0'></input>
            </label>
          </div>
        </div>
      </form>
    );
  }
}

export default InformationClientForm;
