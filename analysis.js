const analysis = datas => {
  let sum = 0; // 初期値
  let distributedSum = 0; //初期値

  datas.forEach( data => {
    sum += data; // 合計。
  });
  const avg = sum / datas.length ; //平均

  datas.forEach( data => {
    distributedSum += (data - avg) **2 ; // (f-avg) => 偏差。
  })

  const dist = distributedSum / datas.length; //偏差の二乗の平均（分散）

  const standard = Math.sqrt(dist);

  return {
    sum: sum , //データの合計値
    average: avg , //データの平均値
    distributed: dist , //データの分散
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
