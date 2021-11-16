package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Avaliacao;
import com.example.projeto.projeto.repositorio.AvaliacaoContratadaRepository;
import com.example.projeto.projeto.repositorio.AvaliacaoProprietariaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoContratadaRepository repositoryContratada;

    @Autowired
    private AvaliacaoProprietariaRepository repositoryProprietaria;

    @CrossOrigin
    @PostMapping("/contratadas")
    public ResponseEntity postAvaliarContratada(@RequestBody Avaliacao novaAvaliacaoContratada) {
        repositoryContratada.save(novaAvaliacaoContratada);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @GetMapping("/contratadas")
    public ResponseEntity getAvaliacoesContratada() {
        List<Avaliacao> lista = repositoryContratada.findAll();

        return ResponseEntity.status(200).body(lista);
    }

    @CrossOrigin
    @GetMapping("/contratadas/{id}")
    public ResponseEntity getAvaliacaoContratada(@PathVariable Integer id) {
        return ResponseEntity.of(repositoryContratada.findById(id));
    }

    @CrossOrigin
    @PostMapping("/proprietaria")
    public ResponseEntity postAvaliacaoProprietaria(@RequestBody Avaliacao novaAvaliacaoProprietaria) {
        repositoryProprietaria.save(novaAvaliacaoProprietaria);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @GetMapping("/proprietaria")
    public ResponseEntity getAvaliacoesProprietaria() {
        List<Avaliacao> lista = repositoryProprietaria.findAll();

        return ResponseEntity.status(200).body(lista);
    }

    @CrossOrigin
    @GetMapping("/proprietaria/{id}")
    public ResponseEntity getAvaliacaoProprietaria(@PathVariable Integer id) {
        return ResponseEntity.of(repositoryProprietaria.findById(id));
    }

}
