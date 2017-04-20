const model = {
    "pics": [
        {
            "imgName" : "pic1",
            "imgSrc" : "imgs/pic1.jpg",
            "imgAlt" : "Img training 1"
        },
        {
            "imgName" : "pic2",
            "imgSrc" : "imgs/pic2.jpg",
            "imgAlt" : "Img training 2"
        },
        {
            "imgName" : "pic3",
            "imgSrc" : "imgs/pic3.jpg",
            "imgAlt" : "Img training 3"
        },
        {
            "imgName" : "pic4",
            "imgSrc" : "imgs/pic4.jpg",
            "imgAlt" : "Img training 4"
        }
    ]
}

const operator = {
    "currentImgIndex" : 0,
    "modelPicsLengthMinusOne" : (model.pics.length - 1),

    "createMainImg" : function() {
        const wrapper = document.getElementById('wrapper');
        const pic = document.createElement('img');
        pic.id = 'pic';
        wrapper.appendChild(pic);
        this.setMainImg(this.currentImgIndex);
    },
    "setMainImg" : function(x) {
        var pic = document.getElementById('pic');
        pic.setAttribute('src', model.pics[x].imgSrc);
        pic.setAttribute('alt', model.pics[x].imgAlt);
    },
    "changeMainImg" : function(x) {
        if (x < 0) {
            this.currentImgIndex = (model.pics.length - 1);
            this.setMainImg(this.currentImgIndex);
        } else if (x === model.pics.length) {
            this.currentImgIndex = 0;
            this.setMainImg(this.currentImgIndex);
        } else {
            this.currentImgIndex = x;
            this.setMainImg(this.currentImgIndex);
        };
    },
    "setIndicators" : function() {
        const indicatorsList = document.getElementById('indicators-list');
        for (var pic in model.pics) {
            var indicatorLi = document.createElement('li');
            indicatorLi.className = 'indicator';

            var indicatorPic = document.createElement('img');
            indicatorPic.setAttribute('src', model.pics[pic].imgSrc);
            indicatorPic.setAttribute('alt', model.pics[pic].imgAlt);

            indicatorLi.appendChild(indicatorPic);
            indicatorsList.appendChild(indicatorLi);
        };
        var firstPic = indicatorsList.firstElementChild;
        firstPic.classList.add('active');
    },
    "activeIndicator" : function(x) {
        x = this.currentImgIndex;
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach(function(indicator) {
            indicator.classList.remove('active');
        }, this);
        var currentIndicator = indicators[x];
        currentIndicator.classList.add('active');
    },
    "eventListeners" : function() {
        const previous = document.getElementById('previous');
        const next = document.getElementById('next');
        previous.addEventListener('click', function() {
            operator.currentImgIndex--;
            view.renderDisplay(operator.currentImgIndex);
        });
        next.addEventListener('click', function() {
            operator.currentImgIndex++;
            view.renderDisplay(operator.currentImgIndex);
        });
        const indicators = Array.from(document.getElementsByClassName('indicator'));
        indicators.forEach(indicator => indicator.addEventListener('click', function() {
            operator.currentImgIndex = indicators.indexOf(this);
            view.renderDisplay(operator.currentImgIndex);
        }));
    }
}

const view = {
    "initDisplay" : function() {
        operator.createMainImg();
        operator.setIndicators();
        operator.eventListeners();
    },
    "renderDisplay" : function(x) {
        operator.changeMainImg(x);
        operator.activeIndicator(x);
    }
}

view.initDisplay();