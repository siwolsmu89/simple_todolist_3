package ms.kwon.simple.todolist.mapper;

import ms.kwon.simple.todolist.vo.Todo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface TodoMapper {
    void addTodo(Todo todo);
    Todo getTodoById(int id);
    List<Todo> getTodolist();
    void toggleTodoCheck(Todo todo);
    void removeTodo(int id);
}
