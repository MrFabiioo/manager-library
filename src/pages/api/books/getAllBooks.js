import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";
const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
export default withApiAuthRequired (async function handler(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res); // Aquí sí está en un request scope
    //console.log('aqui estoy token: '+accessToken + "final del token :D")
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await axios.get(`${API}/${VERSION}/books`, config);
    //console.log(response.data)
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ error: "Error cargando los Libros " });
  }
});