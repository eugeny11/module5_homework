let newMap = new Map([
    [1,"prop1"],    
    [2,"prop2"],    
    [3,"prop3"],    
    ['true',"prop4"],    
    ['false',"prop5"]
]);

for (let values of newMap) {
    alert(`Ключ — ${values[0]}, значение — ${values[1]}`);
}
