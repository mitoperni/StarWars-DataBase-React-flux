import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import axios from "axios";

const CharacterDetail = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(Context);


  useEffect(() => {
    const getDataFromAPI = async () => {
        await actions.getCharacterDetails(uid);
    }
      getDataFromAPI();
    
    }, [uid]);

    useEffect(()=> {
        const getHomeworldNameFromAPI = async (homeworldUrl) => {
            await actions.getHomeWorldName(homeworldUrl)
          };
            
          if (store.character && store.character.properties) {
            getHomeworldNameFromAPI(store.character.properties.homeworld);
          }
    },[store.character])

  if (store.loading) {
    return <div>Loading...</div>;
  }

  if (!store.character) {
    return <div>Character not found</div>;
  }

  // Destructure properties for easier access
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    url
  } = store.character.properties;

  return (
    <div className="container">
      <h1>{name}</h1>
      <p><strong>Height:</strong> {height}</p>
      <p><strong>Mass:</strong> {mass}</p>
      <p><strong>Hair Color:</strong> {hair_color}</p>
      <p><strong>Skin Color:</strong> {skin_color}</p>
      <p><strong>Eye Color:</strong> {eye_color}</p>
      <p><strong>Birth Year:</strong> {birth_year}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Homeworld:</strong> {store.homeworld || "Loading..."}</p>
      <p><strong>URL:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
      <p><strong>Description:</strong> {store.character.description}</p>
    </div>
  );
};

export default CharacterDetail;
