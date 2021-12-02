package com.example.projeto.projeto.controle;

import com.example.projeto.projeto.GravaTxt;
import com.example.projeto.projeto.dominio.Avaliacao;
import com.example.projeto.projeto.dominio.Contratada;
import com.example.projeto.projeto.repositorio.AvaliacaoContratadaRepository;
import com.example.projeto.projeto.repositorio.AvaliacaoProprietariaRepository;
import com.example.projeto.projeto.repositorio.ContratadaRepository;
import com.example.projeto.projeto.repositorio.ProprietariaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController {

    GravaTxt gravaTxt = new GravaTxt();

    @Autowired
    private ContratadaRepository contratadaRepository;
    Logger logger = LoggerFactory.getLogger(ContratadaController.class);

    @Autowired
    ProprietariaRepository proprietariaRepository;

    @Autowired
    private AvaliacaoContratadaRepository repositoryContratadaAvaliacao;

    @Autowired
    private AvaliacaoProprietariaRepository repositoryProprietariaAvaliacao;

    @CrossOrigin
    @PostMapping("/contratada")
    public ResponseEntity postAvaliarContratada(@RequestBody Avaliacao avaliacaoContratada) {
        repositoryContratadaAvaliacao.save(avaliacaoContratada);

        return ResponseEntity.status(201).build();
    }

    @CrossOrigin
    @PostMapping("/contratada/txt")
    public ResponseEntity postLayout(@RequestBody MultipartFile txt) throws IOException {
        BufferedReader entrada = new BufferedReader(new StringReader(new String(txt.getBytes())));
        String registro, tipoRegistro;
        String proprietariaEmail, contratadaEmail, comentario;
        Double estrelas;
        int contaRegDados = 0;
        int qtdRegGravados;
        List<Contratada> contratadas = contratadaRepository.findAll();

        // Abre o arquivo para leitura
        try {
            entrada = new BufferedReader(new StringReader(new String(txt.getBytes())));
        }
        catch (IOException erro) {
            System.out.println("Erro na abertura do arquivo: " +
                    erro.getMessage());
        }

        // Leitura do arquivo
        try {
            registro = entrada.readLine();  // Lê o primeiro registro do arquivo

            while (registro != null) {      // Enquanto não chegou ao final do arquivo
                // obtém o tipo do registro - primeiros 2 caracteres do registro
                // substring devolve um "pedaço da String",
                // que começa na posição 0 e termina na posição 1 (como num vetor)
                //    0123456
                //    00NOTA
                tipoRegistro = registro.substring(0,2);

                // Verifica se o tipoRegistro é "00" (header), ou "01" (trailer) ou "02" (corpo)
                if (tipoRegistro.equals("00")) {
                    System.out.println("Eh um header");
                    System.out.println("Tipo do arquivo: "+registro.substring(2,6));
                    System.out.println("Data e hora de gravação: "+registro.substring(6,25));
                    System.out.println("Versão do documento: "+registro.substring(25,27));
                }
                else if (tipoRegistro.equals("01")) {
                    System.out.println("Eh um trailer");
                    // Lê a quantidade de registros gravados que está no trailer
                    qtdRegGravados = Integer.valueOf(registro.substring(2,12));
                    // Valida se a quantidade lida é igual a quantidade gravada
                    if (qtdRegGravados == contaRegDados) {
                        System.out.println("Quantidade de registros lidos compatível com quantidade de registros gravados");
                    }
                    else {
                        System.out.println("Quantidade de registros lidos incompatível com quantidade de registros gravados");
                    }

                }
                else if (tipoRegistro.equals("02")) {
                    System.out.println("Eh um registro de corpo");
                    // Lê os dados do registro de corpo
                    contratadaEmail = registro.substring(2, 32).trim();
                    estrelas = Double.valueOf(registro.substring(32, 35).trim().replace(",", "."));
                    comentario = registro.substring(35, 65).trim();
                    // Cria um objeto Aluno com os dados lidos do registro
                    Avaliacao a = new Avaliacao();
                    // Adiciona esse objeto à listaLida
                    a.setComentario(comentario);
                    a.setEstrelas(estrelas.doubleValue());
                    for (Contratada c : contratadas) {
                        if (c.getEmail().equals(contratadaEmail)) {
                            a.setContratada(c);
                            break;
                        }
                    }

                    postAvaliarContratada(a);
                    // Incrementa o contador de registros de dados lidos
                    contaRegDados++;
                }
                else {
                    System.out.println("Tipo de registro inválido");
                }

                // lê o próximo registro
                registro = entrada.readLine();
            }

            // Fecha o arquivo
            entrada.close();
        }
        catch (IOException erro) {
            System.out.println("Erro ao ler arquivo: " + erro.getMessage());
            return null;
        }
        return ResponseEntity.status(200).build();
    }

    // Retorna uma avaliação especifica
//    @CrossOrigin
//    @GetMapping("import/contratada")
//    public ResponseEntity getAvaliacaoContratada() {
//        List<Avaliacao> avaliacoes = repositoryContratadaAvaliacao.findAll();
//
//        for (int i = 0; i < avaliacoes.size(); i++) {
//            GravaTxt.gravaArquivoTxtAvaliacaoContratada(getAvalicao, "Contratada.txt");
//        }
//
//        return ResponseEntity.status(200).body(getAvalicao);
//    }

//     Retorna todas as avaliações de uma contratada
    @CrossOrigin
    @GetMapping("/contratada/{id}")
    public ResponseEntity getAvaliacoesContratada(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryContratadaAvaliacao.findByContratadaId(id);

        if (lista.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        else {

            return ResponseEntity.status(200).body(lista);

        }

    }

    @CrossOrigin
    @GetMapping("/contratada/{id}/media")
    public ResponseEntity getMediaAvaliacaoContratada(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryContratadaAvaliacao.findByContratadaId(id);

        Double totalEstrelas = 0.0;
        Double media = 0.0;
        int i = 0;

        if (lista.isEmpty()) {

            return ResponseEntity.status(204).build();

        }
        else {
            while (i < lista.size()) {
                totalEstrelas += lista.get(i).getEstrelas();
                i++;
            }
            media = totalEstrelas / i;

            return ResponseEntity.status(200).body(media);

        }

    }

    @CrossOrigin
    @GetMapping("/contratada/{id}/total")
    public ResponseEntity getTotalAvaliacao(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryContratadaAvaliacao.findByContratadaId(id);

        return ResponseEntity.status(200).body(lista.size());

    }

    @CrossOrigin
    @PostMapping("/proprietaria")
    public ResponseEntity postAvaliacaoProprietaria(@RequestBody Avaliacao novaAvaliacaoProprietaria) {
        repositoryProprietariaAvaliacao.save(novaAvaliacaoProprietaria);

        return ResponseEntity.status(201).build();

    }

//    @CrossOrigin
//    @GetMapping("/proprietaria")
//    public ResponseEntity getAvaliacoesProprietaria() {
//        List<Avaliacao> lista = repositoryProprietaria.findAll();
//
//        return ResponseEntity.status(200).body(lista);
//    }

    @CrossOrigin
    @GetMapping("/{id}/proprietaria")
    public ResponseEntity getAvaliacaoProprietaria(@PathVariable Integer id) {
        return ResponseEntity.of(repositoryProprietariaAvaliacao.findById(id));
    }

    @CrossOrigin
    @GetMapping("/proprietaria/{id}")
    public ResponseEntity getAvaliacoesProprietaria(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryProprietariaAvaliacao.findByProprietariaId(id);

        if (lista.isEmpty()) {

            return ResponseEntity.status(204).build();

        }
        else {

            return ResponseEntity.status(200).body(lista);

        }

    }

    @CrossOrigin
    @GetMapping("/proprietaria/{id}/media")
    public ResponseEntity getMediaAvaliacaoProprietaria(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryProprietariaAvaliacao.findByProprietariaId(id);

        Double totalEstrelas = 0.0;
        Double media = 0.0;
        int i = 0;

        if (lista.isEmpty()) {

            return ResponseEntity.status(204).build();

        }
        else {
            while (i < lista.size()) {
                totalEstrelas += lista.get(i).getEstrelas();
                i++;
            }
            media = totalEstrelas / i;

            return ResponseEntity.status(200).body(media);

        }

    }

    @CrossOrigin
    @GetMapping("/proprietaria/{id}/total")
    public ResponseEntity getTotalAvaliacaoProprietaria(@PathVariable Integer id) {
        List<Avaliacao> lista = repositoryProprietariaAvaliacao.findByProprietariaId(id);

        return ResponseEntity.status(200).body(lista.size());

        }

}
