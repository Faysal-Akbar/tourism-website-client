import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider)
        .finally(()=> setIsLoading(false));
    };

    useEffect(()=> {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(()=> {
            setUser("");
        })
        .finally(() => setIsLoading(false));
    }

    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}
export default useFirebase;