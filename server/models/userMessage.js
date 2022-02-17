import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true
		},
		email: {
			type: String,
			require: true
		},
		password: {
			type: String,
			require: true
		},
		id: { type: String }
	},
	{ timestamps: true }
);

const userMessage = mongoose.model('User', userSchema);
export default userMessage;
