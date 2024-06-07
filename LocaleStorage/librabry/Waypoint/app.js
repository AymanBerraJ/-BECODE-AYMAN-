new Waypoint({
    element: document.getElementById('inferieur'),
    handler: function(direction) {
        if (direction === 'down') {
            alert(`Are you sure? You'll be afraid`);
        }
    },
    offset: '100%' 
});

new Waypoint({
    element: document.getElementById('inferieur'),
    handler: function(direction) {
        if (direction === 'up') {
            alert('I told you Lmok!');
        }
    },
    offset: '100%'
});