import axios from 'axios';

const API_URL = 'http://localhost:3001'; // ajuste conforme sua API

export const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    const token = response.data.token;

    // Armazena o token no localStorage
    localStorage.setItem('token', token);

    return token;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao fazer login';
  }
};
