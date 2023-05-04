package hac.javareact;

import com.google.gson.Gson;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import javax.xml.transform.Result;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;
/* You can delete this comment before submission - it's only here to help you get started.
Your servlet should be available at "/java_react_war/api/highscores"
assuming you don't modify the application's context path (/java_react_war).
on the client side, you can send request to the servlet using:
fetch("/java_react_war/api/highscores")
*/

@WebServlet(name = "ApiServlet", value = "/api/highscores")
public class ApiServlet extends HttpServlet {
    private static final String NAME = "name";
    private static final String SCORE = "score";


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        response.setContentType("application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");

        String name = request.getParameter(NAME);
        int score = Integer.parseInt(request.getParameter(SCORE));

        String fileName = "C:\\Users\\omara\\IdeaProjects\\ex3-react-java-ex3_omar_abdel_al\\src\\main\\java\\hac\\javareact\\scores.dat";
        File file = new File(fileName);

        try {
            if (!file.exists()) {
                file.createNewFile();
                //System.out.println("Created file: " + fileName);
            } else {
                // Read existing data from file
                List<String> lines = Files.readAllLines(file.toPath());

                // Update the score for the given name
                boolean nameFound = false;
                for (int i = 0; i < lines.size(); i++) {
                    String line = lines.get(i);
                    String[] parts = line.split(" ");
                    if (parts[0].equals(name)) {
                        lines.set(i, name + " " + score);
                        nameFound = true;
                        break;
                    }
                }

                // If the name was not found in the file, add a new line for it
                if (!nameFound) {
                    lines.add(name + " " + score);
                }

                // Write the updated data back to the file
                Files.write(file.toPath(), lines, StandardCharsets.UTF_8);
            }
        } catch (IOException e) {
            System.err.println("Error opening/creating file: " + e.getMessage());
        }     // note: this is necessary to allow cross-origin requests from the React frontend
        // response.setHeader("Access-Control-Allow-Origin", "*");

        // remove this line ! it's only for you to browse the template
       // response.getWriter().println("You are not supposed to browse this page. It will be used for API calls.");
    }

    /**
     *
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setContentType("application/json");
        Map<String, Integer> scores = new TreeMap<>();
        try {
            Scanner scanner = new Scanner(new File("C:\\Users\\omara\\IdeaProjects\\ex3-react-java-ex3_omar_abdel_al\\src\\main\\java\\hac\\javareact\\scores.dat"));

            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] parts = line.split(" ");
                String name = parts[0];
                int score = Integer.parseInt(parts[1]);
                scores.put(name, score);

            }
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        }
        System.out.println("in do post");
        // Get the 5 highest scores
        System.out.println("Top 5 scores:");
        scores.entrySet().stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
                .limit(5)
                .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));

        System.out.println(scores);
        Gson gson = new Gson();
        String json = gson.toJson(scores);
        response.getWriter().write(json);
        // your code here

        // note: this is necessary to allow cross-origin requests from the React frontend
        // response.setHeader("Access-Control-Allow-Origin", "*");

    }

    @Override
    public void init() {
    }

    @Override
    public void destroy() {
    }
}
