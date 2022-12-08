var classes = {
    containerDiv: 'container-div',
    imageDiv: 'image-div',
    image1: 'image1',
    image2: 'image2',
    image3: 'image3',
    inside1: 'inside1',
    inside2: 'inside2',
    inside3: 'inside3',
    threeImages: 'three-images',
    controlPanel: 'control-panel',
    leftButton: 'left-panel',
    movingBar: 'moving-bar',
    movingBarInside: 'moving-bar-inside',
    rightButton: 'right-button'
}

var selectors = {};

Object.keys(classes).forEach(function (key) {
    selectors[key] = '.' + classes[key];
});

function setStyle () {
    $(selectors.myCustomStyleClass).remove();

    var css =
    '*{' +
        'margin: 0;' +
        'padding: 0;' +
        'box-sizing: border-box;' +
        'text-decoration: none;' +
        'list-style-type: none;'+
        'font-family: "Nunito Sans", sans-serif;' +
        '}' +
    'body{' +
        'background: #FEEFC3;' +
        '}' +
    selectors.containerDiv + '{' +
        'background: #FFA500;' +
        'width: 300px;' +
        'height: 400px;' +
        'position: absolute;' +
        'top: 50%;' +
        'left: 50%;' +
        'margin: -200px 0 0 -150px;' +
        'border-radius: 10px;' +
        '}' +
    selectors.imageDiv + '{' +
        'width: 300px;' +
        'height: 300px;' +
        'border-radius: 10px;' +
        'overflow: hidden;' +
        '}' +
    selectors.threeImages + '{' +
        'display: flex;' +
        'width: 900px;' +
        'height: 300px;' +
        'border-radius: 10px;' +
        '}' +
    selectors.image1 + '{' +
        'width: 300px;' +
        'height: 300px;' +
        'border-radius: 10px;' +
        'background-image: url("javascript.png");' +
        '}' +
    selectors.image2 + '{' +
        'width: 300px;' +
        'height: 300px;' +
        'border-radius: 10px;' +
        'background-image: url("python.png");' +
        '}' +
    selectors.image3 + '{' +
        'width: 300px;' +
        'height: 300px;' +
        'border-radius: 10px;' +
        'background-image: url("go.png");' +
        '}' +
    selectors.threeImages + '{' +
        'width: 900px;' +
        'height: 300px;' +
        'transform: translateX(0px);' +
        '}' +
    selectors.controlPanel + '{' +
        'display: flex;' +
        'justify-content: space-between;' +
        'align-items: center;' +
        'width: 300px;' +
        'height: 100px;' +
        'padding: 10px;' +
        '}' +
    selectors.leftButton + '{' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;' +
        'background: #000000;' +
        'width: 30px;' +
        'height: 30px;' +
        'border-radius: 50%;' +
        'cursor: pointer;' +
        '}' +
    selectors.leftButton + ' p {' +
        'color: #FFFFFF;' +
        '}' +
    selectors.rightButton + '{' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;' +
        'background: #000000;' +
        'width: 30px;' +
        'height: 30px;' +
        'border-radius: 50%;' +
        'cursor: pointer;' +
        '}' +
    selectors.rightButton + ' p {' +
        'color: #FFFFFF;' +
        '}' +
    selectors.movingBar + '{' +
        'background: #808080;' +
        'width: 198px;' +
        'height: 5px;' +
        'overflow: hidden;' +
        '}' +
    selectors.inside1 + '{' +
        'width: 66px;' +
        'height: 5px;' +
        'background: #000000;' +
        '}' +
    selectors.inside2 + '{' +
        'width: 66px;' +
        'height: 5px;' +
        'background: #808080;' +
        '}' +
    selectors.inside3 + '{' +
        'width: 66px;' +
        'height: 5px;' +
        'background: #808080;' +

        '}';
        
        $('<style/>').html(css).addClass(classes.myCustomStyleClass).appendTo('head');

}

function setHtml () {
    $(selectors.containerDiv).remove();

    $('<div/>').addClass(classes.containerDiv).appendTo('body');

    var htmlContent =
        '<div class="'+ classes.imageDiv +'">' +
            '<div class="'+ classes.threeImages +'">'+
                '<div class="'+ classes.image1 +'"></div>' +
                '<div class="'+ classes.image2 +'"></div>' +
                '<div class="'+ classes.image3 +'"></div>' +
            '</div>'+
        '</div>' +
        '<div class="'+ classes.controlPanel +'">' +
            '<div class="'+ classes.leftButton +'"><p>&#9664</p></div>' +
            '<div class="'+ classes.movingBar +'">' +
                '<div class="'+ classes.movingBarInside +'">' +
                    '<div class="'+ classes.inside1 +'"></div>' +
                    '<div class="'+ classes.inside2 +'"></div>' +
                    '<div class="'+ classes.inside3 +'"></div>' +
                '</div>' +
            '</div>' +
            '<div class="'+ classes.rightButton +'"><p>&#9654</p></div>' +
        '</div>';

    $(selectors.containerDiv).html(htmlContent);

    $(selectors.leftButton).css('background-color', '#808080')

    var counter = 0;


    $(selectors.rightButton).click(function() {
        if(counter === 0){
            $(selectors.threeImages).css({'transform': 'translateX(-300px)', 'transition': '0.6s ease'});
            $(selectors.movingBarInside).css({'transform': 'translateX(66px)', 'transition': '0.6s ease'});
            counter += 1;    
        }else if(counter === 1){
            $(selectors.threeImages).css({'transform': 'translateX(-600px)', 'transition': '0.6s ease'});
            $(selectors.movingBarInside).css({'transform': 'translateX(132px)', 'transition': '0.6s ease'});
            counter += 1;  
        }
        counter == 0 ? $(selectors.leftButton).css('background-color', '#808080') : $(selectors.leftButton).css('background-color', '#000000');
        counter == 2 ? $(selectors.rightButton).css('background-color', '#808080') : $(selectors.rightButton).css('background-color', '#000000');
      });

    $(selectors.leftButton).click(function() {
        if(counter === 2){
            $(selectors.threeImages).css({'transform': 'translateX(-300px)', 'transition': '0.6s ease'});
            $(selectors.movingBarInside).css({'transform': 'translateX(66px)', 'transition': '0.6s ease'});
            counter -= 1;    
        }else if(counter === 1){
            $(selectors.threeImages).css({'transform': 'translateX(0px)', 'transition': '0.6s ease'});
            $(selectors.movingBarInside).css({'transform': 'translateX(0px)', 'transition': '0.6s ease'});
            counter -= 1;  
        }
        counter == 0 ? $(selectors.leftButton).css('background-color', '#808080') : $(selectors.leftButton).css('background-color', '#000000');
        counter == 2 ? $(selectors.rightButton).css('background-color', '#808080') : $(selectors.rightButton).css('background-color', '#000000');
      });


}

(function initialize(){
    setStyle();
    setHtml();
})();