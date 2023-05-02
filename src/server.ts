// Dependencies
import dotenv from "dotenv";

// Utils
import createServer from "./utils/createServer.ts";

dotenv.config(); // Config dotenv
const PORT = process.env.PORT || 3000; // API listen port

const app = createServer();

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`API running at: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
};
start();