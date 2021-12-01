package com.grupo1.iclean.controle;

import com.example.projeto.projeto.controle.ProprietariaController;
import com.example.projeto.projeto.repositorio.ProprietariaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = {ProprietariaController.class, ProprietariaRepository.class})
public class ProprietariaControllerTest {

    @Autowired
    ProprietariaController controller;

    @MockBean
    ProprietariaRepository repository;

    @Test
    void semContratadasDeveRetornar204(){
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.getProprietarias();

        assertEquals(204, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());

    }

    @Test
    void comContratadasDeveRetornar200(){
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.getProprietarias();

        assertNotEquals(200, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());

    }

}
