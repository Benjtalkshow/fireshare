"use client"
import { Table as TableContainer, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "../../components/ui/table";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { fetchUserFiles } from "../../utils/firebase";
import Link from "next/link";


export default function Table() {
  const { user, isSignedIn } = useUser();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (isSignedIn && user) {
      const fetchFiles = async () => {
        const userFiles = await fetchUserFiles(user.id);
        setFiles(userFiles);
      };
      fetchFiles();
    }
  }, [user, isSignedIn]);

  return (
    <section className="px-2 sm:px-3 md:px-10 lg:px-20">
      <TableContainer>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=""> <Input type="checkbox" className="w-4 h-4" /> </TableHead>
            <TableHead className="">File Name</TableHead>
            <TableHead>File Type</TableHead>
            <TableHead>File Size</TableHead>
            <TableHead className="">File URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium"><Input type="checkbox" className="w-4 h-4" /></TableCell>
              <TableCell className="font-medium">{file?.fileName}</TableCell>
              <TableCell>{file?.fileType}</TableCell>
              <TableCell>{(file?.fileSize / 1024 / 1024).toFixed(2) + `MB`}</TableCell>
              <TableCell className="">{file?.shortUrl}</TableCell>
              <TableCell className=""><Link href={`/preview/${file?.doc_id}`}><Button className="bg-teal-600">View</Button></Link> </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </TableContainer>
    </section>
  );
}