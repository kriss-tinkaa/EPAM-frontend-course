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

    sections.forEach((section, index) =>{
        section.setAttribute('data-number', `${index}`);
    })
 
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

   
    /* ADDING CLASS ACTIVE FOR DOTS */

    const optionsObserver = {
        root: null,
        threshold: .5,
    }

    const sectionsObserver = new IntersectionObserver( sections =>{
        sections.forEach(section => {
            let thisSection = section.target;
            let thisIndex = Number(thisSection.dataset.number);
            if(section.isIntersecting){
                console.log(thisIndex);
                navDots.forEach(dot =>{
                    dot.classList.remove('active');
                })
                navDots[thisIndex].classList.add('active');
            }
        })
    }, optionsObserver);

    sections.forEach(section =>{
        sectionsObserver.observe(section)
    })
     
    let sUsrAg = navigator.userAgent;
    if (!(sUsrAg.indexOf("Firefox") > -1)) {
        var canScroll = true;
        var scrollContainer = document.querySelector('html')
        scrollContainer.addEventListener('wheel', function(e) {
        if (canScroll) {
            scrollContainer.scrollBy(0, e.deltaY);
            canScroll = false;
            setTimeout(() => {
                canScroll = true;
            }, 800);
        }
        e.preventDefault();
        }, { passive: false });
    }
    

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

    /* SECTION 3 */

    const board = document.querySelector('#board');
    const SQUARES_NUMBER = 500;
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

    for(let i = 0; i < SQUARES_NUMBER; i++){
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () =>  setColor(square));
    
        square.addEventListener('mouseleave', () =>  setInterval(removeColor(square), 10060));

        board.append(square);
    }

    function setColor(elem) {
        const color = getRandomColor()
        elem.style.backgroundColor = color;
    }
    function removeColor(elem) {
        elem.style.backgroundColor = 'rgba(107, 225, 255, 0.329)';
    }

    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }

})