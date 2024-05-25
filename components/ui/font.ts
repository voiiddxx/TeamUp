import {  Poppins } from "next/font/google";
import { Lusitana } from "next/font/google";
export const poppins = Poppins({
    subsets:["latin"],
    weight:[
    "200", "300" , "400" , "500" , "600" , "700" , "800" , "900"
]})

export const lusitiana = Lusitana({
    subsets:["latin"],
        weight:["400" , "700"]
})


