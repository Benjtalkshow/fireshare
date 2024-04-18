import { tailwindEffect } from "../../_data/constants";
import React, { useRef, useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "react-hot-toast";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { updateFilePassword } from "../../../utils/firebase";
import { sendEmail } from "../../../utils/axios";

const InputSection = ({ id, shortUrl, userEmail }) => {
  const inputRef = useRef(null);
  const [enablePassword, setEnablePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      toast.success("Copied to Clipboard");
    }
  };

  const handlePasswordCheckbox = () => {
    setEnablePassword(!enablePassword);
  };
  const handleSavePassword = async () => {
    try {
      if (!password.trim()) {
        toast.error("Empty password");
      } else {
        await updateFilePassword(id, password);
        toast.success("Password Added!");
        setPassword("");
      }
    } catch (error) {
      console.error("Error fetching file info:", error);
      toast.error("Error", error);
    }
  };

  const handleSendEmail = () => {
    const data = {
      email: email,
      id: id,
      userEmail: userEmail,
      shortUrl: shortUrl
    };
    
    sendEmail(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className={`${tailwindEffect} m-auto w-full md:w-1/2 ${
        enablePassword ? "p-5" : "p-10"
      } border-gray-300 border-[1px] rounded-md shadow-md`}
    >
      <h1 className="font-bold mb-1">Short URL</h1>
      <div className="inputDiv relative w-full">
        <input
          className="w-full p-2 rounded-md focus:ring-0 border-[1px] border-gray-300 focus:outline-none"
          readOnly
          defaultValue={shortUrl}
          ref={inputRef}
        />
        <Copy
          className="absolute top-2 right-2 text-gray-300 cursor-pointer"
          onClick={handleCopy}
        />
      </div>

      {/* checkbox */}
      <div className="flex gap-2 my-3 items-center">
        <input
          type="checkbox"
          checked={enablePassword}
          onChange={handlePasswordCheckbox}
        />
        <h1 className="font-bold">Enable Password</h1>
      </div>

      {/* password input */}
      {enablePassword && (
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            className="w-full p-2 rounded-md focus:ring-0 border-[1px] border-gray-300 focus:outline-none"
            placeholder="**********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="w-full sm:w-fit cursor-pointer"
            disabled={
              password.trim() && password.trim().length > 3 ? false : true
            }
            onClick={handleSavePassword}
          >
            Save
          </Button>
        </div>
      )}

      {/* send file to */}
      <div className="w-full">
        <h1 className="font-bold mb-1">Send File To:</h1>
        <input
          className="w-full p-2 rounded-md focus:ring-0 border-[1px] border-gray-300 focus:outline-none"
          placeholder={userEmail}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Button
          className="bg-teal-600 text-white w-full mt-2 cursor-pointer"
          disabled={email.trim() && email.trim().length > 5 ? false : true}
          onClick={handleSendEmail}
        >
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default InputSection;
