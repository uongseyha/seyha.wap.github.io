import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.rmi.ServerException;

@WebServlet("/result")
public class servlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException{

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException{
        response.setContentType("text/html");
        PrintWriter out=response.getWriter();

        String t1=request.getParameter("t1");
        String t2=request.getParameter("t2");
        String t3=request.getParameter("t3");
        String t4=request.getParameter("t4");

        int val1,val2,val3,val4,val12,val34;
        val1=t1.equals("")?0:Integer.parseInt(t1);
        val2=t2.equals("")?0:Integer.parseInt(t2);
        val3=t3.equals("")?0:Integer.parseInt(t3);
        val4=t4.equals("")?0:Integer.parseInt(t4);

        String result="<h1>";

        if (val1>0 && val2>0){
            result+= "<input type=\"number\" value=\"" + val1 + "\" readonly /> + "
                    + "<input type=\"number\" value=\"" + val2 + "\" readonly /> = "
                    + "<input type=\"number\" value=\"" + (val1 + val2) + "\" readonly /> <br>";
        }

        if (val3>0 && val4>0){
            result+= "<input type=\"number\" value=\"" + val3 + "\" readonly /> * "
                    + "<input type=\"number\" value=\"" + val4 + "\" readonly /> = "
                    + "<input type=\"number\" value=\"" + (val3 * val4) + "\" readonly /> <br>";
        }

        result+="</h1>";

        out.println(result);
    }


}
