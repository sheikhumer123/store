import React from "react";

import Button from "@mui/material/Button";

//Icons
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
const Signup = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: " center",
        }}
      >
        <div
          style={{
            border: "1px solid #D2D2D2",
            width: "34%",
            padding: "0px 20px",
          }}
        >
          <h3 style={{ color: "#323232" }} className="text-center mt-3">
            User Login
          </h3>
          <hr />
          <p
            style={{
              color: "#797979",
              fontWeight: 600,
            }}
          >
            Join / Sign in using
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{ width: "100%", margin: "0px 5px", borderRadius: "0px" }}
              variant="contained"
              startIcon={<FacebookIcon />}
            >
              FACEBOOK
            </Button>
            <Button
              sx={{
                backgroundColor: "#C8232C",
                width: "100%",
                margin: "0px 5px",
                borderRadius: "0px",
              }}
              variant="contained"
              startIcon={<GoogleIcon />}
            >
              GOOGLE
            </Button>
          </div>
          <div
            style={{ display: "flex", marginTop: 30, justifyContent: "center" }}
          >
            OR
          </div>
          <form>
            <p
              style={{
                color: "#797979",
                fontWeight: 600,
              }}
            >
              Username
            </p>
            <input className="form-control" type="text" />
            <p
              style={{
                color: "#797979",
                fontWeight: 600,
                marginTop: 10,
              }}
            >
              Password
            </p>
            <input className="form-control" type="text" />
          </form>
          <div
            style={{
              height: 30,
              backgroundColor: "#F9F9F9",
              display: "flex",
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <i style={{ margin: "0px 5px" }}>
              <LockOpenIcon />
            </i>
            <p style={{ cursor: "pointer" }}>Forgot Password</p>
          </div>
          <hr />
          <Button
            sx={{ width: "100%", backgroundColor: "#212529" }}
            variant="contained"
          >
            LOGIN
          </Button>
          <div
            className="mt-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p style={{ color: "#797979" }}>Don't have an account?</p>
            <p style={{ color: "red", marginLeft: 4, fontWeight: "bold" }}>
              {" "}
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
