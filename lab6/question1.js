function makeArmy() {
    let shooters =[];
    for(let i =0; i<2; i++) {
        let shooter = function() {
            console.log(i);
        }
        shooters.push(shooter);
    }
    return shooters;
}
