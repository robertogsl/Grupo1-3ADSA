package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Avaliacao;
import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.repositorio.AvaliacaoContratadaRepository;
import com.example.projeto.projeto.repositorio.AvaliacaoProprietariaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController {

    Logger logger = LoggerFactory.getLogger(ContratadaController.class);

    @Autowired
    private AvaliacaoContratadaRepository repositoryContratada;

    @Autowired
    private AvaliacaoProprietariaRepository repositoryProprietaria;

    @CrossOrigin
    @PostMapping("/contratada")
    public ResponseEntity postAvaliarContratada(@RequestBody Avaliacao novaAvaliacaoContratada) {

        logger.info("\n" +
                "successfully created a new assessment");

        repositoryContratada.save(novaAvaliacaoContratada);

        return ResponseEntity.status(201).build();

    }

//    @CrossOrigin
//    @GetMapping("/contratadas")
//    public ResponseEntity getAvaliacoesContratada() {
//        List<Avaliacao> lista = repositoryContratada.findAll();
//
//        return ResponseEntity.status(200).body(lista);
//    }

    // Retorna uma avaliação especifica
    @CrossOrigin
    @GetMapping("{id}/contratada")
    public ResponseEntity getAvaliacaoContratada(@PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        return ResponseEntity.of(repositoryContratada.findById(id));

    }

//     Retorna todas as avaliações de uma contratada
    @CrossOrigin
    @GetMapping("/contratada/{id}")
    public ResponseEntity getAvaliacoesContratada(@PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Avaliacao> lista = repositoryContratada.findByContratadaId(id);

        if (lista.isEmpty()) {

            return ResponseEntity.status(404).build();

        }
        else {

            return ResponseEntity.status(200).body(lista);

        }

    }

    @CrossOrigin
    @GetMapping("/contratada/{id}/media")
    public ResponseEntity getMediaAvaliacaoContratada(@PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Avaliacao> lista = repositoryContratada.findByContratadaId(id);

        Double totalEstrelas = 0.0;
        Double media = 0.0;
        int i = 0;

        if (lista.isEmpty()) {

            return ResponseEntity.status(204).build();

        }
        else {
            while (i < lista.size()) {
                totalEstrelas += lista.get(i).getEstrelas();
                i++;
            }
            media = totalEstrelas / i;

            return ResponseEntity.status(200).body(media);

        }

    }

    @CrossOrigin
    @GetMapping("/contratada/{id}/total")
    public ResponseEntity getTotalAvaliacao(@PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Avaliacao> lista = repositoryContratada.findByContratadaId(id);

        return ResponseEntity.status(200).body(lista.size());

    }

    @CrossOrigin
    @PostMapping("/proprietaria")
    public ResponseEntity postAvaliacaoProprietaria(@RequestBody Avaliacao novaAvaliacaoProprietaria) {

        logger.info("\n" +
                "successfully created a new assessment");

        repositoryProprietaria.save(novaAvaliacaoProprietaria);

        return ResponseEntity.status(201).build();

    }

//    @CrossOrigin
//    @GetMapping("/proprietaria")
//    public ResponseEntity getAvaliacoesProprietaria() {
//        List<Avaliacao> lista = repositoryProprietaria.findAll();
//
//        return ResponseEntity.status(200).body(lista);
//    }

    @CrossOrigin
    @GetMapping("/{id}/proprietaria")
    public ResponseEntity getAvaliacaoProprietaria(@PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        return ResponseEntity.of(repositoryProprietaria.findById(id));

    }

    @CrossOrigin
    @GetMapping("/proprietaria/{id}")
    public ResponseEntity getAvaliacoesProprietaria(@PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Avaliacao> lista = repositoryProprietaria.findByProprietariaId(id);

        if (lista.isEmpty()) {

            return ResponseEntity.status(204).build();

        }
        else {

            return ResponseEntity.status(200).body(lista);

        }

    }

    @CrossOrigin
    @GetMapping("/proprietaria/{id}/media")
    public ResponseEntity getMediaAvaliacaoProprietaria(@PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Avaliacao> lista = repositoryProprietaria.findByProprietariaId(id);

        Double totalEstrelas = 0.0;
        Double media = 0.0;
        int i = 0;

        if (lista.isEmpty()) {

            return ResponseEntity.status(204).build();

        }
        else {
            while (i < lista.size()) {
                totalEstrelas += lista.get(i).getEstrelas();
                i++;
            }
            media = totalEstrelas / i;

            return ResponseEntity.status(200).body(media);

        }

    }

    @CrossOrigin
    @GetMapping("/proprietaria/{id}/total")
    public ResponseEntity getTotalAvaliacaoProprietaria(@PathVariable Integer id) {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Avaliacao> lista = repositoryProprietaria.findByProprietariaId(id);

        return ResponseEntity.status(200).body(lista.size());

        }

}
