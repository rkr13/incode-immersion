function groupFamilies(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = []
    }
        acc[key].push(obj)
        return acc
        }, {})
}

let people = [
    {"name": "Barack", "surname": "Obama"}, 
    {"name": "Michelle", "surname": "Obama"}]
let groupedPeople = groupFamilies(people, 'surname')
console.log(groupedPeople)
