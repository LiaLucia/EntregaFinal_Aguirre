import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyDNFrcfEn8vZGTj7fbAavfg_eT0926ziyk",

  authDomain: "bastet-126b8.firebaseapp.com",

  projectId: "bastet-126b8",

  storageBucket: "bastet-126b8.appspot.com",

  messagingSenderId: "705193458560",

  appId: "1:705193458560:web:c1ae2b21d26f99d2b41f65"

};


const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}