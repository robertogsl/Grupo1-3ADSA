package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.dominio.AvaliacaoContratada;
import com.example.projeto.projeto.repositorio.AvaliacaoContratadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/avaliacoes/contratadas")
public class AvaliacaoContratadaController {

    @Autowired
    private AvaliacaoContratadaRepository repository;

    @CrossOrigin
    @PostMapping
    public ResponseEntity postAvaliar(@RequestBody AvaliacaoContratada novaAvaliacaoContratada) {
        repository.save(novaAvaliacaoContratada);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getAvaliacoes() {
        List<AvaliacaoContratada> lista = repository.findAll();

        return ResponseEntity.status(200).body(lista);
    }

}
