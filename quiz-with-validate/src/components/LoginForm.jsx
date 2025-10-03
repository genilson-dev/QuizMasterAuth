import React from 'react';
import { useForm } from 'react-hook-form';
// import { login } from './authService';
import {authService} from './authService';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = await authService(data.email, data.password);
      console.log('Login bem-sucedido! Token:', token);
      // Redirecionar ou atualizar estado de autenticação
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: 'Email é obrigatório' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Senha:</label>
        <input type="password" {...register('password', { required: 'Senha é obrigatória' })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
}
