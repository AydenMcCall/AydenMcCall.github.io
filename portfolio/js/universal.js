/* 
    Original Author: Ayden McCall
    Change Log 2021
    9/29: Creation
    9/30: Form Validation Completed
*/


"use strict"

$(document).ready( function() {
    
    $("#hamburgerBtn").on("click", () => {
        if (!$("#topnav").is(":visible")) {
            $("#topnav").show();
        } else {
            $("#topnav").hide();
        }
       
        // $("#topnav").toggle("slide");
    })

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
            validate.completeForm($("#main").children(), $("#formCompleteMsg"));
        }
        
    })

    $('#contactForm').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
         {
           $("#submitBtn").click();
           return false;  
         }
       }); 
});