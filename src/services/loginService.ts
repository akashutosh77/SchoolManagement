import axios from 'axios';


const base_url = process.env.REACT_APP_BASE_URL;

// export const loginWithEmailAndPassword = async (email: string, password: string) => {
//   console.log(`the base url is ${base_url}` )
//   const response = await axios.post(`${base_url}/getLoginDetails`, { email, password });
//   return response;
// };

export const forgotPassword = async (email: string) => {
  const response = await axios.post('/api/forgotPassword', { email });
  return response;
};

export const hashPassword = async (password: string) => {
  const response = await axios.post('/api/hash-password', { password });
  return response.data.hashedPassword;
};
