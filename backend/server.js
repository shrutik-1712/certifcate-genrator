const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const certificateRoutes = require('./routes/certificateRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/certificate_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/certificates', certificateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});