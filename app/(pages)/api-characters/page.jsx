"use client";

import Loading from "@/app/loading";
import Card from "@/components/card/Card";
import Title from "@/components/title/Title";
import { useEffect, useState } from "react";

export default function ApiCharacters() {
  const [ApiCharacters, setApiCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchApiCharacters() {
    try {
      const response = await fetch(
        "https://la-taverne.ducompagnon.fr/api/personnages"
      );
      if (!response.ok) {
        throw new Error("Erreur pendant la récup des persos");
      }
      const data = await response.json();
      console.log(data);
      const updatedData = data.map((character) => ({
        ...character,
        from: "apiCharacters",
      }));
      console.log(updatedData);
      setApiCharacters(updatedData);
    } catch (error) {
      console.error("Erreur lors de la récupération des personnages", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchApiCharacters();
  }, []);

  function deleteApiCharacter(id) {
    const updatedCharacters = ApiCharacters.filter(
      (character) => character.id !== id
    );
    setApiCharacters(updatedCharacters);
  }

  return (
    <div>
      <Title>Les Personnages de l'API :</Title>

      {loading && <Loading />}
      {error && <p className="text-red-500 text-center text-xl">{error}</p>}

      <div className="flex flex-wrap justify-center gap-8">
        {ApiCharacters.map((oneCharacter) => (
          <Card
            key={oneCharacter.id}
            character={oneCharacter}
            deleteCharacter={deleteApiCharacter}
          />
        ))}
      </div>
    </div>
  );
}
