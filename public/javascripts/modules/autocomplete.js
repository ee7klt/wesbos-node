function autocomplete(input, latInput, lngInput) {
  // input  = #address from _storeForm.pug
  // latInput = #lat from _storeForm.pug
  // lngInput = #lng from _storeForm.pug
  //console.log(input, latInput, lngInput);
  if (!input) return; // skip this function from running if there is no
  // input (i.e. #address) on the page
  //  console.log(input, latInput, lngInput);
  const dropdown = new google.maps.places.Autocomplete(input)
  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat()
    lngInput.value = place.geometry.location.lng()
  });

  input.on('keydown', (e) => {
    if (e.keyCode === 13) e.preventDefault();
  })

}

export default autocomplete;
