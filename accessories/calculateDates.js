//update this to use Moment.js?
//update this to apply rarity to the mode-dependent range
export default function calculateDates(dateData) {
    let { birthDate,numbers,rarity,maxDateWindow,multiples } = dateData;
    birthDate = new Date(birthDate).getTime();
    let dates = [];
    numbers.forEach(n => {
        Object.keys(multiples).forEach(k => {
            let m = multiples[k];
            let nMultiples = maxDateWindow/n/m;
            if (nMultiples < rarity) {
                for (let i = 1; i < nMultiples; i++) {
                    dates.push((n*i*m)+birthDate)
                }
            }
        });
    });
    return [...new Set(dates.sort((a,b)=>a-b))];
}