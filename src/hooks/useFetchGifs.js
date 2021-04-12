/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const userFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => { // los efectos son sincronos, no pueden ser async

        getGifs( category )
            .then( imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    });
            } )

    }, [category]) // el efecto va a cambiar cuando cambie la cateogira

    return state; // { data: [], loading: true };
}