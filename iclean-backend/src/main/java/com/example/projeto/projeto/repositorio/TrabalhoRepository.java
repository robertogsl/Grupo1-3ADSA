package com.example.projeto.projeto.repositorio;

import com.example.projeto.projeto.dominio.Trabalho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TrabalhoRepository extends JpaRepository<Trabalho, Integer> {

    List<Trabalho> findByProprietariaId (Integer id);
}
