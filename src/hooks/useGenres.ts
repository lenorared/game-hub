import genres from "../data/genres"

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const useGenres = () => useData<Genre>('/genres')  // dynamic data
const useGenres = () => ({data: genres, isLoading: false, error: null})  //static data

export default useGenres;