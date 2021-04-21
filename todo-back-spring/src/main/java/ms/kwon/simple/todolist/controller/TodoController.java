package ms.kwon.simple.todolist.controller;

import ms.kwon.simple.todolist.service.TodoService;
import ms.kwon.simple.todolist.vo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    TodoService todoService;

    @RequestMapping("/add.do")
    public void addTodo(@RequestParam Todo todo){
        todoService.addTodo(todo);
    }

    @RequestMapping("/getlist.do")
    public void getTodolist() {
        System.out.println("getTodolist");
        List<Todo> todolist = todoService.getTodolist();
        for (Todo todo : todolist) {
            System.out.println(todo.getText());
        }
        System.out.println(todoService.getTest());
    }
}
