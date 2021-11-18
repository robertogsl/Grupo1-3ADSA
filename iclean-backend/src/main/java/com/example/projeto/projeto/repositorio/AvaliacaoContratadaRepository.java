package com.example.projeto.projeto.repositorio;

import com.example.projeto.projeto.dominio.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AvaliacaoContratadaRepository extends JpaRepository<Avaliacao, Integer> {

    List<Avaliacao> findByContratadaId(Integer id);
}
