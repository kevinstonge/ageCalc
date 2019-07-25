export default function calculateDates(date,numbers,rarity,maxDateWindow,multiples) {
    date = new Date(date).getTime();
    let dates = [];
    numbers.forEach(n => {
        Object.keys(multiples).forEach(k => {
            let m = multiples[k];
            let nMultiples = maxDateWindow/n/m;
            if (nMultiples < rarity) {
                for (let i = 1; i < nMultiples; i++) {
                    dates.push((n*i*m)+date)
                }
            }
        });
    });
    return [...new Set(dates.sort((a,b)=>a-b))];
}