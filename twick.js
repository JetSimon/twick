const dick = `<g><path d="M13.07,13.25c-0.06-0.04-0.13-0.05-0.19-0.09l3.17-5.36c0.12-0.2,0.18-0.41,0.2-0.63
	c1.08,0.85,1.89,1.26,2.55,0.15c1.14-1.92-0.09-4.76-2.74-6.32c-2.65-1.57-5.72-1.28-6.86,0.65c-0.7,1.19,0.06,1.61,1.36,2.13
	c-0.19,0.12-0.36,0.29-0.49,0.5L6.91,9.66c-2.26-1.09-4.98-0.34-6.26,1.81c-1.34,2.27-0.55,5.23,1.77,6.6
	c1.12,0.66,2.39,0.83,3.56,0.57c0.34,1.15,1.09,2.18,2.22,2.84c2.32,1.37,5.3,0.64,6.64-1.63C16.19,17.58,15.39,14.63,13.07,13.25z"></path></g>`;

const oldHeart = `<g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g>`

const oldFilledHeart = `<g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></g>`


function replaceSVG() {
    const likes = document.querySelectorAll("svg");

    
    for(let i = 0; i < likes.length; i++){
        if(likes[i].innerHTML == oldHeart || likes[i].innerHTML == oldFilledHeart){
            likes[i].innerHTML = dick;
        }
    }
    
    setTimeout(replaceSVG, 2000);
}

setTimeout(replaceSVG, 3000);

