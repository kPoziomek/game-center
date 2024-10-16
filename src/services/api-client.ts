import axios from "axios";

export default axios.create({
	baseURL: import.meta.env.VITE_GAME_API_URL,
	params: {
		key: import.meta.env.VITE_GAME_API_KEY,
	},
});
