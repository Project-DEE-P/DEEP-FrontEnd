import axios from 'axios';

const apiServer = "https://api.ddeep.store";

export const loginAxios = async (userId: string, password: string) => {
  try {
    const response = await axios.post(`${apiServer}/v1/api/auth/login`, {
      userId,
      password,
    });

    const { data } = response;
    console.log(response);
    if (data && data.code === 201) {
      const { token, refreshToken } = data.data;
      console.log('로그인 성공!');
      console.log(`Token: ${token}`);
      console.log(`Refresh Token: ${refreshToken}`);
      return { token, refreshToken };
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw error;
  }
};
