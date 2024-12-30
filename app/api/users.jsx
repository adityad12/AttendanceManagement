import { query } from '../../utils/postgres';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // Fetch all users
      const users = await query('SELECT * FROM users', []);
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      // Add a new user
      const { name, email } = req.body;
      const result = await query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
      );
      res.status(201).json(result[0]);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
