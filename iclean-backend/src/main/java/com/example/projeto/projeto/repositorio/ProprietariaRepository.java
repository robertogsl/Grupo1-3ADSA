package com.example.projeto.projeto.repositorio;

import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.dominio.Proprietaria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProprietariaRepository extends JpaRepository<Proprietaria, Integer> {

    List<Proprietaria> findByEmailAndSenha(String email, String senha);

    List<Proprietaria> findByEmail(String email);
}
