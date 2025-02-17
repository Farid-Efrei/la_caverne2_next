"use client";

import Title from "@/components/title/Title";
import { useEffect, useState } from "react";

export default function Api_Images() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchApiImg() {
    try {
      const response = await fetch(
        "https://la-taverne.ducompagnon.fr/api/images"
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des images !");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching images :", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApiImg();
  }, []);

  return (
    <div>
      <Title>Les images de l'API :</Title>
    </div>
  );
}
