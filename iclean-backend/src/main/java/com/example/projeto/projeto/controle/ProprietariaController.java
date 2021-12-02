package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.Csv;
import com.example.projeto.projeto.FilaObj;
import com.example.projeto.projeto.ListaObj;
import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.dominio.Proprietaria;
import com.example.projeto.projeto.repositorio.ProprietariaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proprietarias")
public class ProprietariaController {

    Logger logger = LoggerFactory.getLogger(ContratadaController.class);

    Csv csv = new Csv();

    @Autowired
    private ProprietariaRepository repository;

    @CrossOrigin
    @PostMapping
    public ResponseEntity criarProprietaria(@RequestBody Proprietaria novaProprietaria) {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Proprietaria> lista = repository.findByEmail(novaProprietaria.getEmail());

        if (!lista.isEmpty()) {

            return ResponseEntity.status(409).build();

        }
        else {

            repository.save(novaProprietaria);
            return ResponseEntity.status(201).build();

        }
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getProprietarias() {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Proprietaria> lista = repository.findAll();
        List<Proprietaria> listaProprietarias = repository.findAll();

        if (lista.isEmpty()) {

            return ResponseEntity.status(204).build();

        }
        else {

            csv.gravaListaProprietaria(listaProprietarias, "listaProprietaria");
            return ResponseEntity.status(200).body(lista);

        }

    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getProprietaria(@PathVariable int id) {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Proprietaria> lista = repository.findAll();
        FilaObj<Proprietaria> filaObj = new FilaObj(lista.size());

        for (Proprietaria p : lista) {
            filaObj.insert(p);
        }
        while (!filaObj.isEmpty()) {
            if (filaObj.peek().getId().equals(id)) {

                return ResponseEntity.status(200).body(filaObj.peek());

            } else {
                filaObj.poll();
            }
        }

        return ResponseEntity.status(404).build();

    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteProprietaria(@PathVariable int id) {

        logger.info("\n" +
                "successfully created a new assessment");

        if (repository.existsById(id)) {
            repository.deleteById(id);

            return ResponseEntity.status(200).build();

        } else {

            return ResponseEntity.status(404).build();

        }

    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity putProprieraria(@PathVariable int id,
                                        @RequestBody Proprietaria proprietariaAtualizado) {

        logger.info("\n" +
                "successfully created a new assessment");

        if (repository.existsById(id)) {
            repository.save(proprietariaAtualizado);

            return ResponseEntity.status(200).build();

        } else {

            return ResponseEntity.status(404).build();

        }

    }

    @CrossOrigin
    @PostMapping("/autenticar")
    public ResponseEntity autenticar(@RequestBody Proprietaria proprietaria) {

        logger.info("\n" +
                "successfully created a new assessment");

        List<Proprietaria> login = repository.findByEmailAndSenha(proprietaria.getEmail(), proprietaria.senha());

        if (login.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(login);

    }

    @CrossOrigin
    @PostMapping("/logoff/{id}")
    public ResponseEntity logoff(@PathVariable int id) {

        logger.info("\n" +
                "successfully created a new assessment");

        Proprietaria p = repository.findById(id).get();

        if (repository.existsById(id)) {
            p.setAutenticado(false);
            repository.save(p);

            return ResponseEntity.status(200).build();

        }

        return ResponseEntity.status(404).build();

    }

}
