"use client";

import Loading from "@/app/loading";
import Title from "@/components/title/Title";
import Image from "next/image";
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
      setImages(data);
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
      {/* Loader si chargement en cours */}
      {loading && <Loading />}
      {/* {si erreur} */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="flex items-center justify-center flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.url}
              alt={image.name}
              width={150}
              height={150}
              className="h-auto object-cover rounded-lg w-64"
              // unoptimized={true}
            />
            <p>{image.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
