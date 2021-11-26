package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.Csv;
import com.example.projeto.projeto.PilhaObj;
import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.repositorio.ContratadaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contratadas")
public class ContratadaController {

    Logger logger = LoggerFactory.getLogger(ContratadaController.class);

    Csv csv = new Csv();

    @Autowired
    private ContratadaRepository repository;

    @CrossOrigin
    @PostMapping
    public ResponseEntity criarContratada(@RequestBody Contratada novaContratada) {
        logger.info("\n" +
                "successfully created a new assessment");
        List<Contratada> lista = repository.findByEmail(novaContratada.getEmail());

        if (!lista.isEmpty()) {
            return ResponseEntity.status(409).build();
        }
        else {
            repository.save(novaContratada);

            return ResponseEntity.status(201).build();
        }
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getContratadas() {
        List<Contratada> lista = repository.findAll();
        List<Contratada> listaContratadas = repository.findAll();

        if (lista.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        else {
            csv.gravaLista(listaContratadas, "listaContratadas");
            return ResponseEntity.status(200).body(lista);
        }
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getContradada(@PathVariable int id) {
        List<Contratada> lista = repository.findAll();
        PilhaObj<Contratada> pilhaObj = new PilhaObj<>(lista.size());

        for (Contratada p : lista) {
            pilhaObj.push(p);
        }
        while (!pilhaObj.isEmpty()) {
            if (pilhaObj.peek().getId().equals(id)) {
                return ResponseEntity.status(200).body(pilhaObj.peek());
            } else {
                pilhaObj.pop();
            }
        }
        return ResponseEntity.status(404).build();
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

    @CrossOrigin
    @PostMapping("/autenticar")
    public ResponseEntity autenticar(@RequestBody Contratada contratada) {

        List<Contratada> c = repository.findByEmailAndSenha(contratada.getEmail(), contratada.getSenha());

        return ResponseEntity.status(200).body(c);
    }

    @CrossOrigin
    @PostMapping("/logoff/{id}")
    public ResponseEntity logoff(@PathVariable int id) {
        Contratada c = repository.findById(id).get();
        if (repository.existsById(id)) {
            c.setAutenticado(false);
            repository.save(c);
            return ResponseEntity.status(200).build();
        }
        else {
            return ResponseEntity.status(404).build();
        }
    };
}
