function addTestimonial() {
    const testimonialText = document.getElementById('testimonial').value;
    const newBlockquote = document.createElement('blockquote');
    newBlockquote.innerHTML = testimonialText;
    newBlockquote.style.borderLeft = '5px solid #4CAF50';
    newBlockquote.style.paddingLeft = '20px';
    newBlockquote.style.margin = '15px';
    newBlockquote.style.fontStyle = 'italic';
    document.body.appendChild(newBlockquote);
}