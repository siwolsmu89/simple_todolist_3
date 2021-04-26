package ms.kwon.simple.todolist.controller;

import com.google.gson.Gson;
import ms.kwon.simple.todolist.service.TodoService;
import ms.kwon.simple.todolist.vo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    TodoService todoService;

    @PostConstruct
    public void init() {
        System.out.println("@@@ TodoController Activated @@@");
    }

    @RequestMapping("/add.do")
    public void addTodo(@RequestBody Todo todo){
        System.out.println("@@@ TodoController :: add.do start");
        String text = todo.getText();
        String colorValue = todo.getColorValue();
        System.out.println("id: " + todo.getId());
        System.out.println("text: " + text);
        System.out.println("color: " + colorValue);
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
        for (Todo todo : todolist) {
            System.out.println("text: " + todo.getText());
        }
        Gson gson = new Gson();
        String result = gson.toJson(todolist);

        System.out.println("@@@ TodoController :: result = " + result);
        System.out.println("@@@ TodoController :: getTodolist.do end");
        return result;
    }
}
