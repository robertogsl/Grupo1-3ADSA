package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.dominio.Trabalho;
import com.example.projeto.projeto.repositorio.ContratadaRepository;
import com.example.projeto.projeto.repositorio.ProprietariaRepository;
import com.example.projeto.projeto.repositorio.TrabalhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trabalhos")
public class TrabalhoController {

    @Autowired
    private TrabalhoRepository repository;

    @Autowired
    private ContratadaRepository repositoryContratada;

    @Autowired
    private ProprietariaRepository repositoryProprietaria;

    // ENDPOINTS DE TRABALHO

    @CrossOrigin
    @PostMapping
    public ResponseEntity criarTrabalho(@RequestBody Trabalho novoTrabalho) {
        repository.save(novoTrabalho);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getTrabalhos() {
        List<Trabalho> lista = repository.findAll();

        return ResponseEntity.status(200).body(lista);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getTrabalho(@PathVariable Integer id) {
        return ResponseEntity.of(repository.findById(id));
    }

    @CrossOrigin
    @PutMapping("/{idTrabalho}/candidata/{id}")
    public ResponseEntity candidatarEmpregado(@PathVariable Integer idTrabalho, @PathVariable Integer id) {
        Trabalho trabalho = repository.getById(idTrabalho);
        Contratada contratada = repositoryContratada.getById(id);

        trabalho.setCandidatas(contratada);

        if (repository.existsById(idTrabalho)) {
            repository.save(trabalho);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteTrabalho(@PathVariable Integer id) {
        repository.deleteById(id);
        return ResponseEntity.status(200).build();
    }

}
