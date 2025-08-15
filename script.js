window.onload = function() {
    resizeiFrame = () => {
        window.addEventListener('message', function(event) {
        const height =event.data;
        console.log(height);
        const iFrameWindow = document.getElementById('iframe');
        iFrameWindow.height = height + 10 + "px";
        });
    };
};