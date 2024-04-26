import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavortie: (id) => {
    },
    removeFavorite: (id) => {
    },


})


function FavoritesContextProvider({ children }) {

    const [favoriteFoodIds, setfavoriteFoodIds] = useState([])


    function addFavorite(id) {
        setfavoriteFoodIds((current) => [...current, id])
    }
    function removeFavorite(id) {
        setfavoriteFoodIds((current) => current.filter((foodId) => foodId !== id))
    }

    //metotları ve güncellenmiş id bilgilerini dışarı açmak için:
    const value = {
        ids: favoriteFoodIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }


    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
    //return parantezini kaldırman gerekebilir. 

}

export default FavoritesContextProvider;