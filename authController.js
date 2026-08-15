const jwt = require('jsonwebtoken');

const demoUser = {
  email: 'admin@example.com',
  password: 'password123',
  name: 'Demo User',
};

const jwtSecret = process.env.JWT_SECRET || 'demo-secret-key';

exports.registerUser = async (req, res) => {
  // Registration is not implemented in this demo app.
  res.status(501).json({ message: 'Register endpoint is not implemented.' });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  if (email !== demoUser.email || password !== demoUser.password) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const token = jwt.sign({ email: demoUser.email, name: demoUser.name }, jwtSecret, {
    expiresIn: '1h',
  });

  return res.json({ token, email: demoUser.email, name: demoUser.name });
};
