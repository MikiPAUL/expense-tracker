import {createContext, useEffect} from 'react' ;

const AuthUserContext = createContext({
    authUser: null,
    isLoading: false
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [isloading, setIsLoading] = useState(true);

    const clear = () => {
        setAuthUser(null);
        setIsLoading(true);
    }

    const authStateChanged = (user) => {
        if(!user){
            clear();
            return;
        }
        setAuthUser({
            id: user.id,
            email: user.email
        });
        setIsLoading(false);
    }
    useEffect(() = {
        
    }, [])
}

