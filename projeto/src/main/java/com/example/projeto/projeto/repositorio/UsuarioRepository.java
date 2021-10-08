package com.example.projeto.projeto.repositorio;

import com.example.projeto.projeto.dominio.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
