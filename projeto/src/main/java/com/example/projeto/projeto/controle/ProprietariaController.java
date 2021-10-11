package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Proprietaria;
import com.example.projeto.projeto.dominio.Usuario;
import com.example.projeto.projeto.repositorio.ProprietariaRepository;
import com.example.projeto.projeto.repositorio.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class ProprietariaController {

    @Autowired
    private ProprietariaRepository repository;

    @Autowired
    private UsuarioRepository userRepository;

    @CrossOrigin
    @PostMapping("/{fkUsuario}")
    public ResponseEntity criarProprietaria(@RequestBody Proprietaria novaProprietaria,
                                          @PathVariable int fkUsuario) {
        Usuario usuario = userRepository.findById(fkUsuario).get();
        novaProprietaria.setFkUsuario(usuario);
        repository.save(novaProprietaria);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getProprietaria(@PathVariable int id) {

        return ResponseEntity.of(repository.findById(id));

    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteProprietaria(@PathVariable int id) {

        if (repository.existsById(id)) {
            repository.deleteById(id);

            return ResponseEntity.status(200).build();

        } else {

            return ResponseEntity.status(404).build();

        }

    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity putProprieraria(@PathVariable int id,
                                        @RequestBody Proprietaria proprietariaAtualizado) {

        if (repository.existsById(id)) {
            proprietariaAtualizado.setIdProprietaria(id);
            repository.save(proprietariaAtualizado);

            return ResponseEntity.status(200).build();

        } else {

            return ResponseEntity.status(404).build();

        }

    }



}
