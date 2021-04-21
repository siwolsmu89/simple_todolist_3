package ms.kwon.simple.todolist.controller;

import ms.kwon.simple.todolist.service.TodoService;
import ms.kwon.simple.todolist.vo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    TodoService todoService;

    @RequestMapping("/add.do")
    public void addTodo(@RequestParam Todo todo){
        todoService.addTodo(todo);
    }
}
