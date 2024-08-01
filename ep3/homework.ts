function BMI(weight: number, height: number){
    let score: number = weight / (height*height)
    
    if(score < 18.5){
        return 'น้ำหนักน้อเกินไป'
    } else if (score >= 18.50 && score <= 22.90 ){
        return 'น้ำหนักสมส่วน '
    } else if (score >= 23 && score <= 24.90){
        return 'น้ำหนักท้วม '
    } else if(score >= 25 && score <= 29.90){
        return 'น้ำหนักเกิน'
    }else if (score > 30){
        return 'น้ำหนักมากเกินไป'
    }return
}
console.log(BMI(70,1.85))