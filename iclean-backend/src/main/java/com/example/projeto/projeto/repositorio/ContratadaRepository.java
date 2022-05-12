package com.example.projeto.projeto.repositorio;

import com.example.projeto.projeto.dominio.Contratada;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ContratadaRepository extends JpaRepository<Contratada, Integer> {

    Contratada findByEmailAndSenha(String email, String senha);

    List<Contratada> findByEmail(String email);

}
