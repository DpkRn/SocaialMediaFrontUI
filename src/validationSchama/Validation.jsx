import * as Yup from 'yup'

export const Validation = Yup.object({
   
 
    // FIRST NAME VALIDATION.......................................................
    username: Yup.string()
        .required("First name is required")
        .min(2, "First Name must be at least 2 characters")
        .max(20),
    
    // // LAST NAME VALIDATION.......................................................
    //   lastName: Yup.string()
    //     .required("Last name is required")
    //     .min(2, "First Name must be at least 2 characters")
    //     .max(8),
    
    // EMAIL NAME VALIDATION.......................................................
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    
    // NUMBER NAME VALIDATION.......................................................
    //   phoneNumber: Yup.string()
    //     .min(10)
    //     .matches(/^\d{10}$/, "Phone Number must be exactly 10 digits")
    //     .required("Phone number is required"),
    
    //  PASSWORD VALIDATION.......................................................
      password: Yup.string()
        .min(6, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[!@#$%^&*]/, "Password must contain at least one special character" )
        .required("Password is required"),
    
    // CONFIRM PASSWORD VALIDATION.......................................................
    confirmpass: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    
    // GENDER VALIDATION.......................................................
      //gender: Yup.string().required("Gender is required"),
    //   gender: Yup.string()
    //   .oneOf(['male', 'female', 'other'], 'Invalid Gender')
    //   .required('Gender is required'),
    
    // // INTERESTS VALIDATION.......................................................
    //   interests: Yup.array()
    //   .required('Interests are required')
    //   .min(1, "At least one interest is required"),
    
    // // DOTE OF BIRTH VALIDATION.......................................................
    //   dob: Yup.date().required("Date of birth is required").nullable(),
     
    // // AGE VALIDATION.......................................................
    //    Age: Yup.number()
    //   .min(18, 'You must be at least 18 years old')
    //   .required('Age is required')
    });