export const checkValidData = (name, email, password, isSignInForm) => {
    if (isSignInForm) {
        const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);


        if (!isEmailValid) return "Email id is not valid";
        if (!isPasswordValid) return "Password is not valid";


        return null;
    } else {
        const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
        const isNameValid = /^[a-zA-Z ]+$/.test(name);


        if (!isEmailValid) return "Email id is not valid";
        if (!isPasswordValid) return "Password is not valid";
        if (!isNameValid) return "Name is not valid";

        return null;


    }
}
