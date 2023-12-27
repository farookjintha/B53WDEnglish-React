import { useFormik } from 'formik';
import { addUser } from '../../services/userService';

const FormikForm = () => {
    const formik = useFormik({
        initialValues: {name: "", email: "", mobileNumber:"", bloodGroup: "", profession:""},
        onSubmit: async (values) => {
            // await addUser(values);
            console.log('Values on submitting: useFormik: ', values)
        }
    });


    return (
        <div className='registration-container'>
                <h1>User Registration</h1>
                <div className='form-container'>
                    <form className='form' onSubmit={formik.handleSubmit}>
                        <div>
                            <label>Name: </label>
                            <input type='text' name='name' value={formik.values.name} placeholder='Enter name' onChange={formik.handleChange} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type='email' name='email' value={formik.values.email} placeholder='Enter email' onChange={formik.handleChange}  />
                        </div>
                        <div>
                            <label>Mobile Number: </label>
                            <input type='text' name='mobileNumber' value={formik.values.mobileNumber} placeholder='Enter mobile number' onChange={formik.handleChange}  />
                        </div>
                        <div>
                            <label>Blood Group: </label>
                            <input type='text' name='bloodGroup' value={formik.values.bloodGroup} placeholder='Enter blood group' onChange={formik.handleChange}  />
                        </div>
                        <div>
                            <label>Profession: </label>
                            <input type='text' name='profession' value={formik.values.profession} placeholder='Enter profession' onChange={formik.handleChange}  />
                        </div>
                        <div>
                            
                            <button type='submit'>Register</button>
                        </div>
                    </form>
                </div>
            </div>

    )
}

export default FormikForm;