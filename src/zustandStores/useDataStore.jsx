import axios from "axios";
import { create } from "zustand";

export const useDataStore = create((set)=>({
    data:null,
    isLoading: false,
    error: null,
    getDataFromAPI: async()=>{
        set({isLoading: true})
        try {

            const {data} = await axios('https://randomuser.me/api/')
            set({data: data})
            
        } catch (err) {
            set({error: false, isLoading: false})
            
        }finally{
            set({isLoading: false})
        }
    }
}))