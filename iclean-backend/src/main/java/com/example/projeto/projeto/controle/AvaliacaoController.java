package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.GravaTxt;
import com.example.projeto.projeto.dominio.Avaliacao;
import com.example.projeto.projeto.repositorio.AvaliacaoContratadaRepository;
import com.example.projeto.projeto.repositorio.AvaliacaoProprietariaRepository;
import com.example.projeto.projeto.repositorio.ContratadaRepository;
import com.example.projeto.projeto.repositorio.ProprietariaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController {

    GravaTxt gravaTxt = new GravaTxt();

    @Autowired
    private ContratadaRepository contratadaRepository;
    Logger logger = LoggerFactory.getLogger(ContratadaController.class);

    @Autowired
    ProprietariaRepository proprietariaRepository;

    @Autowired
    private AvaliacaoContratadaRepository repositoryContratadaAvaliacao;

    @Autowired
    private AvaliacaoProprietariaRepository repositoryProprietariaAvaliacao;

    @CrossOrigin
    @PostMapping("/contratada/teste")
    public ResponseEntity postAvaliarContratada(@RequestBody Avaliacao novaAvaliacao) {
        repositoryContratadaAvaliacao.save(novaAvaliacao);

        return ResponseEntity.status(201).build();

    }

    @CrossOrigin
    @PostMapping("/contratada")
    public ResponseEntity postAvaliarContratada(@RequestBody String nomeArq) {
        Avaliacao a = GravaTxt.leArquivoTxtContratada(nomeArq, contratadaRepository.findAll(), proprietariaRepository.findAll());

        repositoryContratadaAvaliacao.save(a);

        return ResponseEntity.status(201).build();
    }

    // Retorna uma avaliação especifica
    @CrossOrigin
    @GetMapping("{id}/contratada")
    public ResponseEntity getAvaliacaoContratada(@PathVariable Integer id) {
        Optional<Avaliacao> avaliacao = repositoryContratadaAvaliacao.findById(id);

        if (avaliacao.isEmpty()) {
            return ResponseEntity.status(404).build();
        }

        Avaliacao getAvalicao = avaliacao.get();

        GravaTxt.gravaArquivoTxtAvaliacaoContratada(getAvalicao, "AvaliacaoContratada.txt");

        return ResponseEntity.status(200).body(getAvalicao);
    }

//     Retorna todas as avaliações de uma contratada
    @CrossOrigin
    @GetMapping("/contratada/{id}")
    public ResponseEntity getAvaliacoesContratada(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryContratadaAvaliacao.findByContratadaId(id);

        if (lista.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        else {

            return ResponseEntity.status(200).body(lista);

        }

    }

    @CrossOrigin
    @GetMapping("/contratada/{id}/media")
    public ResponseEntity getMediaAvaliacaoContratada(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryContratadaAvaliacao.findByContratadaId(id);

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
        List<Avaliacao> lista = repositoryContratadaAvaliacao.findByContratadaId(id);

        return ResponseEntity.status(200).body(lista.size());

    }

    @CrossOrigin
    @PostMapping("/proprietaria")
    public ResponseEntity postAvaliacaoProprietaria(@RequestBody Avaliacao novaAvaliacaoProprietaria) {
        repositoryProprietariaAvaliacao.save(novaAvaliacaoProprietaria);

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
        return ResponseEntity.of(repositoryProprietariaAvaliacao.findById(id));
    }

    @CrossOrigin
    @GetMapping("/proprietaria/{id}")
    public ResponseEntity getAvaliacoesProprietaria(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryProprietariaAvaliacao.findByProprietariaId(id);

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
        List<Avaliacao> lista = repositoryProprietariaAvaliacao.findByProprietariaId(id);

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
        List<Avaliacao> lista = repositoryProprietariaAvaliacao.findByProprietariaId(id);

        return ResponseEntity.status(200).body(lista.size());

        }

}
