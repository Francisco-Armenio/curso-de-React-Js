import { useState } from "react";
import './checkout.css'

const FormularioCheckout = ({ datosForm, handleChangeInput, handleSubmitForm, className }) => {
  const [emailConfirm, setEmailConfirm] = useState("");
  const [error, setError] = useState("");

  const handleEmailConfirmChange = (e) => {
    setEmailConfirm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (datosForm.email !== emailConfirm) {
      setError("Los correos electrónicos no coinciden.");
      return;
    }

    setError("");
    handleSubmitForm(e);
  };

  return (
    <form onSubmit={handleFormSubmit} className={`form-checkout ${className || ''}`}>
      <div className="form-checkout__group">
        <label htmlFor="nombre" className="form-checkout__label">Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={datosForm.nombre}
          onChange={handleChangeInput}
          required
          className="form-checkout__input"
        />
      </div>

      <div className="form-checkout__group">
        <label htmlFor="telefono" className="form-checkout__label">Teléfono:</label>
        <input
          type="number"
          name="telefono"
          id="telefono"
          value={datosForm.telefono}
          onChange={handleChangeInput}
          required
          className="form-checkout__input"
        />
      </div>

      <div className="form-checkout__group">
        <label htmlFor="email" className="form-checkout__label">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={datosForm.email}
          onChange={handleChangeInput}
          required
          className="form-checkout__input"
        />
      </div>

      <div className="form-checkout__group">
        <label htmlFor="emailConfirm" className="form-checkout__label">Confirmar Email:</label>
        <input
          type="email"
          name="emailConfirm"
          id="emailConfirm"
          value={emailConfirm}
          onChange={handleEmailConfirmChange}
          required
          className="form-checkout__input"
        />
      </div>

      {error && <p className="form-checkout__error">{error}</p>}

      <button type="submit" className="form-checkout__submit-btn">Enviar orden</button>
    </form>
  );
};

export default FormularioCheckout;
