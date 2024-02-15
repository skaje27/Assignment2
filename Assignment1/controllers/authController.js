//Implement a 'Login' endpoint with validation to ensure secure author authentication.
// Develop a 'Register' endpoint with validation to securely register new authors

const users = []; 
const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials...' });
  }
  res.json({ message: 'Login successfully completed...' });
};

const register = (req, res) => {
  const { username, password } = req.body;
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ error: 'Username is already exist...' });
  }
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.json({ message: 'Registration successfully completed...' });
};

module.exports = {
  login,
  register,
};