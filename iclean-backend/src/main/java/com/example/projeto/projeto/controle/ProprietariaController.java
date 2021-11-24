package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.Csv;
import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.dominio.Proprietaria;
import com.example.projeto.projeto.repositorio.ProprietariaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proprietarias")
public class ProprietariaController {
    Csv csv = new Csv();

    @Autowired
    private ProprietariaRepository repository;

    @CrossOrigin
    @PostMapping
    public ResponseEntity criarProprietaria(@RequestBody Proprietaria novaProprietaria) {
        repository.save(novaProprietaria);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity getProprietarias() {
        List<Proprietaria> lista = repository.findAll();
        csv.gravaListaProprietaria(lista, "listaProprietaria");
        return ResponseEntity.status(200).body(lista);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getProprietaria(@PathVariable int id) {

        return ResponseEntity.of(repository.findById(id));

    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteProprietaria(@PathVariable int id) {

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

        List<Proprietaria> login = repository.findByEmailAndSenha(proprietaria.getEmail(), proprietaria.senha());

        return ResponseEntity.status(200).body(login);
    }

    @CrossOrigin
    @PostMapping("/logoff/{id}")
    public ResponseEntity logoff(@PathVariable int id) {
        Proprietaria p = repository.findById(id).get();
        if (repository.existsById(id)) {
            p.setAutenticado(false);
            repository.save(p);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    };

}
