document.addEventListener('DOMContentLoaded', () => {
    // Modal Logic
    const modal = document.getElementById('contact-modal');
    const contactBtns = [document.getElementById('contact-btn'), document.querySelector('.contact-trigger')];
    const closeBtn = document.getElementById('close-modal');

    // Make sure we redirect back after form submission
    const nextUrlField = document.getElementById('next-url');
    if (nextUrlField) {
        nextUrlField.value = window.location.href;
    }

    const openModal = (e) => {
        if(e) e.preventDefault();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    };

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore background scrolling
    };

    contactBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside of modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Works hover interaction override (for active visual logic if needed beyond CSS)
    const worksItems = document.querySelectorAll('.works-item');
    worksItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Remove active from others
            worksItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
