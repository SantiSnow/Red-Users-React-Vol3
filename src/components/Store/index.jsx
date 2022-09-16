import { createContext, useReducer } from 'react';

export const Context = createContext();

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            return { ...state, ...action };
        },
        {
            storeExampleSomething: false,
            storesMovies: {
                peliculas: [
                    {
                        name: "Los Cazafantasmas",
                        picture: "https://via.placeholder.com/600/771796"
                    },
                    {
                        name: "La Bella y la Bestia",
                        picture: "https://via.placeholder.com/600/771796"
                    },
                    {
                        name: "Jurasick Park II",
                        picture: "https://via.placeholder.com/600/771796"
                    },
                    {
                        name: "Star Wars: Episodio III",
                        picture: "https://via.placeholder.com/600/771796"
                    },
                    {
                        name: "El Señor de los Anillos",
                        picture: "https://via.placeholder.com/600/771796"
                    }
                ],
            },
        }
    );
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );

}

export default Store;