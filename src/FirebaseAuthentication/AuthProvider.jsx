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
import useAxiosPublic from "../CustomHook/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
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
      if (currentUser) {
        // =======================Jwt..jsonwebtoken start now======================
        const authInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", authInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
        // =================jwt...jsonwebtoken end=====================
      }
    });
    return () => {
      unSubsCribe();
    };
  }, [axiosPublic]);
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
