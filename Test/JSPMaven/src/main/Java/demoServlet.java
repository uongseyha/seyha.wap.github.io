import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.rmi.ServerException;

@WebServlet("/Welcome")
public class demoServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException {
        response.setContentType("text/html");
        PrintWriter out=response.getWriter();
        out.println("<h3>Hello Seyha</h3>");
    }


}
