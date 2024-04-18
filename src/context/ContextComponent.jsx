import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";


export const MContext = createContext();

function ContextComponent({children}){
 

  const [realState, setRealState] = useState([]);
  const [topPrice, setTopPrice] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [user, setUser] = useState(null);
  const [loading ,setLoading] =useState(true);
  //  social provider
  const googleProvider = new GoogleAuthProvider();
  // -------------------
//  social provider
const gitHubProvider = new GithubAuthProvider();

// -------------------

    const removeCart = (item) => {
      const newCartItems = [...cartItems];
      newCartItems.splice(item, 1);
      setCartItems(newCartItems);
    };
    const removeWish = (item) => {
      const newCartItems = [...wishlistItems];
      newCartItems.splice(item, 1);
      setWishlistItems(newCartItems);
    };

  const addToCart = (item) => {
    const isExit = cartItems.find(b=>b.id===item.id);
    if(!isExit){
          setCartItems([...cartItems, realState.find(b=>b.id===item.id)]);
        }else{

    }

  
  };

  const addToWishlist = (item) => {
    // setWishlistItems([...wishlistItems, item]);
    const isExit = wishlistItems.find(b=>b.id===item.id);
    if(!isExit){
      setWishlistItems([...wishlistItems, realState.find(b=>b.id===item.id)]);
        }else{

    }
  };
  
    useEffect(() =>{
        fetch("./residential.json")
        .then((res) =>res.json())
        .then((data)=>{
            setRealState(data);
            const tprice = [...data].sort((a,b) =>b.price -a.price);
            const limitedData = tprice.slice(0, 3);
            setTopPrice(limitedData);
        })
    },[]);

    //create user
    const createUser =(email, password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
      
    }

    //update profile
    const updateUserProfile=(name,image)=>{
     return updateProfile(auth.currentUser, {
          displayName: name, 
          photoURL: image
             
        });
    }
   
    //SignIn
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
     }

     //google login
     
     const googleLogin =() =>{
      setLoading(true)
        return signInWithPopup(auth, googleProvider);
     }
     //GitHub
     
     const gitHubLogin =() =>{
      setLoading(true)
        return signInWithPopup(auth, gitHubProvider);
     }
     //
     const logOut = () => {
      setUser(null);
      // setLoading(false);
      return signOut(auth);
    
     }
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
          console.log('user in the auth state changed', currentUser);
          setUser(currentUser);
          setLoading(false);
         
      });
      return () => {
          unSubscribe();
      }
  }, [])


    

    const value = {
      realState,
      topPrice,
      cartItems,
      wishlistItems,
      addToCart,
      addToWishlist,
      createUser,
      user,
      signIn,
      logOut,
      googleLogin,
      gitHubLogin,
      updateUserProfile,
      loading,
      removeCart,
      removeWish,
     
      
    };
  // console.log(user);
  return <MContext.Provider value={value}>
   {children}
  </MContext.Provider>
}

export default ContextComponent;

