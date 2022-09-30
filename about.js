gsap.to(".imaggg",{
    top:"-100%",
    duration:20,
    repeat:-1,
    ease:"linear",


})
gsap.to(".slide",{
    x:"-100%",
    duration:40,
    repeat:-1,
    ease:"linear"
})


var flag =0;
document.querySelector(".ri-menu-line").addEventListener("click",function(){
    if(flag===0){
        gsap.to(".layer",{
            y:"100%",
            ease: "power1.out",
        })
        gsap.to(".ri-menu-line",{
            rotation:180,
            opacity:0
        })
        gsap.to(".ri-close-line",{
            rotation:-180,
            opacity:1
        })
        flag=1;
    }
    else{
        gsap.to(".layer",{
            y:"-100%",
            ease: "power1.out",
       
        })
        gsap.to(".ri-menu-line",{
            rotation:-180,
            opacity:1
        })
        gsap.to(".ri-close-line",{
            rotation:180,
            opacity:0
        })
        flag=0;
    }
})



document.querySelector(".Home").addEventListener("mouseover",function(){
    gsap.to(".Home>h1:nth-child(1)",{
        y:"-120"
    })
    gsap.to(".Home>h1:nth-child(2)",{
        y:"-150"
    })
})
document.querySelector(".Home").addEventListener("mouseout",function(){
    gsap.to(".Home>h1:nth-child(1)",{
        y:"0"
    })
    gsap.to(".Home>h1:nth-child(2)",{
        y:"0"
    })
})

document.querySelector(".Work").addEventListener("mouseover",function(){
    gsap.to(".Work>h1:nth-child(1)",{
        y:"-120"
    })
    gsap.to(".Work>h1:nth-child(2)",{
        y:"-150"
    })
})
document.querySelector(".Work").addEventListener("mouseout",function(){
    gsap.to(".Work>h1:nth-child(1)",{
        y:"0"
    })
    gsap.to(".Work>h1:nth-child(2)",{
        y:"0"
    })
})

document.querySelector(".About").addEventListener("mouseover",function(){
    gsap.to(".About>h1:nth-child(1)",{
        y:"-120"
    })
    gsap.to(".About>h1:nth-child(2)",{
        y:"-150"
    })
})
document.querySelector(".About").addEventListener("mouseout",function(){
    gsap.to(".About>h1:nth-child(1)",{
        y:"0"
    })
    gsap.to(".About>h1:nth-child(2)",{
        y:"0"
    })
})
document.querySelector(".Hire").addEventListener("mouseover",function(){
    gsap.to(".Hire>h1:nth-child(1)",{
        y:"-120"
    })
    gsap.to(".Hire>h1:nth-child(2)",{
        y:"-150"
    })
})
document.querySelector(".Hire").addEventListener("mouseout",function(){
    gsap.to(".Hire>h1:nth-child(1)",{
        y:"0"
    })
    gsap.to(".Hire>h1:nth-child(2)",{
        y:"0"
    })
})


