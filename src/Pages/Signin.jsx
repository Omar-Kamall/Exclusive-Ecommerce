import { Link, useNavigate } from "react-router-dom";
import { Img2 } from "../../public/assets"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { GrHide } from "react-icons/gr";
import { useEffect, useState } from "react";
import { BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
// Sign In Firebase 
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const firebaseConfig = {
    apiKey: "AIzaSyAcw45WNuMGBcVqgZV6Gdma3quGxmAdLyM",
    authDomain: "e-commerce-6bf5b.firebaseapp.com",
    projectId: "e-commerce-6bf5b",
    storageBucket: "e-commerce-6bf5b.firebasestorage.app",
    messagingSenderId: "35742624401",
    appId: "1:35742624401:web:ba2f4d22574ee1ae076d30",
    measurementId: "G-WL9SFR276J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'it';
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});


const Signin = () => {
    const navigate = useNavigate();
    const [show_password , setShow_password] = useState(false);
    useEffect(() => {
        if (show_password)
            setTimeout(() => {
                setShow_password(false);
            },2000)
    },[show_password])

    const Login_Google = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            localStorage.setItem("username", user.displayName || "User");
            navigate("/");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorCode || errorMessage || email || credential);
        });
    }

    return (
        <section>
            <div className="container mx-auto! loading px-[5%]! grid grid-cols-1 lg:grid-cols-2 pt-20! pb-5! gap-5">
                <div><img className="h-full" src={Img2} alt="Image-Error"/></div>
                    <Formik
                        initialValues={{name: "" , email: "", password: ""}}
                        validationSchema={Yup.object().shape ({
                            email: Yup.string().email("Invalid Email").min(10 , "Name Must Be At Least 10 Characters").required("Email is required"),
                            password: Yup.string().min(8,"Name Must Be At Least 8").required("Password is required"),
                        })}
                        onSubmit={ (values)=>{
                            signInWithEmailAndPassword(auth, values.email, values.password)
                            .then((userCredential) => {
                                const user = userCredential.user;
                                const displayName = user.displayName || "";
                                localStorage.setItem("username", displayName);
                                navigate("/");
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                alert(errorMessage , errorCode);
                            });
                        }}
                    >
                        <Form className="flex flex-col justify-center px-[10%]!">
                            <h3 className="text-3xl lg:text-5xl mb-2!">Log in to Exclusive</h3>
                            <p>Enter your details below</p>
                            <Field className="border-b-1 p-2! mb-2! mt-5!" type="text" name="email" placeholder="Enter Your Email"/>
                            <ErrorMessage className="text-red-500 mb-2! px-2!" name="email" component="div"/>
                            <div className="relative">
                                {show_password ?<span className="absolute m-2! right-0"><GrHide onClick={() => setShow_password(false)} size={30} color="gray" className="cursor-pointer" /></span> : 
                                <span className="absolute m-2! right-0"><BiShow onClick={() => setShow_password(true)} size={30} color="gray" className="cursor-pointer" /></span> }
                                <Field className="border-b-1 p-2! mb-2! w-full" type={!show_password ? "password" : "text"} name="password" placeholder="Enter Your Password"/>
                            </div>
                            <ErrorMessage className="text-red-500 mb-2! px-2!" name="password" component="div"/>
                            <div className="grid grid-cols-2 gap-5">
                                <button type="submit" className="text-white bg-red-500 cursor-pointer rounded p-2! my-5! hover:bg-red-700 transition duration-500">Sign In</button>
                                <Link to={"/signup"}><button className="text-white w-full bg-red-500 cursor-pointer rounded p-2! my-5! hover:bg-red-700 transition duration-500">Sign Up</button></Link>
                            </div>
                            <button type="button" onClick={Login_Google} className="border-1 cursor-pointer rounded p-2! mb-5!"><div className="flex justify-center items-center gap-2"><FcGoogle size={20}/> Sign In With Google</div></button>
                        </Form>
                    </Formik>
            </div>
        </section>
        
    )
}

export default Signin