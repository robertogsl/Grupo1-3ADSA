package com.example.projeto.projeto.repositorio;

import com.example.projeto.projeto.dominio.Proprietaria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProprietariaRepository extends JpaRepository<Proprietaria, Integer> {

    Proprietaria findByEmailAndSenha(String email, String senha);
}
