import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import endPoints from "app/services";
import axios from "axios";

export default withApiAuthRequired(async function handler(req, res) {
  try {
    if (req.method !== "DELETE") {
      return res.status(405).json({ error: "Método no permitido" });
    }

    const { accessToken } = await getAccessToken(req, res);
    const { id } = req.query; 

    if (!id) {
      return res.status(400).json({ error: "Falta el ID del libro" });
    }

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await axios.delete(endPoints.books.deleteBook(id), config);

    res.status(200).json({ message: "Libro eliminado", data: response.data });
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ error: "Error eliminando el libro" });
  }
});
