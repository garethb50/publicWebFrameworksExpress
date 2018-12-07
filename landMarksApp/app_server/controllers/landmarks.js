const landmarksList = function(req, res) {
    res.render('landmarks', {
        title: 'Landmarks - Places of interest from around the world',
        pageHeader: {
            title: 'Landmarks',
            strapline: 'Choose a Landmark'
        },
        details: [{
            name: 'Times Square',
            country: 'USA',
            image: '/images/timesSquare.jpg',
// to get lat and long coordinates https://www.latlong.net/place/the-eiffel-tower-paris-france-80.html
            coords:{
                lat: 40.758896,
                lng: -73.985130
            },
            value: 'timeSquare'
        }, {
            name: 'Eiffel Tower',
            country: 'France',
            image: "/images/eiffelTower.jpg",
            coords: {
                lat: 48.8584,
                lng: 2.2945
            },
            value: 'eiffelTower'
        }, {
            name: 'Pyramids of Giza',
            country: 'Egypt',
            image: "/images/pyramids.jpg",
            coords:{
                lat: 29.976480,
                lng: 31.131302
            },
            value: 'pyramids'
        }, {
            name: 'Burj Al Arab',
            country: 'UAE',
            image: "/images/burj.jpg",
            coords:{
                lat: 25.141050,
                lng: 55.185978
            },
            value: 'burj'
        }, {
            name: 'Sydney Opera House',
            country: 'Australia',
            image: "/images/operaHouse.jpg",
            coords:{
                lat: -33.856159,
                lng: 151.215256
            },
            value: 'operaHouse'
        }]
    });
};


const landmarkInfo = function(req, res) {
    res.render('landmark', {
        title: 'Landmarks - Places of interest from around the world',
        pageHeader: {
            title: 'Time Square'
        },
        details: {
            name: 'Times Square',
            country: 'USA',
            image: '/images/timesSquare.jpg',
// to get lat and long coordinates https://www.latlong.net/place/the-eiffel-tower-paris-france-80.html
            coords:{
                lat: 40.758896,
                lng: -73.985130
            },
            value: 'timeSquare'
        }
    });
};

module.exports = {
    landmarksList,
    landmarkInfo

};