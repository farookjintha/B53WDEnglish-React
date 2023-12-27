import { useFormik, Formik, Form, Field } from 'formik';
import { addUser } from '../../services/userService';

const FormikForm2 = () => {
    // const formik = useFormik({
    //     initialValues: {name: "", email: "", mobileNumber:"", bloodGroup: "", profession:""},
    //     onSubmit: async (values) => {
    //         await addUser(values);
    //     }
    // });


    return (
        <div className='registration-container'>
                <h1>User Registration</h1>
                <div className='form-container'>
                    <Formik
                        initialValues={{
                            name: "", email: "", mobileNumber:"", bloodGroup: "", profession:""
                        }}
                        onSubmit={(values) => {
                            console.log('Values on Submission: ', values)
                        }}
                    >
                        <Form className='form'>
                            <div>
                                <label>Name: </label>
                                <Field type='text' name='name' placeholder='Enter name' />
                                {/* <input type='text' name='name' value={formik.values.name} placeholder='Enter name' onChange={formik.handleChange} /> */}
                            </div>
                            <div>
                                <label>Email: </label>
                                <Field type='email' name='email'  placeholder='Enter email' />
                                {/* <input type='email' name='email' value={formik.values.email} placeholder='Enter email' onChange={formik.handleChange}  /> */}
                            </div>
                            <div>
                                <label>Mobile Number: </label>
                                <Field type='text' name='mobileNumber' placeholder='Enter mobile number'  />
                                {/* <input type='text' name='mobileNumber' value={formik.values.mobileNumber} placeholder='Enter mobile number' onChange={formik.handleChange}  /> */}
                            </div>
                            <div>
                                <label>Blood Group: </label>
                                <Field type='text' name='bloodGroup' placeholder='Enter blood group'  />
                                {/* <input type='text' name='bloodGroup' value={formik.values.bloodGroup} placeholder='Enter blood group' onChange={formik.handleChange}  /> */}
                            </div>
                            <div>
                                <label>Profession: </label>
                                <Field type='text' name='profession' placeholder='Enter profession' />
                                {/* <input type='text' name='profession' value={formik.values.profession} placeholder='Enter profession' onChange={formik.handleChange}  /> */}
                            </div>
                            <div>
                                
                                <button type='submit'>Register</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>

    )
}

export default FormikForm2;