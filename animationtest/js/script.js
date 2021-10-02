"use strict"

function begone() {
    anime({
        targets: ".block",
        translateX: 1000,
        delay: anime.stagger(200),
        opacity: 0,
        duration: 1200
    })

}

$(document).ready(function() {

    $("#endBtn").on("click", () => {
        
            for (let i = 0; i <= 8; i++) {
                let block = document.createElement("div");
                $(block).addClass("block");
                $(block).addClass("hide")
                $(".main").append(block);
            }
            $("#endBtn").fadeOut(1000);
            $("#speech").text("Huzzah!");
            $(".block").fadeIn(2000);
            
            function animateEnd (backwards = false ) {

                if (backwards == false) {
                    let x = -300;
                    //let y = -700;
                    anime({
                        targets: ".block",
                        translateX: function() {
                            x += 150;
                            return x;
                        },
                        translateY: -200,
                        delay: anime.stagger(100)
                    })
                } else {
                    let x = 1200;
                   // let y = 700;
                    anime({
                        targets: ".block",
                        translateX: function() {
                            x -= 150;
                            return x;
                        },
                        translateY: 127,
                        delay: anime.stagger(100)
                    })
                }
                }
                
            

           /* function reset () {
                let blocks = document.querySelectorAll(".block");
                delete document.querySelectorAll(".block");
                for (let i = 0; i <= 200; i++) {
                    let block = document.createElement("div");
                    $(block).addClass("block");
                    
                    $(".main").append(block);
                }
                animateEnd();
            }
            setInterval(reset, 2000); */
            setTimeout(animateEnd, 1000);
            setTimeout(() => {animateEnd(true)}, 3000);
            setTimeout(begone, 5000);

            
            
    })
});