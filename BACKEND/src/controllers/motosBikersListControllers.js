import { createConnection } from "../config/dbConfig.js";

export async function motosBikersListControllers(req, res) {
  try {
    const connection = await createConnection();

    const [rows] = await connection.query("SELECT * FROM motos");

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: "No hay motos registradas." });
    }

    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al obtener motos", error: error.message });
  }
}
