package ms.kwon.simple.todolist.service;

import ms.kwon.simple.todolist.mapper.TodoMapper;
import ms.kwon.simple.todolist.vo.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("TodoService")
public class TodoService {

    @Autowired
    private TodoMapper todoMapper;

    public void addTodo(Todo todo) {
        todoMapper.addTodo(todo);
    }

    public void checkTodo(Todo todo) {
        todoMapper.checkTodo(todo);
    }

    public void removeTodo(Todo todo) {
        todoMapper.removeTodo(todo);
    }

    public List<Todo> getTodolist() {
        System.out.println("### TodoService :: getTodolist");
        List<Todo> result = todoMapper.getTodolist();
        System.out.println(result.toString());
        return result;
    }

    public String getTest() {
        return todoMapper.getTest();
    }
}
