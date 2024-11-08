// faq Accordian
document.addEventListener("DOMContentLoaded", () => {
  const faqContent = document.querySelector(".faq-content");
  faqContent.addEventListener("click", (e) => {
    const groupheader = e.target.closest(".faq-group-header");
    if (!groupheader) return;
    const group = groupheader.parentElement;
    const groupbody = group.querySelector(".faq-group-body");
    const icon = groupheader.querySelector("i");

    //    Toggle
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle visibilty
    groupbody.classList.toggle("open");

    // close other faq-body
     const othergroups=faqContent.querySelectorAll('.faq-group')
    
     othergroups.forEach((othergroup)=>{
        if(othergroup!==group){
        const othergroupbody=  othergroup.querySelector('.faq-group-body')
        const othericon=othergroup.querySelector('.faq-group-header i')

        othergroupbody.classList.remove('open')
        othericon.classList.remove('fa-minus')
        othericon.classList.add('fa-plus')
        }
     })

  });
});

// Hamburger menu
document.addEventListener('DOMContentLoaded',()=>{
  const hamburgerbutton=document.querySelector('.hamburger-button')
  const mobilemenu=document.querySelector('.mobile-menu')

  hamburgerbutton.addEventListener('click',()=> mobilemenu.classList.toggle('active'))
})