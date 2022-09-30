
gsap.to(".upperlayer",{
    y:"-100%",
    duration:0.6,
    ease:"linear",
    delay:2.5
})

gsap.to(".txt>h2:nth-child(2)",{
    display:"none",
    delay:0.7
})
gsap.to(".txt>h2:nth-child(3)",{
    display:"block",
    delay:1.2
})
gsap.to(".txt>h2:nth-child(3)",{
    display:"none",
    delay:1.2
})
gsap.to(".txt>h2:nth-child(1)",{
    display:"block",
    delay:1.7
})
gsap.to(".txt>h2:nth-child(1)",{
    display:"none",
    delay:1.8
})
gsap.to(".txt>h2:nth-child(4)",{
    display:"block",
    delay:2.3
})

gsap.to("#first>.txt",{
    right:"100%",
    duration:130,
    ease:"linear",
    repeat:-1
})

gsap.to("#sixth>.first",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        // markers:true,
        start:"top 90%",
        end:"bottom 10%",
        scrub:true

    },
    left:"-100%",
    duration:40,
    ease:"linear",

    
    

})

gsap.to("#sixth>.sec",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        // markers:true,
        start:"top 90%",
        end:"bottom 10%",
        scrub:true

    },
    left:"50%",
    duration:40,
    ease:"linear",

})

gsap.to("#sixth>.third",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        // markers:true,
        start:"top 90%",
        end:"bottom 10%",
        scrub:true

    },
    left:"-100%",
    duration:40,
    ease:"linear",

    
    

})
gsap.to("#sixth>.fourth",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        // markers:true,
        start:"top 90%",
        end:"bottom 10%",
        scrub:true

    },
    left:"50%",
    duration:40,
    ease:"linear",

    
    

})
gsap.to("#sixth>.fifth",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        // markers:true,
        start:"top 90%",
        end:"bottom 10%",
        scrub:true

    },
    left:"-100%",
    duration:40,
    ease:"linear",

    
    

})
gsap.to("#sixth>.sixth",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        // markers:true,
        start:"top 90%",
        end:"bottom 10%",
        scrub:true

    },
    left:"50%",
    duration:40,
    ease:"linear",

    
    

})

gsap.to("#sixth>.seven",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        // markers:true,
        start:"top 90%",
        end:"bottom 10%",
        scrub:true

    },
    left:"-100%",
    duration:40,
    ease:"linear",

    
    

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

gsap.to(".img2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:true,
        start:"top 20%",
        end:"bottom 10%",
        scrub:3

    },
    rotate:"360"
})
gsap.from("#fourth>.head",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#third",
        // markers:true,
        start:"top 20%",
        end:"bottom 10%",
        scrub:true

    },
    y:"80"
    
})


document.querySelector("*").addEventListener("mousemove",function(dets){
    setTimeout(() => {
        document.querySelector(".mouse").style.left = `${dets.x}px`;
        document.querySelector(".mouse").style.top = `${dets.y}px`;
    }, 100);
})

