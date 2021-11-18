package com.example.projeto.projeto.dominio;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


public class Notificacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private int posicaoPilhaDeNotificacao;

    public Object[] pilhaDeNotificacao;

    public Notificacao() {
        this.posicaoPilhaDeNotificacao = -1;
        this.pilhaDeNotificacao = new Object[1000];
    }

    public boolean pilhaVazia() {
        if (this.posicaoPilhaDeNotificacao == -1) {
            return true;
        }
        return false;
    }

    public int tamanho() {
        if (this.pilhaVazia()) {
            return 0;
        }
        return this.posicaoPilhaDeNotificacao + 1;
    }

    public Object exibeUltimoValor() {
        if (this.pilhaVazia()) {
            return null;
        }
        return this.pilhaDeNotificacao[this.posicaoPilhaDeNotificacao];
    }

    public Object desempilhar() {
        if (pilhaVazia()) {
            return null;
        }
        return this.pilhaDeNotificacao[this.posicaoPilhaDeNotificacao--];
    }

    public void empilhar(Object valor) {
        if (this.posicaoPilhaDeNotificacao < this.pilhaDeNotificacao.length - 1) {
            this.pilhaDeNotificacao[++posicaoPilhaDeNotificacao] = valor;
        }
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getPosicaoPilhaDeNotificacao() {
        return posicaoPilhaDeNotificacao;
    }

    public void setPosicaoPilhaDeNotificacao(int posicaoPilhaDeNotificacao) {
        this.posicaoPilhaDeNotificacao = posicaoPilhaDeNotificacao;
    }

    public Object[] getPilhaDeNotificacao() {
        return pilhaDeNotificacao;
    }

    public void setPilhaDeNotificacao(Object[] pilhaDeNotificacao) {
        this.pilhaDeNotificacao = pilhaDeNotificacao;
    }

}
