import React, { useEffect } from 'react'

const Navbar = () => {
    const[isMenuOpen,setIsMenuOpen]=iseState(false);
    const[isSticky,setIsSticky]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(Window.scrollY>100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.addEventListener('scroll',handleScroll);
        }
    });

    const navItems=[
        {link:"Home",path:"home"},
        {link:"Service",path:"service"},
        {link:"About",path:"about"},
        {link:"Product",path:"product"},
        {link:"Testimonial",path:"testimonial"},
        {link:"FAQ",path:"faq"},
    ];
        

  return (
    <div>
      <p>NavBar</p>
    </div>
  );
}

export default Navbar
