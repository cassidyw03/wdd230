document.addEventListener('DOMContentLoaded', function() {

    const banner = document.getElementById('temp-max-banner');
    const closeBtn = document.getElementById('close-banner');
    
    // close button forever
    closeBtn.addEventListener('click', function() {
        banner.style.display = 'none';
        // will stay closed while user is on this session in browser
        sessionStorage.setItem('bannerClosed', 'true');
    });
});
