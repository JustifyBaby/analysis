const analysis = (datas) => {
  let sum = 0;
  let distributed = 0;

  datas.forEach((e) => {
    sum += e;
  });
  const avg = sum / datas.length ;

  datas.forEach((f) => {
    distributed += (f-avg) **2 ;
  })

  const standard = Math.sqrt(distributed);

  return {
    sum: sum , //データの合計値
    average: avg , //データの平均値
    distributed: distributed , //データの分散
    standard: standard //データの標準偏差
  } ;
}

const rangeRandom = (min, max, piece) => {
  const arr = [];
  for(let i=0; i<piece; i++ ) {
    arr.push(Math.floor(Math.random()*(max+1-min)+min));
  }

  return arr ;
}

const rands = rangeRandom(1,10,10);
console.log(rands, analysis(rands))
