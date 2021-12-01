package com.grupo1.iclean.controle;

import com.example.projeto.projeto.controle.ContratadaController;
import com.example.projeto.projeto.repositorio.ContratadaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = {ContratadaController.class, ContratadaRepository.class})
public class ContratadaControllerTest {

    @Autowired
    ContratadaController controller;

    @MockBean
    ContratadaRepository repository;

    @Test
    void semContratadasDeveRetornar204(){
    when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.getContratadas();

        assertEquals(204, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());

    }

    @Test
    void comContratadasDeveRetornar200(){
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.getContratadas();

        assertNotEquals(200, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());

    }

}
