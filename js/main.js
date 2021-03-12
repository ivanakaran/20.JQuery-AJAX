$(document).ready(function () {
  //Badge styling on hover
  $('.filter').on('mouseover', function () {
    $(this).find('span:eq(0)').addClass('active');
    $(this).find('span:eq(1)').addClass('badge-color');
  })

  $('.filter').on('mouseleave', function () {
    $(this).find('span:eq(0)').removeClass('active');
    $(this).find('span:eq(1)').removeClass('badge-color');
  })

  //get data from the Url
  let urlToGetData = 'https://json-project3.herokuapp.com/products';

  $.get(urlToGetData)
    .then(function (data) {
      // console.log(data)
      //Find all cards, filter the sections and save them in a variable
      let allCards = data.map(bike => {
        return $('#bike-cards').append(createCard(bike))
      })
      //gender filter
      let male = data.filter(gender => {
        return gender.gender === ('MALE')
      })
      let female = data.filter(gender => {
        return gender.gender === ('FEMALE')
      })
      //brand filter
      let grandBikes = data.filter(brand => {
        return brand.brand.includes('LE GRAND BIKES')
      })
      let kross = data.filter(brand => {
        return brand.brand.includes('KROSS')
      })
      let explorer = data.filter(brand => {
        return brand.brand.includes('EXPLORER')
      })
      let visitor = data.filter(brand => {
        return brand.brand.includes('VISITOR')
      })
      let pony = data.filter(brand => {
        return brand.brand.includes('PONY')
      })
      let force = data.filter(brand => {
        return brand.brand.includes('FORCE')
      })
      let eBikes = data.filter(brand => {
        return brand.brand.includes('E-BIKES')
      })
      let ideal = data.filter(brand => {
        return brand.brand.includes('IDEAL')
      })
      //Add cards and classes on load
      $('#bike-cards').append(allCards)
      $('#showAll').find('span:eq(0)').addClass('active');
      $('#showAll').find('span:eq(1)').addClass('badge-color');

      //Add badge numbers on load
      $('#showAll').find('span:eq(1)').html(data.length);
      $('#male').find('span:eq(1)').html(male.length);
      $('#female').find('span:eq(1)').html(female.length);
      $('#grand-bikes').find('span:eq(1)').html(grandBikes.length);
      $('#kross').find('span:eq(1)').html(kross.length);
      $('#explorer').find('span:eq(1)').html(explorer.length);
      $('#visitor').find('span:eq(1)').html(visitor.length);
      $('#pony').find('span:eq(1)').html(pony.length);
      $('#force').find('span:eq(1)').html(force.length);
      $('#e-bikes').find('span:eq(1)').html(eBikes.length);
      $('#ideal').find('span:eq(1)').html(ideal.length);

      //On click functionalities
      function filter(e) {
        $('#bike-cards').html('');
        $('.active').removeClass('active');
        $('.badge-color').removeClass('badge-color');
        $(e.currentTarget).find('span:eq(0)').addClass('active');
        $(e.currentTarget).find('span:eq(1)').addClass('badge-color');
      }
      //showAll 
      $('#showAll').on('click', function (e) {
        filter(e);
        data.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //male filter
      $('#male').on('click', function (e) {
        filter(e);
        male.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //female filter
      $('#female').on('click', function (e) {
        filter(e);
        female.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //le grand bikes filter
      $('#grand-bikes').on('click', function (e) {
        filter(e);
        grandBikes.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //kross filter
      $('#kross').on('click', function (e) {
        filter(e);
        kross.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //explorer filter
      $('#explorer').on('click', function (e) {
        filter(e);
        explorer.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //visitor filter
      $('#visitor').on('click', function (e) {
        filter(e);
        visitor.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //pony filter
      $('#pony').on('click', function (e) {
        filter(e);
        pony.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //force filter
      $('#force').on('click', function (e) {
        filter(e);
        force.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //E-bike filter
      $('#e-bikes').on('click', function (e) {
        filter(e);
        eBikes.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
      //Ideal filter
      $('#ideal').on('click', function (e) {
        filter(e);
        ideal.forEach(bike => {
          $('#bike-cards').append(createCard(bike))
        })
      })
    })
    .catch(function (err) {
      console.log('An error occured', err)
    })

  //Create Card Function

  function createCard(bike) {
    return `<div class="col-md-4 my-3">
    <div class="card">
    <img class="card-img-top" src="./img/${bike.image}.png" alt="Card image cap">
      <div class="card-body orange-bg">
        <h5 class="card-title">${bike.name}</h5>
        <p class="card-text">${bike.price} $</p>
      </div>
    </div>
  </div>`
  };


});