let apiArrayCOuntry = [];

fetch("https://restcountries.com/v3.1/all?fields=capital,name")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((a) =>
      apiArrayCOuntry.push({
        name: a.name.common,
        capital: a.capital,
      })
    )
  );
// console.log(apiArrayCOuntry);

let apiArrayPopulation = [];

fetch("https://restcountries.com/v3.1/all?fields=capital,population")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((b) =>
      apiArrayPopulation.push({
        capital: b.capital,
        population: b.population,
      })
    )
  );
// console.log(a.population)))

// console.log(apiArrayPopulation);
var abc = ["name", "population"];

var result = apiArrayCOuntry
  .filter(function (o1) {
    // filter out (!) items in result2
    return !apiArrayPopulation.some(function (o2) {
      return o1.capital === o2.capital; // assumes unique id
    });
  })
  .map(function (o) {
    // use reduce to make objects with only the required properties
    // and map to apply this to the filtered array as a whole
    return abc.reduce(function (newo, name) {
      newo[name] = o[name];
      return newo;
    }, {});
  });

console.log(result);

fetch("https://restcountries.com/v3.1/all?fields=capital,name")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((a) => {
      if (a.capital === b.capital) {
        apiArrayCOuntry.push({
          name: a.name.common,
          population: b.population,
        });
      }
    })
  );

const apiArrayCountry = [];

Promise.all([
  fetch("https://restcountries.com/v3.1/all?fields=capital,name"),
  fetch("https://restcountries.com/v3.1/all?fields=capital,population"),
])
  .then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );
  })
  //   nietos.push({"01": nieto.label, "02": nieto.value});
  .then(function (data) {
    // Log the data to the console
    // You would do something with both sets of data here
    data[0].forEach((a) => {
      //   console.log(data[0]);
      data[0].forEach((b) => {
        // console.log(data[1]);
        if (a.capital === b.capital) {
          apiArrayCountry.push({
            name: a.name.common,
            population: b.population,
          });
        }
      });
    });
    console.log(apiArrayCountry);
  })
  .catch(function (error) {
    // if there's an error, log it
    console.log(error);
  });

const apiArrayCountry = [];

Promise.all([
  fetch("https://restcountries.com/v3.1/all?fields=capital,name").then(
    (value) =>
      value.json().then((data) => {
        data.forEach((a) =>
          apiArrayCountry.push({
            name: a.name.common,
            capital: a.capital,
          })
        );
        // console.log(apiArrayCountry);
      })
  ),
  fetch("https://restcountries.com/v3.1/all?fields=capital,population").then(
    (value) =>
      value.json().then((data) => {
        data.forEach((a) => {
          if (apiArrayCountry.capital === a.capital) {
            apiArrayCountry.push({
              population: a.population,
            });
          }
        });
        console.log(apiArrayCountry.name, apiArrayCountry.population);
      })
  ),
]).catch((err) => {
  console.log(err);
});
