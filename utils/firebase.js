import { getFirestore, doc, setDoc, getDoc, collection, updateDoc } from "firebase/firestore";
import { app } from "../firebase/firebase";
import { toast } from"react-hot-toast";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
  } from "firebase/storage";
import RandomStrings from "./RandomString";

const db = getFirestore(app)




export const checkUserFileLimit = async (user) => {
    const db = getFirestore(app);
    const userRef = doc(db, "users", user.id);
    const userSnapshot = await getDoc(userRef);
  
    if (userSnapshot.exists() && userSnapshot.data().files.length >= 5) {
      return true;
    }
  
    return false;
  };

  export const getFileInfo = async (userId) => {
    try {
      const docRef = doc(db, "usersAndUploads", userId);
      const userSnapshot = await getDoc(docRef);
  
      if (userSnapshot.exists()) {
        const fileInfo = userSnapshot.data();
        console.log("File info:", fileInfo);
        return fileInfo;
      } else {
        console.log("No such document");
        return null;
      }
    } catch (error) {
      console.error("Error getting file info:", error);
      throw error;
    }
  };
  export const saveInfo = async (file, fileUrl, user) => {
    try {
      const clerkUserId = user?.id;
      const doc_id = RandomStrings().toString();
      
      await setDoc(doc(db, "usersAndUploads", doc_id), {
        user_id: clerkUserId,
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress.emailAddress,
        userName: user?.fullName,
        password:"",
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + doc_id,
        doc_id: doc_id,
        createdAt: Date.now()
      });
  
      toast.success("File saved successfully!!")
      return doc_id;
    } catch (error) {
      console.error("Error writing document: ", error);
      toast.error("Error writing document: ", error)
    }
  };


  
  export const updateFilePassword = async (userId, password) => {
    try {
      const docRef = doc(db, "usersAndUploads", userId);
      await setDoc(docRef, { password: password }, { merge: true });
    } catch (error) {
      console.error("Error getting file info:", error);
      throw error;
    }
  };