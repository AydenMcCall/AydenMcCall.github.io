/*
    Original Author: Ayden McCall
    Change Log
    8/26: File Creation and initialization
    8/27: Added newsletter events, hamburger event
    8/29: Reworked hamburger event
    9/2: Added form support for contact page, FAQ links established
*/

"use strict";

const $ = selector => document.querySelector(selector);

const newsLetterError = () => {
    const errorMsg=`Email is invalid.`;

    $("#newsletterError").style.display = "block";
    $("#newsletterError").classList.add("failed");
    $("#newsletterError").textContent = errorMsg;
    $("#newsletterEmail").value = "";
    $("#newsletterEmail").focus();
};

const registerNewsletterEmail = () => {
    const email = $("#newsletterEmail").value;
    $("#newsletterError").classList = "";
    if(!isNaN(email) || email == "") {
            newsLetterError();
        } else {
        $("#newsletterEmail").value = "";
        $("#newsletterError").classList.add("successful");
        $("#newsletterError").textContent = "Thank you for subscribing to our newsletter! Check your email for great offers tailored to your needs!";
        $("#newsletterError").style.display = "block";
    }
};

// Remove all error messages from ul
const removeAllChildren = parent => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
} 


document.addEventListener("DOMContentLoaded", () => {
    if ($("#submitNewsletterEmail") != null) {
        $("#submitNewsletterEmail").addEventListener("click", registerNewsletterEmail);
    }
    $("#hamburgerButton").addEventListener("click", () => {
            const nav = document.querySelector("#topnav");
        nav.classList.toggle("active");
    });

    if ($("#submitBtn") != null) {
        $("#submitBtn").addEventListener("click", () => {
            
            removeAllChildren($("#errorList"));
            
            const errorList = $("#errorList");
            const email = $("#emailInput").value;
            const message = $("#messageArea").value;
            let isValid = true;
            
            
            if (email == "") {
                let error = document.createElement("LI");
                // error.appendChild(document.createTextNode("Email cannot be left empty./n"));
                error.textContent = "Email cannot be left empty. \n";
                errorList.classList = "display";
                errorList.appendChild(error);
                isValid = false;
            }
            if (message == "" || message == "Enter your message here!") {
                let error = document.createElement("LI");
                error.textContent = "Please leave a message. \n";
                errorList.classList = "display";
                errorList.appendChild(error);
                isValid = false;
            }

            if (isValid) {
                $("#contactForm").classList.add("noDisplay");
                if ($("#businessRadio").checked) {
                    $("#contactForm").nextElementSibling.textContent = "Thank you for your inquery! Expect a response within 2-3 business days.";
                } else if ($("#questionRadio").checked) {
                    $("#contactForm").nextElementSibling.textContent = "Thank you for your patience, we'll get back to you as soon as possible. Make " +
                    "sure to check the Q&A board in the meantime!";
                }
                $("#contactForm").nextElementSibling.classList.remove("noDisplay");
            } 
        });
    }
    
    if (document.getElementsByClassName("expandable") != null) {
        
        let QA = document.getElementsByClassName("expandable");
        console.log(QA);
        for (const questionPrompt of QA) {
            console.log(questionPrompt);
            questionPrompt.addEventListener("click", evt => {
                const pElement = evt.currentTarget.parentNode.nextElementSibling;
                console.log(pElement);
                pElement.classList.toggle("noDisplay");
            });
        }
    }
});
