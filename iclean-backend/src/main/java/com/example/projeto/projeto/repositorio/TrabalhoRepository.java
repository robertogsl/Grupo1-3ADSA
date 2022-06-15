package com.example.projeto.projeto.repositorio;

import com.example.projeto.projeto.dominio.Trabalho;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TrabalhoRepository extends JpaRepository<Trabalho, Integer> {

    List<Trabalho> findByProprietariaId (Integer id);

    Optional<Trabalho> findById (Integer id);
}
