const tabButtons = document.querySelectorAll(".top-center .tab-btn");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});
  document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs in the same container
                this.parentNode.querySelectorAll('.tab').forEach(t => {
                    t.classList.remove('active');
                });
                // Add active class to clicked tab
                this.classList.add('active');
            });
        });
        
        // Add interactivity to bottom tabs (Discover, Following, Campaign, Announcement)
        document.querySelectorAll('.bottom-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all bottom tabs
                document.querySelectorAll('.bottom-tab').forEach(t => {
                    t.classList.remove('active');
                });
                // Add active class to clicked tab
                this.classList.add('active');
            });
        });
        
        // Add interactivity to footer nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                // Remove active class from all nav items
                document.querySelectorAll('.nav-item').forEach(nav => {
                    nav.classList.remove('active');
                });
                // Add active class to clicked nav item
                this.classList.add('active');
            });
        });
        
        // Invite button functionality
        document.querySelector('.invite-btn').addEventListener('click', function() {
            alert('Invite friends feature activated! Share your referral link to earn rewards.');
        });
        
        // Update time every second (just for demo)
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            const dateString = now.toLocaleDateString([], {weekday: 'short', month: 'short', day: 'numeric'});
            
            // If we had a time display element, we would update it here
            // document.querySelector('.time-display').textContent = ${dateString} ${timeString};
        }
        
        // Update time immediately and then every second
        updateTime();
        setInterval(updateTime, 1000);