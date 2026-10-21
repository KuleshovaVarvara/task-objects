export function personUpdate(data) {
    if (data.gender === 'female') {
        if ('age' in data) {
            delete data.age;
        }
    } else if (data.gender === 'male') {
        if (!('income' in data)) {
            data.income = 100000;
        }
    }
    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    let keys3 = Object.keys(obj3);

    let allKeys = keys1.concat(keys2).concat(keys3);
    allKeys.sort();

    return allKeys;
}

export function objectClone(obj, count) {
    let result = [];

    for (let i = 0; i < count; i++) {
        let clonedObj = JSON.parse(JSON.stringify(obj));
        clonedObj.id = i;
        result.push(clonedObj);
    }

    return result;
}
