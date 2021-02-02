const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			favorites: []
		},
		actions: {
			getPeople: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						setStore({ people: data.results });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			getPlanets: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			addFavorites: element => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, element] });
			},

			removeFavorite: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
			}
		}
	};
};

export default getState;
