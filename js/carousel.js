class Carousel {
    constructor(src, title, href, alt) {
        this.src = src;
        this.title = title;
        this.href = href;
        this.alt = alt;
    }

    static createCarousel() {

        
        let arr = [];
        arr.push(new Carousel('img/imagem_1.jpg', 'Esta é a nova Ford Ranger 2023. Verifique novidades.', 'lancamento.html', 'Imagem Nova Ford Ranger 2022')); 
        arr.push(new Carousel('img/imagem_2.jpg', 'Ford a nossa história.', '#', 'Imagem História Ford'));
        arr.push(new Carousel('img/imagem_3.jpg', 'Nova Ford Bronco Sport 2023.', 'lancamento.html', 'Imagem Nova Ford Bronco Sport 2022'));

        let carousel = document.querySelector('#carousel');

        
        
        Carousel._items = []; 
        Carousel._currentItemIndex = 0; 

        for(let i = 0; i < arr.length; i++) {
            
            let carouselItem = document.createElement('div');
            let img = document.createElement('img');
            let title = document.createElement('p');
            let link = document.createElement('a');

            
            if(i == 0) {
                carouselItem.setAttribute('class', 'flex-main selected');
            } else {
                carouselItem.setAttribute('class', 'flex-main unselected');
            }   

            
            link.setAttribute('href', arr[i].href);
            img.setAttribute('src', arr[i].src);
            img.setAttribute('alt', arr[i].alt);
            title.innerHTML = arr[i].title;
            carousel.appendChild(carouselItem);
            carouselItem.appendChild(link);
            carouselItem.appendChild(img);
            link.appendChild(img);
            carouselItem.appendChild(title);
            Carousel._items.push(carouselItem);
        }
    }
    
    
    static nextItem() {
                
        Carousel._items[Carousel._currentItemIndex].classList.add('unselected');
        Carousel._items[Carousel._currentItemIndex].classList.remove('selected');
        
        Carousel._currentItemIndex++;

        if(Carousel._currentItemIndex >= Carousel._items.length) {
            Carousel._currentItemIndex = 0;
        }        
        Carousel._items[Carousel._currentItemIndex].classList.remove('unselected');
        Carousel._items[Carousel._currentItemIndex].classList.add('selected');        
        
    }

   
    static startCarousel () {
        Carousel.createCarousel();
        if(Carousel._items.length > 0) {
            this._time = 5000;
            setInterval(() => {
                Carousel.nextItem();}, _time);
        } else {
            throw "Method startCarousel needs an Array Variable."
        }
    }
}

 
window.addEventListener('load', Carousel.startCarousel);