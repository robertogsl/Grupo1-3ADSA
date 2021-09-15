package com.iclean.icleanapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    private List<Avaliacao> comentariosCarlos = new ArrayList<Avaliacao>(List.of(
            new Avaliacao(4, new Comentario("elogio", "Bom demais")),
            new Avaliacao(1, new Comentario("critica", "Horrível")),
            new Avaliacao(5, new Comentario("elogio", "Muito bom"))
    ));

    private List<Avaliacao> comentariosSoso = new ArrayList<Avaliacao>(List.of(
            new Avaliacao(2, new Comentario("critica", "Muito ruim")),
            new Avaliacao(1, new Comentario("critica", "Horrível")),
            new Avaliacao(5, new Comentario("elogio", "Melhor de todos"))
    ));

    private Trabalho trabalho1 = new Trabalho(400.50, "Limpeza");
    private Trabalho trabalho2 = new Trabalho(720.0, "Cuidar de criança");
    private Trabalho trabalho3 = new Trabalho(180.0, "Lavar roupa");
    private Trabalho trabalho4 = new Trabalho(25.0, "Cozinha");
    private Trabalho trabalho5 = new Trabalho(70.50, "Limpeza");
    private Trabalho trabalho6 = new Trabalho(220.0, "Cuidar de criança");

    private List<Trabalho> trabalhosCarlos = new ArrayList<Trabalho>(List.of(
            trabalho1,
            trabalho2,
            trabalho5
    ));

    private List<Trabalho> trabalhosSoso = new ArrayList<Trabalho>(List.of(
            trabalho1,
            trabalho2,
            trabalho6
    ));

    private List<Trabalho> trabalhosSoso2 = new ArrayList<Trabalho>(List.of(
            trabalho3,
            trabalho4,
            trabalho5
    ));

    private Imovel imovel1 = new Imovel("Casa grande", trabalhosSoso);
    private Imovel imovel2 = new Imovel("Casa pequenina", trabalhosSoso2);

    private List<Imovel> imoveisSoso = new ArrayList<Imovel>(List.of(
            imovel1,
            imovel2
    ));

    public void setarImoveis() {
        trabalho1.setImovel(imovel1);
        trabalho2.setImovel(imovel2);
        trabalho3.setImovel(imovel1);
        trabalho4.setImovel(imovel2);
        trabalho5.setImovel(imovel1);
        trabalho6.setImovel(imovel2);
    }

    public UsuarioController() {
        setarImoveis();
    }

    private List<Usuario> listaUsuarios = new ArrayList<Usuario>(List.of(
            new Contratada("Carlos Gomes", "49327110854", "11959130360", new Date("15/03/2000"), comentariosCarlos, trabalhosCarlos),
            new Contratante("Guilherme Soares", "4848745415487", "11954123314", new Date("19/09/2003"), comentariosSoso, imoveisSoso)
    ));

    @GetMapping
    public List<Usuario> getUsuarios() {
        return listaUsuarios;
    }
}
