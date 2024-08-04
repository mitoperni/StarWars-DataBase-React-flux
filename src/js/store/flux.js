import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: JSON.parse(localStorage.getItem("characters")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      character: null,
      vehicle: null,
      planet: null,
      loading: true,
      homeworld: "",
    },
    actions: {
      getCharacters: async () => {
        try {
          const response = await axios.get(
            "https://www.swapi.tech/api/people/"
          );
          if (response && response.data) {
            const characters = response.data.results;
            setStore({ characters });
            localStorage.setItem("characters", JSON.stringify(characters));
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
            const vehicles = response.data.results;
            setStore({ vehicles });
            localStorage.setItem("vehicles", JSON.stringify(vehicles));
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
            const planets = response.data.results;
            setStore({ planets });
            localStorage.setItem("planets", JSON.stringify(planets));
          } else {
            console.log("No está llegando la información");
          }
        } catch (error) {
          console.log("getPlanets ha fallado", error);
        }
      },
      saveToFav: (uid, type) => {
        const store = getStore();
        let arr;
        if (type === "characters") {
          arr = store.characters;
        } else if (type === "vehicles") {
          arr = store.vehicles;
        } else if (type === "planets") {
          arr = store.planets;
        }
        const newFav = arr.find((item) => item.uid === uid);
        if (!newFav) {
          console.log("Elemento no encontrado en el array");
          return;
        }
        if (store.favorites.some((fav) => fav.uid === uid)) {
          console.log("El elemento ya está en favoritos");
          return;
        }
        const updatedFavorites = [...store.favorites, newFav];
        setStore({ favorites: updatedFavorites });
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      },
      removeFromFav: (uid) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter(
          (fav) => fav.uid !== uid
        );
        setStore({ favorites: updatedFavorites });
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      },
      getCharacterDetails: async (uid) => {
        setStore({ loading: true });
        setStore({character: []})

        try {
          const response = await axios.get(
            `https://www.swapi.tech/api/people/${uid}`
          );
          if (response && response.data && response.data.result) {
            setStore({ character: response.data.result });
            console.log(response.data);
          }
        } catch (error) {
          console.log("Error fetching character details:", error);
        } finally {
          setStore({ loading: false });
        }
      },
      getVehicleDetails: async (uid) => {
        setStore({ loading: true });
        setStore({vehicle: []})
        try {
          const response = await axios.get(
            `https://www.swapi.tech/api/vehicles/${uid}`
          );
          if (response && response.data && response.data.result) {
            setStore({ vehicle: response.data.result });
            console.log(response.data);
          }
        } catch (error) {
          console.log("Error fetching vehicle details:", error);
        } finally {
          setStore({ loading: false });
        }
      },
      getPlanetDetails: async (uid) => {
        setStore({ loading: true });
        setStore({planet: []})
        try {
          const response = await axios.get(
            `https://www.swapi.tech/api/planets/${uid}`
          );
          if (response && response.data && response.data.result) {
            setStore({ planet: response.data.result });
            console.log(response.data);
          }
        } catch (error) {
          console.log("Error fetching planet details:", error);
        } finally {
          setStore({ loading: false });
        }
      },

      // Funciones adicionales:
      getHomeWorldName: async (homeworld) => {
        setStore({homeworld: ""})

        try {
          const response = await axios.get(`${homeworld}`);
          if (response) {
            console.log(response);
            setStore({homeworld: response.data.result.properties.name});
          }
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
};

export default getState;
