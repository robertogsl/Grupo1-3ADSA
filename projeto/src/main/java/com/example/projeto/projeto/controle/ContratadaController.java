package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.repositorio.ContratadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contratadas")
public class ContratadaController {

    @Autowired
    private ContratadaRepository repository;

    @CrossOrigin
    @PostMapping
    public ResponseEntity criarContratada(@RequestBody Contratada novaContratada) {
        repository.save(novaContratada);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getContratadas() {
        return ResponseEntity.status(200).body(repository.findAll());
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getContrada(@PathVariable int id) {

        return ResponseEntity.of(repository.findById(id));

    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteContratada(@PathVariable int id) {

        if (repository.existsById(id)) {
            repository.deleteById(id);

            return ResponseEntity.status(200).build();

        } else {

            return ResponseEntity.status(404).build();

        }

    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity putContratada(@PathVariable int id,
                                        @RequestBody Contratada contratadaAtualizado) {

        if (repository.existsById(id)) {
            repository.save(contratadaAtualizado);

            return ResponseEntity.status(200).build();

        } else {

            return ResponseEntity.status(404).build();

        }

    }

}
