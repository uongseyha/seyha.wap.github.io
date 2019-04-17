const PersonCon=function(n,s){
    this.name=n,
    this.subject=s
};
PersonCon.prototype.teach=function(){
    console.log(this.name + " is now teaching " + this.subject);
};

const TeacherCon=new PersonCon("xName","xSubject");
// TeacherCon.name="Tina";
// TeacherCon.subject="WAP";
TeacherCon.teach();

const PersonObj={
    name:'unknow',
    subject:'unknow'
};
const teacherObj=Object.create(PersonObj);
PersonObj.teach=function () {
    console.log(this.name + " is now teaching " + this.subject);
};

teacherObj.name="seyha";
teacherObj.subject="WAPxxx";
teacherObj.myFunc=function(){
  alert("hello my function!");
};
teacherObj.teach();

