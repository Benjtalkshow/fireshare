"use client";
import {
  Table as TableContainer,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  fetchUserFiles,
  deleteFile,
  deleteMultipleFiles,
} from "../../utils/firebase";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Table() {
  const { user, isSignedIn } = useUser();
  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isSignedIn && user) {
      const fetchFiles = async () => {
        const userFiles = await fetchUserFiles(user.id);
        setFiles(userFiles);
        setLoading(false);
      };
      fetchFiles();
    }
  }, [user, isSignedIn]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedFiles(selectAll ? [] : files.map((file) => file.doc_id));
  };

  const handleFileSelect = (fileId) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.includes(fileId)
        ? prevSelectedFiles.filter((id) => id !== fileId)
        : [...prevSelectedFiles, fileId]
    );
  };

 
  const handleDeleteFiles = async () => {
    if (selectedFiles.length === 0) {
      console.log("No files selected");
      toast.error("No files selected");
      return;
    }
  
    if (selectedFiles.length === files.length) {
      await deleteMultipleFiles(user?.id, user?.fullName);
    } else {
      for (const fileId of selectedFiles) {
        const fileToDelete = files.find((file) => file.doc_id === fileId);
        if (fileToDelete) {
          await deleteFile(fileId, fileToDelete.fileName);
        }
      }
    }
  
    const updatedFiles = files.filter(
      (file) => !selectedFiles.includes(file.doc_id)
    );
    setFiles(updatedFiles);
    setSelectedFiles([]);
  };

  return (
    <section className="px-2 sm:px-3 md:px-10 lg:px-20">
      {loading  ? <div className="w-full font-semibold text-center p-2 sm:p-5 md:p-10 lg:p-20">Fetching data...</div> : (
      <TableContainer>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">
              {files.length > 1 && (
                <Input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              )}
            </TableHead>
            <TableHead className="">File Name</TableHead>
            <TableHead>File Type</TableHead>
            <TableHead>File Size</TableHead>
            <TableHead className="">File URL</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.length > 0 ? (
            files.map((file, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <Input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedFiles.includes(file.doc_id)}
                    onChange={() => handleFileSelect(file.doc_id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{file?.fileName}</TableCell>
                <TableCell>{file?.fileType}</TableCell>
                <TableCell>
                  {(file?.fileSize / 1024 / 1024).toFixed(2) + `MB`}
                </TableCell>
                <TableCell className="">{file?.shortUrl}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Link href={`/preview/${file?.doc_id}`}>
                    <Button className="bg-teal-600 rounded-none">View</Button>
                  </Link>
                  <Button
                    className="bg-red-600 rounded-none"
                    onClick={() => handleDeleteFiles([file.doc_id])}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center w-full p-2 sm:p-5 md:p-10 lg:p-20">
                <h1>No files uploaded</h1>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter className="bg-transparent">
          {files.length > 1 && (
            <Button className="bg-red-600 mt-3 rounded-none" onClick={handleDeleteFiles}>
              Delete All
            </Button>
          )}
        </TableFooter>
      </TableContainer>
      )}
    </section>
  );
}
