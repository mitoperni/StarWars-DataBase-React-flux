import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // Almacén de variables
      characters: [],
      vehicles: [],
      planets: [],
      favorites: [],
    },
    actions: {
      // Almacén de funciones
      getCharacters: async () => {
        try {
          const response = await axios.get(
            "https://www.swapi.tech/api/people/"
          );
          if (response && response.data) {
            setStore({ characters: response.data.results });
            console.log(response.data.results);
          } else {
            console.log("No está llegando la información");
          }
        } catch (error) {
          console.log("getCharacters ha fallado", error);
        }
      },
      getVehicles: async () => {
        try {
          const response = await axios.get(
            "https://www.swapi.tech/api/vehicles/"
          );
          if (response && response.data) {
            setStore({ vehicles: response.data.results });
            console.log(response.data.results);
          } else {
            console.log("No está llegando la información");
          }
        } catch (error) {
          console.log("getVehicles ha fallado", error);
        }
      },
      getPlanets: async () => {
        try {
          const response = await axios.get(
            "https://www.swapi.tech/api/planets/"
          );
          if (response && response.data) {
            setStore({ planets: response.data.results });
            console.log(response.data.results);
          } else {
            console.log("No está llegando la información");
          }
        } catch (error) {
          console.log("getPlanets ha fallado", error);
        }
      },

      // Función para guardar en favoritos

      saveToFav: (uid, type) => {
		const store = getStore();
		let arr;
	  
		if (type === 'characters') {
		  arr = store.characters;
		} else if (type === 'vehicles') {
		  arr = store.vehicles;
		} else if (type === 'planets') {
		  arr = store.planets;
		}
	  
		const newFav = arr.find(item => item.uid === uid);
	  
		if (!newFav) {
		  console.log("Elemento no encontrado en el array");
		  return;
		}
	  
		if (store.favorites.some(fav => fav.uid === uid)) {
		  console.log("El elemento ya está en favoritos");
		  return;
		}
	  
		setStore({ favorites: [...store.favorites, newFav] });
	  },
	  
	  //Función borrar de favoritos:
	  removeFromFav: (uid) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter(fav => fav.uid !== uid);
        setStore({ favorites: updatedFavorites });
      },
	  
    },
  };
};

export default getState;
