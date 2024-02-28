import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { logout, reset } from "../../features/auth/authSlice";

const RootLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
<div className="flex justify-between items-center p-3 bg-slate-600">
  <div className="text-2xl text-white">Library Management</div>
  <div className="flex justify-end items-center">
        <div className="text-white">{user?.name}</div>
        <div>
          <button
            className="bg-red-800 text-white px-4 py-1 rounded-lg w-fit m-2"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
</div>
      {<Outlet />}
    </>
  );
};

export default RootLayout;
