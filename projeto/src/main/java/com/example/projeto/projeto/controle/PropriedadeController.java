package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Propriedade;
import com.example.projeto.projeto.dominio.Proprietaria;
import com.example.projeto.projeto.repositorio.PropriedadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/propriedades")
public class PropriedadeController {

    @Autowired
    private PropriedadeRepository repository;

    @CrossOrigin
    @PostMapping
    public ResponseEntity postPropriedade(@RequestBody Propriedade novaPropriedade) {
        repository.save(novaPropriedade);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getPropriedades() {
        List<Propriedade> lista = repository.findAll();

        return ResponseEntity.status(200).body(lista);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getPropriedade(@PathVariable Integer id) {
        return ResponseEntity.of(repository.findById(id));
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deletePropriedade(@PathVariable Integer id) {
        repository.deleteById(id);
        return ResponseEntity.status(200).build();
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity putPropriedade(@PathVariable int id,
                                          @RequestBody Propriedade propriedadeAtualizado) {

        if (repository.existsById(id)) {
            repository.save(propriedadeAtualizado);

            return ResponseEntity.status(200).build();

        } else {

            return ResponseEntity.status(404).build();

        }

    }

}
