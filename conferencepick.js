function conferencePicker (citiesVisited, citiesOffered) {
  if (citiesVisited.length===0) {
    return citiesOffered[0];
  }

  for (let i = 0; i < citiesOffered.length; i++) {
    for (let i2 = 0; i2 < citiesVisited.length; i2++) {
      if (citiesOffered[i] === citiesVisited[i2]) {
        citiesOffered[i] = '';
      }
    }
    if (citiesOffered[i] !== '') {
      return citiesOffered[i];
    }
  }
}

console.log(conferencePicker(['Mexico City','Johannesburg','Stockholm','Osaka','Saint Petersburg','London'], ['Stockholm','Paris','Melbourne']));
