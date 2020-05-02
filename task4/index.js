const rep = function(str = "", n = 2) {
const add = [str]
while(add.length < n) {
    add.push(str)
}
return `повторений - ${n};` + `повторенные слова - ${add}`
}
console.log(rep("Привет", 9))