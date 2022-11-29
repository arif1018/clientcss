import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import Logo from "../../assets/images/CTSLogo.png";
import { toast } from "react-toastify";

function UserProfile() {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const [formData, setFormData] = useState({ userEmail: "", userPassword: "" });
  const { userEmail, userPassword } = formData;
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      if (Object.keys(user)[0] === "success") {
        navigate("/dashboard");
      }
    } else {
      navigate("/");
    }
  }, [user, isError, isSuccess, message, navigate, disptach]);

  const handleChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const userlogin = (e) => {
    e.preventDefault();
    const userData = { userEmail, userPassword };
    disptach(login(userData));
    if (isSuccess || Object.keys(user)[0] === "success") {
      console.log("Done");
      toast.success("Loged in Successfully");
    }
  };

  // if(isLoading){
  //   return <><h1>Loading</h1></>
  // }

  return (
    <>
      <main className="main_user2">
        <div className="login_form1  ">
          <Alert className="text-center fs-4 m-0   alertt">
            <img src={Logo} style={{ width: "100%" }} alt="Logo Will Here" />
          </Alert>
          <Form className="form py-3 px-4 ">
            <div className="mt-2 mb-5">
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="userEmail"
                  type="text"
                  value={userEmail}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-2 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="userPassword"
                  type="password"
                  value={userPassword}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            {isLoading === true ? (
              <>
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              </>
            ) : (
              <>
                <Button
                  className="form_btn mt-2 w-100"
                  type="submit"
                  onClick={userlogin}
                >
                  Log In
                </Button>
              </>
            )}

            {/* <Button
              className="form_btn mt-2 w-100"
              type="submit"
              onClick={userlogin}
            >
              Log In
            </Button> */}
            <div className="message text-center mt-4">
              <p>
                Forgot Password?{" "}
                <NavLink to="/home" className="mx-2">
                  Click Here
                </NavLink>
              </p>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
}

export default UserProfile;
