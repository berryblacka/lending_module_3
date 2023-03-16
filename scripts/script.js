// window.addEventListener('scroll', e => {
//     document.body.style.cssText += `--scrollTop ${this.scrollY}`
// })

gsap.registerPlugin(ScrollTrigger, ScrollSmoother); 
ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 2,
    normalizeScroll: true
});