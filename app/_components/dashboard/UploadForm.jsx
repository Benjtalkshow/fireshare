"use client";
import { Button } from "../../../components/ui/button";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import UploadPreview from "./UploadPreview";
import { useUser } from "@clerk/nextjs";
import { app } from "../../../firebase/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import ProgressBar from "./ProgressBar";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
} from "firebase/firestore";
import RandomStrings from "../../../utils/RandomString";
import { saveInfo } from "../../../utils/firebase";
import { useRouter } from "next/navigation";

const UploadForm = () => {
  const [file, setFile] = useState();
  const { user, isSignedIn } = useUser();
  const [progress, setProgress] = useState();
  const [id, setId] = useState();
  const [uploadStatus, setUploadStatus] = useState("Upload"); // Add a state variable for upload status
  const storage = getStorage(app);
  const router = useRouter();
  let intervalId;

  const handleFile = (file) => {
    const maxFileSize = 2000000;   
    if (file && file.size > maxFileSize) {
      console.log("file is greater than 2MB");
      toast.error("File size should be less than 2MB");
      setFile(null);
      return;
    } else {
      const allowedTypes = ["image/svg+xml", "image/png", "image/jpeg", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        console.log("Invalid file type");
        toast.error("Invalid file type. Only SVG, PNG, JPG, JPEG, and GIF files are allowed.");
        setFile(null);
        return;
      }
  
      setFile(file);
      console.log(file);
    }
  };

  const metadata = { contentType: "" };

  const submitFile = async () => {
    setUploadStatus("Uploading..."); // Update the upload status when the upload starts
    const imageRef = ref(storage, "upload/" + file?.name);
    const uploadTask = uploadBytesResumable(imageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const currentProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + currentProgress + "% done");
        setProgress(currentProgress);
      },
      (error) => {
        // Handle upload error
        console.error("Error uploading file:", error);
        toast.error("Error uploading file. Please try again.");
        setFile(null);
        setUploadStatus("Upload"); // Reset the upload status on error
      },
      async () => {
        // Upload successful
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at", downloadURL);
          const doc_id = await saveInfo(file, downloadURL, user);
          setId(doc_id);
          router.push("/preview/" + doc_id); // Use doc_id instead of id
          setUploadStatus("Uploaded!"); // Update the upload status on success
        } catch (error) {
          console.error("Error saving file info:", error);
          toast.error("Error saving file info. Please try again.");
          setFile(null);
          setUploadStatus("Upload"); // Reset the upload status on error
        }
      }
    );
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {uploadStatus === "Uploaded!!" ? (
        <div className="w-full font-semibold text-center px-2 sm:p-5 md:p-10 lg:p-20">Redirecting...</div>
      ) : (
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold py-10 text-center">
            Upload your <span className="text-teal-600">Images</span> Here
          </h1>
          {/* upload section */}
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-teal-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-12 h-12 mb-4 text-teal-600 hover:text-teal-700"
                  aria-hidden="true"
                  xmlns="(link unavailable)"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-md text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-teal-600">
                    {" "}
                    Click to upload{" "}
                  </span>{" "}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (max 2MB)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept=".svg,.png,.jpg,.jpeg,.gif"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </label>
          </div>
          {/* upload preview */}
          {file && <UploadPreview file={file} />}
          {progress > 0 && <ProgressBar progress={progress} />}

          {/* buttons */}
          <div className="my-5 space-x-5">
            <Button
              disabled={!file}
              className="px-10 border-[1px] py-3 bg-teal-600 rounded-none text-white"
              onClick={submitFile}
            >
              {uploadStatus}{" "}
            </Button>
            <Button
              onClick={() => {
                setFile(null);
                setProgress(0);
                setUploadStatus(
                  "Upload"
                ); 
              }}
              className="px-10 py-3 bg-transparent hover:bg-gray-100 border-[1px] border-teal-600 rounded-none text-teal-600"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
export default UploadForm;
