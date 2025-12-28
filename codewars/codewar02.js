function bonusTime(salary, bonus) {
    if(bonus == true){
        salary = salary * 10
        return salary
    } else {
        return salary
    }
}

let s = bonusTime(7300, false)
console.log(s)