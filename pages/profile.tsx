import { useState } from "react";
import Image from "next/image";
import { ClipboardCopyIcon } from "@heroicons/react/outline"; // Import the icon
import Transaction from "@/components/ui/transaction";
import usePutMutation from "../app/services/putApi";

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
    profileImage: "/default-profile.png", // Default profile image
  });
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState({});
  const [copyMessage, setCopyMessage] = useState<string>("");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerateAccessKey = () => {
    const newAccessKey = Math.random().toString(36).substring(2, 15);
    setProfile((prev) => ({ ...prev, accessKey: newAccessKey }));
  };

  const handleCopyAccessKey = () => {
    navigator.clipboard.writeText(profile.accessKey);
    setCopyMessage("Copied!"); // Show the "Copied!" message
    setTimeout(() => {
      setCopyMessage(""); // Hide the "Copied!" message after 3 seconds
    }, 3000);
  };

  const { mutate, isLoading, isError, data } = usePutMutation(
    "http://localhost:5000/updateProfile"
  );

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
    setShowLogoutDialog(true); // Show the dialog
  };
  

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowLogoutDialog(false); // Close the dialog
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-20">
      <div className="w-full max-w-4xl p-10 mx-6">
        <div className="flex items-center justify-between mb-6">
          {/* Profile Image */}
          <div className="flex items-center">
            <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/profile.jpg"
                alt="Profile"
                layout="intrinsic" // Keeps the natural aspect ratio while resizing
                width={96} // Adjust the width as needed
                height={96} // Adjust the height as needed
                objectFit="cover" // Ensures the image covers the container without distortion
                className="border-4 border-purple-500"
              />
            </div>
          </div>

          {/* Access Key Section aligned to the right */}
          <div className="flex items-center space-x-4 ml-auto">
            <div>
              <p className="text-lg font-semibold text-gray-700">Access Key</p>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={profile.accessKey || "N/A"}
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
              className="px-4 py-2 mt-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
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
            <button className="bg-red-500 px-4 py-2 border rounded-lg text-white" onClick={handleLogoutClick}
            > Log out</button>
          </div>
        </div>
        {showLogoutDialog && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h3 className="text-lg font-semibold text-gray-700">Are you sure you want to log out?</h3>
      <div className="mt-4 flex justify-end space-x-4">
        <button
          onClick={() => setShowLogoutDialog(false)} // Close the dialog without logging out
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={handleLogout} // Perform logout and close the dialog
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Log out
        </button>
      </div>
    </div>
  </div>
)}

      </div>
      <Transaction />
    </div>
  );
}
