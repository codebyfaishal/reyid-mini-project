import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Types, actions, getPokemonsDetailsRequest, getPokemonsDetailsSuccess, getPokemonsDetailsFailed } from "../actions/pokemons";
import getPokemonsDetails from "../sagas/pokemons"




// export const useFetchDetails = (selectID) => {
//     const dispatch = useDispatch();

//     const itemsDetail = useSelector(getPokemonsDetailsSuccess);
//     const loadingDetail = useSelector(getPokemonsDetailsRequest);
//     const showErrorDetail = useSelector(getPokemonsDetailsFailed);
//   }

//   useEffect(() => {
//     dispatch(getPokemonsDetailsRequest(selectID));
//   }, [dispatch, selectID]);

//   return { itemsDetail, loadingDetail, showErrorDetail };
  

export const useFetchDetails = (selectedId) => {
    // console.log('selectedId:', selectedId); // add this line
    // const dispatch = useDispatch();
    // const itemsDetail = useSelector(state => state.pokemons.details);
    // const loadingDetail = useSelector(state => state.pokemons.loadingDetails);
    // const errorDetail = useSelector(state => state.pokemons.errorDetails);
    const dispatch = useDispatch();
    const itemsDetail = useSelector(getPokemonsDetailsSuccess);
    const loadingDetail = useSelector(getPokemonsDetailsRequest);
    const errorDetail = useSelector(getPokemonsDetailsFailed);
  
    // useEffect(() => {
    //   if (selectedId) {
    //     dispatch(getPokemonsDetailsRequest(selectedId));
    //   }
    // }, [dispatch, selectedId]);

    useEffect(() => {
        if (selectedId) {
            console.log("selectedId di custom hook", selectedId)
          dispatch(getPokemonsDetailsRequest(selectedId));
        }
      }, [dispatch, selectedId]);
  
    return { itemsDetail, loadingDetail, errorDetail };
  };

  export default useFetchDetails;