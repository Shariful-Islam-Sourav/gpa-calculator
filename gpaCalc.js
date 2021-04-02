class GpaCalc{
    constructor(firstName,math,phy,chem){
        this.firstName = firstName;
        this.math = math;
        this.phy = phy;
        this.chem =chem;
    }

    result(){
        let totalNum = this.math + this.phy + this.chem;
        let percentage = (totalNum * 100) / 300;
        if( this.firstName === ``){
            console.log("Please Enter username.")
        } else if(this.math < 40 || this.phy < 40 || this.chem < 40){
            console.log(`${this.firstName}, You have Failed!`)
        } else if (percentage >= 80){
            console.log(`${this.firstName}, You got A+`)
        } else if (percentage >= 70){
            console.log(`${this.firstName}, You got A`)
        } else if (percentage >= 65){
            console.log(`${this.firstName}, You got A-`)
        } else if (percentage >= 60){
            console.log(`${this.firstName}, You got B`)
        } else if (percentage >= 50){
            console.log(`${this.firstName}, You got C`)
        } else if (percentage >= 40){
            console.log(`${this.firstName}, You got D`)
        } else {
            console.log(`${this.firstName}, You have Failed!`)
        }
    }
}

const student1 = new GpaCalc(`Zakaria`,50,65,32)
console.log(student1)
student1.result()

const student2 = new GpaCalc(`GM Hridoy`,75,80,70)
console.log(student2)
student2.result()
