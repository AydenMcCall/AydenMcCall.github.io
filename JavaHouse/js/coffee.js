/*

    Original Author: Ayden McCall
    Change Log
    8/26: File Creation and initialization
    8/27: Added newsletter events, hamburger event
*/

"use strict";

const $ = selector => document.querySelector(selector);

const newsLetterError = entry => {
    const obj = entry;
    const errorMsg=`${obj} is invalid.`;

    $("#newsletterError").style.display = "block";
    $("#newsletterError").textContent = errorMsg;
    $("#newsletterEmail").value = "";
    $("#newsletterEmail").focus();
};

const registerNewsletterEmail = () => {
    const email = $("#newsletterEmail").value;
    if(!isNaN(email) || email=="") {
        if (email == "") {
            newsLetterError("Email");
        } else {
            newsLetterError("Email");   
        } 
    } else {
        alert("Thank you for subscribing to our newsletter! Check your email for great offers tailored to your needs!")
        $("#newsletterEmail").value = "";
        $("#newsletterError").style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", () => {
    $("#submitNewsletterEmail").addEventListener("click", registerNewsletterEmail);
    $("#hamburgerButton").addEventListener("click", () => {
        let x = $(".topnav");
        if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
          $(".topnav") = x;
        }  
    )
});