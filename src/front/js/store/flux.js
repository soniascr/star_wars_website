const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			people: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: () => {
				// fetching data from the backend
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
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
				debugger;
				setStore({ favorites: [...store.favorites, element] });
			}
		}
	};
};

export default getState;
