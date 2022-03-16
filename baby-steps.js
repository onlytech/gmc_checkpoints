let saisie=process.argv.slice(2);
const initialValue = 0;
const total = saisie.reduce(
    (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
    initialValue
  );
  
  console.log(total);
