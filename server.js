const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const companyRoutes = require('./routes/company');
const aptitudeRoutes = require('./routes/aptitude');
const codingRoutes = require('./routes/coding');
const communicationRoutes = require('./routes/communication');
const hrRoutes = require('./routes/hr');
const resultRoutes = require('./routes/result');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/aptitude', aptitudeRoutes);
app.use('/api/coding', codingRoutes);
app.use('/api/communication', communicationRoutes);
app.use('/api/hr', hrRoutes);
app.use('/api/result', resultRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
