var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.114681, lng: -75.983932},
    zoom: 8
  });
}

//Twilio
function postNumber(toNumber) {
  let formData = new FormData();
  const BASE_URL = 'https://api.twilio.com/2010-04-01/Accounts/';
  const JSON = '/Messages.json';

  formData.append('To', "" + toNumber);
  formData.append('From', "+12526806658");
  formData.append('Body', "We testing this API!");
  $.ajax(`${BASE_URL}${TWILIO_API_ACCOUNT_SID}${JSON} `, {

        'method': 'POST',
        'processData': false,
        'contentType': false,
        'cache': false,
        'headers': {
          "Authorization": "Basic " + btoa(TWILIO_API_ACCOUNT_SID + ":" + TWILIO_API_AUTH_TOKEN)
        },
        'data': formData,
        'enctype': 'multipart/form-data',
        'success': function (data) {
            console.log("Message!");
        },
        'error': function (xhr) {
            console.log(xhr.statusText);
        }
    });
  }

  $('#button').click(function () {
    var to = $('#to_number').val();
    postNumber(to);
  });