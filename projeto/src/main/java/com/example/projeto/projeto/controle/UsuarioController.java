package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Usuario;
import com.example.projeto.projeto.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    //Esta anotação indica que estamos transferindo o Spring
        //a responsabilidade de instanciar a "repository"
    @Autowired
    private UsuarioRepository repository;

    @PostMapping
    public ResponseEntity cadastrar(@RequestBody Usuario novoUsuario){
        repository.save(novoUsuario);

        return ResponseEntity.status(201).build();

    }

    @GetMapping
    public ResponseEntity getUsuarios(){
        List<Usuario> usuarios = repository.findAll();
        if (usuarios.isEmpty()){

            return ResponseEntity.status(204).build();

        } else

            return ResponseEntity.status(200).build();

    }

    @GetMapping("/id")
    public ResponseEntity getUsuario(@PathVariable int id){

        return ResponseEntity.of(repository.findById(id));

    }

    @DeleteMapping("/usuario")
    public ResponseEntity deleteUsuario(@PathVariable int id){
        if(repository.existsById(id)){

            return ResponseEntity.status(200).build();

        } else

            return ResponseEntity.status(404).build();

    }

    @PutMapping("/id")
    public ResponseEntity putUsuario(@PathVariable int id,
                                     @RequestBody Usuario usuarioAtualizado){
        if(repository.existsById(id)){
            usuarioAtualizado.setId(id);
            repository.save(usuarioAtualizado);

            return ResponseEntity.status(200).build();

        } else

            return ResponseEntity.status(404).build();

    }

}
