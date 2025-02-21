export async function fetchApiImg() {
  try {
    const response = await fetch(
      "https://la-taverne.ducompagnon.fr/api/images"
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des images !");
    }
    const data = await response.json();
    // console.log(data);
    // setImages(data);
    // ici pas de setImages donc on va retourner la data :
    return data;
  } catch (error) {
    console.error("Error fetching images :", error);
    // setError(error);
    // pas de useState donc pas de setError et setLoading
  }
  // finally {
  //   setLoading(false);
  // }
}
