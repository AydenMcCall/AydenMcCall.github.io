/* 
    Original Author: Ayden McCall
    Change Log 2021
    9/30: Creation
    10/1: Full name validation added
*/

"use strict"

const validate = ( () => {
    // PRIVATE VARIABLES
    return {
        // FUNCTIONS
        verifyEmail (email) {
            const emailRegex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/i;
            return emailRegex.test(email);
        },
        notEmpty (message) {
            if (message != "") {
                return true;
            } else {
                return false;
            }
        },
        verifyName (name) {
            const fullNameRegex = /^\w+ \w+$/;
            return fullNameRegex.test(name);
        },
        completeForm (form, message) {
            $(form).fadeOut(300);
            $(message).delay(300).fadeIn(300);
        }

    }
}) ();