import { Poppins, Quicksand } from 'next/font/google';

export const quicksand = Quicksand(
    {
        subsets: [ "latin", "vietnamese" ]
    }
);

export const poppins = Poppins(
    {
        subsets: [ "latin" ],
        weight: "500"
    }
);