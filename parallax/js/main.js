/* 
    Original Author: Ayden McCall
    Modification Log:
    10/7: Creation
    10/8: Admin btn Commented out; validation edited
*/

"use strict"

/* new Vue ({
    el: "#sections",
    data: {
        
    },
}); */

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
            $(message).delay(100).fadeIn(300);
        }

    }
}) ();

$(document).ready(function () {

    //Accordion
    if ($("#accordion").length) {
        $("#accordion").accordion({
            collapsible: true,
            active: false,
            animate: 300
        });
    }//End Accordion


    /*// ADMIN FORM COMPLETE BUTTON
    $("#adminBtn").on("click", () => {
        validate.completeForm($("#formDiv"), $("#formCompleteMsg"));
    });*/

    //SubmitBtn Listener
    $("#submitBtn").on("click", () => {
        let isValid = true;
        let errorList = $("#errorList");
        errorList.empty();
        const name = $("#nameInput");
        const email = $("#emailInput");
        const message = $("#messageArea");

        if (!validate.notEmpty(message.val())) {
            let error = document.createElement("li");
            $(error).text("Please enter a message.");
            errorList.append(error);
            message.val("");
            message.focus();
            isValid = false;
        }
        if (!validate.verifyEmail(email.val())) {
            let error = document.createElement("li");
            $(error).text("Please enter a valid email.");
            errorList.append(error);
            
            email.focus();
            email.select();
            isValid = false;
        }
        if (!validate.verifyName(name.val())) {
            let error = document.createElement("li");
            $(error).text("Please enter a first and last name.");
            errorList.append(error);
            name.focus();
            
            isValid = false;
        }

        if (isValid) {
            validate.completeForm($("#formDiv"), $("#formCompleteMsg"));
        }
        
    })// END SubmitBtn Listener
});