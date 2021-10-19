window.addEventListener("DOMContentLoaded", ()=>{

    const body = document.body;

    /* SCROLL */

    /* CREADE ASIDE DIVS AND COUNTING THEIR NUMBERS */

    const sidebar = document.querySelector('.dots-wrap');
    const sections = document.querySelectorAll('section');
    // const sectionWrappers = document.querySelectorAll('.section-wrapper');

    let count = 0;
    for (let i of sections){
        count ++;
        let newDot = document.createElement('div');
        newDot.className = "dot"
        sidebar.append(newDot);
        if (count == 1){
            newDot.className = "dot active";
        }
        newDot.innerHTML = `<a class="bubbly-button">${count}<span class="section_name"></span></a>`;
    }
    const navDots = document.querySelectorAll('aside .dot');

    /* CREATING ATTRIBUTE DATA-NUMBER AND ID FOR SIDEBAR MENU ANCHOR LINKS */

    const anchorLinks = sidebar.querySelectorAll('a');

    sections.forEach((section, index) =>{
        section.setAttribute('id', `${index}`);
    })

    // sectionWrappers.forEach((section, index) =>{
    //     section.setAttribute('data-number', `${index}`);
    // })
 
    anchorLinks.forEach((link, index) =>{
        link.setAttribute('href', `#${index}`);
    })

    /* ADDING SECTION NAMES IN SIDEBAR */

    const sectionNameHolder = document.querySelectorAll('.section_name');

    sections.forEach( (section, index) =>{
        let thisIndex = index;
        let thisSectionName = section.dataset.name;
        sectionNameHolder[thisIndex].innerHTML = thisSectionName;
    })

    /* ADDING ACTIVE CLASS FOR DOTS  */

    // let dots = document.querySelectorAll('.navDot');
    // dots.onclick = function addClass(elem){
    
    //     dots.forEach((dot) => {
    //         dot.classList.remove('active');
    //     })
    // }

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        console.log(scrollDistance);
        document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('aside').clientHeight <= scrollDistance){
                document.querySelectorAll('dot').forEach((el) => {
                    if(el.classList.contains('active')){
                        el.classList.remove('active');
                    }
                })
            }
            document.querySelectorAll('.dot').classList.add('active');
        })

    })

    /* SECTION 1 */

    const slides = document.querySelectorAll('.slide');

    for (const slide of slides ){
        slide.addEventListener('click', () => {
            clearActiveClass();
            slide.classList.add('active');
        })
    }

    function clearActiveClass() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }

    /* SECTION 2 */

    const item = document.querySelector('.item');
    const placeholders = document.querySelectorAll('.placeholder');


    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);

    for (const placeholder of placeholders){
        placeholder.addEventListener('dragover', dragover);
        placeholder.addEventListener('dragenter',dragenter);
        placeholder.addEventListener('dragleave', dragleave);
        placeholder.addEventListener('drop', drop);
    }

    function dragstart(event){
        console.log('dragg start', event.target);
        event.target.classList.add('active');
        setTimeout(() => event.target.classList.add('hide'))
        
    }

    function dragend(event){
        console.log('dragg end');
        event.target.className = "item";
    }

    function dragover(event){
        event.preventDefault();
    }

    function dragenter(event){
        event.target.classList.add('hovered');
        console.log('dragenter')

    }

    function dragleave(event){
        event.target.classList.remove('hovered');

    }

    function drop(event){
        event.target.classList.remove('hovered');
        event.target.append(item);

    }


    



})