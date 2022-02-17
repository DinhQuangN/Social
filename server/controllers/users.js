import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserMessage from '../models/userMessage.js';

export const getUser = async (req, res) => {
	try {
		const user = await UserMessage.find();
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const existingUser = await UserMessage.findOne({ email });
		if (!existingUser) {
			return res.status(404).json({ message: "user doesn't exist" });
		}
		const isPassword = await bcrypt.compare(password, existingUser.password);
		if (!isPassword) {
			return res.status(400).json({ message: 'invalid credentials' });
		}
		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			'login',
			{ expiresIn: '1h' }
		);
		res.status(200).json({ result: existingUser, token });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });
	}
};
export const register = async (req, res) => {
	const { email, password, name, confirmPassword } = req.body;
	try {
		const existingUser = await UserMessage.findOne({ email });
		if (existingUser) {
			return res.status(404).json({ message: 'user already exist' });
		}
		if (password !== confirmPassword) {
			return res.status(400).json({ message: "password don't exist" });
		}
		const hashedPassword = await bcrypt.hash(password, 12);
		const result = await UserMessage.create({
			email,
			password: hashedPassword,
			name
		});
		const token = jwt.sign(
			{ email: result.email, id: result._id },
			'register',
			{ expiresIn: '1h' }
		);
		res.status(200).json({ result, token });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' });
	}
};
