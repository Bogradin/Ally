import React from 'react';
import './App.css';

 import { Formik, Form, Field, ErrorMessage } from 'formik';
 
 const Basic = () => (
   <div>
     <h2>Dados Pessoais</h2>
     <Formik
       initialValues={{ nome: '', email: '', telefone: '', CPF: '' }}
       validate={values => {
         const errors = {};
         if (!values.nome) {
           errors.nome = 'Obrigatório';
         }
         if (!values.email) {
          errors.email = 'Obrigatório';
        }
        if (!values.telefone) {
          errors.telefone = 'Obrigatório';
        }
        if (!values.CPF) {
          errors.CPF = 'Obrigatório';
        }
         return errors
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <div className='form'>Nome</div>
           <div><Field className='field' type="text" name="nome" /></div>
           <ErrorMessage name="nome" component="div" />

           <div className='form'>Email</div>
           <div><Field className='field' type="email" name="email" /></div>
           <ErrorMessage name="email" component="div" />

           <div className='form'>Telefone</div>
           <div><Field className='field' type="number" name="telefone" /></div>
           <ErrorMessage name="telefone" component="div" />
           
           <div className='form'>CPF</div>
           <div><Field className='field' type="number" name="CPF" /></div>
           <ErrorMessage name="CPF" component="div" />
           
           <button  className='submit' type="submit" disabled={isSubmitting}>
             Enviar
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default Basic;
