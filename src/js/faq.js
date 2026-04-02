const faqList = document.querySelector('.faq-list');
const faqParagraphs = document.querySelectorAll('.faq-paragraph');
const svgSpans = document.querySelectorAll('.faq-icon');

let activeParagraph = false;

faqList.addEventListener('click', (e) => {
    if(e.target === e.currentTarget || e.target.tagName === `H3`) return;
    
    const faqParagraph = e.target.closest('.faq-item').querySelector('.faq-paragraph');
    
    if(faqParagraph.style.display === `none`){
        faqParagraph.style.display = `block`;
        activeParagraph = true;
    }
    else {
        faqParagraph.style.display = `none`;
        activeParagraph = false;
    }

    if(activeParagraph){
        faqParagraphs.forEach(paragraph => {
            if(paragraph !== faqParagraph){
                paragraph.style.display = `none`;
            }
        })
    }

   
    svgSpans.forEach(span => {
        const item = span.closest('.faq-item');
        const paragraph = item.querySelector('.faq-paragraph');
        if(paragraph.style.display === 'block'){
            span.innerHTML = `<svg class="more-icon"  width="32" height="32"><use href = "../img/icons.svg#icon-chevron-up"></use></svg>`;
        } else {
            span.innerHTML = `<svg class="more-icon"  width="32" height="32"><use href = "../img/icons.svg#icon-chevron-down"></use></svg>`;
        }
    });
});