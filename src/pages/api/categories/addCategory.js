import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import endPoints from "app/services";
import axios from "axios";

export default withApiAuthRequired (async function handler(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res); // Aquí sí está en un request scope
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: '*/*',
            'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(endPoints.categories.addCategory,req.body,config);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ error: "Error agregando los categoria " });
  }
});