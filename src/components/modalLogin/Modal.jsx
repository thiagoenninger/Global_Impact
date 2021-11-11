import React from 'react'

import './Modal.css'

const Modal = props => {

  return (
      <div>
      <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Login</h4>
          </div>
          <div className="modal-body-login">
            <form className="form-login">
              <label for="usuario">Usuário</label>
              <input type="text" name="usuario"/>

              <label for="senha">Senha</label>
              <input type="text" name="senha"/>

              <p className="p-modal-login">Esqueceu a senha?<a href="#"> Clique aqui.</a></p>
            </form>
          </div>
          <div className="modal-footer">
            <button className="button" onClick={props.onClose}>Ok</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Modal