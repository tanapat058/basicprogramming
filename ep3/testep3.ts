function helloWorld(){
    console.log('สวัสดีแนน')
}   //ไม่มี input ไม่มี output

    // helloWorld()
    

function getPi(){
    return 3.14
}
    //console.log(getPi())


function secondHello(name:string){
    console.log(name) // รับ input แต่ไม่ output
}
    //console.log(secondHello('MaX'))

function st(fname: string, sname: string, tname: string) {
    if (!( fname === 'nan' || sname === 'plume') && tname ==='yo'){
        console.log('เริ่มสอน')
    } else{
        console.log('ยังไม่สอน')
    }

}
    //st('nan','plume','yo')
    
    function Cons ( sex:string, weight:number,height:number ) {
        if (sex === 'men' && height >170 || (weight>=50 && weight <=110)){
            console.log('จับใบแดง')
        } else{
            console.log('ไมเข้าเกณฑ์')
        }
    }
         Cons('men',180,90)