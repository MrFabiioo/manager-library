import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import endPoints from "app/services";
import axios from "axios";

export default withApiAuthRequired(async function handler(req, res) {
  try {
    if (req.method !== "DELETE") {
      return res.status(405).json({ error: "Método no permitido" });
    }

    const { accessToken } = await getAccessToken(req, res);
    const { id } = req.query; // Obtener el ID del libro desde la URL

    if (!id) {
      return res.status(400).json({ error: "Falta el ID de la categoria" });
    }

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await axios.delete(endPoints.categories.deleteCategory(id), config);

    res.status(200).json({ message: "Categoria Eliminada eliminado", data: response.data });
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ error: "Error eliminando la categoria" });
  }
});
