import { FlatList, StyleSheet, Text, Image, View, ActivityIndicator, ViewToken } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSharedValue } from 'react-native-reanimated';

const HomeListItem = () => {
  // État pour stocker les données JSON, initialisé comme un tableau vide
  const [data, setData] = useState<any[]>([]);

  // État pour gérer le statut de chargement, initialisé à "true" (en cours de chargement)
  const [loading, setLoading] = useState<boolean>(true);

  // État pour gérer les erreurs, initialisé à "null"
  const [error, setError] = useState<string | null>(null);

  // `viewableItems` est une référence partagée (partagée entre les animations) pour les éléments visibles dans la `FlatList`
  const viewableItems = useSharedValue<ViewToken[]>([]);

  // Utilisation de `useEffect` pour effectuer une action au montage du composant (lorsque le composant est monté)
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données de l'API
    const fetchData = async () => {
      try {
        // Envoi de la requête fetch pour récupérer les données depuis l'API de Pexels
        const response = await fetch('https://api.pexels.com/v1/search?query=food&per_page=10', {
          headers: {
            // Remplacez par votre clé API Pexels dans l'en-tête Authorization
            Authorization: 'V09rDPimycG9trmshBDIdwQbcZwzHW6eqwasCEnLI4yYaTBPyqIcRnhK',
          },
        });

        // Vérification de la réponse de l'API, si elle n'est pas ok, une erreur est lancée
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        // Si la réponse est correcte, on la parse en JSON
        const json = await response.json();
        //console.log("Data received:", json); // Log des données reçues de l'API

        // Mettez les photos récupérées dans l'état `data`
        setData(json.photos);
      } catch (error) {
        // Si une erreur se produit pendant la récupération des données, on la log et on met l'erreur dans l'état
        console.error("Error fetching data:", error);
        setError(error.message || 'Failed to fetch data');
      } finally {
        // Lorsque l'appel à l'API est terminé (qu'il ait réussi ou échoué), on arrête le chargement
        setLoading(false);
      }
    };

    // Appel de la fonction pour récupérer les données
    fetchData();
  }, []);  // Le tableau vide [] signifie que cette fonction ne sera appelée qu'au montage du composant

  // Si les données sont en cours de chargement, on affiche un indicateur de chargement (ActivityIndicator)
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{color:'white'}}>Chargement...</Text>
      </View>
    );
  }

  // Si une erreur se produit, on affiche le message d'erreur
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  // Si les données sont chargées et qu'il n'y a pas d'erreur, on passe à la vue principale
  return (
    <View style={styles.container}>
      {/* Affichage de la FlatList avec les données */}
      <FlatList
        data={data}  // Les données des photos récupérées depuis l'API
        keyExtractor={(item) => item.id.toString()}  // Utilisation de l'ID unique de chaque photo comme clé pour optimiser le rendu
        contentContainerStyle={{ paddingTop: 40 }} // Ajoute un padding en haut de la liste
        showsVerticalScrollIndicator={false}  // Désactive la barre de défilement verticale
        renderItem={({ item }) => (
          // Pour chaque élément de données (photo), on affiche un composant View
          <View style={styles.listItem}>
            {/* Affichage de l'image avec l'URL de l'image */}
            <Image source={{ uri: item.src.medium }} style={styles.image} />
            {/* Affichage du nom du photographe */}
            <Text style={styles.photographerName}>{item.photographer}</Text>
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafe', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    height: 300,
    width: 400,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  photographerName: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'black',
    
    
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  }
});

export default HomeListItem