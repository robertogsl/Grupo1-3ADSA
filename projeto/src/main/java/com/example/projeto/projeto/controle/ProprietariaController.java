package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Proprietaria;
import com.example.projeto.projeto.repositorio.ProprietariaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/proprietarias")
public class ProprietariaController {

    @Autowired
    private ProprietariaRepository repository;

    @CrossOrigin
    @PostMapping
    public ResponseEntity criarProprietaria(@RequestBody Proprietaria novaProprietaria) {
        repository.save(novaProprietaria);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getProprietarias() {
        return ResponseEntity.status(200).body(repository.findAll());
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
            repository.save(proprietariaAtualizado);

            return ResponseEntity.status(200).build();

        } else {

            return ResponseEntity.status(404).build();

        }

    }



}
