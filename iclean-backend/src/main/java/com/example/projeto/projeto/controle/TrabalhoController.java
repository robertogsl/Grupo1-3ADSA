package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.dominio.Trabalho;
import com.example.projeto.projeto.repositorio.ContratadaRepository;
import com.example.projeto.projeto.repositorio.ProprietariaRepository;
import com.example.projeto.projeto.repositorio.TrabalhoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/trabalhos")
public class TrabalhoController {

    Logger logger = LoggerFactory.getLogger(ContratadaController.class);

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

        logger.info("\n" +
                "successfully created a new assessment");

        repository.save(novoTrabalho);
        return ResponseEntity.status(201).build();

    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getTrabalhos() {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Trabalho> lista = repository.findAll();

        return ResponseEntity.status(200).body(lista);

    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getTrabalho(@PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        return ResponseEntity.of(repository.findById(id));

    }

    @CrossOrigin
    @PutMapping("/{idTrabalho}/candidata/{id}")
    public ResponseEntity candidatarEmpregado(@PathVariable Integer idTrabalho, @PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

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

        logger.info("\n" +
                "successfully created a new assessment");

        repository.deleteById(id);
        return ResponseEntity.status(200).build();

    }

    @CrossOrigin
    @PutMapping("/{idTrabalho}/candidata/{id}/deletar")
    public ResponseEntity removerCandidata(@PathVariable Integer idTrabalho, @PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        Optional<Trabalho> trabalhoOptional = repository.findById(idTrabalho);

        if (trabalhoOptional.isEmpty()){

            return ResponseEntity.status(404).build();

        }

        Trabalho trabalho = trabalhoOptional.get();

        for (int i = 0; i < trabalho.getCandidatas().size(); i++) {
            if (id.equals(trabalho.getCandidatas().get(i).getId())){
                trabalho.getCandidatas().remove(i);
            }
        }

        return ResponseEntity.status(200).body(repository.save(trabalho));

    }

}
