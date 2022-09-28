import path from "path";
import { fileURLToPath } from "url";



export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "node js api express-postgres",
      version: '1.0.0',
    },
    contact:{
      name: 'Mauricio',
      email:'m3jiacandray@gmail.com'
    },
    servers: [
      {
        url: `http://localhost:5000`,
      },
    ],
  },
  apis: [`${path.join(import.meta.url, "./routes/*.js")}`],
};

