import { useContext, useEffect, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import { SetPopupContext } from "../../App";

import apiList from "../../lib/apiList";

const Profile = (props) => {
  const setPopup = useContext(SetPopupContext);

  const [profileDetails, setProfileDetails] = useState({
    name: "",
    bio: "",
    contactNumber: "",
  });

  const [phone, setPhone] = useState("");

  const handleInput = (key, value) => {
    setProfileDetails({
      ...profileDetails,
      [key]: value,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProfileDetails(response.data);
        setPhone(response.data.contactNumber);
      })
      .catch((err) => {
        console.log(err.response.data);
        setPopup({
          open: true,
          severity: "error",
          message: "Error",
        });
      });
  };

  const handleUpdate = () => {
    let updatedDetails = {
      ...profileDetails,
    };
    if (phone !== "") {
      updatedDetails = {
        ...profileDetails,
        contactNumber: `+${phone}`,
      };
    } else {
      updatedDetails = {
        ...profileDetails,
        contactNumber: "",
      };
    }

    axios
      .put(apiList.user, updatedDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        getData();
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        console.log(err.response);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center p-8 min-h-screen">
        <div className="w-full">
          <div className="p-4 bg-white rounded shadow-lg">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-blue-500">Profile</h2>
              <input
                type="text"
                placeholder="Name"
                value={profileDetails.name}
                onChange={(event) => handleInput("name", event.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Bio (upto 250 words)"
                rows={8}
                className="w-full p-2 border border-gray-300 rounded"
                value={profileDetails.bio}
                onChange={(event) => {
                  if (
                    event.target.value.split(" ").filter(function (n) {
                      return n !== "";
                    }).length <= 250
                  ) {
                    handleInput("bio", event.target.value);
                  }
                }}
              />
              <div className="flex justify-center">
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  style={{ width: "auto" }}
                />
              </div>
              <button
                className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleUpdate()}
              >
                Update Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
