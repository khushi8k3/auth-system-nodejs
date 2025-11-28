import { body } from "express-validator";

const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase()
            .withMessage("Username must be in lowercase")
            .isLength({min: 3})
            .withMessage("Username must be at least 3 characters long"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),
        body("fullname").optional().trim(),
    ]
};

const userLoginValidator = () => {
    return [
        body("email")
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),
    ]
};

const userChangeCurrentPasswordValidator = () => {
    return [
        body("newPassword").notEmpty().withMessage("New password is required"),
        body("oldPassword").notEmpty().withMessage("Old password is required"),
    ]
};

const userForgotPasswordValidator = () => {
    return [
        body("email")
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid")
    ]
};

const userReseForgotPasswordValidator = () => {
    return [
        body("newPassword")
            .notEmpty().withMessage("password is required")
    ]
};

export {
    userRegisterValidator,
    userLoginValidator,
    userChangeCurrentPasswordValidator,
    userForgotPasswordValidator,
    userReseForgotPasswordValidator
}