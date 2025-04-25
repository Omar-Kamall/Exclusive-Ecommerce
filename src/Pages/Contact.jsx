import { FaSquarePhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const Contact = () => {
    return (
        <section >
            <div className="container mx-auto! loading grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 px-[5%]! py-30!">
                <div className="flex flex-col gap-3 p-10! shadow-2xl">
                    <div className="flex items-center gap-2">
                        <FaSquarePhone size={25} color='red'/>
                        <span className='font-mono'>Call To Us</span>
                    </div>
                    <span>We are available 24/7, 7 days a week.</span>
                    <span>Phone: +8801611112222</span>
                    <hr className='my-3!'/>
                    <div className="flex items-center gap-2">
                        <MdEmail size={25} color='red'/>
                        <span className='font-mono'>Write To US</span>
                    </div>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <span>Emails: customer@exclusive.com</span>
                    <span>Emails: support@exclusive.com</span>
                </div>
                <Formik
                    initialValues={{name: "" ,email: "" , phone: "" , message: ""}}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().min(3 , "Name Must Be At Least 3 Characters").required("Name Is Required"),
                        email: Yup.string().email("Invalid Email").min(10 , "Email Must Be At Least 10 Characters").required("Email is required"),
                        phone: Yup.string().min(11,"Phone Must Be At Least 11").required("Phone is required"),
                        message: Yup.string().min(5 , "Message Must Be At Least 5 Characters").required("Message Is Required"),
                    })}
                    onSubmit={() => {}}
                >
                    <Form className="p-10! shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-2">
                            <div className="flex flex-col mb-1!">
                                <Field className="p-2! bg-gray-200 rounded" type="text" name="name" placeholder="Your Name*"/>
                                <ErrorMessage className="px-2! mt-1! text-red-500" name="name" component="div"/>
                            </div>
                            <div className="flex flex-col mb-1!">
                                <Field className="p-2! bg-gray-200 rounded" type="text" name="email" placeholder="Your Email*"/>
                                <ErrorMessage className="px-2! mt-1! text-red-500" name="email" component="div"/>
                            </div>
                            <div className="flex flex-col mb-1!">
                                <Field className="p-2! bg-gray-200 rounded" type="text" name="phone" placeholder="Your Phone*"/>
                                <ErrorMessage className="px-2! mt-1! text-red-500" name="phone" component="div"/>
                            </div>
                        </div>
                        <Field as="textarea" className='w-full mt-1! p-2! bg-gray-200' rows={7} name="message" placeholder='Your Message'></Field>
                        <div className="flex justify-between mt-3!">
                            <div><ErrorMessage className="px-2! mt-1! text-red-500" name="message" component="div"/></div>
                            <button className="text-white px-13! py-2! hover:bg-red-700 bg-red-500 rounded cursor-pointer">Send Message</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>
    )
}

export default Contact