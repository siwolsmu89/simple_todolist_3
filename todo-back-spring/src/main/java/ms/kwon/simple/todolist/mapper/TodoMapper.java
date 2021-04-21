package ms.kwon.simple.todolist.mapper;

import ms.kwon.simple.todolist.vo.Todo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface TodoMapper {
    void addTodo(Todo todo);
    void checkTodo(Todo todo);
    void removeTodo(Todo todo);
    List<Todo> getTodolist();
    String getTest();
}
