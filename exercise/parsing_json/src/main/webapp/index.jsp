<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false" %>

<!DOCTYPE html>
<header>
</header>
<body>
$.ajax('https://jsonplaceholder.typicode.com/todos/1')
.done(response => {
console.log(response);
console.log(JSON.stringify(response));
console.log("userid is: " + response.userId);
});

</body>
</html>