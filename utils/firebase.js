import { getFirestore, doc, setDoc, getDoc, collection } from "firebase/firestore";
import { app } from "@/firebase/firebase";
import { toast } from"react-hot-toast";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
  } from "firebase/storage";
import RandomStrings from "./RandomString";

const db = getFirestore(app)
export const   handleFileUpload = async (user, file) => {
    const imageRef = ref(storage, "upload/" + file?.name);
    const uploadTask = uploadBytesResumable(imageRef, file, metadata);
  
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const currentProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + currentProgress + "% done");
        },
        (error) => {
          console.error("Error uploading file:", error);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at", downloadURL);
  
          const db = getFirestore(app);
          const userRef = doc(db, "users", user.id);
          const userSnapshot = await getDoc(userRef);
  
          if (!userSnapshot.exists()) {
            // Create a new user document
            await setDoc(userRef, {
              id: user.id,
              email: user.primaryEmailAddress.emailAddress,
              createdAt: new Date(),
              files: [
                {
                  name: file.name,
                  url: downloadURL,
                  createdAt: new Date(),
                },
              ],
            });
          } else {
            // Update the existing user document
            await setDoc(
              userRef,
              {
                files: [...userSnapshot.data().files, { name: file.name, url: downloadURL, createdAt: new Date() }],
              },
              { merge: true }
            );
          }
  
          resolve(downloadURL);
        }
      );
    });
  };



export const checkUserFileLimit = async (user) => {
    const db = getFirestore(app);
    const userRef = doc(db, "users", user.id);
    const userSnapshot = await getDoc(userRef);
  
    if (userSnapshot.exists() && userSnapshot.data().files.length >= 5) {
      return true;
    }
  
    return false;
  };

  export const getFileInfo = async (fileid) => {
    try {
      const docRef = doc(db, "usersAndUploads", fileid);
      const userSnapshot = await getDoc(docRef);
  
      if (userSnapshot.exists()) {
        return userSnapshot.data();
      } else {
        console.log("No such document");
        throw new Error("No such document");
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