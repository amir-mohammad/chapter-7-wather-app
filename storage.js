class Storage{
    constructor(city){
        this.default_city = 'tehran';
        this.city = city;
    }

    getCityFromLS(){
        let city;
        if(localStorage.getItem('city') === null){
            city = this.default_city;
        }else{
            city = localStorage.getItem('city');
        }

        return city;
    }

    setCityToLs(city){
        localStorage.setItem('city', city);
    }
}