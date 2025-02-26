import { useEffect, useState } from "react";
import Image from "next/image";
import { ClipboardCopyIcon } from "@heroicons/react/outline"; // Import the icon
import Transaction from "@/components/ui/transaction";
import usePutMutation from "../app/services/putApi";
import usePostRequest from "@/app/services/postApi";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  profession: string;
  accessKey: string;
  profileImage: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    accessKey: "",
    profileImage: "/default-profile.png",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const [copyMessage, setCopyMessage] = useState<string>("");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [storedUserData, setStoredUserData] = useState("");
  const [userId, setUserId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { mutate: generateAccessKey } = usePostRequest("/genrateAccessKey");

  const handleGenerateAccessKey = () => {
    console.log("userId  in fn." , userId)
    generateAccessKey(
      { userId: userId },
      {
        onSuccess: (data) => {
          console.log("New access key:", data.accessKey);
          setStoredUserData((prev) => ({ ...prev, accessKey: data.accessKey }));
          alert("New Access Key Generated.");
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };
  

  const handleCopyAccessKey = () => {
    navigator.clipboard.writeText(profile.accessKey);
    setCopyMessage("Copied!");
    setTimeout(() => {
      setCopyMessage("");
    }, 3000);
  };

  const { mutate } = usePutMutation("http://localhost:5000/updateProfile");

  const handleSave = () => {
    const newErrors = {};
    if (!profile.firstName) newErrors.firstName = "First name is required.";
    if (!profile.lastName) newErrors.lastName = "Last name is required.";
    if (!profile.email) newErrors.email = "Email is required.";
    if (!profile.profession) newErrors.profession = "Profession is required.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSaving(true);
    console.log("Saving profile:", profile);
    mutate(profile, {
      onSuccess: () => {
        localStorage.setItem("userProfile", JSON.stringify(profile));
        setIsSaving(false);
        alert("Profile updated successfully!");
      },
      onError: (error) => {
        console.error("Error updating profile:", error);
        setIsSaving(false);
      },
    });
  };

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowLogoutDialog(false);
  };

  useEffect(() => {
    const storedUserString = localStorage.getItem("user");
    if (storedUserString) {
      const storedUser = JSON.parse(storedUserString);
      console.log("storedUser after parsing", storedUser);
      setStoredUserData(storedUser);
      setUserId(storedUser._id);
      console.log("userid in useeffect", userId);
    }
  }, []);

  useEffect(() => {
    console.log("Updated userId:", userId);
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-20">
      <div className="w-full max-w-4xl p-10 mx-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/profile.png"
                alt="Profile"
                layout="intrinsic"
                width={96}
                height={96}
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <div>
              <p className="text-lg font-semibold text-gray-700">Access Key</p>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={storedUserData.accessKey || "N/A"}
                  readOnly
                  className="w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 truncate"
                />
                {copyMessage ? (
                  <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-green-500 ">
                    {copyMessage}
                  </span>
                ) : (
                  <button
                    onClick={handleCopyAccessKey}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg hover:text-gray-400"
                  >
                    <ClipboardCopyIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
            <button
              onClick={handleGenerateAccessKey}
              className="px-4 py-2 mt-6 bg-primary text-white rounded-lg hover:bg-darkPrimary"
            >
              Generate Access Key
            </button>

            <button
              onClick={handleSave}
              className="px-4 py-2 mt-6 bg-green-500 text-white rounded-lg hover:bg-green-600"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Profession
            </label>
            <input
              type="text"
              name="profession"
              value={profile.profession}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 ${
                errors.profession ? "border-red-500" : ""
              }`}
            />
            {errors.profession && (
              <p className="text-red-500 text-sm">{errors.profession}</p>
            )}
          </div>
          <div>
            <button
              className="bg-red-600 px-4 py-2 border rounded-lg text-white hover:bg-red-700"
              onClick={handleLogoutClick}
            >
              {" "}
              Log out
            </button>
          </div>
        </div>
        {showLogoutDialog && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-lg font-semibold text-gray-700">
                Are you sure you want to log out?
              </h3>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={() => setShowLogoutDialog(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <Transaction /> */}
    </div>
  );
}
