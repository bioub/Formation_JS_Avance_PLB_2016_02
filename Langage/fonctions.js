console.log('Fonctions');



for (var i=0; i<3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

function closure(i) {
    // portée de closure
    return function() {
        console.log(i);
    };
}

for (var i=0; i<3; i++) {
    setTimeout(closure(i), 1000);
}