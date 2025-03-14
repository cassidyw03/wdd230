document.addEventListener('DOMContentLoaded', function() {

    const banner = document.getElementById('event-banner');
    const closeBtn = document.getElementById('close-banner');
    
    // get current day (1 = Monday, 2 = Tuesday, 3 = Wednesday)
    const day = new Date().getDay();
    
    // show only Monday, Tuesday, and Wednesday!
    if (day >= 1 && day <= 3 && !sessionStorage.getItem('bannerClosed')) {
        banner.style.display = 'block';
    }
    
    // close button forever
    closeBtn.addEventListener('click', function() {
        banner.style.display = 'none';
        // will stay closed while user is on this session in browser
        sessionStorage.setItem('bannerClosed', 'true');
    });
});


