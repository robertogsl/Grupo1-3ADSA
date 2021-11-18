package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.Avaliacao;
import com.example.projeto.projeto.dominio.Contratada;
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

    // Retorna uma avaliação especifica
    @CrossOrigin
    @GetMapping("{id}/contratadas")
    public ResponseEntity getAvaliacaoContratada(@PathVariable Integer id) {
        return ResponseEntity.of(repositoryContratada.findById(id));
    }

    // Retorna todas as avaliações de uma contratada
//    @CrossOrigin
//    @GetMapping("/contratadas/{id}")
//    public ResponseEntity getAvaliacoesContratada(@PathVariable Integer id) {
//        List<Avaliacao> lista = repositoryContratada.findByContratadaId(id);
//
//        if (lista.isEmpty()) {
//            return ResponseEntity.status(404).build();
//        }
//        else {
//            return ResponseEntity.status(200).body(lista);
//        }
//    }

    @CrossOrigin
    @GetMapping("/contratadas/{id}")
    public ResponseEntity getMediaAvaliacaoContratada(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryContratada.findByContratadaId(id);

        Double totalEstrelas = 0.0;
        Double media = 0.0;
        int i = 0;

        if (lista.isEmpty()) {
            return ResponseEntity.status(404).build();
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
    @GetMapping("/contratadas/{id}/total")
    public ResponseEntity getTotalAvaliacao(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryContratada.findByContratadaId(id);

        return ResponseEntity.status(200).body(lista.size());
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
    @GetMapping("/{id}/proprietaria")
    public ResponseEntity getAvaliacaoProprietaria(@PathVariable Integer id) {
        return ResponseEntity.of(repositoryProprietaria.findById(id));
    }

    @CrossOrigin
    @GetMapping("/proprietarias/{id}")
    public ResponseEntity getMediaAvaliacaoProprietaria(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryProprietaria.findByProprietariaId(id);

        Double totalEstrelas = 0.0;
        Double media = 0.0;
        int i = 0;

        if (lista.isEmpty()) {
            return ResponseEntity.status(404).build();
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
    @GetMapping("/proprietarias/{id}/total")
    public ResponseEntity getTotalAvaliacaoProprietaria(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryProprietaria.findByProprietariaId(id);

        return ResponseEntity.status(200).body(lista.size());
    }
}
