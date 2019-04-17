"use strict";
(function(){
    function Employee(id) {
        this.id=id;
        this.name="Unknow";
        this.employee={
            name:"MUM"
        };
    }

    Employee.prototype.getName=function(){
        return this.name;
    };

    Employee.prototype.getEmployeeName=function(){
        return this.employee.name;
    };

    const jonh=new Employee(980000);

    console.log(Employee);

})();


$('#ex1 span.special').prepend($('<img>'),{
    'scr':'../images/laughing_man.jpg',
    'alt':'laughing man',
    'css':{
      'vertical-align':'middle',
      'border':'2px solid black'
    },
    'click':function () {
        alert('clickd');
    }
});


$('#ex1 span.special').each(function (i,elem) {
   var img=$('<img>')
       .attr('','')
       .attr('','')
       .click(function () {
           alert("clicked");
       })
    $(elem).prepend(img);
});