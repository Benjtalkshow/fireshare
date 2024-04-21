import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  deleteDoc,
  where,
  query,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { app } from "../firebase/firebase";
import { toast } from "react-hot-toast";
import RandomStrings from "./RandomString";
import { deleteObject, getStorage, ref } from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

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
      toast.error("No such document");
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
      password: "",
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + doc_id,
      doc_id: doc_id,
      createdAt: Date.now(),
    });

    toast.success("File saved successfully!!");
    return doc_id;
  } catch (error) {
    console.error("Error writing document: ", error);
    toast.error("Error writing document: ", error);
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

export const fetchUserFiles = async (userId) => {
  try {
    const db = getFirestore(app);
    const filesCollection = collection(db, "usersAndUploads");
    const querySnapshot = await getDocs(filesCollection);
    const userFiles = querySnapshot.docs.filter(
      (doc) => doc.data().user_id === userId
    );
    return userFiles.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching user files:", error);
    return [];
  }
};

// export const deleteFile = async (fileId) => {
//   try {
//     const docRef = doc(db, "usersAndUploads", fileId);
//     await deleteDoc(docRef);
//     console.log(`File with ID ${fileId} deleted successfully.`);
//     toast.success(`File with ID ${fileId} deleted successfully.`)
//   } catch (error) {
//     console.error(`Error deleting file with ID ${fileId}: ${error}`);
//     toast.error(`Error deleting file with ID ${fileId}: ${error}`)
//   }
// };

export const deleteFile = async (fileId, fileNames) => {
  try {
    const docRef = doc(db, "usersAndUploads", fileId);
    const docSnapshot = await getDoc(docRef);
    console.log(`Document exists: ${docSnapshot.exists()}`);
    if (docSnapshot.exists()) {
      const fileName = docSnapshot.data().fileName;
      console.log(`File name: ${fileName}`);
      // Delete the file from Firebase Storage
      const fileRef = ref(storage, `upload/${fileName}`);
      await deleteObject(fileRef);
      console.log(`File ${fileName} deleted successfully from Firebase Storage.`);
      toast.success(`File ${fileName} deleted successfully from Firebase Storage.`);
      // Delete the file from Firestore
      await deleteDoc(docRef);
      console.log(`File with ID ${fileId} deleted successfully from Firestore.`);
      toast.success(`File with ID ${fileId} deleted successfully.`);
    } else {
      console.log("No such document");
      toast.error("No such document");
    }
  } catch (error) {
    console.error(`Error deleting file with ID ${fileId}: ${error}`);
    toast.error(`Error deleting file with ID ${fileId}: ${error}`);
  }
};



export const deleteMultipleFiles = async (userId, name) => {
  try {
    const q = query(
      collection(db, "usersAndUploads"),
      where("user_id", "==", userId)
    );
    const querySnapshot = await getDocs(q);

    const batch = writeBatch(db);

    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`All files for user ${userId} deleted successfully.`);
    toast.success(`All files for user ${name} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting files for user ${userId}: ${error}`);
    toast.error(`Error deleting files for user ${name}: ${error}`);
  }
};
