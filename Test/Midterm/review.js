$(function () {
    $('#formbooking').submit(function (event) {

        event.preventDefault();
        flag=true;

        const seat=$('#seat').val();
        const taxi=$('input[type="radio"]:checked').val();
        const extra=$('input[type="checkbox"]:checked').val();
        var error=$('#error');

        //error.empty();

        if (seat<=0 || seat>=200){
            error.append("Seat must be between 1 and 199! <br>");
            flag=false;
        }

        if (taxi===undefined){
            error.append("taxi must select! <br>");
            flag=false;
        }

        if (!extra){
            error.append("extra must select! <br>");
            flag=false;
        }

        if (flag){
            this.submit();
        }

    });


});