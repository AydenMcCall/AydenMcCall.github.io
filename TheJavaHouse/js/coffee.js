/*
    Original Author: Ayden McCall
    Change Log
    8/26: File Creation and initialization
    8/27: Added newsletter events, hamburger event
    8/29: Reworked hamburger event
    9/2: Added form support for contact page, FAQ links established
    9/8: Jquery added, doesn't work
    9/9: Jquery breaks literally every single webpage, fix in progress
    9/10: jQuery fixed on case by case basis; carousel fully functional
    9/14: Begun shop support
*/

"use strict";

//const $ = selector => document.querySelector(selector);

function newsLetterError() {
    const errorMsg = "\nEmail is invalid.";

    $("#newsletterError").addClass("display");
    $("#newsletterError").addClass("failed");
    $("#newsletterError").text(errorMsg);
    $("#newsletterEmail").val("")
    $("#newsletterEmail").focus();
};

function registerNewsletterEmail () {
    const email = $("#newsletterEmail").val();
    if(!isNaN(email) || email == "") {
            newsLetterError();
        } else {
        $("#newsletterEmail").val("");
        $("form").addClass("noDisplay");
        $("#newsletterCompletion").removeClass("noDisplay");
    }
};


$(document).ready(function() { 
    if ($("#submitNewsletterEmail").length) {
        $("#submitNewsletterEmail").on("click", registerNewsletterEmail);
    }//End NewsletterButton
    $("#hamburgerButton").on("click", () => {
            const nav = document.querySelector("#topnav");
        nav.classList.toggle("active");
    });//End Hamburger

    // Contact Form
    if ($("#submitBtn") != null) {
        $("#submitBtn").on("click", () => {
            
            $("#errorList").empty();

            
            const errorList = $("#errorList");
            const email = $("#emailInput").val();
            const message = $("#messageArea").val();
            let isValid = true;
            
            
            if (email == "") {
                let error = document.createElement("LI");
                // error.appendChild(document.createTextNode("Email cannot be left empty./n"));
                error.textContent = "Email cannot be left empty. \n";
                errorList.addClass("display");
                errorList.append(error);
                isValid = false;
            }
            if (message == "" || message == "Enter your message here!") {
                let error = document.createElement("LI");
                error.textContent = "Please leave a message. \n";
                errorList.addClass("display");
                errorList.append(error);
                isValid = false;
            }

            if (isValid) {
                $("#contactForm").addClass("noDisplay");
                if ($("#businessRadio").is(":checked")) {
                    $("#contactForm").next().text("Thank you for your inquery! Expect a response within 2-3 business days.");
                } else if ($("#questionRadio").is(":checked")) {
                    $("#contactForm").next().text("Thank you for your patience, we'll get back to you as soon as possible. Make " +
                    "sure to check the Q&A board in the meantime!");
                }
                console.log( $("#contactForm").next().classList);
                $("#contactForm").next().removeClass("noDisplay");
            } 
        });
    }//End Contact Form

    if ($("#accordion").length) {
        $("#accordion").accordion({
            collapsible: true,
            active: false,
            animate: 300,
        });
    }

    //Carousel
    if ($(".carousel").length) {
        let links = $(".carouselImage");
        let selected = 0;
        links[selected].classList.remove("noDisplay");

        function carouselForward () {
            jQuery(links[selected]).fadeOut(400);
            //jQuery(links).addClass("noDisplay");
            selected +=1;
            if (selected > links.length - 1) {
                selected = 0;
            }
            jQuery(links[selected]).delay(400).fadeIn(400);
            //links[selected].classList.remove("noDisplay");
        }

        let timer = setInterval(carouselForward, 5000);

        function resetTimer (func, seconds) {
                clearInterval(timer);
                timer = setInterval(func, (seconds * 1000));
        }
        //eventListeners for both buttons
        $("#leftButton").on("click", () => {
            jQuery(links[selected]).fadeOut(400);
            //jQuery(links[selected]).addClass("noDisplay");
            selected -=1;
            if (selected < 0) {
                selected = links.length - 1;
            }
                //links[selected].classList.remove("noDisplay");  
                resetTimer(carouselForward, 5);
                jQuery(links[selected]).delay(400).fadeIn(400);
        });
        $("#rightButton").on("click", () => {
            carouselForward();
            resetTimer(carouselForward, 5);
        });
    }//End Carousel
    // Start Shop
    if ($(".purchaseBtn").length) {
        const purchaseBtns = $(".purchaseBtn");
        for (let i = 0; i < purchaseBtns.length; i++) {
            $(purchaseBtns[i]).on("click", () => {
                const button = purchaseBtns[i];
                $(button).hide(500);
                $(button).next().delay(500).show(500);
                let shopNumber = parseInt($("#shopCounter").text().charAt(1));
                shopNumber += 1;

                $("#shopCounter").text(`*${shopNumber}*`);
            });
        }
    }// End Shop
});// End Document Start


    