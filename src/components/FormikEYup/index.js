import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './styles.css'
import { useNavigate } from 'react-router-dom';

function FormikEYup() {

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Email inválido')
          .required('Campo obrigatório'),
        password: Yup.string()
          .min(8, 'A senha deve ter pelo menos 8 caracteres')
          .required('Campo obrigatório'),
      })}
      onSubmit={(values) => {
        console.log(values);
        navigate('/home'); // Redireciona para /home após o envio
      }}
    >
      {({ handleSubmit }) => (
        <Form className="form-container" onSubmit={handleSubmit}>
          <h2 className="form-title">Cadastro</h2>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <Field name="email" type="email" className="form-input" />
            <ErrorMessage name="email" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Senha</label>
            <Field name="password" type="password" className="form-input" />
            <ErrorMessage name="password" component="div" className="form-error" />
          </div>
          <button type="submit" className="form-button">Enviar</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikEYup;
