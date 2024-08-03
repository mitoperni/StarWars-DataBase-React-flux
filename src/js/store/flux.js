import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // Almacén de variables
      characters: [],
      vehicles: [],
      planets: [],
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
    },
  };
};

export default getState;
