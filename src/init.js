import "dotenv/config";
import "regenerator-runtime";
import app from "./server";

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`Server listening on port ${PORT}`);
};

app.listen(PORT, handleListening);
