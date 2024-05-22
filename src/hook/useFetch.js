import { useEffect, useState } from "react";




const localCache = {
  
};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  



  const setLoadingData = () =>{
    setState({
      data: null,
      isLoading: true,
      hasError: false,
    });
  }

  const getDataPokemon = async () => {

    if(localCache[url]){
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;

    }


    setLoadingData();
    const resp = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: "No se pudo cargar la data",
      });
    }

    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    localCache[url] = data;


  };

  useEffect(() => {
    getDataPokemon();
  }, [url]);




  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
