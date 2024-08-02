function sayHi(dayOfweek:number){
    switch(dayOfweek) {
        case 1:
                console.log('สวัสดีวันอาทิตย์')
                break
            case 2:
                console.log('สวัสดีวันจันทร์')
                break
            case 3:
                console.log('สวัสดีวันอังคาร')
                break
            case 4:
                console.log('สวัสดีวันพุธ')
                break
            case 5:
                console.log('สวัสดีวันพฤหัสบดี')
                break
            case 6:
                console.log('สวัสดีวันศุกร์')
                break
            case 7:
            console.log('สวัสดีวันเสาร์')
                break
            default:
                console.log('ระบุวันผิด')
                break
            }
    } 
    sayHi(5)
    
    function getBmi(number,h:number){
        const bmi : number = weight / ((height/100)*(height/100))
        switch (true){
            default:
                console.log('ผิดพลาด')
            break
            case bmi < 18.50:
                console.log('น้ำหนักน้อย / ผอม')
                break
            case bmi > 18.50 && bmi < 22.90:
                console.log('ปกติ (สุขภาพดี) ')
                break
            case bmi > 22.90 && bmi <24.90:
                console.log('อ้วน / โรคอ้วนระดับ 1')
                break
            case bmi > 24.90 && bmi < 29.90:
                console.log('อ้วน / โรคอ้วนระดับ 2')
                break
            case bmi < 30:
                console.log('อ้วน / โรคอ้วนระดับ 3')
                break
    
        }
    
    }
    
    //ฟังก์ชั่น จัดการตัวเลข
    function Localtostring(n:number){
        
        const x = n.toString()
        return x
    }
        console.log(Localtostring(1000))
    
    // String
    //นับตัวอักษร
    const str: string = "Hello lee, How are you"
    console.log(str.length)
    //เริมนับค่าจาก0
    const str: string = "Hello lee, How are you"
    console.log(str.charAt(1))
    //นับถอยหลัง
    const str: string = "ธนภัทร"
    console.log(str.charAt(str.length - 2))
    //เอาSpaceหน้าเเละหลังหลังอออก
    const str: string = "   ธนภัทร สกุลโชติพิภัทร์   "
    console.log(str.trimStart())
    
    const str: string = "   ธนภัทร สกุลโชติพิภัทร์   "
    console.log(str.trimEnd())