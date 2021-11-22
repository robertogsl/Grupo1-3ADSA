package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.Csv;
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
//<<<<<<< HEAD
        repository.save(novaContratada);
        logger.info("\n" +
                "successfully created a new assessment");
//=======
        List<Contratada> lista = repository.findByEmail(novaContratada.getEmail());
//>>>>>>> c40a6d7c57d8c203a6324941230ac5f11400ed16

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

    @CrossOrigin
    @PostMapping("/autenticar")
    public ResponseEntity autenticar(@RequestBody Contratada contratada) {
        List<Contratada> contratadas = repository.findAll();
        for(Contratada c : contratadas) {
            if (!(repository.findByEmailAndSenha(contratada.getEmail(), contratada.senha())).isEmpty()) {
                c.setAutenticado(true);
                repository.save(c);
                return ResponseEntity.status(200).body(c);
            } else {
                c.setAutenticado(false);
                repository.save(c);
            }
        } return ResponseEntity.status(404).build();
//        if (!(repository.findByEmailAndSenha(contratada.getEmail(), contratada.senha())).isEmpty()) {
//            return ResponseEntity.status(200).body(contratada);
//        } else {
//            return ResponseEntity.status(404).build();
//        }
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
