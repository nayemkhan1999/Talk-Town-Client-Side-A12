import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user, "14 number line");
  //SocialProvider
  const googleProvider = new GoogleAuthProvider();
  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //LoginUser
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logOutUser
  const logOutUser = () => {
    return signOut(auth);
  };

  //GoogleLogin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // Update Profile
  const UserUpdateProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  //observer
  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //   //==================jwt access token start=====================
      //   const logged = currentUser?.email || user?.email;
      //   setUser(currentUser);
      //   if (currentUser) {
      //     axios
      //       .post(
      //         `https://hotel-booking-blond-tau.vercel.app/jwt`,
      //         { logged },
      //         { withCredentials: true }
      //       )
      //       .then((res) => {
      //         // console.log(res.data);
      //       });
      //   } else {
      //     axios
      //       .post(
      //         `https://hotel-booking-blond-tau.vercel.app/logout`,
      //         { logged },
      //         {
      //           withCredentials: true,
      //         }
      //       )
      //       .then((res) => {
      //         // console.log(res.data);
      //       });
      //   }
      //   //==================jwt access token End=====================
      setLoading(false);
    });
    return () => {
      unSubsCribe();
    };
  }, [user?.email]);
  const allValue = {
    createUser,
    user,
    loginUser,
    UserUpdateProfile,
    googleLogin,
    logOutUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
