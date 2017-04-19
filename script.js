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
    "setMainImg" : function() {
        const wrapper = document.getElementById('wrapper');
        const pic = document.createElement('img');
        pic.id = 'pic';
        pic.setAttribute('src', model.pics[0].imgSrc);
        pic.setAttribute('alt', model.pics[0].imgAlt);
        wrapper.appendChild(pic);
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
    },
    
}

const view = {
    "initDisplay" : function() {
        operator.setMainImg();
        operator.setIndicators();
    }
}

view.initDisplay();