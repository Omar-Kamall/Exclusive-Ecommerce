import { Link, useLocation, useNavigate } from "react-router-dom";
import { Img2 } from "../../public/assets"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
// Firebase
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { initializeApp } from "firebase/app";
// project-35742624401

const firebaseConfig = {
    apiKey: "AIzaSyAcw45WNuMGBcVqgZV6Gdma3quGxmAdLyM",
    authDomain: "e-commerce-6bf5b.firebaseapp.com",
    projectId: "e-commerce-6bf5b",
    storageBucket: "e-commerce-6bf5b.firebasestorage.app",
    messagingSenderId: "35742624401",
    appId: "1:35742624401:web:ba2f4d22574ee1ae076d30",
    measurementId: "G-WL9SFR276J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Signup = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [show_password , setShow_password] = useState(false);
    const Email_State = location.state?.email || "" ;
    useEffect(() => {
        if (show_password)
            setTimeout(() => {
                setShow_password(false);
            },2000)
    },[show_password])
    return (
        <sectoin>
            <div className="container mx-auto! loading px-[5%]! grid grid-cols-1 lg:grid-cols-2 pt-20! pb-5! gap-5">
                <div><img className="h-full" src={Img2} alt="Image-Error"/></div>
                <Formik
                    initialValues={{name: "" , email: Email_State, password: ""}}
                    validationSchema={Yup.object().shape ({
                        name: Yup.string().min(3 , "Name Must Be At Least 3 Characters").required("Name Is Required"),
                        email: Yup.string().email("Invalid Email").min(10 , "Name Must Be At Least 10 Characters").required("Email is required"),
                        password: Yup.string().min(8,"Name Must Be At Least 8").required("Password is required"),
                    })}
                    onSubmit={ (values)=>{
                        createUserWithEmailAndPassword(auth, values.email, values.password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            updateProfile(user, {
                                displayName: values.name
                            }).then(() =>{
                                localStorage.setItem("username", values.name);
                                navigate("/signin");
                            })
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            alert(errorMessage);
                        });
                    }}
                >
                    <Form className="flex flex-col justify-center px-[10%]!">
                        <h3 className="text-3xl lg:text-5xl mb-2!">Create an account</h3>
                        <p>Enter your details below</p>
                        <Field className="border-b-1 p-2! mb-2! mt-5!" type="text" name="name" placeholder="Enter Your Name"/>
                        <ErrorMessage className="text-red-500 mb-2! px-2!" name="name" component="div"/>
                        <Field className="border-b-1 p-2! mb-2!" type="text" name="email" placeholder="Enter Your Email"/>
                        <ErrorMessage className="text-red-500 mb-2! px-2!" name="email" component="div"/>
                        <div className="relative">
                            {show_password ?<span className="absolute m-2! right-0"><GrHide onClick={() => setShow_password(false)} size={30} color="gray" className="cursor-pointer" /></span> : 
                            <span className="absolute m-2! right-0"><BiShow onClick={() => setShow_password(true)} size={30} color="gray" className="cursor-pointer" /></span> }
                            <Field className="border-b-1 p-2! mb-2! w-full" type={!show_password ? "password" : "text"} name="password" placeholder="Enter Your Password"/>
                        </div>
                        <ErrorMessage className="text-red-500 mb-2! px-2!" name="password" component="div"/>
                        <button type="submit" className="text-white bg-red-500 cursor-pointer rounded p-2! my-5! hover:bg-red-700 transition duration-500">Sign Up</button>
                        <div className="text-center"><p>Already have account? <Link className="text-red-500 font-bold" to="/signin">Log in</Link></p></div>
                    </Form>
                </Formik>
            </div>
        </sectoin>
    )
}

export default Signup