package ms.kwon.simple.todolist.controller;

import com.google.gson.Gson;
import ms.kwon.simple.todolist.service.TodoService;
import ms.kwon.simple.todolist.vo.Todo;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.PostConstruct;
import java.util.List;

@Controller
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    TodoService todoService;

    @PostConstruct
    public void init() {
        System.out.println("@@@ TodoController Activated @@@");
    }

    @RequestMapping("/add.do")
    public void addTodo(@RequestParam Todo todo){
        todoService.addTodo(todo);
    }

    @RequestMapping("/check.do")
    public void checkTodo(@RequestParam Todo todo) {
        todoService.checkTodo(todo);
    }

    @RequestMapping("/getList.do")
    public String getTodolist() {
        System.out.println("@@@ TodoController :: getTodolist.do start");

        List<Todo> todolist = todoService.getTodolist();
        System.out.println(todolist.size());
        for (Todo todo : todolist) {
            System.out.println("text: " + todo.getText());
        }
        Gson gson = new Gson();
        String result = gson.toJson(todolist);

        System.out.println(result);
        System.out.println("@@@ TodoController :: getTodolist.do end");
        return result;
    }
}
