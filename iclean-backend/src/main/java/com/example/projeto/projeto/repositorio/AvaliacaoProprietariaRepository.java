package com.example.projeto.projeto.repositorio;

import com.example.projeto.projeto.dominio.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AvaliacaoProprietariaRepository extends JpaRepository<Avaliacao, Integer> {

    List<Avaliacao> findByProprietariaId(Integer id);
}
